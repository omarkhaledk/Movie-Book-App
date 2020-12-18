import React, { useState } from 'react';

import { Radio, RadioGroup, Text, Layout } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';

const LanguageChangeButton = ({ stores: { translationStore }, Translate }) => {
    const [selectedIndex, setSelectedIndex] = useState(translationStore.lang === 'en' ? 0 : 1);

    const onLangChange = (index) => {
        setSelectedIndex(index);
        translationStore.toggleLang(index == 0 ? 'en' : 'ar')
    }

    return (
        <Layout>
            <Text>Language</Text>
            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => onLangChange(index)}>
                <Radio>{Translate('English')}</Radio>
                <Radio>{Translate('Arabic')}</Radio>
            </RadioGroup>
        </Layout>
    )
}

export default observer(LanguageChangeButton);