import React from 'react';

import { observer } from 'mobx-react-lite';
import { Image, View } from 'react-native';
import { Text, Layout, withStyles } from '@ui-kitten/components';

import styles from './styles';

const profilePic = require('../../../assets/profile-pic.jpg');

const ContactInfo = ({ eva, stores, Translate }) => {
    const { style } = eva;

    return (
        <Layout style={style.container}>
            <Image style={style.profilePic} source={profilePic} />
            <View style={style.padding10}></View>
            <Text>{Translate('Name')}</Text>
            <View style={style.padding10}></View>
            <Text>{Translate('Email')}</Text>
        </Layout>
    )
}

export default withStyles(observer(ContactInfo), styles)