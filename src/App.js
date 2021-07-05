import { Grid } from '@material-ui/core';
import About from './components/contact/contact';
import Aside from './components/aside/aside';
import DV from './components/dv/dv'
import Education from './components/education/education';
import Employment from './components/employment/employment';
import Family from './components/family/family';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
// import Navbars from './components/navbar/navbar';
import Residential from './components/residential/residential';
import SocialMediaFooter from './components/footer/social-media-footer'
import { makeStyles } from '@material-ui/core/styles';
// import Hidden from '@material-ui/core/Hidden';

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
  },
  navbar: {
    textAlign: 'center',


    [theme.breakpoints.only('xs')]: {
      top: 0
    },
    [theme.breakpoints.only('sm')]: {
      top: 0,
    },
  },


}))

function App() {

  const classes = useStyles();
  return (

    <Grid container spacing={3} className={classes.root}>
      <Router>
        
          <Grid item xs={12} className={classes.header}>
            <Header />
          </Grid>
        


        {/* <Grid item xs={12} className={classes.navbar}>
          <Navbars />
        </Grid> */}




        <Switch>
          <Route exact path="/">
            
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Main />
            </Grid>
          </Route>

          <Route path="/dv">
            
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <DV />
            </Grid>
          </Route>

          <Route path="/education">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Education />
            </Grid>
          </Route>

          <Route path="/employment">
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={4} sm={1} className={classes.aside}>
              <Aside />
            </Grid>
            <Grid item xs={4} sm={6} className={classes.home}>
              <Employment />
            </Grid>
          </Route>



          <Route path="/family">
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={4} sm={1} className={classes.aside}>
              <Aside />
            </Grid>
            <Grid item xs={4} sm={6} className={classes.home}>
              <Family />
            </Grid>
          </Route>




          <Route path="/residential">
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={4} sm={1} className={classes.aside}>
              <Aside />
            </Grid>
            <Grid item xs={4} sm={6} className={classes.residential}>
              <Residential />
            </Grid>
          </Route>

          <Route path="/about">
            <Grid item xs={2}>

            </Grid>
            <Grid item xs={4} sm={1} className={classes.aside}>
              <Aside />
            </Grid>
            <Grid item xs={4} sm={6} className={classes.home}>
              <About />
            </Grid>
          </Route>
        </Switch>

        
          <Grid item xs={12}>
            <SocialMediaFooter />
            <Footer />
          </Grid>
        
      </Router>
    </Grid >
  );
}

export default App;
