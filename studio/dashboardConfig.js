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
                  buildHookId: '60427da363b97114e9a9456e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-c1x3saqm',
                  apiId: '00292f47-9a53-4797-9fb7-6007e169c8da'
                },
                {
                  buildHookId: '60427da3f2ae2510abb72c27',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9mnpdvhi',
                  apiId: '6c37d98c-fb33-46fa-adbe-2f6029ebe0c7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ultrascapes/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9mnpdvhi.netlify.app',
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
