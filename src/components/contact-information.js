import React from 'react';

import { observer } from 'mobx-react-lite';
import { Image, View } from 'react-native';
import { Text, Layout, withStyles } from '@ui-kitten/components';

import styles from './contact-information.style';

const profilePic = require('../../assets/profile-pic.jpg');

const ContactInfo = ({ eva }) => {
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

export default withStyles(observer(ContactInfo), styles)