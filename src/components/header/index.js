import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Navbar from '../navbar';
import xsBanner from '../../assets/CPTS300.jpg';
// import smBanner from '../../assets/CPTS600.jpg';
import newBanner from '../../assets/SPS3.jpg';
// import mdBanner from '../../assets/CPTS960.jpg';
// import lgBanner from '../../assets/CPTS1280.jpg';
// import xlBanner from '../../assets/CPTS1960.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#24562B',
  },
  container: {
    textAlign: 'right',
  },
  img: {


    [theme.breakpoints.only('xs')]: {

      width: '100%',
      height: '150px',
      alignContent: 'center',
    },
    [theme.breakpoints.only('sm')]: {

      height: '200px',
      width: '100%',
    },
    [theme.breakpoints.only('md')]: {
      display: 'block',
      height: '200px',
      width: '100%',
    },
    [theme.breakpoints.only('lg')]: {
      display: 'block',
      height: '200px',
      width: '100%',
    },
    [theme.breakpoints.only('xl')]: {
      display: 'block',
      height: '200px',
      paddingLeft: '10%',
      width: '100%',
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
      textAlign: 'right',
    },
    [theme.breakpoints.only('md')]: {
      color: 'white',
      fontSize: '30px',
      textAlign: 'right',
    },
    [theme.breakpoints.only('lg')]: {
      color: 'white',
      fontSize: '30px',
      textAlign: 'right',
    },
    [theme.breakpoints.only('xl')]: {
      color: 'white',
      display: 'block',
      fontSize: '30px',
      textAlign: 'right',
    }
  },
  navTypo: {
    color: 'white',
    display: 'block',
    textAlign: 'right',
    fontSize: '20px',
  }
}))

const Header = () => {
  const classes = useStyles();


  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        {/* <Hidden smUp>
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
        </Hidden> */}

      </Grid>
      <Grid item xs={12} sm={4}>
        <Hidden only={'sm'}>
      <a href="/"><img className={classes.img} src={newBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>
      </Hidden>
      <Hidden only={['xs', 'md', 'lg', 'xl']}>
      <a href="/"><img className={classes.img} src={xsBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img></a>
      </Hidden>
      </Grid>
      <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
        <Container>
          <Typography className={classes.typography}><b>Community Partnership for Transition Services</b></Typography>

          <Typography className={classes.navTypo}>Navigation</Typography>
        </Container>
        <Container className={classes.container}>
          <Navbar />
        </Container>
      </Grid>
    </Grid>
  );
}




export default Header