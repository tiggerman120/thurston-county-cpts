import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, Typography } from '@material-ui/core';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import HouseIcon from '@material-ui/icons/House';
import SchoolIcon from '@material-ui/icons/School';
import WcIcon from '@material-ui/icons/Wc';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
      
        <Typography className={classes.typography}>Quick Links</Typography>
        <List>
        <Typography><HouseIcon /> Residential Services</Typography>
          
          <List>
            <ListItem><a href="https://www.commerce.wa.gov/serving-communities/homelessness/">Emergency Rental Assistance</a></ListItem>
          </List>
        </List>
        <Grid item xs={12}>
          <List>
            <Typography><EmojiTransportationIcon /> Employment Services</Typography>
            
            <List>
              <ListItem><a href="https://www.peopleready.com/locations/">Labor Ready Locations</a></ListItem>
            </List>
          </List>
        </Grid>
        <Grid item xs={12}>
          <List>
            <Typography> <WcIcon /> Family Services</Typography>
            
            <List>
              <ListItem><a href="https://coronavirus.wa.gov/information-for/you-and-your-family/food-assistance">Food Assistance</a></ListItem>
              <ListItem><a href="https://www.northwestharvest.org/our-work/hunger-response-network/?">Food Bank Locations</a></ListItem>
            </List>
          </List>
        </Grid>
        <Grid item xs={12}>
          <List>
            <Typography><SchoolIcon /> Education Services</Typography>
            
            <List>
              <ListItem><a href="https://spscc.edu/policy/stsv200">SPSCC Enrollment Services</a></ListItem>
              <ListItem><a href="https://www.evergreen.edu/directory/offices/enrollment-services">Evergreen State College Enrollment Services</a></ListItem>
            </List>
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Aside