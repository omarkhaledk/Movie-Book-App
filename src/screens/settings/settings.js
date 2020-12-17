import React from 'react';

import { Button, Layout, withStyles } from '@ui-kitten/components';

import styles from './settings.style';

const SettingsScreen = ({ eva, stores }) => {
    const { style } = eva;
    const { themeStore } = stores;

    return (
        <Layout style={style.container}>
            <Button style={{ marginVertical: 4 }} onPress={() => themeStore.toggleTheme()}>TOGGLE THEME</Button>
        </Layout>
    );
}

export default withStyles(SettingsScreen, styles)