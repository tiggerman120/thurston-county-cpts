import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Paper, Typography } from '@material-ui/core';
import residential from '../../assets/residential.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'inline-block',
    width: '20.8vw',
    height: 400,
    margin: '10px',
  },
  img: {
    width: '64.6vw',
    height: '300px',
  },
  topCard: {
    width: '64.6vw',
    height: 400,
    margin: '10px',
  },
  typography: {
    textAlign: 'center',
  },
}))

const Education = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>

        <Paper elevation={3} square className={classes.topCard}>
          <img src={residential} className={classes.img} alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Paper>
        <br />
        <Card elevation={3} square className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>
        <Card elevation={3} square className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>
        <Card elevation={3} square className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Education