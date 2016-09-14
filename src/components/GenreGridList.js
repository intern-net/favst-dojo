import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import Genres from '../Genre.js';
import GenreGridTile from './GenreGridTile.js';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        // width: 500,
        // height: 500,
        overflowY: 'auto',
        marginBottom: 24,
    },
};

export default class GenreGridList extends React.Component {
    render() {
        return (
            <div style={styles.root}>
                <MuiThemeProvider>
                    <GridList cellHeight={200} style={styles.gridList}>
                        {Genres.map((genre) => (
                            <GridTile key={genre.id}>
                                <RaisedButton
                                    backgroundColor={genre.color}
                                    label={genre.name}
                                    labelColor="#FFFFFF"
                                    labelStyle={{
                                        fontWeight: "bold",
                                    }}
                                    style={{
                                        height: 200,
                                    }}
                                    onClick={function () {
                                        console.log('はい');
                                    } }
                                    fullWidth={true} />
                            </GridTile>
                        )) }
                    </GridList>
                </MuiThemeProvider>
            </div>
        );
    }
}
