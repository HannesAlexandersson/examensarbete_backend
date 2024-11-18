export const AccountSchema = {
  title: 'Account',
  name: 'account',
  type: 'document',
  fields: [
    {
      title: 'Version',
      name: 'version',
      type: 'string',
      description: 'The version of the account page',
    },
    {
      title: 'DiaryButtonText',
      name: 'diaryButtonText',
      type: 'string',
      description: 'The text on the button, based on version',
    },
    {
      title: 'QuestionButtonText',
      name: 'questionButtonText',
      type: 'string',
      description: 'The text on the button, based on version',
    },
    {
      title: 'Welcome Text',
      name: 'welcomeText',
      type: 'string',
      description: 'The welcome text on the account page, based on version',
    },
    {
      title: 'Question Text',
      name: 'questionText',
      type: 'string',
      description: 'The question event text on the account page, based on version',
    }
  ],
}