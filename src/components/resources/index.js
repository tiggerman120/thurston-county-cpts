import React from 'react';
import {  Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    display: 'inline-block',
    textAlign: 'center',
    color: 'white',
    
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
  typography: {
    
  },
}))

const Resources = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Container className={classes.link}>

      </Container>
    </Grid>
  )
}

export default Resources