import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    background: 'linear-gradient(45deg, #707170 30%, #424242 90%)',
    [theme.breakpoints.only('xs')]: {
      float: 'left',
    },
  },
  button: {
    backgroundColor: 'white',
    border: 'solid 1px',
  },
  icon: {
    alignContent: 'center',
  },
  link: {
    color: 'black',
    alignContent: 'center',
  },
  typography: {
    textAlign: 'center',
  },
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      
      <Grid item xs={2}>
        
        
      </Grid>
      <Grid item xs={8}>
        <Typography className={classes.typography}>The information provided on this website does not, and is not intended to, constitute legal advice; instead, all information, content, and materials available on this site are for general informational purposes only.</Typography>
        
          
        
      </Grid>
      <Grid item xs={2}>
        
        
      </Grid>

      <Grid item xs={12}>
        <Typography className={classes.typography}>Web Design by Garrett Cintron</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
