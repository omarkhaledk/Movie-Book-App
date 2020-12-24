import { StyleSheet } from 'react-native';

const styles = (theme) => StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        flex: 1,
        margin: -16,
        padding: 16
    },
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    themeText: {
        fontWeight: 'bold'
    },
    radioButton: {
        width: '100%'
    }
});

export default styles;
