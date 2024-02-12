import {
  graphQlBrowseApiRef,
  GraphQLEndpoints,
} from '@backstage/plugin-graphiql';

import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
  errorApiRef,
  githubAuthApiRef,
} from '@backstage/core-plugin-api';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),

   createApiFactory({
     api: graphQlBrowseApiRef,
     deps: { errorApi: errorApiRef, githubAuthApi: githubAuthApiRef },
     factory: ({ errorApi, githubAuthApi }) =>
       GraphQLEndpoints.from([
         // Use the .create function if all you need is a static URL and headers.

//         GraphQLEndpoints.create({
//           id: 'ox',
//           title: 'Ox',
//           url: 'https://api.cloud.ox.security/api/apollo-gateway',
//           // Optional extra headers
//           headers: { Authorization: 'ox_@kyHubbbDx4bxbbFvC00oSe~UCj2k@EcvwAC' },
//         }),

        {
          id: 'ox',
          title: 'Ox',
          fetcher: async (params: any) => {
            return fetch('https://api.cloud.ox.security/api/apollo-gateway', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json',"Authorization":"ox_@kyHubbbDx4bxbbFvC00oSe~UCj2k@EcvwAC" },
              body: JSON.stringify(params)
            }).then(res => res.json());
          }
        },

        {   
           id: 'gitlab',
           title: 'GitLab',
           fetcher: async (params: any) => {
             return fetch('https://gitlab.com/api/graphql', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(params)
            }).then(res => res.json());
          }
        },


        {
           id: 'github',
           title: 'Github',
           fetcher: async (params: any) => {
             return fetch('https://api.github.com/graphql', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json', "Authorization":"Bearer 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" },
               body: JSON.stringify(params)
            }).then(res => res.json());
          }
        },


        {
           id: 'starwars',
           title: 'Star Wars',
           fetcher: async (params: any) => {
             return fetch('https://swapi-graphql.netlify.app/.netlify/functions/index', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(params)
            }).then(res => res.json());
          }
        },


//         GraphQLEndpoints.create({
//           id: 'github',
//           title: 'Github',
//           url: 'https://api.github.com/graphql',
//           // Optional extra headers
//           headers: { Authorization: 'Bearer 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' },
//         }),

       ]),
   }),


  ScmAuth.createDefaultApiFactory(),
];
