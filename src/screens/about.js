import React from 'react';

import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export const AboutScreen = () => {
    return (
        <Layout style={styles.container}>
            <Text>About page</Text>
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});