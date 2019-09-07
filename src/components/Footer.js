import React, { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
//import "../styles/App.css";
//import style from './Menu.css';
import appStyles from './../styles/app.css';
import { func } from 'prop-types';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem button onClick={() => handleListItemClick('addAccount')}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default class Footer extends React.Component {

  constructor(props) {
  super(props);
    this.state = { open: false };
    this.selectedValue = emails[1];

    this.testOpen = 'this is a test if its open'
    //const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    this.handleClose = () => {
      this.setState({
        open: false,
      });
      //setSelectedValue(value);
    };
  }


  returnOpen() {

    console.log('return open was called ' + this.state.open)

    return this.state.open;
  }
 
  handleClick() {
    this.setState({
      open: true
    });

    console.log("Job's done");
  }

  testAction() {
    console.log('test');
  }

  render() {
    return (
      <div className={appStyles.footer}>
        <Box component="div" className={appStyles.TestBox}>
          <Button onClick={this.handleClick.bind(this)}>test</Button>
          <Button onClick={() => this.testAction} variant="contained" color="secondary" className={appStyles.button}>
          Secondary
          </Button>
          <SimpleDialog selectedValue={this.selectedValue} open={this.state.open} onClose={this.handleClose} />
        </Box>
      </div>
    );
  }
}
