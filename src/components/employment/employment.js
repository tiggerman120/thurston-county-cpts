import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Paper, Typography } from '@material-ui/core';
import residential from '../../assets/residential.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.only('xs')]: {
      alignContent: 'center',
    },
  },
  card: {
    display: 'inline-block',
    width: '20.8vw',
    height: 400,
    margin: '10px',
    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '480px',
      margin: 'auto',
      marginBottom: '10px',
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
    width: '65vw',
    height: '400px',
    margin: '10px',
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

const Employment = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>

        <Paper elevation={3} square className={classes.topCard}>
          <img className={classes.img} src={residential} width="1240" height="300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Paper>
        <br />
        <Card elevation={3} square className={classes.card}>
          <img className={classes.img} src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>
        <Card elevation={3} square className={classes.card}>
          <img className={classes.img} src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>
        <Card elevation={3} square className={classes.card}>
          <img className={classes.img} src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Employment