import React, { useState } from 'react';

import { Radio, RadioGroup, Text, Layout } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';

const LanguageChangeButton = ({ stores: { translationStore }, ChangeLanguage, Translate }) => {
    const [selectedIndex, setSelectedIndex] = useState(translationStore.lang === 'en' ? 0 : 1);

    const onLangChange = (index) => {
        setSelectedIndex(index);
        ChangeLanguage(index == 0 ? 'en' : 'ar')
    }

    return (
        <Layout>
            <Text>{Translate('Language')}</Text>
            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => onLangChange(index)}>
                <Radio>English</Radio>
                <Radio>العربية</Radio>
            </RadioGroup>
        </Layout>
    )
}

export default observer(LanguageChangeButton);