import React from 'react';

import { observer } from 'mobx-react-lite';

import { Toggle } from '@ui-kitten/components';

const ThemeChanging = ({ stores }) => {
    const { themeStore } = stores;
    const isDarkTheme = themeStore.theme === 'dark';

    return (
        <Toggle
            status='primary'
            checked={isDarkTheme}
            onChange={() => themeStore.toggleTheme()}>
            Dark Theme
        </Toggle>
    )
}

export default observer(ThemeChanging);
