
import { Button, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuItems: {
    display: 'inlineBlock',
    position: 'center',
  }
}))

const Header = () => {
  
  const classes = useStyles();


  return (
    <Grid
    className={classes.root}
    container
    direction="row"
    justify="center"
    alignItems="center"
    >
  <Button>Residential</Button>
  <Button>Employment</Button>
  <Button>Family</Button>
  <Button>Education</Button>
    </Grid>
  )
}

export default Header