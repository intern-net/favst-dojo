import React from 'react';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Header = () => (
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

export default Header
