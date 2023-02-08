import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import Image from '../elements/Image';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

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


  const nav = useRef(null);
  const hamburger = useRef(null);

  const openMenu = () => {
    alert(1);
  }

  const closeMenu = () => {
    alert("1");
  }


  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
  );

  const headerClasses = classNames(
    'header-box',
  )

  

  return (
    
    <div className="header-box">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Link to="/">
            <Image
              src={require('../../assets/images/alpha-health-logo-5.png')}
              alt="Open"
              width={150}
              height={40} />
          </Link>
        </Grid>
        <Grid item xs={6} className="header-nav-box">
          <Grid container spacing={2} className="header-nav-text">
            <Grid xs={3}>Home</Grid>
            <Grid xs={3}>Research</Grid>
            <Grid xs={3}>Treatments</Grid>
            <Grid xs={3}>About Us</Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          buttons
        </Grid>
      </Grid>
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
