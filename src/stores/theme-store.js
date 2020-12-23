import { makeObservable, observable, action } from "mobx";
import AsyncStorage from '@react-native-async-storage/async-storage';

class ThemeStore {
    theme

    constructor() {
        makeObservable(this, {
            theme: observable,
            setTheme: action
        });

        this.getSavedTheme().then(result => {
            this.setTheme(result || 'systemDefault');
        })
    }

    getSavedTheme = async () => {
        try {
            const theme = await AsyncStorage.getItem('theme');
            return theme;
        } catch (e) {
            return Promise.resolve(null);
        }
    }

    setTheme(theme, isButton) {
        this.theme = theme;
        if (isButton) this.saveTheme(theme);
    }

    async saveTheme(theme) {
        await AsyncStorage.setItem('theme', theme);
    }
}

const themeStore = new ThemeStore();

export default themeStore;