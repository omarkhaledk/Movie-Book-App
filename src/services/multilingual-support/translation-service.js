import Translations from './translations';
import translationStore from '../../stores/translation-store';
import supportedLanguages from '../../constants/supported-languages';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { I18nManager } from 'react-native';
import * as Updates from 'expo-updates';

const Translate = (text) => {
    const lang = translationStore.lang;
    if (!text || !lang || !Translations[text]) return '';
    return Translations[text][lang];
}

const ChangeLanguage = async (lang) => {
    try {
        const wasRTL = supportedLanguages[translationStore.lang].direction === 'rtl';
        const isRTL = supportedLanguages[lang].direction === 'rtl';
        await AsyncStorage.setItem('lang', lang);
        I18nManager.forceRTL(isRTL ? true : false);
        if (!isRTL) I18nManager.allowRTL(false);
        if ((!wasRTL && isRTL) || (wasRTL && !isRTL))
            await Updates.reloadAsync();
        else translationStore.changeLang(lang);
    } catch (e) {
        console.error(e)
    }
}

export { Translate, ChangeLanguage };