import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';

const App = ({ store }) => {
    // media query para que se adapte al tema del navegador
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    localStorage.setItem('Theme', 'dark');
    // si se usa media query eliminar linea 11, descomentar 10 y parte de 14
    const getTheme = localStorage.getItem('Theme');
    const condition = getTheme === 'dark'; //|| getTheme === 'light' ? getTheme === 'dark' : prefersDarkMode;
    if (condition) {
        document.body.classList.add('dark-mode');
    }

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
