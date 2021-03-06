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
      <Grid item >
        <Typography >Quick Links</Typography>
        <List>
          <List>
            <ListItem><Typography>Residential Services</Typography></ListItem>
            <List>
              <ListItem>a</ListItem>
              <ListItem>b</ListItem>
              <ListItem>c</ListItem>
            </List>
          </List>
          <Typography>Employment Services</Typography>
          <ListItem><a href="https://www.peopleready.com/locations/">Labor Ready Locations</a></ListItem>
          <ListItem>c</ListItem>
          <ListItem>c</ListItem>
          <Typography>Family Services</Typography>
          <ListItem>c</ListItem>
          <ListItem>c</ListItem>
          <ListItem>c</ListItem>
          <Typography>Education Services</Typography>
          <ListItem>c</ListItem>
          <ListItem>c</ListItem>
          <ListItem>c</ListItem>

        </List>
      </Grid>
    </Grid>
  )
}

export default Aside