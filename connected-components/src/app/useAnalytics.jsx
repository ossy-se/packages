// import { useEffect } from 'react'
// import Analytics from 'react-ga4'
// import { useAppSettings } from './AppSettings.jsx'

// function useAnalytics(url) {
//   const { gaId } = useAppSettings()

//   useEffect(() => {
//     if (!gaId) return
//     Analytics.initialize(gaId)
//   }, [gaId])

//   useEffect(() => {
//       if (!url) return
//       Analytics.send({ hitType: 'pageview', page: url, path: url })
//   }, [url])

// }
