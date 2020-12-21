import React, { useState } from 'react';

import { Radio, RadioGroup, Text, Layout } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { languagesArr } from '../../constants/supported-languages';

const LanguageChangeButton = ({ stores: { translationStore }, ChangeLanguage, Translate }) => {
    const [selectedIndex, setSelectedIndex] = useState(languagesArr.findIndex(lang => lang.id === translationStore.lang) || 0);

    const onLangChange = (index) => {
        setSelectedIndex(index);
        ChangeLanguage(languagesArr[index].id)
    }

    return (
        <Layout>
            <Text>{Translate('Language')}</Text>
            <RadioGroup
                selectedIndex={selectedIndex}
                onChange={index => onLangChange(index)}>
                {languagesArr.map(lang => <Radio key={lang.id}>{lang.name}</Radio>)}
            </RadioGroup>
        </Layout>
    )
}

export default observer(LanguageChangeButton);