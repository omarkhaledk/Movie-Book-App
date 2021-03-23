import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { observer } from 'mobx-react';
import { withStyles } from '@ui-kitten/components';

import DrawerContent from '../components/drawer-content';
import HomeScreen from "../screens/home";
import SettingsScreen from "../screens/settings";

const { Navigator, Screen } = createDrawerNavigator();

const SCREENS = [
    { name: 'Home', component: HomeScreen, isDrawerItem: true },
    { name: 'Settings', component: SettingsScreen, isDrawerItem: true }
];

function AppContainer(props) {
    const { eva: { theme }, stores: { themeStore }, Translate } = props;

    const isDarkTheme = themeStore.theme === 'dark';

    return (
        <NavigationContainer>
            <Navigator
                drawerContent={contentProps => <DrawerContent {...props} {...contentProps} SCREENS={SCREENS} />}
                drawerType="slide"
                initialRouteName={SCREENS[0].name}>

                {SCREENS.map(s => <Screen
                    name={Translate(s.name) || s.name}
                    key={s.name}
                    options={{
                        headerShown: true,
                        headerStyle: isDarkTheme ? style(theme).dark : {},
                        headerTintColor: isDarkTheme ? theme['color-primary-100'] : theme['color-basic-1100'],
                    }}
                >
                    {() => <s.component {...props} />}

                </Screen>)}

            </Navigator>
        </NavigationContainer>
    );
}

const style = (theme) => StyleSheet.create({
    dark: {
        backgroundColor: theme['color-basic-800'],
        borderBottomColor: theme['color-basic-1000'],
        borderWidth: 1
    }
});

export default withStyles(observer(AppContainer), style);