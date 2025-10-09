import { useMemo, useEffect, useState } from 'react'
import { useQuery, AsyncStatus } from '@ossy/sdk-react'
// import { useParams } from '../use-params'
// import { AppHeader } from './AppHeader'
// import { AppFooter } from './AppFooter'
// import { AccentBorder } from './AccentBorder'
// import { ContactUsContent } from './ContactUsContent'
// import { ResourcesContent } from './ResourcesContent'
// import { ResourceContent } from './ResourceContent'
// import { HomeHero } from './HomeHero'
// import { HomeContent } from './HomeContent'
// import { ConsultantsContent } from './ConsultantsContent'
// import { CommandBar } from './CommandBar'
// import { ConsultantPage } from './ConsultantPage'

const components = {
  // AppHeader: AppHeader,
  // AppFooter: AppFooter,
  // CommandBar: CommandBar,
  // AccentBorder: AccentBorder,
  // HomeHero: HomeHero,
  // HomeContent: HomeContent,
  // ContactUsContent: ContactUsContent,
  // ConsultantsContent: ConsultantsContent,
  // ResourcesContent: ResourcesContent,
  // ResourceContent: ResourceContent,
  // ConsultantContent: ConsultantPage
}

export const Section = ({
  slotName,
  componentId,
  componentProps: pageSpecificProps = ''
}) => {
  const params = useParams()
  const Component = components[componentId] || (() => <>No component found</>)
  const [componentProps, setComponentProps] = useState({})

  const {
    status: defaultPropsStatus,
    resources: defaultPropsQuery
  } = useQuery({
    location: `/design-system/${componentId}/`,
    name: 'default',
    type: '7Bb2zDh2EK65rV_0XHo_W'
  })

  const {
    status: languageSpecificPropsStatus,
    resources: languageSpecificPropsQuery
  } = useQuery({
    location: `/design-system/${componentId}/`,
    name: params.marketCode,
    type: '7Bb2zDh2EK65rV_0XHo_W'
  })

  const loaded = useMemo(() => (
    [defaultPropsStatus, languageSpecificPropsStatus].every(status => status === AsyncStatus.Success)
  ), [defaultPropsStatus, languageSpecificPropsStatus])

  const slotStyles = useMemo(() => ({
    gridArea: slotName
  }), [slotName])

  useEffect(() => {

    let props = {}

    if (!!defaultPropsQuery.length && !!defaultPropsQuery[0].data.props) {
      const parsedProps = JSON.parse(defaultPropsQuery[0].data.props)
      props = { ...props, ...parsedProps }
    }

    if (!!languageSpecificPropsQuery.length && !!languageSpecificPropsQuery[0].data.props) {
      const parsedProps = JSON.parse(languageSpecificPropsQuery[0].data.props)
      props = { ...props, ...parsedProps }
    }

    if (!!pageSpecificProps) {
      const parsedProps = JSON.parse(pageSpecificProps)
      props = { ...props, ...parsedProps }
    }

    setComponentProps(props)

  }, [pageSpecificProps, defaultPropsQuery, languageSpecificPropsQuery])

  return (
    <div style={slotStyles}>
      { loaded && <Component {...componentProps}/> }
    </div>
  )
}
