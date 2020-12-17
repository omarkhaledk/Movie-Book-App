import React from 'react';

import { Layout, withStyles, Divider } from '@ui-kitten/components';
import { View } from 'react-native';

import styles from './settings.style';

import ThemeControlButton from '../../components/theme-control-button/theme-control-button';
import LanguageControlButton from '../../components/language-control-button/language-control-button';

const SettingsScreen = ({ eva, stores, Translate }) => {
    const { style } = eva;

    return (
        <Layout style={style.container}>

            <View style={style.item}>
                <ThemeControlButton stores={stores} />
            </View>

            <Divider style={style.divider} />

            <View style={style.item}>
                <LanguageControlButton stores={stores} Translate={Translate} />
            </View>

        </Layout>
    );
}

export default withStyles(SettingsScreen, styles)