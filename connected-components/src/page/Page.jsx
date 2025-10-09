import { useResources } from '@ossy/sdk-react'
import { useActivePageLocation } from '../use-active-page-location'
import { Layout } from '../layout'
import { Section } from '../section'

export const Page = () => {
  const activePageLocation = useActivePageLocation()
  const { resources: folder } = useResources(`/pages${activePageLocation}`)
  const pageSettings = folder.find(entry => entry.name === 'Page settings')
  const sections = folder.filter(entry => entry.name.endsWith('Section'))

  const title = pageSettings?.data?.title
  const layout = pageSettings?.data?.layout

  if (!pageSettings) return

  setSections(sections)

  return !!pageSettings && (
    (
      <Layout layoutId={pageSettings.layout}>
        { sections.map(section => (
          <Section
            key={section.data.slotName}
            slotName={section.data.slotName}
            componentId={section.data.componentId}
            componentProps={section.data.componentProps}
          />
        ))}
      </Layout>
    )
  )
}
