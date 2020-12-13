import React from 'react';

import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Layout, Text } from '@ui-kitten/components';

export const AboutScreen = () => {
    return (
        <Layout style={styles.container}>
            <Text>About page</Text>
            <StatusBar style="auto" />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});