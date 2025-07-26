import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {documentInternationalization} from '@sanity/document-internationalization'
import {schemaTypes} from './schemaTypes'

// Define supported languages
const supportedLanguages = [
  {id: 'en', title: 'English', isDefault: true},
  {id: 'it', title: 'Italian'},
  {id: 'ar', title: 'Arabic'},
  {id: 'zh', title: 'Chinese'},
  {id: 'de', title: 'German'},
  {id: 'fr', title: 'French'},
]

export default defineConfig({
  name: 'default',
  title: 'INVESTISCOPE',
  projectId: 'trdbxmjo',
  dataset: 'production',
  plugins: [
    structureTool(),
    visionTool(),
    documentInternationalization({
      // Required: Set supported languages
      supportedLanguages,
      // Required: Define which document types to internationalize
      schemaTypes: ['post', 'category', 'author'],
      // Optional: Set the metadata fields
      metadataFields: [
        defineField({
          name: 'slug',
          type: 'slug',
          options: {
            source: 'title',
            maxLength: 96,
          }
        })
      ],
      // Optional: Customization options
      weakReferences: true, // Keep references between translations
      bulkPublish: true, // Allow publishing all translations at once
    })
  ],
  schema: {
    types: schemaTypes,
  },
})

// Note: We need to import defineField
import {defineField} from 'sanity'
