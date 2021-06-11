import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Navbar from '../navbar/navbar';
import xsBanner from '../../assets/CPTS300.jpg';
import smBanner from '../../assets/CPTS600.jpg';
import mdBanner from '../../assets/CPTS960.jpg';
import lgBanner from '../../assets/CPTS1280.jpg';
//import xlBanner from '../../assets/CPTS1960.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    background: 'linear-gradient(45deg, #483eeb 30%, #030342 90%)',
  },
  img: {


    [theme.breakpoints.only('xs')]: {

      width: '100%',
      height: '150px',
      alignContent: 'center',
    },
    [theme.breakpoints.only('sm')]: {

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
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Hidden smUp>
          <a href="#top"><img className={classes.img} src={xsBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>
        </Hidden>
        <Hidden only={['xs', 'md', 'lg', 'xl']}>
          <a href="#top"><img className={classes.img} src={smBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>
        </Hidden>
        <Hidden only={['xs', 'sm', 'lg', 'xl']}>
          <a href="#top"><img className={classes.img} src={mdBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>
        </Hidden>
        <Hidden only={['xs', 'sm', 'md']}>
          <a href="#top"><img className={classes.img} src={lgBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>
        </Hidden>
        {/* <Hidden only={['xs', 'sm', 'md', 'lg']}>
        <a href="#top"><img className={classes.img} src={xlBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>
        </Hidden> */}
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography className={classes.typography}>Community Partnership for Transition Services</Typography>
        <br />
        <Typography className={classes.navTypo}>Navigation</Typography>
        <Navbar />
      </Grid>
    </Grid>
  );
}




export default Header