import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 'solid 1px',
  }
}))

const Aside = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12}>
        <Typography >Quick Links</Typography>
        <List>
          <Typography>Residential Services</Typography>
          <List>
            <ListItem><a href="https://www.commerce.wa.gov/serving-communities/homelessness/">Emergency Rental Assistance</a></ListItem>
            <ListItem>b</ListItem>
            <ListItem>c</ListItem>
          </List>
        </List>
        <Grid item xs={12}>
          <List>
            <Typography>Employment Services</Typography>
            <List>
              <ListItem><a href="https://www.peopleready.com/locations/">Labor Ready Locations</a></ListItem>
              <ListItem>b</ListItem>
              <ListItem>c</ListItem>
            </List>
          </List>
        </Grid>
        <Grid item xs={12}>
          <List>
            <Typography>Family Services</Typography>
            <List>
              <ListItem><a href="https://coronavirus.wa.gov/information-for/you-and-your-family/food-assistance">Food Assistance</a></ListItem>
              <ListItem>b</ListItem>
              <ListItem>c</ListItem>
            </List>
          </List>
        </Grid>
        <Grid item xs={12}>
          <List>
            <Typography>Education Services</Typography>
            <List>
              <ListItem><a href="https://spscc.edu/policy/stsv200">SPSCC Enrollment Services</a></ListItem>
              <ListItem><a href="https://www.evergreen.edu/directory/offices/enrollment-services">Evergreen State College Enrollment Services</a></ListItem>
              <ListItem>c</ListItem>
            </List>
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Aside