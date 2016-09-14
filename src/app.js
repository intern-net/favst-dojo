import * as React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

const app = new App({
    renderer: el => {
        ReactDOM.render(el, document.querySelector('#content'));
    },
    initialState: {
        voices: (function() {
            if (localStorage.getItem('voices')) {
                return JSON.parse(localStorage.getItem('voices'));
            } else {
                return {};
            }
        })(),
        count: 0,
    },
    middlewares: [
        // logger
        //   it may get state before unwrap promise
        (state) => {
            console.log(state);
            return state
        }
    ]
});

app.on(':start-async-updating', () => {
    // overlay ui lock
});
app.on(':end-anync-updating', () => {
    // hide ui lock
});

// it fires rendering
app.update(_initialState => ({
    count: 1,
    voices: JSON.parse(localStorage.getItem('voices')),
}))
