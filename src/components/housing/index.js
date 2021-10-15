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

  leftRightContainingBox: {

  },

}))

const Housing = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>

      <Container>
        <Container>
          <Typography variant="h2" className={classes.resourcesTypo}>Housing</Typography>
        </Container>
        <Container>
          <Typography className={classes.headText}>There are different housing options available for formerly incarcerated people. While some people may be homeless and need overnight shelter, others may need a more structured short-term option with programming or long-term permanent housing. The resources below are to help connect you with organizations, programs, and housing options that provide a safe and secure place to stay.</Typography>
        </Container>
        <Container>
          <Typography className={classes.resourcesTypo}>Frequently Requested Information</Typography>
          <List>
            <ListItem><b>Emergency & Homeless Shelter:</b><Typography className={classes.typography}>Typically provides overnight shelter to homeless people for up to 90 days. They often provide case management services that help people overcome issues leading to being homeless</Typography></ListItem>

            <ListItem><b>Transitional Housing:</b> <Typography className={classes.typography}>Typically provides a place to live for a few months. They tend to help people overcoming substance abuse/mental health issues, transitioning back from prison or jail, and/or overcoming homelessness. They often require case management and assist people with life skills, employment, and gaining permanent housing</Typography></ListItem>

            <ListItem><b>Permanent Housing:</b> <Typography>Provides a long-term place to live. Some landlords are more open to renting permanent housing to people with past convictions. This website will focus on places who are more likely to rent to formerly incarcerated people</Typography></ListItem>

            <ListItem><b>Rent & Utility Assistance:</b> <Typography>Sometimes people have a place to live after prison or jail, but need a little help paying rent and utilities due to limited income—programs are available to help</Typography></ListItem>
          </List>
        </Container>

        <Container className={classes.resourceContainer}>
          <Typography className={classes.resourcesTypo}>Homeless Shelters & Services</Typography>


          {/* <Container className={classes.outerRscBox}>
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
            
          </Container> */}


          <Container className={classes.outerRscBox}>
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
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            <Container className={classes.leftResourceBox}>
              <Typography className={classes.indentedTextTypo}>• Homeless adults with children</Typography>
            </Container>
            <Container className={classes.rightResourceBox}>
              <Typography className={classes.indentedTextTypo}>• Adults with children who are at high risk of becoming homeless</Typography>
            </Container>
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
          </Container>



          <Container className={classes.outerRscBox}>
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
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            <Container className={classes.leftResourceBox}>
              <Typography className={classes.indentedTextTypo}>•	Homeless and low-income veterans</Typography>
            </Container>
            <Container className={classes.rightResourceBox}>

              <Typography className={classes.indentedTextTypo}>•	Homeless and low-income single adults and couples without dependent children</Typography>
            </Container>
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
          </Container>







          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Homeless adults without children</Typography>
                <Typography className={classes.indentedTextTypo}>•	Adults without children who are at high risk for becoming homeless</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	First helping the most vulnerable people</Typography>

              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>


          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	18-24 year olds who are homeless or need a safe place</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>

              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>

          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Single adults and couples without children, with challenges related to physical, mental, or substance abuse issues</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>

              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>




          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Homeless</Typography>
                <Typography className={classes.indentedTextTypo}>•	Poor</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Hungry</Typography>
                <Typography className={classes.indentedTextTypo}>•	In need</Typography>
              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>






          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Homeless men in Thurston County</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>

              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>



          <Container className={classes.outerRscBox}>
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
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	18–24-year olds who are homeless, exiting an institution, unsafe, or have been in the foster care system.</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>

              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>



          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Homeless adults and couples without children</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>

              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>


          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Homeless families with children under 18</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Pregnant women</Typography>
              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>







          <Typography className={classes.resourcesTypo}>Transitional Housing</Typography>




          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Formerly incarcerated</Typography>
                <Typography className={classes.indentedTextTypo}>•	People released from treatment programs</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Mental health outpatients</Typography>
                <Typography className={classes.indentedTextTypo}>•	Homeless people</Typography>
              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>





          <Container className={classes.outerRscBox}>
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
            
            <Container>
              <Typography><b><u>Who They Help</u></b></Typography>
            </Container>
            
              <Container className={classes.leftResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Prison or jail</Typography>
                <Typography className={classes.indentedTextTypo}>•	Inpatient treatment</Typography>
              </Container>
              <Container className={classes.rightResourceBox}>
                <Typography className={classes.indentedTextTypo}>•	Being homeless</Typography>
              </Container>
            
            <Container>
              <Typography><b><u>How They Help</u></b></Typography>
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
            
          </Container>






          <Container>
            <a href="#top"><Typography>Top of page</Typography></a>
          </Container>
        </Container>
      </Container>
    </Grid>
  )
}

export default Housing