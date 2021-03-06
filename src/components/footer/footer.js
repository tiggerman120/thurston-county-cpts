import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    border: 'solid 1px',
  }
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography>CPTS data goes here</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>Web Design by Garrett Cintron</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
