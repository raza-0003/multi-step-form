import React, { Component } from 'react';
import { 
  AppBar, 
  Button,  
  ThemeProvider, 
  List,
  ListItem,
  ListItemText,
  createTheme 
} from '@mui/material';
import { Box, Container, Toolbar, Typography } from '@mui/material';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // process form //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.preStep();
  };

  render() {
    const { values: { firstName = '', lastName = '', email = '', occupation = '', city = '', bio = '' } } = this.props;
    const theme = createTheme();

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Confirm User Data</Typography>
            </Toolbar>
          </AppBar>

          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>

          <Button
            variant="contained"
            color="primary"
            style={styles.button}
            onClick={this.continue}
            sx={{ mt: 2, mb: 2, p: 1.5 }}
          >
            Confirm & Continue
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            style={styles.button}
            onClick={this.back}
            sx={{ mt: 2, mb: 2, p: 1.5 }}
          >
            Back
          </Button>
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
