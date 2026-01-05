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

---

## Deployment Issue - January 2026

### Current Situation
The custom domain `mcmurtry.rice.edu` is currently stuck/verified at the organization level and cannot be attached to this repository.

**What happened:**
1. During deployment attempts on January 5-6, 2026, the CNAME file became corrupted (showing as binary instead of plain text in git history)
2. This triggered GitHub's security system to move the domain verification to the organization level to prevent potential domain hijacking
3. The domain is now "locked" and shows as "already taken" when trying to add it to the repository

**Current deployment:**
- Live at: https://mcmurtrycollege.github.io/McMurtry-Website/
- CSS and images are working correctly with the `/McMurtry-Website/` base path

**Custom domain status:**
- Domain currently redirects to ESPN.com (incorrect)
- DNS correctly points to `mcmurtrycollege.github.io`
- Awaiting GitHub Support to release the domain

### Solution in Progress
A support ticket has been submitted to GitHub Support (January 6, 2026) requesting:
1. Release of `mcmurtry.rice.edu` from organization-level verification, OR
2. Transfer of organization ownership (original owner Nicholas Meisburger's Rice email is inactive)

### When Domain is Released
Once GitHub Support releases the domain:
1. Update `next.config.js` to remove the basePath (deploy from root `/` instead of `/McMurtry-Website/`)
2. Revert component changes (remove `/McMurtry-Website/` prefix from image paths)
3. Run `npm run deploy`
4. Site will deploy correctly to `https://mcmurtry.rice.edu`

**Note:** The current codebase has temporary modifications to work with the subdirectory deployment. These will be reverted once the custom domain is functional.
