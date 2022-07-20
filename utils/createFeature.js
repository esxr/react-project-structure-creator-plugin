const fs = require('fs')

// create a function to create a folder with two files 'index.js' and 'index.module.css'
function createFeatureFolder({ path, featureName, reactComponent }) {
    // create the folder at the given path
    let folder = `${path}/${featureName}`
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    fs.writeFileSync(`${featureName}/index.js`, `${reactComponent}`)
    fs.writeFileSync(`${featureName}/${featureName}.module.css`, '')
}

module.exports = createFeatureFolder