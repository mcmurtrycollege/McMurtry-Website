![](https://github.com/mcmurtrycollege/McMurtry-Website/blob/master/static/YurtTrees.svg)

# McMurtry Website
The official McMurtry College website

### Development
`$ npm run dev`
Runs the website locally in development mode with hot reloading.


### Deployment
`$ npm run deploy`
Creates a production build of the website, exports this build to the docs folder, creates the CNAME file and stages all changes for commit.

Running 
`$ git commit -m <commit message>`
and 
`$ git push`
will push the changes to the website.

### Repository Structure

1. All of the components that make up the pages can be found in the components directory.
2. Each Component will have a CSS file, a JS file, and some will have a JSON file that contains the content of of the component.
3. Some general components that are used in mulitple places are in the root directory of the components directory, the others are organized by the page of the website they occur at.
4. The static images and SVGs are located in the static directory.
5. The pages of the website are located in the pages directory, each page contains its page specific components as well as the navbar, header, and footer components.
6. The build files are exported to the docs folder after they are compiled, as part of the `$ npm run deploy` command, the gh-pages site is configured to pull from this folder in the master branch. 

### Contributors

- Nicholas Meisburger ([nmeisburger0](https://github.com/nmeisburger0))
# MemucrtryWebsite
