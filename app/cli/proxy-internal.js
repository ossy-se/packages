export function ProxyInternal() {
    return (req, res, next) => {

        if (!req.originalUrl.startsWith('/@ossy')) {
            return next()
        }

        if (req.originalUrl.startsWith('/@ossy/users/me/app-settings') && req.method === 'PATCH') {
        
            if (!req.body) {
                res.status(400)
                res.json("Invalid request body")
                return
            }
    
            const requestedSettings = req.body
    
    
            const expiresMaxAge = 2147483647 // Max age for cookies in milliseconds
    
            const userSettings = JSON.parse(req.signedCookies?.['x-ossy-user-settings'] || '{}')
            
            const updatedSettings = {
                ...userSettings,
                ...requestedSettings
            }
    
            res.cookie('x-ossy-user-settings', JSON.stringify(updatedSettings), {
            httpOnly: true,
            signed: true,
            expires: new Date(Date.now() + expiresMaxAge)
            })
    
            res.status(201)
            res.json("")
            return
        }
    
        if (req.originalUrl.startsWith('/@ossy/users/me/app-settings') && req.method === 'GET') {
            LogService.Info({ message: `[UsersService][HandleUserAppSettings] METHOD ${req.method}` })
            const userSettings = JSON.parse(req.signedCookies?.['x-ossy-user-settings'] || '{}')
            res.status(200)
            res.json(userSettings)
            return
        }
        
        console.log(`[@ossy/app][proxy] ${req.method} ${req.originalUrl}`)

        const domain = process.env.OSSY_API_URL || 'https://api.ossy.se'
        const url = `${domain}${req.originalUrl?.replace('/@ossy', '/api/v0')}`
        const headers = { ...(req.headers || {}) } // Clone headers
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
                // Forward headers from the proxy response
                response.headers.forEach((value, name) => {
                    res.setHeader(name, value);
                });

                if (response.headers.get('content-type')?.includes('application/json')) {
                    return response.json()
                        .then(data => {
                            res.status(response.status);
                            res.json(data);
                        });
                }

                res.status(response.status);
                res.json("");
            })
            .catch((error) => {
                console.log(`[@ossy/app][proxy][error]`, error)
                const status = error.status
                res.status(status || 500)
                res.json({ message: error.message || 'Internal Server Error' })
            })
    
    }
}