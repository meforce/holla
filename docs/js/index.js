//import Translator from "./translator";
import {Translator} from "./translator.js";

var translator = new Translator({
  persist: false,
  languages: ["de", "en", "es"],
  defaultLanguage: "en",
  detectLanguage: true,
  filesLocation: "/i18n"
});

translator.load();

document.querySelector("form").addEventListener("click", function(evt) {
  if (evt.target.tagName === "INPUT") {
    translator.load(evt.target.value);
  }
});
