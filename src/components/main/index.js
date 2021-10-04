import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

import GoogleMap from '../googlemap';

import HomeIcon from '@material-ui/icons/Home';
import AppleIcon from '@material-ui/icons/Apple';
import PeopleIcon from '@material-ui/icons/People';
import TimeToLeaveIcon from '@material-ui/icons/TimeToLeave';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'space-between',
    backgroundColor: '#ECEAEA',
    [theme.breakpoints.only('xs')]: {
      alignContent: 'center',
    },
  },
  button: {
    width: '100%',
    height: '20%',
  },
  card: {
    [theme.breakpoints.only('xs')]: {
      height: '200px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      height: '200px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('md')]: {
      height: '200px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      height: '300px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      height: '300px',
      textAlign: 'center',
    },
  },
  container: {
    border: '1px solid black',
    height: '20%',
  },
  smIcon: {
    alignContent: 'center',

  },
  img: {
    width: '100%',
    height: '300px',
    [theme.breakpoints.only('xs')]: {
      width: '480px',

    },
  },
  linkContainer: {
    border: '1px solid black',
    width: '50%',
    height: '50%',
    display: 'inline-block',
    textAlign: 'center',
  },
  list: {
    textAlign: 'left',

  },
  topCard: {
    width: '30%',
    height: '400px',
    display: 'inline-block',
    marginLeft: '15px',

    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '480px',
      margin: 'auto',
    }
  },
  topCardRight: {
    float: 'right',
    width: '30%',
    height: '400px',
    display: 'inline-block',
    marginLeft: '15px',
  },
  bottomCardRight: {
    float: 'right',
    width: '30%',
    height: '400px',
    display: 'inline-block',
    marginLeft: '15px',
  },
  typography: {
    textAlign: 'center',
  },
  resourcesTypo: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  spacer: {
    height: '10%',
  }
}))

const Main = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Hidden smDown>
        <Grid item xs={4}>
          <Container>
            <Button className={classes.button}><Container className={classes.container}>
              Thurston County Resources
            </Container></Button>
            <Container className={classes.spacer}>

            </Container>
            <Button className={classes.button}><Container className={classes.container}>
              Mason County Resources(Coming soon)
            </Container></Button>

            <Container className={classes.spacer}>

            </Container>

            <Button className={classes.button}><Container className={classes.container}>
              Lewis County Resources(Coming soon)
            </Container></Button>
          </Container>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={2}>

        </Grid>
      </Hidden>

      <Grid item xs={8}>


        <Typography variant="h5">Helping rebuild your life after incarceration</Typography>

        <Typography>After being in prison or jail, rebuilding your life can be hard. Everyone has different
          needs and it’s not easy finding the help you need. We’re here to help.
        </Typography>

        <br />

        <Typography>This website is to help connect you to resources and services that help make your
          journey easier and more successful. In the county tabs to the left, you’ll find many
          resources and services that help you with:
        </Typography>

      </Grid>

      <Grid item xs={4}>

        <GoogleMap />

      </Grid>

      

      <Grid item xs={4}>
        <Hidden mdUp>
          <a href="/housing" >
            <Container>
              <HomeIcon style={{ fontSize: '50px' }} />
              <Typography >Housing</Typography>
            </Container>
          </a>

          <a href="/food">
            <Container>
              <AppleIcon style={{ fontSize: '50px' }} />
              <Typography >Food</Typography>
            </Container>
          </a>
          <a href="/family">
            <Container>
              <PeopleIcon style={{ fontSize: '50px' }} />
              <Typography >Family Support</Typography>
            </Container>
          </a>

          <a href="/transpo">
            <Container>
              <TimeToLeaveIcon style={{ fontSize: '50px' }} />
              <Typography >Transportation</Typography>
            </Container>
          </a>
        </Hidden>

        <Hidden smDown>
          
            <a href="/housing">
              <Container className={classes.linkContainer}>
                <HomeIcon style={{ fontSize: '80px' }} />
                <Typography >Housing</Typography>
              </Container>
            </a>

            <a href="/food">
              <Container className={classes.linkContainer}>
                <AppleIcon style={{ fontSize: '80px' }} />
                <Typography >Food</Typography>
              </Container>
            </a>
            <a href="/family">
              <Container className={classes.linkContainer}>
                <PeopleIcon style={{ fontSize: '80px' }} />
                <Typography >Family</Typography>
              </Container>
            </a>

            <a href="/transpo">
              <Container className={classes.linkContainer}>
                <TimeToLeaveIcon style={{ fontSize: '80px' }} />
                <Typography >Transportation</Typography>
              </Container>
            </a>
          
        </Hidden>

      </Grid>

      <Grid item xs={4}>
        <Hidden mdUp>

          <a href="/education">
            <Container>
              <SchoolIcon style={{ fontSize: '50px' }} />
              <Typography>Education</Typography>
            </Container>
          </a>

          <a href="/employment">
            <Container>
              <BusinessCenterIcon style={{ fontSize: '50px' }} />
              <Typography >Employment</Typography>
            </Container>
          </a>

          <a href="/mentalhealth">
            <Container>
              <SentimentSatisfiedAltIcon style={{ fontSize: '50px' }} />
              <Typography>Mental Health</Typography>
            </Container>
          </a>

          <a href="/healthcare">
            <Container>
              <LocalHospitalIcon style={{ fontSize: '50px' }} />
              <Typography>Healthcare</Typography>
            </Container>
          </a>

        </Hidden>

        <Hidden smDown>
          
            <a href="/education">
              <Container className={classes.linkContainer}>
                <SchoolIcon style={{ fontSize: '80px' }} />
                <Typography>Education</Typography>
              </Container>
            </a>

            <a href="/employment">
              <Container className={classes.linkContainer}>
                <BusinessCenterIcon style={{ fontSize: '80px' }} />
                <Typography >Employment</Typography>
              </Container>
            </a>

            <a href="/mentalhealth">
              <Container className={classes.linkContainer}>
                <SentimentSatisfiedAltIcon style={{ fontSize: '80px' }} />
                <Typography>Psychiatric </Typography>
              </Container>
            </a>

              <a href="/healthcare">
            <Container className={classes.linkContainer}>
                <LocalHospitalIcon style={{ fontSize: '80px' }} />
                <Typography>Healthcare</Typography>
            </Container>
              </a>
          
        </Hidden>

      </Grid>

      <Grid item xs={2}>

      </Grid>



      <Container>
        <a href="#top"><Typography className={classes.typography}>Top of page</Typography></a>

      </Container>

      {/* </Grid> */}
    </Grid>
  )
}

export default Main