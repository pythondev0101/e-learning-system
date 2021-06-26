import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import './AppBanner.css';
import { requirePropFactory } from '@material-ui/core';


const menuIcon = require('../assets/icons/menu_icon.png');

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Services', 'Testimonies', 'Branches'].map((text, index) => (
          <ListItem button key={text}>
              <h4>{text}</h4>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className='drawer-container'>
      {['Drawer'].map((anchor) => (
        <React.Fragment>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={menuIcon.default} />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
            <div className='drawer-content'>
                 <h1>Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis debitis 
                    minus distinctio provident blanditiis deleniti nesciunt? Adipisci 
                    quas sed laudantium, totam dolorem inventore culpa accusamus vitae 
                    obcaecati repellendus necessitatibus?
                </p>
                <button>Pre Register</button>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
