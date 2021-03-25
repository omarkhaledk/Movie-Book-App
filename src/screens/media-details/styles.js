import { StyleSheet } from 'react-native';

// import { translationStore } from '../../stores/index';
// import languages from '../../constants/supported-languages';

// const isRTL = languages[translationStore.lang].direction == 'rtl';

const styles = (theme) => StyleSheet.create({
    container: {
        paddingTop: 10,
        flex: 1
    },
    image: {
        width: 100,
        height: 150
    }
});

export default styles;