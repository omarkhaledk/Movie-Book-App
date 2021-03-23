import React from 'react';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { observer } from 'mobx-react'
import { Appearance } from 'react-native';

import Router from './src/router/router';
import * as stores from './src/stores';
import * as TranslationService from './src/services/multilingual-support/translation-service';
import themes from './src/constants/app-themes';
import ErrorPopup from './src/components/error-popup';

function App() {
  const { themeStore: { theme } } = stores;

  const deviceTheme = Appearance.getColorScheme();

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[theme == 'systemDefault' ? deviceTheme : theme || themes[0]]}>
        {theme && <Router stores={stores} {...TranslationService} />}
        {stores.apiStore.errorState && <ErrorPopup />}
      </ApplicationProvider>
    </React.Fragment>
  );
}

export default observer(App);
