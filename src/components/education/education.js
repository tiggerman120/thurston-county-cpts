import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, Paper, Typography } from '@material-ui/core';
// import { Block } from '@material-ui/icons';

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
  resourcesTypo: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center'
  },
  topCard: {
    display: 'inline-block',
    width: '47%',
    height: '400px',
    marginLeft: '15px',
    marginBottom: '15px',

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

const Education = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>

      <Container>
        <Typography variant="h2" className={classes.resourcesTypo}>Resources</Typography>
      </Container>

      <Grid item xs={12}>

        <Paper elevation={3} square className={classes.topCard}>
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Paper>

        <Paper elevation={3} square className={classes.topCard}>
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Paper>

        <br />

        <Card elevation={3} square className={classes.topCard}>
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>

        <Card elevation={3} square className={classes.topCard}>
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Education