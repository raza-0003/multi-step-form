import React, { Component } from 'react';
import { 
  AppBar,   
  ThemeProvider, 
  createTheme 
} from '@mui/material';
import { Container, Toolbar, Typography } from '@mui/material';

export class Success extends Component {
  render() {
    const theme = createTheme();

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Success</Typography>
            </Toolbar>
          </AppBar>

          <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Thank You for Your Submission 😊</h1>
            <p>You will get an email with further instructions.</p>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Success;
