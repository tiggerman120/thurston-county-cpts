import React, { useState } from 'react';
import { Button, Divider, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #707170 30%, #424242 90%)',
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

const Navbars = () => {
  const [isClicked, setIsClicked] = useState(false);
  const classes = useStyles();

  const onClickHandler = (e) => {
    let res = e.target.innerText.toLowerCase()
    console.log(res)
    setIsClicked(true);
    console.log(isClicked)
  }
  return (
    <Grid container spacing={3} justify="center" className={classes.root}>
      <Grid item xs={12} >
        {/* <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    
  </Navbar> */}

        <Button className={classes.button} onClick={onClickHandler}><Link to="/" className={classes.link}>Home</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Button className={classes.button} onClick={onClickHandler}><Link to="residential" className={classes.link}>Residential</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Button className={classes.button} onClick={onClickHandler}><Link to="employment" className={classes.link}>Employment</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Button className={classes.button} onClick={onClickHandler}><Link to="family" className={classes.link}>Family</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Button className={classes.button} onClick={onClickHandler}><Link to="education" className={classes.link}>Education</Link></Button>
        <Divider className={classes.divider} orientation="vertical" flexItem />
        <Button className={classes.button} onClick={onClickHandler}><Link to="about" className={classes.link}>Contact Us</Link></Button>
        <Form inline className={classes.form}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button className={classes.button} variant="outlined">Search</Button>
    </Form>
      </Grid>
    </Grid>
  )
}

export default Navbars;
