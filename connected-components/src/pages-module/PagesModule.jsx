import { Page } from '../page'
import { PageDataLoader } from '../page-data-loader'

export const PagesModule = () => (
  <PageDataLoader>
    <Page/>
  </PageDataLoader>
)
