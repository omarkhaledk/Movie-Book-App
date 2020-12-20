import Translations from './translations';
import translationStore from '../../stores/translation-store';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import * as Updates from 'expo-updates';

const Translate = (text) => {
    const lang = translationStore.lang;
    if (!lang) return '';
    return Translations[lang][text];
}

const ChangeLanguage = async (lang) => {
    try {
        await AsyncStorage.setItem('lang', lang);
        translationStore.changeLang(lang);
        I18nManager.forceRTL(lang === 'ar' ? true : false);
        await Updates.reloadAsync();
    } catch (e) {
        console.error(e)
    }
}

export { Translate, ChangeLanguage };