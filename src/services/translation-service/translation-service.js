import Translations from './translations';
import translationStore from '../../stores/translation-store';

const Translate = (text) => {
    const lang = translationStore.lang;
    return Translations[lang][text];
}

export default Translate;