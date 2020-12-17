import React from 'react';

import { observer } from 'mobx-react-lite';

import { Button, Layout, Text, withStyles } from '@ui-kitten/components';
import styles from "./conversations.style";

const ConversationsScreen = ({ eva, stores }) => {

    const { style } = eva;

    return (
        <Layout style={style.container}>
            <Text>Conversations</Text>
        </Layout>
    );
}

export default withStyles(observer(ConversationsScreen), styles);