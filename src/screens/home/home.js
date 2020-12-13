import React from 'react';

import { ThemeContext } from '../../theme-context';
import { Button, Layout, Text, withStyles } from '@ui-kitten/components';
import styles from "./home.style";

const HomeScreen = ({ navigation, eva }) => {

    const themeContext = React.useContext(ThemeContext);

    const { style } = eva;

    return (
        <Layout style={style.container}>
            {/* <Text category='h1'>Home page</Text> */}
            <Button style={{ marginVertical: 4 }} onPress={themeContext.toggleTheme}>TOGGLE THEME</Button>
        </Layout>
    );
}

export default withStyles(HomeScreen, styles);