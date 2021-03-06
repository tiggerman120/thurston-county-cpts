import React, { useState } from 'react';
import { Button, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    display: 'block',
  },
}))

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const classes = useStyles();

  const onClickHandler = (e) => {
    let res = e.target.innerText.toLowerCase()
    console.log(res)
    setIsClicked(true);
    console.log(isClicked)
  }
  return (
    <Grid container spacing={3} justify="center" alignItems="center" className={classes.root}>
      <Button onClick={onClickHandler}><Link to="/">Home</Link></Button>
      <Divider orientation="vertical" flexItem />
      <Button onClick={onClickHandler}><Link to="residential">Residential</Link></Button>
      <Divider orientation="vertical" flexItem />
      <Button onClick={onClickHandler}><Link to="employment">Employment</Link></Button>
      <Divider orientation="vertical" flexItem />
      <Button onClick={onClickHandler}><Link to="family">Family</Link></Button>
      <Divider orientation="vertical" flexItem />
      <Button onClick={onClickHandler}><Link to="education">Education</Link></Button>
      <Divider orientation="vertical" flexItem />
      <Button onClick={onClickHandler}><Link to="about">About</Link></Button>
    </Grid>
  )
}

export default Navbar;
