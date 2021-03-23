import React from 'react';

import { Translate } from '../../services/multilingual-support/translation-service';
import { apiStore } from '../../stores/index';
import { Layout, Popover, Text, withStyles } from '@ui-kitten/components';

import styles from './styles';

export const ErrorPopup = (props) => {
    const [visible, setVisible] = React.useState(true);

    const onHide = () => {
        apiStore.setErrorState(false);
        setVisible(false);
    }

    const { eva: { style } } = props;

    return (
        <Popover
            visible={visible}
            anchor={() => <Layout />}
            onBackdropPress={() => onHide()}
            style={style.container}
        >

            <Layout style={style.content}>
                <Text style={style.text}>{Translate("errorOccurredTryAgain")}</Text>
            </Layout>

        </Popover>
    );
};

export default withStyles(ErrorPopup, styles);