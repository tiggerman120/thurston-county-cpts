import { Grid } from '@material-ui/core';
import About from './components/contact/contact';

import Cdsud from './components/cdsud/cdsud';
import Covid from './components/covid19/covid19';
import DV from './components/dv/dv';
import Education from './components/education/education';
import Employment from './components/employment/employment';
import Family from './components/family/family';
import Footer from './components/footer/footer';
import GoogleMap from './components/googlemap/googlemap';
import Header from './components/header/header';
import Homeless from './components/houseless/houseless';
import Housing from './components/housing/housing';
import Main from './components/main/main';
import MentalHealth from './components/mentalhealth/mentalhealth'
// import Navbars from './components/navbar/navbar';

import RSO from './components/rso/rso';
import Xpoandfood from './components/transpofood/transpofood';
import Veterans from './components/veterans/veterans';
import Volunteer from './components/volunteer/volunteer';
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
              <GoogleMap />
              <br />
              <Main />
            </Grid>
          </Route>

          <Route path="/cdsud">
            <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Cdsud />
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

          <Route path="/houseless">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Homeless />
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

          <Route path="/rso">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <RSO />
            </Grid>
          </Route>

          <Route path="/transpofood">
          <Grid item xs={12} sm={12} md={12} className={classes.home}>
              <Xpoandfood />
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
