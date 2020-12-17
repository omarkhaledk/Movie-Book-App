import React from 'react';

import { observer } from 'mobx-react-lite';

import { Button, Layout, Text, withStyles } from '@ui-kitten/components';
import styles from "./home.style";

const HomeScreen = ({ eva, stores }) => {

    const { style } = eva;
    const { themeStore } = stores;

    return (
        <Layout style={style.container}>
            <Button style={{ marginVertical: 4 }} onPress={() => themeStore.toggleTheme()}>TOGGLE THEME</Button>
        </Layout>
    );
}

export default withStyles(observer(HomeScreen), styles);