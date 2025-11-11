export function ProxyInternal() {
    return (req, res, next) => {

        if (!req.originalUrl.startsWith('/@ossy')) {
            return next()
        }
    
        const domain = process.env.OSSY_API_URL || 'https://api.ossy.se'
        const url = `${domain}${req.path}`
        const headers = JSON.parse(JSON.stringify(req.headers)) // Clone headers
        const workspaceId = headers.workspaceId || config.workspaceId
    
        if (workspaceId) {
            headers['workspaceid'] = workspaceId
        }
    
        const request = {
            method: req.method,
            headers: JSON.parse(JSON.stringify(req.headers))
        }
    
        if (!['GET', 'HEAD'].includes(req.method)) {
            request.body = JSON.stringify(req.body)
        }
    
        fetch(url, request)
            .then((response) => {
    
                if (response.headers.get('content-type')?.includes('application/json')) {
                    return response.json()
                        .then(data => {
                            res.status(response.status)
                            res.json(data)
                        })
                }
    
                res.status(response.status)
                res.json("")
            })
            .catch((error) => {
                const status = error.status
                res.status(status || 500)
                res.json({ message: error.message || 'Internal Server Error' })
            })
    
    }
}