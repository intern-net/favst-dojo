import * as React from 'react';
import {Flux, Component} from 'flumpt';

import LoadVoices from '../Voice.js';
import Header from './Header.js';
import GenreGridList from './GenreGridList.js';

export default class App extends Flux {
    subscribe() {
        this.on('increment', () => {
            this.update(({count}) => {
                return {count: count + 1};
            });
        });
        if (!localStorage.getItem('voices')) {
            LoadVoices((voices) => {
                this.update(({count}) => {
                    localStorage.setItem('voices', JSON.stringify(voices));
                    return {
                        voices: voices,
                        count: count,
                    }
                });
            });
        }
    }

    render(state) {
        return (
            <div>
                <Header />
                <GenreGridList {...state} />
            </div>
        );
    }
}
