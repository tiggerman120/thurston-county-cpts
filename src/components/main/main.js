import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, List, ListItem, Typography } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'space-between',
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
  },
}))

const Main = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      {/* <Grid item xs={12}>
        <Typography variant="h3" className={classes.typography}>Ipsum lorem</Typography>
        <Typography className={classes.typography}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan dignissim diam. Vivamus at facilisis turpis, a varius sem. Sed ac pharetra lacus. Cras facilisis eu tellus quis efficitur. Fusce at ligula sed velit luctus consequat vel eu quam. Nullam efficitur eros id lacus vulputate, ut euismod nibh sagittis.</Typography>
        <Card elevation={3} square className={classes.topCard}>
          <Typography className={classes.typography}>Ipsum Lorem</Typography>
        </Card>

        <Card elevation={3} square className={classes.topCardRight}>
          <Typography className={classes.typography}>Ipsum Lorem</Typography>
        </Card>
        <br />
        <br />
        <Card elevation={3} square className={classes.topCard}>
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card>

        <Card elevation={3} square className={classes.bottomCardRight}>
          <Typography className={classes.typography}>ipsum lorem</Typography>
        </Card> */}
        <Container>
      
      <br />
      <Container>
        <Typography variant="h2" className={classes.resourcesTypo}>Resources</Typography>
      </Container>
      {/* <br />
      <Card elevation={3} square className={classes.topCard}></Card> */}
      <br />
      <Container>
        <Typography className={classes.resourcesTypo}>Frequently Requested Information</Typography>
        <List>
          <ListItem>a</ListItem>
          <ListItem>b</ListItem>
          <ListItem>c</ListItem>
          <ListItem>d</ListItem>
        </List>
      </Container>
      <Container>
        <Typography className={classes.resourcesTypo}>Highlighted Resources</Typography>
        <List>
          <ListItem>a</ListItem>
          <ListItem>b</ListItem>
          <ListItem>c</ListItem>
          <ListItem>d</ListItem>
          <ListItem>e</ListItem>
          <ListItem>f</ListItem>
        </List>
      </Container>
      <Container>
        <Typography className={classes.resourcesTypo}>Government Resources</Typography>
        <List>
          <ListItem>a</ListItem>
          <ListItem>b</ListItem>
          <ListItem>c</ListItem>
          <ListItem>d</ListItem>
          <ListItem>e</ListItem>
        </List>
      </Container>
      <Container>
        <a href="#top"><Typography>Top of page</Typography></a>
      </Container>
    </Container>

      {/* </Grid> */}
    </Grid>
  )
}

export default Main