import { useWorkspace } from './useWorkspace.js'

export const useResourceTemplate = templateId => {
  const { workspace } = useWorkspace()
  // TODO: workspace.resourceTemplates might not exist yet
  const template = workspace.resourceTemplates.find(template => template.id === templateId)
  return template
}
