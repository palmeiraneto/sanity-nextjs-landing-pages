export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ed5ad32eeb79396afb2e371',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g8ajg6p4',
                  apiId: '81e3bb6b-f467-4730-a0e7-84ec1cd97490'
                },
                {
                  buildHookId: '5ed5ad32b694bba46427e3b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gdnwh3vj',
                  apiId: 'cf0b2047-79a4-4c8a-9113-332e86104477'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/palmeiraneto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gdnwh3vj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
