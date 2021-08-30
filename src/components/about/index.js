import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Grid, List, ListItem, Typography } from '@material-ui/core';
import infographic from '../../assets/infographic.jpg';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'lightGrey',
  },
  list: {

  },
  listItem: {
    display: 'inline-block',
  },
  typography: {

    textAlign: 'left',
    alignContent: 'right',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  container: {
    height: '50%',
  }
}))

const About = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={7}>
        <Typography variant="h5">Our Vision</Typography>

        <Typography className={classes.typography}>Our vision is a community that welcome the talents and contributions of all members,
          including those returning to us from prison and jail.</Typography>
        <Typography variant="h5">Our Mission</Typography>

        <Typography className={classes.typography}>Our mission is to promote the successful transition of adults into the community after
          prison and jail. We accomplish this through purpose driven community partnerships
          that provide holistic, comprehensive services in support of these adults as they build
          self-sufficient and productive lives.</Typography>

        <Typography variant="h5">Our Partnership</Typography>

        <Typography>Our partnership is made up of state agencies, local organizations, and justice-involved people in Thurston, Mason, and Lewis Counties.
          Members of our team serve in various capacities related to helping justice-involved people transition back into the community. Justice-
          involved people are also a part of our team, as we know their lived experience and contribution help us better serve other formerly
          incarcerated people.</Typography>

      </Grid>

      <Grid item xs={5}>
        <Hidden smDown>
          <Container className={classes.container}>
            <img className={classes.img} src={infographic} alt="a diagram describing different reentry resources"></img>
          </Container>
        </Hidden>
      </Grid>

      <Grid item xs={3}>
        <List>
          <ListItem>Pacific Mountain Workforce Development</ListItem>
          <ListItem>Civil Survival</ListItem>
          <ListItem>Washington State Department of Corrections</ListItem>
          <ListItem>Community Youth Services</ListItem>
        </List>
      </Grid>
      <Grid item xs={1}>

      </Grid>
      <Grid item xs={3}>
        <ListItem>Washington State Department of Social and Health Services</ListItem>
        <ListItem>Family Support Center of South Sound</ListItem>
        <ListItem>Justice-involved Individuals</ListItem>
        <ListItem>SideWalk</ListItem>

      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">Other Community Partnership for TRansition Solution (CPTS) Groups</Typography>
        <Typography>The South Puget Sound CPTS is part of a larger network of CPTS groups throughout Washington State. Together, we work to help as many
          justice-involved Washingtonians as we can. You can learn more about our fellow CPTS groups below by visiting their websites.</Typography>
      </Grid>
      <Grid item xs={4}>
        <List>
          <ListItem><Button><a href="http://www.cpts.info/king_cpts.aspx">King County CPTS</a></Button></ListItem>
          <ListItem><Button><a href="http://www.cpts.info/whatcom_cpts.aspx">Whatcom County CPTS</a></Button></ListItem>
          <ListItem><Button><a href="http://www.cpts.info/snohomish_cpts.aspx">Snohomish CPTS</a></Button></ListItem>
        </List>
      </Grid>

      <Grid item xs={4}>
        <List>
          <ListItem><Button><a href="http://www.cpts.info/kitsap_cpts.aspx">Kitsap County CPTS</a></Button></ListItem>
          <ListItem><Button><a href="http://www.cpts.info/pierce_cpts.aspx">Pierce County CPTS</a></Button></ListItem>
          <ListItem><Button><a href="http://www.cpts.info/spokane_cpts.aspx">Spokane County CPTS</a></Button></ListItem>
        </List>
      </Grid>

      <Grid item xs={4}>
        <List>
          <ListItem><Button><a href="http://www.cpts.info/lewis_cpts.aspx">Lewis County CPTS</a></Button></ListItem>
          <ListItem><Button><a href="http://www.cpts.info/skagitisland_cpts.aspx">Skagit island CPTS</a></Button></ListItem>
          <ListItem><Button><a href="http://www.cpts.info/north_central_cpts.aspx">North Central CPTS</a></Button></ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

export default About