import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { translationStore, themeStore } from '../../stores';
import supportedLanguages from '../../constants/supported-languages';
import { observer } from 'mobx-react-lite';
import { withStyles, Button, Icon } from '@ui-kitten/components';

import styles from './styles';

const BackButton = (props) => {
    const navigation = useNavigation();

    const isRTL = supportedLanguages[translationStore.lang].direction === 'rtl';
    const isDarkTheme = themeStore.theme === 'dark';
    const { eva: { style, theme } } = props;

    return (
        <Button
            onPress={() => navigation.goBack()}
            appearance='ghost'
            accessoryLeft={() => <Icon
                style={style.icon}
                fill={isDarkTheme ? '#FFFFFF' : theme['color-basic-700']}
                name={isRTL ? 'arrow-right' : 'arrow-left'} />}
        />
    )
}

export default withStyles(observer(BackButton), styles);