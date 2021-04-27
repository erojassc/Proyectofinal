import './Header.css';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import  HomeIcon from '@material-ui/icons/Home';
import  InfoIcon from '@material-ui/icons/Info';
import  AddIcon from '@material-ui/icons/AddCircle';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
    },
});

function ListItemLink(props) {
    const { icon, primary, to } = props;
  
    const renderLink = React.useMemo(
      () => React.forwardRef((itemProps, ref) => 
      <RouterLink to={to} ref={ref} {...itemProps} />),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
  
  ListItemLink.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  };
  
function Header(props){
    const classes = useStyles();
    return (
        <nav>
            <div className={classes.root}>
                <Paper elevation={0}>
                    <List aria-label="main mailbox folders">
                        <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
                        <ListItemLink to="/about/:edad" primary="About"  icon={<InfoIcon />}/>
                        <ListItemLink to="/Create" primary="Create" icon={<AddIcon />} />
                    </List> 
                </Paper>
            </div>
        </nav>
    );
}

export default Header;