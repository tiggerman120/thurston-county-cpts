import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: 'solid 1px',
  },
  card: {
    display: 'inline-block',
    width: 400,
    height: 400,
    margin: '10px',
  },
  typography: {
    textAlign: 'center',
  }
}))

const Employment = () => {
const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        
        <Card className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
          </Card>
          <Card className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
          </Card>
          <Card className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
          </Card>
        <br />
        <Card className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
          </Card>
          <Card className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
          </Card>
          <Card className={classes.card}>
          <img src="https://via.placeholder.com/400x300" alt="" />
          <Typography className={classes.typography}>ipsum lorem</Typography>
          </Card>
      </Grid>
    </Grid>
  )
}

export default Employment