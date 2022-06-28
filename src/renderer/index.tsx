import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter as Router } from 'react-router-dom';
import { configure } from 'mobx';
import { store, StoreContext } from './stores/store';
import App from './App';
import { log } from './utils';

const ModuleName = 'renderer:index';

// Don't allow MobX state mutation without a MobX action
configure({
    enforceActions: 'observed'
});

void (async () => {
    log([ModuleName, 'info'], `Starting renderer index module...`);

    render(
        <Router>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </Router>,
        document.getElementById('root')
    );
})().catch();
