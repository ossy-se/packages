import { useWorkspace } from './useWorkspace'

export const useResourceTemplate = (id: string) => {
  const { workspace } = useWorkspace()
  const template = workspace.resourceTemplates?.find((template: { id: string }) => template.id === id)
  return template
}
