import { Grid } from '@material-ui/core';
import About from './components/about';
import Cdsud from './components/cdsud/cdsud';
import Contact from './components/contact/contact';
import Covid from './components/covid19/covid19';
import DV from './components/dv/dv';
import Education from './components/education';
import Employment from './components/employment';
import Family from './components/family';
import Food from './components/food';
import Footer from './components/footer/footer';
import GoogleMap from './components/googlemap';
import Header from './components/header';
import Healthcare from './components/healthcare';
import Homeless from './components/houseless';
import Housing from './components/housing/index';
import Main from './components/main';
import MentalHealth from './components/mentalhealth'
import Resources from './components/resources';
import RSO from './components/rso';
import Xpo from './components/transpo';
import Veterans from './components/veterans';
import Volunteer from './components/volunteer';
import SocialMediaFooter from './components/footer/social-media-footer';
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
    background: 'lightGrey',

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

          <Route path="/cdsud">
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Cdsud />
            </Grid>
          </Route>

          <Route path="/contact">
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Contact />
            </Grid>
          </Route>

          <Route path="/covid19">
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Covid />
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
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Employment />
            </Grid>
          </Route>



          <Route path="/family">
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Family />
            </Grid>
          </Route>

          <Route path="/food">
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Food />
            </Grid>
          </Route>


          <Route path="/houseless">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <GoogleMap />
              <Homeless />
            </Grid>
          </Route>

          <Route path="/healthcare">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Healthcare />
            </Grid>
          </Route>


          <Route path="/housing">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Housing />
            </Grid>
          </Route>

          <Route path="/mentalhealth">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <MentalHealth />
            </Grid>
          </Route>

          <Route path="/resources">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Resources />
            </Grid>
          </Route>

          <Route path="/rso">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <RSO />
            </Grid>
          </Route>

          <Route path="/transpo">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Xpo />
            </Grid>
          </Route>

          <Route path="/veterans">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Veterans />
            </Grid>
          </Route>

          <Route path="/volunteer">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Volunteer />
            </Grid>
          </Route>

          

          <Route path="/about">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
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
