import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { myStudioApiToken, myStudioDataset, myStudioProjectId, myStudioTitle } from './lib/enviroments'

export default defineConfig({
  name: 'examensarbete-backend',
  title: myStudioTitle,
  projectId: myStudioProjectId || 'defaultProjectId',
  dataset: myStudioDataset || 'production',
  apiToken: myStudioApiToken,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
