import * as React from 'react';
import {Flux, Component} from 'flumpt';

import GridTile from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class GenreGridTile extends Component {
    componentDidMount() {
        this.dispatch('increment');
    }

    render() {
        return (
            <MuiThemeProvider>
                <GridTile>
                    {this.props.genre.name}
                </GridTile>
            </MuiThemeProvider>
        );
    }
}
