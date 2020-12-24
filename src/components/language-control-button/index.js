import React, { useState } from 'react';

import { TouchableHighlight, View } from 'react-native';
import { Radio, RadioGroup, Text, Modal, Card, withStyles } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { languagesArr } from '../../constants/supported-languages';
import styles from './styles';
import globalStyles from '../../global-styles';

const LanguageControlButton = ({ stores: { translationStore }, ChangeLanguage, Translate, eva }) => {
    const [selectedIndex, setSelectedIndex] = useState(languagesArr.findIndex(lang => lang.id === translationStore.lang) || 0);
    const [visible, setVisible] = useState(false);

    const { style } = eva;

    const onLangChange = (index) => {
        setSelectedIndex(index);
        ChangeLanguage(languagesArr[index].id);
        setVisible(false);
    }

    const selectedLang = languagesArr.find(lang => translationStore.lang === lang.id);

    return (
        <TouchableHighlight onPress={() => setVisible(true)} style={style.mainContainer} underlayColor={globalStyles.touchableHighlightColor()}>
            <View style={style.viewContainer}>
                <Text style={style.langText}>{Translate('Language')}</Text>
                <Text>{selectedLang.name}</Text>

                <Modal
                    visible={visible}
                    backdropStyle={globalStyles.modalBackdrop}
                    onBackdropPress={() => setVisible(false)}>
                    <Card>
                        <RadioGroup
                            selectedIndex={selectedIndex}
                            onChange={index => onLangChange(index)}>
                            {languagesArr.map(lang => <Radio key={lang.id}>{lang.name}</Radio>)}
                        </RadioGroup>
                    </Card>
                </Modal>

            </View>
        </TouchableHighlight>
    )
}

export default withStyles(observer(LanguageControlButton), styles);