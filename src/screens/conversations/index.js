import React from 'react';

import { observer } from 'mobx-react-lite';

import { Button, Layout, Text, withStyles } from '@ui-kitten/components';
import styles from "./styles";

const ConversationsScreen = ({ eva, stores, Translate }) => {

    const { style } = eva;

    return (
        <Layout style={style.container}>
            <Text>{Translate('Conversations')}</Text>
        </Layout>
    );
}

export default withStyles(observer(ConversationsScreen), styles);