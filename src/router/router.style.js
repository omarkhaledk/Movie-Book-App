import { StyleSheet } from 'react-native';

const styles = (theme) => StyleSheet.create({
    drawerContent: {
        height: '100%'
    },
    drawerItem: {
        fontSize: 16
    },
    divider: {
        marginBottom: 18
    },
    dark: {
        backgroundColor: theme['color-basic-800'],
        borderBottomColor: theme['color-basic-1000'],
        borderWidth: 1
    }
});

export default styles;
