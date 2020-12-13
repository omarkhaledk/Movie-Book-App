import { StyleSheet } from 'react-native';

const styles = (theme) => StyleSheet.create({
    container: {
        padding: (0, 16),
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginBottom: 10
    },
    profilePic: { width: 100, height: 100, borderRadius: 50 },
    padding10: { paddingTop: 10 }
});

export default styles;
