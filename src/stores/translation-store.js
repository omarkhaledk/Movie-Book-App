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

    toggleLang() {
        this.lang = this.lang === 'en' ? 'ar' : 'en';
    }
}

const translationStore = new TranslationStore();

export default translationStore;