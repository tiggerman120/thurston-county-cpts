import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
  },
  img: {
    position: 'relative',
    display: 'inline-block',
  },
  typography: {
    textAlign: 'center',
  },
}))

const Header = () => {

  const classes = useStyles();


  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={1}>
      <a href="#top"><img className={classes.img} src="https://via.placeholder.com/150x150" alt="" ></img></a>
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h2" color="textPrimary" className={classes.typography}>Community Partnership for Transition Services</Typography>
      </Grid>
    </Grid>
  )
}

export default Header