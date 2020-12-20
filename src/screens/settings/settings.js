import React from 'react';

import { Layout, withStyles, Divider } from '@ui-kitten/components';
import { View } from 'react-native';

import styles from './settings.style';

import ThemeControlButton from '../../components/theme-control-button/theme-control-button';
import LanguageControlButton from '../../components/language-control-button/language-control-button';

const SettingsScreen = (props) => {
    const { eva: { style } } = props;

    return (
        <Layout style={style.container}>

            <View style={style.item}>
                <ThemeControlButton {...props} />
            </View>

            <Divider style={style.divider} />

            <View style={style.item}>
                <LanguageControlButton {...props} />
            </View>

        </Layout>
    );
}

export default withStyles(SettingsScreen, styles)