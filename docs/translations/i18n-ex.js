const path = require("path");

const electron = require('electron');
let app = electron.app ? electron.app : electron.remote.app;
const Store = require('electron-store');
window.store = new Store();
var locaLangCode = store.get('settings.langs');

const {	ipcRenderer, remote } = require('electron');
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