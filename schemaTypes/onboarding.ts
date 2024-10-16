export const onboardingSchema = {
  title: 'Onboarding text-sections',
  name: 'onboardingPage',
  type: 'document',
  fields: [
      {
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Rubriken för textsektionen',       
      },
      {
      title: 'Paragraph',
      name: 'paragraph',
      type: 'text',       
      description: 'Paragraftexten för textsektionen',
      }, 
      {
          title: 'Position',
          name: 'position',
          type: 'number',
          description: 'Positionen för textsektionen i vilken ordning de ska visas, ju högre siffra desto längre ner på sidan',
      },
      
  ],
}