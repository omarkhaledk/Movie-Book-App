import React, { useState, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { Layout, Text, withStyles, Spinner } from '@ui-kitten/components';
import styles from "./styles";

import { getTrending } from "../../api";

const HomeScreen = ({ eva, stores, Translate }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        let mounted = true;

        if (mounted) getData();
        return () => mounted = false
    }, []);

    const getData = () => {
        setLoading(true);

        return getTrending().then(async response => {
            console.log('response', response)
            setData(response);
        }).catch(err => err
        ).finally(() => {
            setLoading(false);
        })
    }

    const { style } = eva;

    return (
        <Layout style={style.container}>
            {/* <SafeAreaView style={{...style.container}}> */}

            <ScrollView
                contentContainerStyle={{ flex: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={getData}
                    />
                }
            >
                {loading
                    ? <Spinner />
                    : <Text>{Translate('Home')}</Text>}
            </ScrollView>

            {/* </SafeAreaView> */}
        </Layout>
    );
}

export default withStyles(observer(HomeScreen), styles);