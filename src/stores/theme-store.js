import { makeObservable, observable, computed, action } from "mobx";

class ThemeStore {
    theme

    constructor() {
        makeObservable(this, {
            theme: observable,
            toggleTheme: action
        });
        this.theme = 'light';
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
}

const themeStore = new ThemeStore();

export default themeStore;