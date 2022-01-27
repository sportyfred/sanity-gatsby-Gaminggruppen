export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f262767ffe1488e2b80ed7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-gaminggruppen-studio',
                  apiId: 'b93df557-5be8-48bc-9b0e-5cb191d08108'
                },
                {
                  buildHookId: '61f26276ee94ce8729fbf70b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-gaminggruppen',
                  apiId: '580ee3f1-89a7-458a-8c29-34cbfcf67b4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sportyfred/sanity-gatsby-Gaminggruppen',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-gaminggruppen.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
