import { makeStyles } from '@material-ui/core/styles';
import { Button,  Grid, List, ListItem, Typography } from '@material-ui/core';
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




const Contact = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>

      <Grid item xs={3} className={classes.list}>
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
      </Hidden>

    </Grid>
  )
}

export default Contact;
