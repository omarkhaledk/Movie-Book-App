import React from 'react';

import { ScrollView, Image } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Translate } from '../../services/multilingual-support/translation-service';
import { GET_IMAGE } from '../../constants/config';

import { Layout, Text, withStyles, Card, Button } from '@ui-kitten/components';
import styles from './styles';

const SliderSection = (props) => {

    const { eva: { style }, data, title, navigation } = props;

    const results = data || [];

    return (
        <Layout style={style.container}>

            <Layout style={style.header}>
                <Text category='h6' style={style.trendingTitle}>{Translate(title)}</Text>
                <Button style={style.viewAll} appearance='ghost'>
                    {Translate('View-All')}
                </Button>
            </Layout>

            <ScrollView horizontal={true}>
                {results.map(item =>
                    <Card style={style.card} key={item.id} onPress={() => navigation.navigate('MediaDetails')}>
                        <Image
                            style={style.image}
                            source={{ uri: GET_IMAGE(item.poster_path) }}
                            resizeMode='cover'
                        />
                    </Card>
                )}
            </ScrollView>
        </Layout>
    );
}

export default withStyles(observer(SliderSection), styles);