import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from '../components/elements/Image';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { buttonTheme } from '../components/MUIOverrides';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Chip from '@mui/material/Chip';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  return (
    
    <div className="header-box">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Link to="/">
            <Image
              src={require('../assets/images/alpha-health-logo-5.png')}
              alt="Open"
              width={150}
              height={40} />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} className="header-nav-text">
            <Grid xs={3}>Home</Grid>
            <Grid xs={3}>Research</Grid>
            <Grid xs={3}>Treatments</Grid>
            <Grid xs={3}>About Us</Grid>
          </Grid>
        </Grid>
        <Grid item xs={3} className="header-button-box">
          <Chip label="John Smith" color="success"/>
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
