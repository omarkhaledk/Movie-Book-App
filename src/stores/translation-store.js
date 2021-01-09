import { makeObservable, observable, action } from "mobx";
import { NativeModules } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import supportedLanguages from '../constants/supported-languages';

const deviceLocale = supportedLanguages[NativeModules.I18nManager.localeIdentifier.substring(0, 2)];

class TranslationStore {
    lang = 'en'
    deviceLang = (deviceLocale && deviceLocale.id) || 'en'

    constructor() {
        makeObservable(this, {
            lang: observable,
            changeLang: action
        });

        this.getSavedLang().then(result => this.changeLang(result || this.deviceLang));
    }

    getSavedLang = async () => {
        try {
            const lang = await AsyncStorage.getItem('lang');
            return lang;
        } catch (e) {
            return Promise.resolve(null);
        }
    }

    changeLang(lang) {
        this.lang = lang;
    }

}

const translationStore = new TranslationStore();

export default translationStore;