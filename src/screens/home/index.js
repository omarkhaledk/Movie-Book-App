import React, { useState, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { RefreshControl, ScrollView } from 'react-native';
import { Layout, Text, withStyles, Spinner } from '@ui-kitten/components';
import styles from "./styles";

import { getTrending } from "../../api";

const HomeScreen = ({ eva, stores, Translate }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        let mounted = true;

        if (mounted) getData();
        return () => mounted = false
    }, []);

    const getData = (isRefresh) => {

        if (isRefresh) setRefreshing(true);
        else setLoading(true);

        return getTrending().then(response => {
            console.log('response', response)
            setData(response);
        }).catch(err => {
            throw err;
        }).finally(() => {
            setLoading(false);
            setRefreshing(false);
        })
    }

    const onRefresh = () => getData(true);

    const { style } = eva;

    if (loading) {
        return <Layout style={style.spinnerContainer}><Spinner /></Layout>
    }

    return (
        <Layout style={style.container}>

            <ScrollView
                contentContainerStyle={style.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Text>{Translate('Home')}</Text>

            </ScrollView>

        </Layout>
    );
}

export default withStyles(observer(HomeScreen), styles);