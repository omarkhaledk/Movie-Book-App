import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, Layout, Drawer, DrawerItem, IndexPath, withStyles } from '@ui-kitten/components';

import styles from './router.style';

import HomeScreen from "../screens/home/home";
import { AboutScreen } from "../screens/about";
import ContactInfo from "../components/contact-information";

const { Navigator, Screen } = createDrawerNavigator();

const SCREENS = [
    { name: "Home", component: HomeScreen },
    { name: "About", component: AboutScreen }
];

const DrawerContent = ({ navigation, state, eva }) => {
    const { style } = eva;

    return (
        <Layout style={style.drawerContent}>
            <ContactInfo />
            <Drawer
                selectedIndex={new IndexPath(state.index)}
                onSelect={index => navigation.navigate(state.routeNames[index.row])}>
                {SCREENS.map(s => <DrawerItem title={s.name} key={s.name} />)}
            </Drawer>
        </Layout >
    )
};

function AppContainer(props) {

    return (
        <NavigationContainer>
            <Navigator drawerContent={contentProps => <DrawerContent {...props} {...contentProps} />} drawerType="slide" initialRouteName={SCREENS[0].name}>
                {SCREENS.map(s => <Screen name={s.name} component={s.component} key={s.name} options={{ headerShown: true }} />)}
            </Navigator>
        </NavigationContainer>
    );
}

export default withStyles(AppContainer, styles);