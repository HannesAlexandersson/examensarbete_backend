export const versionDescriptionSchema = {
  title: 'Version descriptions',
  name: 'versionDescriptions',
  type: 'document',
  fields: [
      {
      title: 'Version',
      name: 'version',
      type: 'string',
      description: 'Vilken version av appen som beskrivningen gäller',       
      },
      {
      title: 'Paragraph',
      name: 'paragraph',
      type: 'text',       
      description: 'Paragraftexten för versionen',
      }, 
      {
          title: 'Position',
          name: 'position',
          type: 'number',
          description: 'Positionen för textsektionen i vilken ordning de ska visas, ju högre siffra desto längre ner på sidan',
      },
      
  ],
}