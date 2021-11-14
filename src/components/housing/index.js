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

  img: {
    width: '100%',
    height: '300px',
    [theme.breakpoints.only('xs')]: {
      width: '480px',

    },
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
    display: 'inline-block',




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

    backgroundColor: 'white',
    display: 'inline-block',
    margin: '25px',
    
    
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

  leftRightContainingBox: {

  },

}))

const Housing = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>


      <Container>
        <Typography variant="h2" className={classes.resourcesTypo}>Housing</Typography>
      </Container>
      <Container>
        <Typography className={classes.headText}>There are different housing options available for formerly incarcerated people. While some people may be homeless and need overnight shelter, others may need a more structured short-term option with programming or long-term permanent housing. The resources below are to help connect you with organizations, programs, and housing options that provide a safe and secure place to stay.</Typography>
      </Container>
      <Container>
        <Typography variant="h3" className={classes.resourcesTypo}>Frequently Requested Information</Typography>
        <Grid item xs={12} >
          <List>
            <ListItem><b>Emergency & Homeless Shelter:</b><Typography className={classes.typography}>Typically provides overnight shelter to homeless people for up to 90 days. They often provide case management services that help people overcome issues leading to being homeless</Typography></ListItem>

            <ListItem><b>Transitional Housing:</b> <Typography className={classes.typography}>Typically provides a place to live for a few months. They tend to help people overcoming substance abuse/mental health issues, transitioning back from prison or jail, and/or overcoming homelessness. They often require case management and assist people with life skills, employment, and gaining permanent housing</Typography></ListItem>

            <ListItem><b>Permanent Housing:</b> <Typography>Provides a long-term place to live. Some landlords are more open to renting permanent housing to people with past convictions. This website will focus on places who are more likely to rent to formerly incarcerated people</Typography></ListItem>

            <ListItem><b>Rent & Utility Assistance:</b> <Typography>Sometimes people have a place to live after prison or jail, but need a little help paying rent and utilities due to limited income—programs are available to help</Typography></ListItem>
          </List>
        </Grid>
      </Container>

      <Grid item xs={12}>
        <Typography variant="h3" className={classes.resourcesTypo}>Homeless Shelters & Services</Typography>
      </Grid>

      {/* <Grid item xs={12}   className={classes.outerRscBox}>
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
            
          </Grid> */}


      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>Homeless Family Services</b></Typography>
        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>Family Support Center of South Sound</Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>3545 7th Ave SW, Suite 200
            Olympia, WA 98502
          </Typography>
        </Container>
        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>
        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>• Homeless adults with children</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>• Adults with children who are at high risk of becoming homeless</Typography>
        </Container>
        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>The Family Support Center of South Sound is a lead agency that helps connect homeless and low-income families to the services they need. They provide:</Typography>
        </Container>
        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>• Connection and placement into shelters</Typography>
          <Typography className={classes.indentedTextTypo}>•	Case management and counseling</Typography>
          <Typography className={classes.indentedTextTypo}>•	Help finding employment</Typography>
          <Typography className={classes.indentedTextTypo}>•	Rent assistance to keep you in your home</Typography>

        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Access to food, clothing, hygiene supplies, and transportation</Typography>
          <Typography className={classes.indentedTextTypo}>•	Mental health and life skills support</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>(360) 7549-9297 ext. 200</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://fscss.org/homeless-family-services/" target="_blank" rel="noreferrer">Link</a>
        </Container>
      </Grid>



      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Coordinated Entry Services
        </b></Typography>
        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            SikeWalk
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1139 5th Ave SE
            Olympia, WA 98501
          </Typography>
        </Container>
        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>
        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless and low-income veterans</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

          <Typography className={classes.indentedTextTypo}>•	Homeless and low-income single adults and couples without dependent children</Typography>
        </Container>
        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Coordinated Entry is a process that connects people with different housing programs and assistance based on their need and resources. It helps connect people with:
          </Typography>
        </Container>
        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Local homeless shelters and other housing options</Typography>

          <Typography className={classes.indentedTextTypo}>•	Case management</Typography>
          <Typography className={classes.indentedTextTypo}>•	Personal hygiene products</Typography>


        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Transportation</Typography>
          <Typography className={classes.indentedTextTypo}>•	Rent and utility assistance to keep them in their home</Typography>
        </Container>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 515-5587
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://www.walkthurston.org/" target="_blank" rel="noreferrer">Link</a>
        </Container>
      </Grid>







      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          SideWalk Homeless Assistance
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            SikeWalk
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1139 5th Ave SE
            Olympia, WA 98501

          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless adults without children</Typography>
          <Typography className={classes.indentedTextTypo}>•	Adults without children who are at high risk for becoming homeless</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	First helping the most vulnerable people</Typography>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            SideWalk helps people by quickly moving them off the streets and into a shelter or home. The program:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Provides 1-on-1 peer support that listens to your needs and guides you to shelter options</Typography>



        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Offers rental assistance for people at risk of becoming homeless</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 515-5587
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://www.walkthurston.org/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>


      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Rosie’s Place Engagement and Overnight Shelter
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Community Youth Services
          </Typography>
          <br />
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            520 Pear St. SE
            Olympia, WA 98501

          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	18-24 year olds who are homeless or need a safe place</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Rosie’s Place provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>

          <Typography className={classes.indentedTextTypo}>•	Overnight shelter starting at 9pm and closing at 8:30am</Typography>
          <Typography className={classes.indentedTextTypo}>•	10 beds from May-October and 15 beds from November-April</Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	The option of temporary or longer-term shelter</Typography>
          <Typography className={classes.indentedTextTypo}>•	Day time services that offer free food, clothing, showers, counseling, and more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 943-0780 ext.186
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://communityyouthservices.org/programs/rosies-placeyoung-adult-shelter/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid >

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Interfaith Works Emergency Overnight Shelter
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Interfaith Works
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            701 Franklin St SE (FCC shelter)
            Olympia, WA 98501

          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Single adults and couples without children, with challenges related to physical, mental, or substance abuse issues</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Interfaith Works has two 24/7 shelters in Olympia. Sobriety and ID are not required. They provide:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Overnight shelter</Typography>
          <Typography className={classes.indentedTextTypo}>•	Clothing</Typography>
          <Typography className={classes.indentedTextTypo}>•	Hygiene supplies</Typography>
          <Typography className={classes.indentedTextTypo}>•	Phone and mail services</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Food</Typography>
          <Typography className={classes.indentedTextTypo}>•	Emergency supplies</Typography>
          <Typography className={classes.indentedTextTypo}>•	Lockers</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 706-2620
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://www.iwshelter.org/shelter.html" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>




      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          The Salvation Army Homeless Shelter
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            The Salvation Army
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1505 4th Ave E
            Olympia, WA 98501

          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless</Typography>
          <Typography className={classes.indentedTextTypo}>•	Poor</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Hungry</Typography>
          <Typography className={classes.indentedTextTypo}>•	In need</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            The Salvation Army offers many services, such as:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Overnight shelter</Typography>
          <Typography className={classes.indentedTextTypo}>•	Casework services</Typography>
          <Typography className={classes.indentedTextTypo}>•	Worship services</Typography>
          <Typography className={classes.indentedTextTypo}>•	Veteran services</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Free food every day</Typography>
          <Typography className={classes.indentedTextTypo}>•	Financial help with bills</Typography>
          <Typography className={classes.indentedTextTypo}>•	Worship services	•	Help applying for benefits</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 705-2850


          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://olympia.salvationarmy.org/olympia_corps/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>






      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Drexel House Emergency Shelter
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Catholic Community Services
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            604 Devoe St SE
            Olympia, WA 98501

          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless men in Thurston County</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Catholic Community Services has a 16-bed emergency shelter that:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Allows homeless people stay for up to 90 days</Typography>
          <Typography className={classes.indentedTextTypo}>•	Is free </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Provides case management</Typography>
          <Typography className={classes.indentedTextTypo}>•	Requires self-bettering activities, such as classes and meetings</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 753-3340 or (360) 438-1100
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://ccsww.org/get-help/shelter-homeless-services/drexel-house/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>



      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Rosie’s Young Adult Housing Program
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Community Youth Services
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            520 Pear St. SE
            Olympia, WA 98501

          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	18–24-year olds who are homeless, exiting an institution, unsafe, or have been in the foster care system.</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This program provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Free to low-cost housing for up to 2 years</Typography>
          <Typography className={classes.indentedTextTypo}>•	A full support network of services aimed at finishing school</Typography>
          <Typography className={classes.indentedTextTypo}>•	Help finding and keeping a job</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Guidance in learning to live independently </Typography>
          <Typography className={classes.indentedTextTypo}>•	Continual support after graduating the program</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 918-7845 or (360) 918-7879
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://communityyouthservices.org/programs/young-adult-housing/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>



      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Plum Street Tiny House Village
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Low Income Housing Institute
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            Corner of Plum St and Union Ave.
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless adults and couples without children</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This village has about 29 temporary homes. Each 8’ x 12’ home has electricity and heat. The village also provides communal:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Bathrooms</Typography>
          <Typography className={classes.indentedTextTypo}>•	Laundry</Typography>
          <Typography className={classes.indentedTextTypo}>•	Case management</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Showers </Typography>
          <Typography className={classes.indentedTextTypo}>•	Kitchen</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (206) 957-8067
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <Typography>Unavailable</Typography>
        </Container>

      </Grid>


      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Pear Blossom Place Family Shelter
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Family Support Center of South Sound
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            837 7th Ave SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless families with children under 18</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Pregnant women</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Pear Blossom Place provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	36 shelter beds with open-ended stay</Typography>
          <Typography className={classes.indentedTextTypo}>•	Private bathrooms</Typography>
          <Typography className={classes.indentedTextTypo}>•	Small kitchens</Typography>
          <Typography className={classes.indentedTextTypo}>•	Children outdoor and indoor play areas</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Laundry facilities</Typography>
          <Typography className={classes.indentedTextTypo}>•	Onsite staff and volunteer support</Typography>
          <Typography className={classes.indentedTextTypo}>•	7 permanent supportive apartments are also available</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 754-9297 ext.200
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://fscss.org/services/pear-blossom-place/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>






      <Grid item xs={12}>
        <Typography variant="h3" className={classes.resourcesTypo}>Transitional Housing</Typography>
      </Grid>



      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Fresh Start Housing
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Fresh Start Housing
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            3532 Mary Elder Rd. NE #1-11
            Olympia, WA 98506
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Formerly incarcerated</Typography>
          <Typography className={classes.indentedTextTypo}>•	People released from treatment programs</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Mental health outpatients</Typography>
          <Typography className={classes.indentedTextTypo}>•	Homeless people</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Fresh Start Housing provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Furnished shared housing that is clean and sober</Typography>
          <Typography className={classes.indentedTextTypo}>•	Access to the internet, phone, and Netflix</Typography>
          <Typography className={classes.indentedTextTypo}>•	Case management and life-skills coaching</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Weekly group meetings and one-on-one meetings</Typography>
          <Typography className={classes.indentedTextTypo}><a href="https://assets.website-files.com/5823cde699878c937c69553a/5d49dcb715f2c1c77901f891_House%20Rules.pdf" target="_blank" rel="noreferrer">House rules</a> that must be followed</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 481-6949 or (253) 332-2122
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://www.freshstarthousing.org/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>





      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Living Clean and Inspired
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Living Clean and Inspired
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            There are many houses located in Lacey, Olympia, and Tumwater
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Prison or jail</Typography>
          <Typography className={classes.indentedTextTypo}>•	Inpatient treatment</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Being homeless</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Living Clean and Inspired provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Affordable housing that is safe and drug free</Typography>
          <Typography className={classes.indentedTextTypo}>•	Help setting goals for education, searching and training for employment, and becoming independent</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	A supportive environment of other men with common experiences</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 850-4570
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://www.livingcleanandinspired.com/transitional-housing-network-sober-living-facility-about-us" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Truly Motivated Transitional Living
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Truly Motivated Transitional Living
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            11326 Bald Hill Rd SE
            Yelm, WA 98597
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Adult men and women who are recovering from substance abuse</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Formerly incarcerated adults</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Truly Motivated Transitional Living provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	4 shared housing properties that are sober and supportive</Typography>
          <Typography className={classes.indentedTextTypo}>•	On-site 12-step programs and faith-based meetings</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	“Coaching” from staff, along with life skills training</Typography>
          <Typography className={classes.indentedTextTypo}>•	Free meals</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 400-8685
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://tmtl.org/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Camp Mercy Tiny Homes
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Truly Motivated Transitional Living
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            413 Franklin St NE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Homeless adult men and women</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Camp Mercy provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Weekly counseling to help remain sober, find a job, address physical and mental health issues, learn about budgeting and managing finances, and more.</Typography>

        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Six sober living tiny homes where residents stay for about 9 months </Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 709-9725
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://ougm.org/our-programs/mens-recovery-program/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Men’s Transformation Program
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Olympia Union Gospel Mission
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            413 Franklin St NE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Adult men who have a history of substance abuse, mental health issues, and homelessness.</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            The Men’s Transformation provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	A safe and shared living environment</Typography>
          <Typography className={classes.indentedtextTypo}>•	Help developing a personal relationship with Jesus Christ, while returning to self-sufficiency</Typography>
          <Typography className={classes.indentedtextTypo}>•	Education in leadership skills, accountability, and valuing accomplishments </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Support with life and job skills, such as managing money, computer skills, and various trade skills</Typography>
          <Typography className={classes.indentedtextTypo}>•	A Men’s Work Program to earn money while in the program</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 709-9725
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://ougm.org/our-programs/mens-recovery-program/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Women’s Transformation Program
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Olympia Union Gospel Mission
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            413 Franklin St NE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Single women with or without children, while they recover from addiction, abuse, divorce, homelessness, or other emotional trauma</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This Women’s Transformation program provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	A safe living environment to find a renewed sense of self-worth and the strength to move forward in life</Typography>
          <Typography className={classes.indentedTextTypo}>•	Counseling and parenting classes</Typography>
          <Typography className={classes.indentedTextTypo}>•	12-step recovery meetings</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Bible study and weekly church services</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 754-9351
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://ougm.org/our-programs/womens-recovery-program/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Rosie’s Young Adult Housing Program
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Community Youth Services
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            520 Pear St. SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container>
          <Typography><b><u>Who They Help</u></b></Typography>
          <Typography>Young adults aged 18-24 year old who are:</Typography>
        </Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless</Typography>
          <Typography className={classes.indentedTextTypo}>•	Exiting an institution</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Unsafe</Typography>
          <Typography className={classes.indentedTextTypo}>•	Have been in the foster care system</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This program provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Free to low-cost housing for up to 2 years</Typography>
          <Typography className={classes.indentedTextTypo}>•	A full support network of services aimed at finishing school</Typography>
          <Typography className={classes.indentedTextTypo}>•	Continual support after graduating the program</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Help finding and keeping a job</Typography>
          <Typography className={classes.indentedTextTypo}>•	Guidance in learning to live independently </Typography>

        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 918-7845 or (360) 918-7879
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://communityyouthservices.org/programs/young-adult-housing/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" className={classes.resourcesTypo}>Permanent Housing</Typography>
      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Drexel House
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Catholic Community Services
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            604 Devoe St SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless women and men</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This program provides permanent housing:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	86 furnished 300 square foot studio apartments</Typography>
          <Typography className={classes.indentedTextTypo}>•	Kitchen and shower/restroom facilities</Typography>
          <Typography className={classes.indentedTextTypo}>•	Case management and enrichment classes</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Has weekly on-site AA and NA meetings</Typography>
          <Typography className={classes.indentedTextTypo}>•	A rent charge of 30% of monthly income</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 753-3340 or (360) 438-1100
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://ccsww.org/get-help/shelter-homeless-services/drexel-house/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Drexel House II (for Veterans)
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Catholic Community Services
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            607 Pattison St. SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless veterans</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	There is a priority for honorably discharged veterans</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This program provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	50 furnished 300 square foot studio apartments</Typography>
          <Typography className={classes.indentedTextTypo}>•	Kitchen and shower/restroom facilities</Typography>
          <Typography className={classes.indentedTextTypo}>•	Case management and enrichment classes</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Has weekly on-site AA and NA meetings</Typography>
          <Typography className={classes.indentedTextTypo}>•	A rent charge of 30% of monthly income</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 753-3340 or (360) 438-1100
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://hatc.org/collaborative-housing/drexel-house-ii-for-veterans/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Quixote Village
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Quixote Communities
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            3350 Mottman Rd SW
            Olympia, WA 98512
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless adults</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Most formerly incarcerated are eligible</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            Quixote village offers communal living with peer support and staff support services. Sobriety is expected. Residents pay 30% of their income. The program provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	30 144 square foot homes</Typography>
          <Typography className={classes.indentedTextTypo}>•	Life skills classes</Typography>
          <Typography className={classes.indentedTextTypo}>•	Hair cuts</Typography>
          <Typography className={classes.indentedTextTypo}>•	Walking groups</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	1-on-1 case management</Typography>
          <Typography className={classes.indentedTextTypo}>•	Weekly resident meetings</Typography>
          <Typography className={classes.indentedTextTypo}>•	Weekly dinners</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            For questions, call the Quixote Program Manager at (360) 338-0451

            To apply to live at Quixote Village, call the Community Action Council at (844) 628-7343

          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://www.quixotecommunities.org/olympia-quixote-village.html" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Pear Blossom Place Family Shelter
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Family Support Center of South Sound
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            837 7th Ave SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless families with children under 18</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Pregnant women</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>

          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	7 permanent supportive apartments</Typography>
          <Typography className={classes.indentedTextTypo}>•	Private bathrooms</Typography>
          <Typography className={classes.indentedTextTypo}>•	Small kitchens</Typography>
          <Typography className={classes.indentedTextTypo}>•	Children outdoor and indoor play areas</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Laundry facilities</Typography>
          <Typography className={classes.indentedTextTypo}>•	Onsite staff and volunteer support</Typography>
          <Typography className={classes.indentedTextTypo}>•	36 shelter beds with open-ended stay are also available</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 754-9297 ext.200
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://fscss.org/services/pear-blossom-place/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" className={classes.resourcesTypo}>Rent & Utility Assistance</Typography>
      </Grid>
      
      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Homeless Family Services
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Family Support Center of South Sound
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            3545 7th Ave SW, Suite 200
            Olympia, WA 98502
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless individuals and families</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Low-income individuals and families at high risk for becoming homeless</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            The Family Support Center of South Sound is a lead agency that helps connect homeless people to the services they need. They provide:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Rent assistance to keep you in your home</Typography>
          <Typography className={classes.indentedTextTypo}>•	Connection and placement into shelters</Typography>
          <Typography className={classes.indentedTextTypo}>•	Case management and counseling</Typography>
          <Typography className={classes.indentedTextTypo}>•	Access to food, warm clothing, hygiene supplies, and transportation</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Help finding employment</Typography>
          <Typography className={classes.indentedTextTypo}>•	Rent assistance to keep you in your home health and life skills support</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 7549-9297 ext. 200
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://fscss.org/homeless-family-services/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          SideWalk Homeless Assistance
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            SikeWalk
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1139 5th Ave SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless adults without children</Typography>
          <Typography className={classes.indentedTextTypo}>•	Adults without children who are at high risk for becoming homeless</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	First helping the most vulnerable people</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            SideWalk helps people by quickly moving them off the streets and into a shelter or home. The program:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Offers rental assistance for people at risk for becoming homeless</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Provides 1-on-1 peer support that listens to your needs and guides you to shelter options</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 515-5587
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://www.walkthurston.org/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Energy Assistance Program
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Community Action Council (CAC) of Lewis, Mason & Thurston Counties
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            3020 Willamette Dr NE
            Lacey, WA 98516
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Those who are low-income and need help paying their energy bill</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            The program:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography classname={classes.indentedTextTypo}>•	Provides equitable, confidential, and reliable energy assistance </Typography>
          <Typography classname={classes.indentedTextTypo}>•	Helps cover gas, electricity, oil, wood, and propane bills</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography classname={classes.indentedTextTypo}>•	Begins in the fall and continues until all funds are committed </Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 438-1100
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://caclmt.org/housing/#toggle-id-5" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          The Salvation Army
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            The Salvation Army
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1505 4th Ave E
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>Anyone who is houseless, hungry, poor, and/or in need</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            The Salvation Army offers many services, such as:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Rent & utility assistance </Typography>
          <Typography className={classes.indentedTextTypo}>•	Casework services</Typography>
          <Typography className={classes.indentedTextTypo}>•	Worship services</Typography>
          <Typography className={classes.indentedTextTypo}>•	Veteran services</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Free food every day</Typography>
          <Typography className={classes.indentedTextTypo}>•	Overnight shelter</Typography>
          <Typography className={classes.indentedTextTypo}>•	Help applying for benefits </Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 705-2850
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://olympia.salvationarmy.org/olympia_corps/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Rochester Energy Assistance
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Rochester Organization of Families (ROOF)
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            10140 Highway 12
            Rochester, WA 98579
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Low-income people in Rochester who have a hard time paying utility bills</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            ROOF helps with energy costs through two programs:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	The Puget Sound Energy’s Warm Home Fund helps residents who have received a notice to disconnect their power. Funds usually start in January. For information on this program, call ROOF</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	The Community Action Council of Lewis, Mason, and Thurston Counties (CAC) provide funds that start in late September or early October. Appointments to apply need to be made by calling the CAC</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            ROOF: (360) 273-6375
            CAC: (360) 438-1100
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="http://www.roofcommunityservices.org/services.html#rental" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Emergency Outreach Financial Assistance
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Sacred Heart Catholic Church
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            812 Bowker St SE
            Lacey, WA 98509
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Men, women, and children in need</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            The program is run by members of the church. The program:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Provides emergency assistance (when funds are available) to help with rent and utilities </Typography>
          <Typography className={classes.indentedtextTypo}>•	Operates Monday, Wednesday, and Friday from 11am – 12:30pm. Clients must check in by 12:15pm</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Also offers food from their food pantry on Monday, Wednesday, and Friday from 1pm – 2:45pm </Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 491-0890
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://www.sacredheartlacey.com/emergency-outreach" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Housing Choice Voucher Program
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Housing Authority of Thurston County
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1206 12th Ave SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Low-income families, individuals, seniors, and people with disabilities</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	To be eligible, you must meet <a href="https://hatc.org/eligibility-income-limits/" target="_blank" rel="noreferrer">income requirements</a></Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This program:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Helps pay rent in apartments and houses owned by private and non-profit owners</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Has tenants pay about 30% of their income toward rent and utilities, and the program pays the rest </Typography>
        </Container>

        <Container>
          <Typography className={classes.typography}>Registration for the waiting list is not always open, but visit the program’s website regularly to check on availability</Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 753-8292
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://hatc.org/housing-choice-voucher-program/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Veterans Administration Supportive Housing (VASH)
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Housing Authority of Thurston County
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1206 12th Ave SE
            Olympia, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Homeless Veterans (must be referred to the program by the local Veterans Administration office)</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This program is a partnership between the Veterans Administration, Department of Housing and Urban Development, and Housing Authority. The program:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Provides rental assistance from the Housing Authority</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Provides counseling and support services from the Veterans Administration</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 753-8292
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://hatc.org/housing-choice-voucher-program/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          St. Vincent de Paul
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Society of St. Vincent de Paul
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            1208 11th Ave SE
            Olympia, WA 98501
            (Note: St. Vincent office is located on the St. Michael Parish downtown campus in Olympia)
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Low-income people who need help with rent or utilities and are facing eviction or utility shut-off</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            This program provides:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	A home visit by a trained volunteer to help determine the nature and detail of help needed</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedtextTypo}>•	Temporary assistance to those who quality so they can stay in their home and keep their utilities on</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            (360) 972-0661
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://saintmichaelparish.org/serve/community-outreach-ministries/" target="_blank" rel="noreferrer">Link - see "St. Vincent de Paul" section</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          Temporary Assistance for Needy Families (TANF)
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Washington State Department of Social and Health Services
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            6860 Capital Blvd SE
            Tumwater, WA 98501
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	People responsible for the care of children</Typography>
          <Typography className={classes.indentedTextTypo}>•	Pregnant women</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Must meet income, resource, and citizenship/alien status requirements</Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            <a href="https://www.dshs.wa.gov/esa/community-services-offices/tanf-and-support-services" target="_blank" rel="noreferrer">TANF</a> provides financial assistance (up to 5 years) to help you make pay for living expenses, such as:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Rent & utilities </Typography>
          <Typography className={classes.indentedTextTypo}>•	Clothing</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Food</Typography>
          <Typography className={classes.indentedTextTypo}>•	And more</Typography>
        </Container>

        <Container>
          <Typography className={classes.typography}>You can apply <a href="https://www.washingtonconnection.org/home/" target="_blank" rel="noreferrer">Online</a> or call 877-501-2233</Typography>
        </Container>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            877-501-2233
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://www.dshs.wa.gov/esa/community-services-offices/tanf-and-support-services" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>

      <Grid item xs={12} className={classes.outerRscBox}>
        <Typography variant="h5" className={classes.headerText}><b>
          2-1-1: Connection to Washington State Resources
        </b></Typography>

        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Organization</u></b></Typography>
          <Typography>
            Washington Information Network
          </Typography>
        </Container>

        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Address</u></b></Typography>
          <Typography>
            302 W Lincoln Ave
            Yakima, WA 98902
          </Typography>
        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>Who They Help</b></u></Typography></Container>

        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Everyone in Washington</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>

        </Container>

        <Container className={classes.resourceBox}><Typography><u><b>How They Help</b></u></Typography>
          <Typography className={classes.helpText}>
            2-1-1 is a free and confidential service that helps you find benefits programs and local services you need. Their support staff:
          </Typography>
        </Container>


        <Container className={classes.leftResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Provide free and confidential help</Typography>
          <Typography className={classes.indentedTextTypo}>•	Help you locate local shelters and housing programs, and programs that help with utility costs</Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography className={classes.indentedTextTypo}>•	Also connect you with other local services (programs that help with food assistance, child care, substance use treatment, job training, health care bills and more)</Typography>
        </Container>



        <Container className={classes.leftResourceBox}>
          <Typography><b><u>Phone Number</u></b></Typography>
          <Typography>
            Dial 2-1-1
          </Typography>
        </Container>
        <Container className={classes.rightResourceBox}>
          <Typography><b><u>Website</u></b></Typography>
          <a href="https://search.wa211.org/" target="_blank" rel="noreferrer">Link</a>
        </Container>

      </Grid>



      <Container>
        <a href="#top"><Typography>Top of page</Typography></a>
      </Container>


    </Grid>
  )
}

export default Housing