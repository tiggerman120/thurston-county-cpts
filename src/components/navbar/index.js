import React, { useCallback, useEffect, useState, useRef } from 'react';

import { Button, Container, Divider, Grid, List, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',

  },
  ddm: {
    position: 'absolute',
    top: '100%',
    backgroundColor: '#fff',
    zIndex: '2',
  },
  ddmcont: {
    display: 'inline-block',
    position: 'relative',
  },
  divider: {
    display: 'inline-block',
    alignContent: 'center',
  },
  form: {
    display: 'inline-block',
    float: 'right',
  },
  link: {
    color: 'white',
  },
  listButton: {
    color: 'black',
  },
  typography: {

  },
}))

const Navbars = () => {
  const classes = useStyles();
  

  return (
    <Grid container spacing={3} justify="center" className={classes.root}>
      <Grid item xs={12} >
        <Button className={classes.button} ><Link to="/" className={classes.link}>Home</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />


        {/* <Button className={classes.button} ><Link to="cdsud" className={classes.link}>CD/SUD</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="covid19" className={classes.link}>Covid 19</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="dv" className={classes.link}>Domestic Violence</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="education" className={classes.link}>Education</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="employment" className={classes.link}>Employment</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="family" className={classes.link}>Family</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="houseless" className={classes.link}>Houseless</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="mentalhealth" className={classes.link}>Mental health</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="rso" className={classes.link}>RSO</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="transpofood" className={classes.link}>Transportation & Food</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="veterans" className={classes.link}>Veterans</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="volunteer" className={classes.link}>Volunteer & Internship Opportunities</Link></Button> */}
        <Divider className={classes.divider} orientation="vertical" flexItem />

        <Button className={classes.button} ><Link to="about" className={classes.link}>About Us</Link></Button>

        <Button className={classes.button} ><Link to="contact" className={classes.link}>Contact Us</Link></Button>

        
      </Grid>
    </Grid>
  )
}

export default Navbars;
