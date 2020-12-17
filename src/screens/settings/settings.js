import React from 'react';

import { Layout, withStyles, Divider } from '@ui-kitten/components';
import { View } from 'react-native';

import styles from './settings.style';

import ThemeChanging from '../../components/theme-changing/theme-changing';

const SettingsScreen = ({ eva, stores }) => {
    const { style } = eva;

    return (
        <Layout style={style.container}>

            <View style={style.item}>
                <ThemeChanging stores={stores} />
            </View>

            <Divider style={style.divider} />

        </Layout>
    );
}

export default withStyles(SettingsScreen, styles)