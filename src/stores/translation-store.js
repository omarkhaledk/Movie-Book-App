import { makeObservable, observable, action } from "mobx";

class TranslationStore {
    lang

    constructor() {
        makeObservable(this, {
            lang: observable,
            toggleLang: action
        });
        this.lang = 'en'
    }

    toggleLang(lang) {
        this.lang = lang;
    }
}

const translationStore = new TranslationStore();

export default translationStore;