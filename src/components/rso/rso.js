import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, List, ListItem, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'space-between',
    backgroundColor: '#ECEAEA',
    [theme.breakpoints.only('xs')]: {
      alignContent: 'center',
    },
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
}))

const RSO = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>

      <Container>
        <Container>
          <Typography variant="h3" className={classes.resourcesTypo}>Resources</Typography>
        </Container>
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
    </Grid>
  )
}

export default RSO