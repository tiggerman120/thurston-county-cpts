import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, ListItem, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.only('xs')]: {
      alignContent: 'center',
    },
  },
  card: {
    display: 'inline-block',
    width: '32%',
    height: 400,
    margin: '5px',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '480px',
      margin: 'auto',
      marginBottom: '10px',
    },
    [theme.breakpoints.only('sm')]: {
      margin: '3px',
    },
  },
  img: {
    width: '100%',
    height: '300px',
    [theme.breakpoints.only('xs')]: {
      width: '480px',
      
    },
  },
  topCard: {
    width: '96%',
    height: '500px',
    marginLeft: '15px',
    
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '480px',
      margin: 'auto',
    }
  },
  typography: {
    textAlign: 'center',
  },
}))

const Residential = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.topCard}>
          <Typography>Ipsum Lorem</Typography>
          <List>
            <ListItem>a</ListItem>
            <ListItem>b</ListItem>
            <ListItem>c</ListItem>
            <ListItem>d</ListItem>
            <ListItem>e</ListItem>
            <ListItem>f</ListItem>
            <ListItem>g</ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Residential