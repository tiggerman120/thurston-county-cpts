import { makeStyles } from '@material-ui/core/styles';
import { Card, Container, Grid, List, ListItem, Typography } from '@material-ui/core';
// import { Block } from '@material-ui/icons';
import newBanner from '../../assets/SPS3.jpg';

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

    textAlign: 'center',
  },
  headText: {
    textAlign: 'center',

  },
  resourceBox: {





  },
  leftInnerResourceBox: {


    display: 'block',
    marginLeft: '0',
    float: 'left',
    textAlign: 'left',
    width: '30%',
    height: '100%',

  },
  outerRscBox: {




    display: 'inline-block',
    height: '100%',
    marginRight: '0',
    textAlign: 'left',
    width: '100%',


  },
  indentedTextTypo: {
    textIndent: '1%',
  },

  leftResourceBox: {
    display: 'inline-block',
    width: '50%',

  },

  rightResourceBox: {
    display: 'inline-block',
    width: '50%',

  },

  introTypo: {
    textAlign: 'center',

  },

  headerText: {
    textAlign: 'center',

  },

  helpText: {
    textAlign: 'left',

  },

  eightyWidthBox: {
    width: '80%',
  },

  twentyWidthPictureBox: {
    width: '20%',
  },

  sixtyWidthInfoBox: {
    textAlign: 'center',
    width: '60%',

  },

  fiftyWidthInnerBoxLeft: {
    display: 'inline-block',
    width: '50%',

  },

  fiftyWidthInnerBoxRight: {
    display: 'inline-block',
    width: '50%',

  }

}))

const Education = () => {
  const classes = useStyles();

  return (

    <Grid container spacing={3} className={classes.root}>

      <Container item={12}>
        <Container>
          <Typography variant="h2" className={classes.resourcesTypo}>Education</Typography>
        </Container>
      </Container>

      <Container>
        <Typography className={classes.headText}>No matter how far you got in school, there are options to pick up where you left off or start a new path. Thurston County has options for earning a high school diploma or GED, an associate’s degree at a community college, a bachelor’s degree at a 4-year university, and a certificate or degree for a job trade at a technical college or trade school. Below, you’ll find a brief summary of your educational options. Click on the tabs below to learn more about each pathway, view available schools and programs, understand how being formerly incarcerated affects each option, and how financial aid can pay for much of your education.</Typography>
      </Container>

      <Container>
        <Typography variant="h3" className={classes.resourcesTypo}>Frequently Requested Information</Typography>
      </Container>
      <Container className={classes.twentyWidthPictureBox}>
        <img className={classes.img} src={newBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img>
      </Container>


      <Container className={classes.eightyWidthBox}>

        <Card square={false}>
          <List>
            <ListItem><b>•	High school diploma/GED: </b><Typography className={classes.typography}>Options are available for adults of any age to earn their high school diploma or GED. Nearly all colleges and employers consider a GED equivalent to a high school diploma. Earning a diploma or GED usually takes around 3-6 months.</Typography></ListItem>

            <ListItem><b>•	Community colleges and 4-year universities: </b> <Typography className={classes.typography}>Local colleges are available to earn your 2-year associate’s degree and 4-year bachelor’s degree. There are options to attend in-person and some colleges have programs that are all online.</Typography></ListItem>

            <ListItem><b>•	Technical colleges and trade schools: </b> <Typography>Technical colleges and trade schools combine education and hands-on training for high-demand jobs, such as a cook, mechanic, cosmetologist, HVAC technician, barber, truck driver, carpenter, welder, etc. Programs usually take around six months to two years.</Typography></ListItem>

            <ListItem><b>•	Financial aid for school: </b> <Typography>Financial aid is available to significantly lower tuition costs. There are options for several grants and scholarships that you don’t pay back, and student loans that you pay back slowly over time.</Typography></ListItem>
          </List>
        </Card>
      </Container>

      <Container className={classes.sixtyWidthInfoBox}>
        <Container className={classes.fiftyWidthInnerBoxLeft}>
          <Typography>
            High School Diploma or GED<br />
            (programs to earn your high school diploma or GED)
          </Typography>
          <br />
          <Typography>
            Technical Colleges and Trade Schools<br />
            (earning a certificate or degree for specific job trades)
          </Typography>
        </Container>

        <Container className={classes.fiftyWidthInnerBoxRight}>
          <Typography>
            Community and 4-Year Colleges<br />
            (earning your 2-year associate’s degree or 4-year bachelor’s degree)
          </Typography>
          <br />
          <Typography>
            Financial Aid<br />
            (grants, scholarships, and loans to make school more affordable)

          </Typography>
        </Container>
      </Container>



      {/* <Card square={false}  classname={classes.outerRscBox}>
            <Typography variant="h5" className={classes.headerText}><b>

            </b></Typography>
            
              <Container className={classes.leftResourceBox}>
                <Typography><b><u>Organization</u></b></Typography>
                <Typography>

                </Typography>
              </Container>

              <Container className={classes.rightResourceBox}>
                <Typography><b><u>Address</u></b></Typography>
                <Typography>

                </Typography>
              </Container>
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                
              </Container>
              <Container className={classes.rightResourceBox}>
                
              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
              <Typography className={classes.helpText}>
              
              </Typography>
            </Container>

            
              <Container className={classes.leftResourceBox}>
                
              </Container>
              <Container className={classes.rightResourceBox}>
                
              </Container>
            

            
              <Container className={classes.leftResourceBox}>
                <Typography><b><u>Phone Number</u></b></Typography>
                <Typography>

                </Typography>
              </Container>
              <Container className={classes.rightResourceBox}>
                <Typography><b><u>Website</u></b></Typography>
                <a href="" target="_blank" rel="noreferrer">Link</a>
              </Container>
            
          </Card> */}



    </Grid>
  )
}

export default Education