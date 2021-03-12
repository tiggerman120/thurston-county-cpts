import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button, Grid, IconButton, List, ListItem, Typography } from '@material-ui/core';
import Form from 'react-bootstrap/Form';


const useStyles = makeStyles((theme) => ({
  root: {
    flexgrow: 1,
    background: 'linear-gradient(45deg, #707170 30%, #424242 90%)',
  },
  button: {
    backgroundColor: 'white',
    border: 'solid 1px',
  },
  link: {
    color: 'black',
  },
  typography: {
    textAlign: 'center',
  },
}))

const Footer = () => {
  const classes = useStyles();

  const onClickHandler = () => {

  }

  const donateHandler = () => {

  }
  const volunteerHandler = () => {

  }

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={3}>

      </Grid>
      <Grid item xs={3}>
        <Typography>Follow Us</Typography>
        <List>
          <ListItem><IconButton > <a href="https://instagram.com" className={classes.link}><InstagramIcon /></a></IconButton></ListItem>
          <ListItem><IconButton > <a href="https://facebook.com" className={classes.link}><FacebookIcon /></a></IconButton></ListItem>
          <ListItem><IconButton > <a href="https://twitter.com" className={classes.link}><TwitterIcon /></a></IconButton></ListItem>

        </List>
      </Grid>
      <Grid item xs={3}>
        <Typography>Get Involved</Typography>
        <List>
          <ListItem><Button className={classes.button} onClick={() => donateHandler()}>Donate Now</Button></ListItem>
          <ListItem><Button className={classes.button} onClick={() => volunteerHandler()}>Volunteer</Button></ListItem>
          <ListItem><Button className={classes.button} onClick={() => onClickHandler()}>Become an Advocate</Button></ListItem>
        </List>
      </Grid>
      <Grid item xs={3}>
        <Typography>Get Involved</Typography>
        <Form >
          <Form.Control type="text" placeholder="Enter email address"></Form.Control>
          <Button className={classes.button}><ArrowRightIcon /></Button><br />
          <Form.Text>We'll never share your email with anyone else</Form.Text>

        </Form>
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.typography}>Web Design by Garrett Cintron</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
