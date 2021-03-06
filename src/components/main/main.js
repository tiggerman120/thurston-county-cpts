import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 'solid 1px',
  }
}))

const Main = () => {
const classes = useStyles();

  return (
    <Grid container spacing={3} justify="right" alignItems="right" className={classes.root}>
      
        <Grid item xs={12}>
          <Typography>main page content goes here</Typography>
          <List>
            <ListItem>a</ListItem>
            <ListItem>b</ListItem>
            <ListItem>c</ListItem>
          </List>
        </Grid>
      
    </Grid>
  )
}

export default Main