const createFileContent = ({ featureName, content }) => {
    return `
import React from 'react';
import './${featureName}.module.css';

const ${featureName} = () => {
    return (
        <div>
            ${content}
        </div>
    )
}

export default ${featureName}
    `.trim();
}

module.exports = createFileContent;