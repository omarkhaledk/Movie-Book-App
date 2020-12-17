import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Layout, Drawer, DrawerItem, IndexPath, withStyles, Divider, Text } from '@ui-kitten/components';
import { observer } from 'mobx-react';

import styles from './router.style';
import { ThemeContext } from '../theme-context';

import HomeScreen from "../screens/home/home";
import { AboutScreen } from "../screens/about";
import ContactInfo from "../components/contact-information";
import { View } from 'react-native';

const { Navigator, Screen } = createDrawerNavigator();

const SCREENS = [
    { name: "Home", component: HomeScreen, isDrawerItem: true },
    { name: "About", component: AboutScreen, isDrawerItem: true }
];

const DrawerContent = ({ navigation, state, eva, stores }) => {
    const { style } = eva;

    return (
        <Layout style={style.drawerContent}>
            <ContactInfo stores={stores} />
            <Divider style={style.divider} />
            <Drawer
                selectedIndex={new IndexPath(state.index)}
                onSelect={index => navigation.navigate(state.routeNames[index.row])}>
                {SCREENS.map(s => s.isDrawerItem
                    ? <DrawerItem title={props => <Text {...props} style={style.drawerItem}>{s.name}</Text>} key={s.name} />
                    : <View key={s.name}></View>)}
            </Drawer>
        </Layout >
    )
};

function AppContainer(props) {
    const themeContext = React.useContext(ThemeContext);
    const { eva: { style, theme } } = props;

    const isDarkTheme = themeContext.theme === 'dark';

    return (
        <NavigationContainer>
            <Navigator drawerContent={contentProps => <DrawerContent {...props} {...contentProps} />} drawerType="slide" initialRouteName={SCREENS[0].name}>
                {SCREENS.map(s => <Screen
                    name={s.name}
                    key={s.name}
                    options={{
                        headerShown: true,
                        headerStyle: isDarkTheme ? style.dark : {},
                        headerTintColor: isDarkTheme ? theme['color-primary-100'] : theme['color-basic-1100']
                    }}
                >
                    {() => <s.component  {...props} />}
                </Screen>)}
            </Navigator>
        </NavigationContainer>
    );
}

export default withStyles(observer(AppContainer), styles);