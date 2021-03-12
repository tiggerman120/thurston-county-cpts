import { Grid } from '@material-ui/core';
import About from './components/contact/contact';
import Aside from './components/aside/aside';
import Education from './components/education/education';
import Employment from './components/employment/employment';
import Family from './components/family/family';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Navbars from './components/navbar/navbar';
import Residential from './components/residential/residential';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #358302 30%, #1D4701 90%)',

  },
  header: {
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 2,
    background: 'linear-gradient(45deg, #358302 30%, #1D4701 90%)',
  },
  navbar: {

    position: 'sticky',
    top: 176,
    zIndex: 2,

    [theme.breakpoints.only('xs')]: {
      top: 0
    },
    [theme.breakpoints.only('sm')]: {
      top: 0,
    },
  },
  aside: {
    backgroundColor: 'lightGrey',
  },
  home: {
    backgroundColor: 'lightGrey',
  },
  residential: {
    backgroundColor: 'lightGrey',
  },
  employment: {
    backgroundColor: 'lightGrey',
  },
  family: {
    backgroundColor: 'lightgrey',
  },
  education: {
    backgroundColor: 'lightgrey',
  },
  about: {
    backgroundColor: 'lightGrey',
  }

}))

function App() {

  const classes = useStyles();
  return (

    <Grid container spacing={3} className={classes.root}>
      <Router>
        <Hidden only={['xs', 'sm']}>
          <Grid item xs={12} className={classes.header}>
            <Header />
          </Grid>
        </Hidden>


        <Grid item xs={12} className={classes.navbar}>
          <Navbars />
        </Grid>


        <Grid item xs={12} sm={2} className={classes.aside}>
          <Aside />
        </Grid>

        <Switch>
          <Route exact path="/">
            <Grid item xs={12} sm={10} className={classes.home}>
              <Main />
            </Grid>
          </Route>

          <Route path="/residential">
            <Grid item xs={12} sm={10} className={classes.residential}>
              <Residential />
            </Grid>
          </Route>

          <Route path="/employment">
            <Grid item xs={12} sm={10} className={classes.employment}>
              <Employment />
            </Grid>
          </Route>

          <Route path="/family">
            <Grid item xs={12} sm={10} className={classes.family}>
              <Family />
            </Grid>
          </Route>

          <Route path="/education">
            <Grid item xs={12} sm={10} className={classes.education}>
              <Education />
            </Grid>
          </Route>

          <Route path="/about">
            <Grid item xs={12} sm={10} className={classes.about}>
              <About />
            </Grid>
          </Route>
        </Switch>
        
        <Hidden only="xs">
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Hidden>
      </Router>
    </Grid>
  );
}

export default App;
