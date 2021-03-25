import { StyleSheet } from 'react-native';

import { translationStore } from '../../stores/index';
import languages from '../../constants/supported-languages';

const isRTL = languages[translationStore.lang].direction == 'rtl';

const styles = (theme) => StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: isRTL ? undefined : 10,
        paddingRight: isRTL ? 10 : undefined,
        // marginBottom: -8,
        marginRight: isRTL ? undefined : -10,
        marginLeft: isRTL ? -10 : undefined
    },
    trendingTitle: {
        fontWeight: 'bold'
    },
    card: {
        flex: 1,
        margin: 2,
        width: 100,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 150
    }
});

export default styles;