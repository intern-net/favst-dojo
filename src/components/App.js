import React from 'react';

import Header from './Header.js';
import GenreGridList from './GenreGridList.js';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <GenreGridList />
            </div>
        );
    }
}
