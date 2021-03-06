import { Container, Grid } from '@material-ui/core';
import About from './components/about/about';
import Aside from './components/aside/aside';
import Education from './components/education/education';
import Employment from './components/employment/employment';
import Family from './components/family/family';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main/main';
import Navbar from './components/navbar/navbar';
import Residential from './components/residential/residential';
import { makeStyles } from '@material-ui/core/styles';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'beige',
  },
  residential: {
    border: 'solid 1px',
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Router>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} justify="flex-end">
        <Navbar />
        </Grid>
        <Switch>
          {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
          <Route path="/residential">
            <Grid item xs={3}>
              <Aside />
            </Grid>
            <Grid item xs={9} className={classes.residential}>
              <Residential />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Route>

          {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
          <Route path="/employment">
            <Grid item xs={3}>
              <Aside />
            </Grid>
            <Grid item xs={9} className={classes.residential}>
              <Employment />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Route>
          <Route path="/family">
          <Grid item xs={3}>
              <Aside />
            </Grid>
            <Grid item xs={9} className={classes.residential}>
              <Family />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Route>
          <Route path="/education">
          <Grid item xs={3}>
              <Aside />
            </Grid>
            <Grid item xs={9} className={classes.residential}>
              <Education />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Route>
          <Route path="/about">
          <Grid item xs={3}>
              <Aside />
            </Grid>
            <Grid item xs={9} className={classes.residential}>
              <About />
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Route>

          {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
          <Route path="/">
            <Grid item xs={3} justify="left" alignItems="left">
              <Aside />
            </Grid>
            <Grid item xs={9} justify="right" alignItems="right">
              <Main />
            </Grid>
            <Grid item xs={12} justify="right" alignItems="right">
              <Footer />
            </Grid>
          </Route>
        </Switch>
      </Router>
    </Grid>
  );
}

export default App;
