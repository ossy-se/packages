export function ProxyInternal() {
    return (req, res, next) => {
        console.log(`[@ossy/app][proxy] ${req.method} ${req.originalUrl}`)

        if (!req.originalUrl.startsWith('/@ossy')) {
            return next()
        }

        const domain = process.env.OSSY_API_URL || 'https://api.ossy.se'
        const url = `${domain}${req.req.originalUrl?.replace('/@ossy', '/api/v0')}`
        const headers = JSON.parse(JSON.stringify(req.headers)) // Clone headers
        const workspaceId = headers.workspaceId
    
        if (workspaceId) {
            headers['workspaceid'] = workspaceId
        }

        console.log(`[@ossy/app][proxy] workspaceId ${workspaceId}`)
    
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
                console.log(`[@ossy/app][proxy][error]`, error)
                const status = error.status
                res.status(status || 500)
                res.json({ message: error.message || 'Internal Server Error' })
            })
    
    }
}