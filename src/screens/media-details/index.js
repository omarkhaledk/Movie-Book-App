import React from 'react';

import { ScrollView, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Translate } from '../../services/multilingual-support/translation-service';
import { GET_IMAGE } from '../../constants/config';

import { Layout, Text, withStyles, Card, Button } from '@ui-kitten/components';
import styles from './styles';

const SliderSection = (props) => {

    const { eva: { style }, data, title } = props;


    return (
        <Layout style={style.container}>

            <ScrollView horizontal={true}>
            </ScrollView>
        </Layout>
    );
}

export default withStyles(observer(SliderSection), styles);