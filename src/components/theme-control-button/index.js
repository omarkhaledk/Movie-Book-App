import React from 'react';

import { observer } from 'mobx-react-lite';

import { RadioGroup, Radio } from '@ui-kitten/components';
import { themesArr } from '../../constants/app-themes';

const ThemeControlButton = ({ stores: { themeStore }, Translate }) => {

    const onThemeChange = (index) => {
        themeStore.setTheme(themesArr[index], true);
    }

    const themeIndex = themesArr.findIndex(x => x == themeStore.theme);

    return (
        <RadioGroup
            selectedIndex={themeIndex}
            onChange={index => onThemeChange(index)}>
            {themesArr.map(t => <Radio key={t}>{Translate(t)}</Radio>)}
        </RadioGroup >
    )
}

export default observer(ThemeControlButton);
