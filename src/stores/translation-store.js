import { makeObservable, observable, action } from "mobx";
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class TranslationStore {
    lang
    systemLang = NativeModules.I18nManager.localeIdentifier.includes('en') ? 'en' : 'ar'

    constructor() {
        makeObservable(this, {
            lang: observable,
            changeLang: action
        });

        this.getSavedLang().then(result => this.changeLang(result || this.systemLang));
    }

    getSavedLang = async () => {
        try {
            const lang = await AsyncStorage.getItem('lang');
            return lang;
        } catch (e) {
            return null;
        }
    }

    changeLang(lang) {
        this.lang = lang;
    }

}

const translationStore = new TranslationStore();

export default translationStore;