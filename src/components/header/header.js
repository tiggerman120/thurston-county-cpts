import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
  },
  img: {
    
    float: 'left',
    display: 'inline-block',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '95vw',
      height: '150px',
    },
  },
  typography: {
    display: 'block',
    textAlign: 'center',
    color: 'white',
  },
}))

const Header = () => {

  const classes = useStyles();


  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
      <a href="#top"><img className={classes.img} src="https://via.placeholder.com/150x150" alt="" ></img></a>
        <Typography variant="h2" color="textPrimary" className={classes.typography}>Community Partnership for Transition Services</Typography>
      </Grid>
    </Grid>
  )
}

export default Header