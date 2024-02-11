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

         GraphQLEndpoints.create({
           id: 'ox',
           title: 'Ox',
           url: 'https://api.cloud.ox.security/api/apollo-gateway',
           // Optional extra headers
           headers: { Extra: 'Header' },
         }),


         GraphQLEndpoints.create({
           id: 'gitlab',
           title: 'GitLab',
           url: 'https://gitlab.com/api/graphql',
           // Optional extra headers
           headers: { Extra: 'Header' },
         }),


       ]),
   }),


  ScmAuth.createDefaultApiFactory(),
];
