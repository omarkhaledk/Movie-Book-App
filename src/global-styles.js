import { StyleSheet, Appearance } from 'react-native';
import themeStore from './stores/theme-store';

const touchableHighlightColor = () => {
    const { theme } = themeStore;
    const deviceTheme = Appearance.getColorScheme();

    const light = '#DDDDDD';
    const dark = '#2E3A59';

    if (theme === 'systemDefault') {
        if (deviceTheme === 'light') return light;
        else return dark;
    }
    else if (theme === 'light') return light;
    else return dark;
}

const styles = StyleSheet.create({
    modalBackdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
})

export default { touchableHighlightColor, ...styles };