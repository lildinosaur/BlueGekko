const fs = require('fs');

function getArrayOrEmpty(file) {
    if (!fs.existsSync(file)) {
        return {};
    }
    data = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!data) {
        return {};
    }
    return data;
}

module.exports = {
    storageFile: function (file) {
        return getArrayOrEmpty(file);
      }
}