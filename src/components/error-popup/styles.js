import { StyleSheet } from 'react-native';

const styles = (theme) => StyleSheet.create({
    container: {
        borderWidth: 0
    },
    content: {
        backgroundColor: '#282828',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 4,
        paddingVertical: 8,
        borderRadius: 10,
    },
    text: {
        color: '#fff'
    }
});

export default styles;
