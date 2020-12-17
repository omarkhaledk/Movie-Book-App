import React from 'react';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { observer } from 'mobx-react'

import Router from './router/router';
import * as stores from './stores';

function App() {

  const { themeStore } = stores;

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva[themeStore.theme]}>
        <Router stores={stores} />
      </ApplicationProvider>
    </React.Fragment>
  );
}

export default observer(App);
