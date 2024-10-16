import {defineCliConfig} from 'sanity/cli'
import { myStudioDataset, myStudioProjectId } from './lib/enviroments'

export default defineCliConfig({
  api: {
    projectId: myStudioProjectId,
    dataset: myStudioDataset,
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
