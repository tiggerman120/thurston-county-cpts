import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Container, Grid, IconButton, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    background: '#ECEAEA',
  },
  icon: {
    textAlign: 'center',
  },
  link: {
    color: 'black',

  },
  typography: {
    textAlign: 'center',
  },
}))

const SocialMediaFooter = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={4}>

      </Grid>
      <Grid item xs={4}>
        <Typography className={classes.typography}>Follow Us</Typography>
        <Container>
          <IconButton className={classes.icon}> <a href="https://twitter.com/spscpts?lang=en" className={classes.link} target="_blank" rel="noreferrer"><TwitterIcon /><Typography>Twitter</Typography></a></IconButton>
          <IconButton > <a href="https://www.facebook.com/spscpts/" className={classes.link} target="_blank" rel="noreferrer"><FacebookIcon /><Typography>Facebook</Typography></a></IconButton>
        </Container>
      </Grid>
      <Grid item xs={4}>

      </Grid>
    </Grid>
  )
}

export default SocialMediaFooter;