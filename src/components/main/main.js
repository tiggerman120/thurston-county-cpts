import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, List, ListItem, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'space-between',
    backgroundColor: '#ECEAEA',
    [theme.breakpoints.only('xs')]: {
      alignContent: 'center',
    },
  },
  button: {
    width: '100%',
    height: '20%',
  },
  card: {
    [theme.breakpoints.only('xs')]: {
      height: '200px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('sm')]: {
      height: '200px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('md')]: {
      height: '200px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('lg')]: {
      height: '300px',
      textAlign: 'center',
    },
    [theme.breakpoints.only('xl')]: {
      height: '300px',
      textAlign: 'center',
    },
  },
  container: {
    border: '1px solid black',
  },
  img: {
    width: '100%',
    height: '300px',
    [theme.breakpoints.only('xs')]: {
      width: '480px',

    },
  },
  topCard: {
    width: '30%',
    height: '400px',
    display: 'inline-block',
    marginLeft: '15px',

    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '480px',
      margin: 'auto',
    }
  },
  topCardRight: {
    float: 'right',
    width: '30%',
    height: '400px',
    display: 'inline-block',
    marginLeft: '15px',
  },
  bottomCardRight: {
    float: 'right',
    width: '30%',
    height: '400px',
    display: 'inline-block',
    marginLeft: '15px',
  },
  typography: {
    textAlign: 'center',
  },
  resourcesTypo: {
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  spacer: {
    height: '10%',
  }
}))

const Main = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={4}>
      <Button className={classes.button}><Container className={classes.container}>
          Thurston County Resources
        </Container></Button>
        <Container className={classes.spacer}>

        </Container>
        <Button className={classes.button}><Container className={classes.container}>
          Mason County Resources(Coming soon)
        </Container></Button>

        <Container className={classes.spacer}>

        </Container>

        <Button className={classes.button}><Container className={classes.container}>
          Lewis County Resources(Coming soon)
        </Container></Button>
      </Grid>

      <Grid item xs={8}>


        <Typography variant="h5">Helping rebuild your life after incarceration</Typography>

        <Typography>After being in prison or jail, rebuilding your life can be hard. Everyone has different
          needs and it’s not easy finding the help you need. We’re here to help.
        </Typography>

        <br />

        <Typography>This website is to help connect you to resources and services that help make your
          journey easier and more successful. In the county tabs to the left, you’ll find many
          resources and services that help you with:
        </Typography>

      </Grid>

      <Grid item xs={4}>

      </Grid>

      <Grid item xs={4}>
        <List>
          <ListItem>Housing Options</ListItem>
          <ListItem>Food Assistance</ListItem>
          <ListItem>Family Support</ListItem>
          <ListItem>Transportation</ListItem>
          <ListItem>Veteran Services</ListItem>
        </List>
      </Grid>

      <Grid item xs={4}>
        <List>
          <ListItem>Housing Options</ListItem>
          <ListItem>Food Assistance</ListItem>
          <ListItem>Family Support</ListItem>
          <ListItem>Transportation</ListItem>
          <ListItem>Veteran Services</ListItem>
        </List>
      </Grid>



      <Container>
        <a href="#top"><Typography className={classes.typography}>Top of page</Typography></a>

      </Container>

      {/* </Grid> */}
    </Grid>
  )
}

export default Main