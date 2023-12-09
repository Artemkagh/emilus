import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Views from './views';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { THEME_CONFIG } from './configs/AppConfig';

const themes = {
  dark: `${process.env.PUBLIC_URL}/css/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/css/light-theme.css`,
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={THEME_CONFIG.currentTheme} insertionPoint="styles-insertion-point">
          <HashRouter>
            <Switch>
              <Route path="/" component={Views}/>
            </Switch>
          </HashRouter>
        </ThemeSwitcherProvider>
      </Provider>
    </div>
  );
}

export default App;
