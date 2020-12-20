import React from 'react';

import { Layout, Drawer, DrawerItem, IndexPath, withStyles, Divider, Text } from '@ui-kitten/components';
import { View } from 'react-native';

import styles from './styles';

import ContactInfo from "../../components/contact-information";

const DrawerContent = (props) => {
    const { SCREENS, navigation, state, eva: { style }, Translate } = props;

    return (
        <Layout style={style.drawerContent}>
            <ContactInfo {...props} />
            <Divider style={style.divider} />
            <Drawer
                selectedIndex={new IndexPath(state.index)}
                onSelect={index => navigation.navigate(state.routeNames[index.row])}>
                {SCREENS.map(s => s.isDrawerItem
                    ? <DrawerItem title={props => <Text {...props} style={style.drawerItem}>{Translate(s.name)}</Text>} key={s.name} />
                    : <View key={s.name}></View>)}
            </Drawer>
        </Layout >
    )
};

export default withStyles(DrawerContent, styles);