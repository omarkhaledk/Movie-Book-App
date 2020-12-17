import React from 'react';

import { Layout, Drawer, DrawerItem, IndexPath, withStyles, Divider, Text } from '@ui-kitten/components';
import { View } from 'react-native';

import styles from './drawer-content.style';

import ContactInfo from "../../components/contact-information/contact-information";

const DrawerContent = ({ SCREENS, navigation, state, eva, stores }) => {
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

export default withStyles(DrawerContent, styles);