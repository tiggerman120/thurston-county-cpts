import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 'solid 1px',
    alignContent: 'center',
  },
  typography: {
   textAlign: 'center',
  },
}))

const Header = () => {

  const classes = useStyles();


  return (
    <Grid container spacing={3} justify="center"  className={classes.root}>
      <Grid item xs={12}>
        <img src="../../assets/cpts-logo.jpg" alt="" ></img>
        
        <Typography variant="h2" color="textPrimary" className={classes.typography}>Community Partnership for Transition Services</Typography>
      </Grid>
    </Grid>
  )
}

export default Header