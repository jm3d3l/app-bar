import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCart from '@material-ui/icons/ShoppingCart'
const styles = theme => ({
  root: {
    display: "flex",
  },
  spacer: {
    flex: '1 1 auto',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  moreIcon : {
      [theme.breakpoints.up("md","lg")] : {
          display : 'none',
          marginLeft: -12,
          marginRight: 20,
      }
  },
  lgBreakpoints : {
      [theme.breakpoints.down("sm")] : {
          display : 'none',
      }
  }
});



class ButtonAppBar extends Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
        width : null
      };

      sideList = () => {
          const {classes} = this.props;
          return (
            <div className={classes.list}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
          )
      }
       toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

      getScreenWidth = () => {
          let s = window.innerWidth;
        //   this.setState({width: s})
        console.log(s)
      }
    render() {

        console.log(this.state.width);
  const { classes } = this.props;

 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton  onClick={this.toggleDrawer('left', true)} className={classes.moreIcon} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.lgBreakpoints}>
            News
          </Typography>
          <span className={classes.spacer}></span>
          <Button className={classes.lgBreakpoints} color="inherit">Login</Button>
          <IconButton >
              <ShoppingCart/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {this.sideList()}
            {this.getScreenWidth()}
          </div>
        </SwipeableDrawer>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);