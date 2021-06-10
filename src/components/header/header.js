import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Navbar from '../navbar/navbar';
// import Logo from '../../assets/cptsfbjpg.jpg';
import Banner from '../../assets/spsfbbannerjpg.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    background: 'linear-gradient(45deg, #483eeb 30%, #030342 90%)',
  },
  img: {

    
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '100%',
      height: '150px',
      alignContent: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      display: 'block',
      width: '100%',
      height: '200px',
    },
    [theme.breakpoints.only('md')]: {
      display: 'block',
      width: '100%',
      height: '200px',
    },
    [theme.breakpoints.only('lg')]: {
      display: 'block',
      width: '100%',
      height: '200px',
    },
    [theme.breakpoints.only('xl')]: {
      display: 'block',
      width: '100%',
      height: '200px',
    }
  },
  typography: {
    [theme.breakpoints.only('xs')]: {
      color: 'white',
      fontSize: '20px',

    },
    [theme.breakpoints.only('sm')]: {
      color: 'white',
      fontSize: '30px',
    },
    [theme.breakpoints.only('md')]: {
      color: 'white',
      fontSize: '30px',
    },
    [theme.breakpoints.only('lg')]: {
      color: 'white',
      fontSize: '30px',
    },
    [theme.breakpoints.only('xl')]: {
      color: 'white',
      fontSize: '30px',
    }
  },
  navTypo: {
    color: 'white',
    fontSize: '20px',
  }
}))

const Header = () => {

  const classes = useStyles();


  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <a href="#top"><img className={classes.img} src={Banner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>

      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.typography}>Community Partnership for Transition Services</Typography>
        <br />
        <Typography className={classes.navTypo}>Navigation</Typography>
        <Navbar />
      </Grid>
    </Grid>
  )
}

export default Header