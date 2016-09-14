import * as React from 'react';
import {Flux, Component} from 'flumpt';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Header extends Component {
    componentDidMount() {
        this.dispatch('increment');
    }

    render() {
        return (
            <MuiThemeProvider>
                <AppBar
                    title="favclip station"
                    titleStyle={{
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                    showMenuIconButton={false}
                    style={{ position: 'fixed' }}
                    />
            </MuiThemeProvider>
        );
    }
}
