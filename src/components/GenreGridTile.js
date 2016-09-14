import React from 'react';

import GridTile from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class GenreGridTile extends React.Component {
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
