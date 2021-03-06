import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 'solid 1px',
  },
  typography: {
    alignItems: 'center',
  },
}))

const Header = () => {

  const classes = useStyles();


  return (
    <Grid container spacing={3} alignItems="center" className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2"  className={classes.typography}>CPTS Resource Page</Typography>
      </Grid>
    </Grid>
  )
}

export default Header