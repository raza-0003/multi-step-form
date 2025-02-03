import React, { Component } from 'react';
import { 
  AppBar, 
  Button, 
  TextField, 
  ThemeProvider, 
  createTheme 
} from '@mui/material';
import { Container, Toolbar, Typography } from '@mui/material';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.preStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const theme = createTheme();

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Enter Personal Details</Typography>
            </Toolbar>
          </AppBar>

          <Container maxWidth="sm">
            <TextField 
              label="Enter Your Occupation"
              value={values.occupation}
              onChange={(e) => handleChange('occupation')(e)}
              fullWidth
              margin="normal"
            />
            <TextField 
              label="Enter Your City"
              value={values.city}
              onChange={(e) => handleChange('city')(e)}
              fullWidth
              margin="normal"
            />
            <TextField 
              label="Enter Your Bio"
              value={values.bio}
              onChange={(e) => handleChange('bio')(e)}
              fullWidth
              margin="normal"
              multiline
              rows={3}
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

            <Button
              variant="outlined"
              color="secondary"
              style={styles.button}
              onClick={this.back}
              sx={{ mt: 2, mb: 2, p: 1.5 }}
              fullWidth
            >
              Back
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

export default FormPersonalDetails;
