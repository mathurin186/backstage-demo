# backstage-demo

### Environments 
* For this we are looking at both Mac OSX and Linux 
* Automation scripts are setup for a baremetal Ubuntu install working with both v22 and v24

### Requirements
1. Build essentials, g++ [Mac](https://www.freecodecamp.org/news/install-xcode-command-line-tools/) - [Ubuntu](https://itsfoss.com/build-essential-ubuntu/)
2. [Nodejs](https://nodejs.org/en/about/previous-releases)
3. [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
4. [docker](https://docs.docker.com/engine/install/)
5. [yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

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

### Note about subsequent runs

If you use `yarn start` you'll notice errors about `Failed to load entity kinds` . This happens because the cmd `yarn start-backend` was not run (`yarn dev` starts both the frontend and backend)

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

### Configuring Safari to work

Due to CORS restrictions enforced by Ox's API endpoint, which only responds to requests to coming from `app.ox.security` when making API calls via a browser, it's necessary to bypass CORS so that GraphiQL works within the Backstage portal. In Safari, this can be done by enabling `Develop (menu) -> Developer Settings... -> Developer -> Disable cross-origin restrictions`
