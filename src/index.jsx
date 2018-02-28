import React, { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import styles from './components/App/app.module.css'
import WebFont from 'webfontloader'

const root = document.getElementById('root')
const load = () => render((
  <AppContainer>
    <App className={styles.text} />
  </AppContainer>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', load)
}

WebFont.load({
  typekit: {
    id: 'nri5owq'
  }
})

load();
