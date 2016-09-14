import React from 'react';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Header = () => (
    <MuiThemeProvider>
        <AppBar
            title="favclip station"
            titleStyle={{ textAlign: "center" }}
            showMenuIconButton={false}
            />
    </MuiThemeProvider>
);

export default Header
