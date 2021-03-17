import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, List, ListItem, Typography } from '@material-ui/core';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import HouseIcon from '@material-ui/icons/House';
import SchoolIcon from '@material-ui/icons/School';
import WcIcon from '@material-ui/icons/Wc';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    color: 'black',
  },
  typography: {
    color: 'white',
  },
  listItem: {
    color: 'white',
  },
}))

const Aside = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>


        <List>
          <Typography><HouseIcon /> Residential Services</Typography>
          <List>
            <ListItem><Button><a href="https://www.commerce.wa.gov/serving-communities/homelessness/" className={classes.button}>Rental Assistance</a></Button></ListItem>
          </List>

        </List>
        <Grid item xs={12}>
          <List>
            <Typography><EmojiTransportationIcon /> Employment Services</Typography>
            <List>
              <ListItem><Button><a href="https://www.peopleready.com/locations/" className={classes.button}>Labor Ready Locations</a></Button></ListItem>
            </List>
          </List>
        </Grid>
        <Grid item xs={12}>
          <List>
            <Typography> <WcIcon /> Family Services</Typography>

            <List>
              <ListItem><Button><a href="https://coronavirus.wa.gov/information-for/you-and-your-family/food-assistance" className={classes.button}>Food Assistance</a></Button></ListItem>
              <ListItem><Button><a href="https://www.northwestharvest.org/our-work/hunger-response-network/?" className={classes.button}>Food Bank Locations</a></Button></ListItem>
            </List>
          </List>
        </Grid>
        <Grid item xs={12}>
          <List>
            <Typography><SchoolIcon /> Education Services</Typography>

            <List>
              <ListItem><Button><a href="https://spscc.edu/policy/stsv200" className={classes.button}>SPSCC Enrollment Services</a></Button></ListItem>
              <ListItem><Button><a href="https://www.evergreen.edu/directory/offices/enrollment-services" className={classes.button}>Evergreen State College Enrollment Services</a></Button></ListItem>
            </List>
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Aside