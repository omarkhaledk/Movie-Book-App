import React, { useState, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { RefreshControl, ScrollView } from 'react-native';
import { Layout, Text, withStyles, Spinner } from '@ui-kitten/components';
import SliderSection from "../../components/slider";

import styles from "./styles";

import { getTrending } from "../../api";

const HomeScreen = (props) => {
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState({});
    const [shows, setShows] = useState({});
    const [refreshing, setRefreshing] = useState(false);

    const getTrendingMovies = () => getTrending('movie', 'day');
    const getTrendingShows = () => getTrending('tv', 'day');

    useEffect(() => {
        let mounted = true;

        if (mounted) getData();
        return () => mounted = false
    }, []);

    const getData = (isRefresh) => {

        if (isRefresh) setRefreshing(true);
        else setLoading(true);

        const promises = [getTrendingMovies(), getTrendingShows()];

        return Promise.all(promises).then(response => {
            setMovies(response[0]);
            setShows(response[1]);
        }).catch(err => {
            throw err;
        }).finally(() => {
            setLoading(false);
            setRefreshing(false);
        })
    }

    const onRefresh = () => getData(true);

    const { style } = props.eva;

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
                <SliderSection {...props} data={movies.results} title="Trending-Movies" />
                <SliderSection {...props} data={shows.results} title="Trending-Shows" />
            </ScrollView>

        </Layout>
    );
}

export default withStyles(observer(HomeScreen), styles);