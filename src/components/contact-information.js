import React from 'react';

import { Image, View } from 'react-native';
import { Text, Layout, Drawer, DrawerItem, IndexPath, withStyles } from '@ui-kitten/components';

import styles from './contact-information.style';

const profilePic = require('../../assets/profile-pic.jpg');

const ContactInfo = ({ navigation, state, eva }) => {

    const { style } = eva;

    return (
        <Layout style={style.container}>
            <Image style={style.profilePic} source={profilePic} />
            <View style={style.padding10}></View>
            <Text>Name</Text>
            <View style={style.padding10}></View>
            <Text>Email</Text>
        </Layout>
    )
}

export default withStyles(ContactInfo, styles)