# backstage-demo

### Setup instructions
1. `npx @backstage/create-app@latest`
2. `npm install -g node-gyp`
3. `yarn install`
4. `brew install nvm`
5. `mkdir ~/.nvm`
6. add stuff to .zshrc per nvm
7. `nvm install 20`
8. `nvm use 20`
9. `yarn install` (again)
10. Backstage launches!

### Adding [GraphQL Plugin](https://github.com/backstage/backstage/tree/master/plugins/graphiql)
From your Backstage root directory
`yarn --cwd packages/app add @backstage/plugin-graphiql`

Follow the install & configuration instructions, adding missing pieces to the import statment in apis.ts:
```
import {
  errorApiRef,
  githubAuthApiRef,
} from '@backstage/core-plugin-api';
```
Then, view the [interface](http://localhost:3000/graphiql)

### Adding GraphQL to sidebar
edit `packages/app/src/components/Root/Root.tsx`
add a new <SidebarItem to="graphiql"

