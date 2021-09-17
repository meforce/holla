const path = require("path");

var locaLangCode = 'tr';

const fs = require('fs');
let loadedLanguage;

module.exports = i18n;

function i18n() {
if(fs.existsSync(path.join(__dirname, 'lang/' + locaLangCode + '.js'))) {
loadedLanguage = JSON.parse(fs.readFileSync(path.join(__dirname, 'lang/' + locaLangCode + '.js'), 'utf8'))
}
else {
loadedLanguage = JSON.parse(fs.readFileSync(path.join(__dirname, 'lang/en.js'), 'utf8'))
}
}

i18n.prototype.__ = function(phrase) {
let translation = loadedLanguage[phrase]
if(translation === undefined) {
translation = phrase
}
return translation
}
