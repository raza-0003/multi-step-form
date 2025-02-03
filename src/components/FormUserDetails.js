import React, { Component } from 'react';
import { 
  AppBar, 
  Button, 
  TextField, 
  ThemeProvider, 
  createTheme 
} from '@mui/material';
import { Box, Container, Toolbar, Typography } from '@mui/material';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const theme = createTheme();

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter User Details</Typography>
            </Toolbar>
          </AppBar>

          <Container maxWidth="sm">
            <TextField 
              label="First Name"
              value={values.firstName}
              onChange={(e) => handleChange('firstName')(e)}
              fullWidth
              margin="normal"
            />
            <TextField 
              label="Last Name"
              value={values.lastName}
              onChange={(e) => handleChange('lastName')(e)}
              fullWidth
              margin="normal"
            />
            <TextField 
              label="Enter Your Email"
              value={values.email}
              onChange={(e) => handleChange('email')(e)}
              fullWidth
              margin="normal"
            />

            <Button
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={this.continue}
              sx={{ mt: 2, mb: 2, p: 1.5 }}
              fullWidth
            >
              Continue
            </Button>
          </Container>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
