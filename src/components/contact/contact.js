import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, List, ListItem, Typography } from '@material-ui/core';
// import Hidden from '@material-ui/core/Hidden';

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
}))

//delete meeting times. expand spacing for facilitators and shrink for button


const About = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>

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



      {/* <Grid item xs={3} className={classes.list}>
        <Button><a href="http://www.cpts.info/king_cpts.aspx">King County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>Facilitators</Typography>
        <Typography>
          Joseph Garcia,
          Arnold Alexander,
          Jeffery Robson,
          Ana Johnson,
          Jim Harms
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <List>
            <ListItem className={classes.listItem}>
              <Typography className={classes.typography}>King County CPTS meets on the 3rd Friday of each month
                <br />12:15pm - 1:15pm<br />

                New Holly Learning Center
                7058 32nd Ave S.
                Seattle, WA 98118
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/kitsap_cpts.aspx">Kitsap County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>Facilitators</Typography>
        <Typography>
          Janel McFeat,
          Laurie Dawson,
          Kevin Semler,
          Sophie Morse,
          Sha'ree Vebber,
          Christina Barone,
          Valerie Jones,
          Joyce Oswald,
          Donel Steves,
          Jeanette Murphy
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <List>
            <ListItem className={classes.listItem}>
              <Typography className={classes.typography} >The group meets the last Friday of every month in Kitsap County<br /> 11am - 1pm.<br />

                Givens Community Center
                1026 Sidney Avenue
                Port Orchard, WA 98366
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/lewis_cpts.aspx">Lewis County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>Facilitators</Typography>
        <Typography>
          Ken Kaurasi,
          Sasha McDonald,
          Glen Steinhorst,
          Autumn Anderson
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <List>
            <ListItem className={classes.listItem}>
              <Typography className={classes.typography} >Meetings are held the 3rd Thursday of the month<br /> 1:30pm - 3:00pm<br />

                location varies.
                contact: cpts.lewis.county@gmail.com for more information
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/pierce_cpts.aspx">Pierce County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>Facilitators</Typography>
        <Typography>
          Chris Hansen,
          Garrett Landram,
          Jessica Means,
          Karen Dhaliwal,
          Kim Beckham,
          Nanette Borders,
          Sean Raybell,
          Steve McDannel
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <List>
            <ListItem className={classes.listItem}>
              <Typography className={classes.typography} >Meetings are currently being held online. first Friday of the month<br />11am - 12:30pm<br />

              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/skagitisland_cpts.aspx">Skagit Island CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>Facilitators</Typography>
        <Typography>
          Steven Simmons,
          Kyle Vonstroberg,
          Aaron Kirk,
          Charlie Wend,
          Chris Hoke,
          Brent Bailey,
          Kris Lindor,
          Sandra Kint,
          Sherley Chester,
          Aaron McIntosh,
          Jere LaFollette,
          Margo Grothe
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <ListItem className={classes.listItem}>
            <Typography className={classes.typography}>No Current Meeting Information</Typography>
          </ListItem>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/snohomish_cpts.aspx">Snohomish County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>Facilitators</Typography>
        <Typography>
          Ana Johnson,
          Debbie Moen,
          James Goodspeed,
          Julie McCauley
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <ListItem className={classes.listItem}>
            <Typography className={classes.typography}>Snohomish County CPTS meets the 2nd Friday of each month<br />
              1:30pm - 3pm<br />
              Goodwill Training and Education Center
              210 SW Everett Mall Way, Suite D
              Everett, WA  98204
            </Typography>
          </ListItem>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/spokane_cpts.aspx">Spokane County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>
          Facilitators
        </Typography>
        <Typography>
          Lois Bergstrom,
          Dawn Chavez,
          Jennifer Pace,
          Layne Pavey,
          Trina Richardson,
          Natalie Kenny
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <ListItem className={classes.listItem}>
            <Typography className={classes.typography}>Spokane CPTS meets the 2nd Tuesday of the month at SNAP<br />
              2pm - 4pm<br />
              3102 W Fort George Wright Drive
              Spokane, WA 99224
            </Typography>
          </ListItem>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/thurston_cpts.aspx">Thurston County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>

        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>
          Facilitators
        </Typography>
        <Typography>
          Lauren Robbins,
          Deanna Rodkey,
          Brad Stewart,
          Mary Captain,
          Ili Meaole,
          James Goodspeed,
          Athena Brown,
          John Mallea,
          Kaitlyn White,
          James Ward
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <ListItem className={classes.listItem}>
            <Typography className={classes.typography}>Southwest Region CPTS meets on the fourth Friday of each month at the WorkSource in Tumwater<br />
              10am - 12pm<br />
              1570 Irving St. SW
              Tumwater, WA 98512
            </Typography>
          </ListItem>
        </Grid>
      </Hidden>

      <Grid item xs={3}>
        <Button><a href="http://www.cpts.info/whatcom_cpts.aspx">Whatcom County CPTS</a></Button>
      </Grid>

      <Hidden smUp>
        <Grid item xs={1}>
          
        </Grid>
      </Hidden>

      <Grid item xs={8} sm={3}>
        <Typography>Facilitators</Typography>
        <Typography>
          Ashlee Goerke,
          Monique Stefens
        </Typography>
      </Grid>

      <Hidden only="xs">
        <Grid item xs={6}>
          <ListItem className={classes.listItem}>
            <Typography className={classes.typography}>Meetings are held the 4th Tuesday of the month<br />
              1:30pm - unannounced<br />
              Whatcom Community College
              237 W Kellogg Road
              Bellingham, WA 98226
            </Typography>
          </ListItem>
        </Grid>
      </Hidden> */}

    </Grid>
  )
}

export default About;
