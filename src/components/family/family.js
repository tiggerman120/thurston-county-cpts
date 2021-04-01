import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, List, ListItem, Typography } from '@material-ui/core';


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
    height: '400px',
    marginLeft: '25px',

    [theme.breakpoints.only('xs')]: {
      display: 'block',
      width: '480px',
      margin: 'auto',
    }
  },
  resourcesTypo: {
    color: 'white',
    backgroundColor: 'black',
  },
}))

const Family = () => {
  const classes = useStyles();

  return (
    <Container>
      <Card elevation={3} square className={classes.topCard}></Card>
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
  )
}

export default Family