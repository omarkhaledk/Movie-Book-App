import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { TouchableHighlight, View } from 'react-native';
import { RadioGroup, Radio, withStyles, Text, Modal, Card } from '@ui-kitten/components';
import { themesArr } from '../../constants/app-themes';
import globalStyles from '../../global-styles';

import styles from './styles';

const ThemeControlButton = (props) => {
    const [visible, setVisible] = useState(false);
    const { stores: { themeStore }, Translate, eva } = props;
    const { style } = eva;

    const themeIndex = themesArr.findIndex(x => x == themeStore.theme);

    const onThemeChange = (index) => {
        themeStore.setTheme(themesArr[index], true);
        setVisible(false);
    }

    return (
        <TouchableHighlight onPress={() => setVisible(true)} style={style.mainContainer} underlayColor={globalStyles.touchableHighlightColor()}>
            <View style={style.viewContainer}>
                <Text style={style.themeText}>{Translate('theme')}</Text>
                <Text>{Translate(themeStore.theme)}</Text>

                <Modal
                    visible={visible}
                    backdropStyle={globalStyles.modalBackdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card>
                        <RadioGroup
                            selectedIndex={themeIndex}
                            onChange={index => onThemeChange(index)}>
                            {themesArr.map(t => <Radio key={t} style={style.radioButton}>{Translate(t)}</Radio>)}
                        </RadioGroup>
                    </Card>
                </Modal>
            </View>
        </TouchableHighlight>
    )
}

export default withStyles(observer(ThemeControlButton), styles); 
