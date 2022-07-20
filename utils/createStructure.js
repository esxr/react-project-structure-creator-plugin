const createFeatureFolder = require("./createFeature")
const createFileContent = require("./createFileContent")

function createStructure({ feature, subfeatures }) {
    // create the folder at the given path
    createFeatureFolder(
        {
            path: ".",
            featureName: feature,
            reactComponent: createFileContent({
                featureName: feature,
                content: subfeatures.map(({ feature }) => `<${feature}/>`).join("")
            })
        }
    )

    // create the sub-features
    subfeatures.forEach(({ feature, subfeatures }) => {
        createStructure({
            feature: feature,
            subfeatures: subfeatures || []
        })
    })
}

// create the structure
createStructure({
    feature: "TopBar",
    subfeatures: [
        {
            feature: "Logo",
            subfeatures: []
        },
        {
            feature: "OverviewOption",
            subfeatures: [],
        }
    ]
})

module.exports = createStructure