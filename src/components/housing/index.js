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
  resourceContainer: {
    border: 'solid 1px black',




  },
  leftInnerResourceBox: {


    display: 'block',
    marginLeft: '0',
    float: 'left',
    textAlign: 'left',
    width: '30%',
    height: '100%',

  },
  rightInnerResourceBox: {

    borderLeft: 'solid 1px black',


    display: 'inline-block',
    marginRight: '0',
    width: '70%',
    height: '100%',


  },
  rightResourceBoxTypo: {
    textIndent: '1%',
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
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Family Support Center of South Sound</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>3545 7th Ave SW, Suite 200
              Olympia, WA 98502
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 7549-9297 ext. 200</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="http://fscss.org/homeless-family-services/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Homeless Family Services</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>
            <Typography className={classes.rightResourceBoxTypo}>• Homeless adults with children</Typography>
            <Typography className={classes.rightResourceBoxTypo}>• Adults with children who are at high risk of becoming homeless</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>The Family Support Center of South Sound is a lead agency that helps connect homeless and low-income families to the services they need. They provide:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>• Connection and placement into shelters</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Case management and counseling</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Access to food, clothing, hygiene supplies, and transportation</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Help finding employment</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Rent assistance to keep you in your home</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Mental health and life skills support</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	And more</Typography>
          </Container>
        </Container>


        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Community Action Council of Lewis, Mason & Thurston Counties</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>3020 Willamette Dr NE
              Lacey, WA 98506
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>1-844-628-7343</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://caclmt.org/?page_id=3379#tab-id-3" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Coordinated Entry Services</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Homeless and low-income single adults and couples without dependent children </Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Homeless and low-income veterans</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>Coordinated Entry is a process that connects people with different housing programs and assistance based on their need and resources. It helps connect people with:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Local homeless shelters and other housing options</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Rent and utility assistance to keep them in their home</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Personal hygiene products</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Transportation</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Case management</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	And more</Typography>
          </Container>
        </Container>


        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>SikeWalk</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>1139 5th Ave SE
              Olympia, WA 98501

            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 515-5587</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://www.walkthurston.org/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>SideWalk Homeless Assistance </b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Homeless adults without children</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Adults without children who are at high risk for becoming homeless</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	First helping the most vulnerable people</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>SideWalk helps people by quickly moving them off the streets and into a shelter or home. The program:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Provides 1-on-1 peer support that listens to your needs and guides you to shelter options</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Offers rental assistance for people at risk of becoming homeless</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Community Youth Services</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>520 Pear St. SE
              Olympia, WA 98501
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 943-0780 ext.186</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://communityyouthservices.org/programs/rosies-placeyoung-adult-shelter/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Rosie’s Place Engagement and Overnight Shelter</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	18-24 year olds who are homeless or need a safe place</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>Rosie’s Place provides:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Overnight shelter starting at 9pm and closing at 8:30am</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	10 beds from May-October and 15 beds from November-April</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	The option of temporary or longer-term shelter</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Day time services that offer free food, clothing, showers, counseling, and more</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Interfaith Works</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>701 Franklin St SE (FCC shelter)
              Olympia, WA 98501
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 918-8424</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://www.iwshelter.org/shelter.html" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Interfaith Works Emergency Overnight Shelter</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Single adults and couples without children, with challenges related to physical, mental, or substance abuse issues</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>Interfaith Works has two 24/7 shelters in Olympia. Sobriety and ID are not required. They provide:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Overnight shelter</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Clothing</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Hygiene supplies</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Phone and mail services</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Food</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Emergency supplies</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Lockers</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	And more</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>The Salvation Army</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>1505 4th Ave E
              Olympia, WA 98501
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 705-2850</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://olympia.salvationarmy.org/olympia_corps/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>The Salvation Army Homeless Shelter</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>
            <Typography className={classes.rightResourceBoxTypo}>Anyone who is:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Houseless</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Poor</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Hungry</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	In need</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>The Salvation Army offers many services, such as:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Overnight shelter</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Casework services</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Worship services</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Veteran services</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Free food every day</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Financial help with bills</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Help applying for benefits</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	And more</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Catholic Community Services</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>604 Devoe St SE
              Olympia, WA 98501
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 753-3340 or (360) 438-1100</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://ccsww.org/get-help/shelter-homeless-services/drexel-house/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Drexel House Emergency Shelter</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>

            <Typography className={classes.rightResourceBoxTypo}>•	Homeless men in Thurston County</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>Catholic Community Services has a 16-bed emergency shelter that:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Allows homeless people stay for up to 90 days</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Is free</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Provides case management</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Requires self-improving activities, such as classes and meetings</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Community Youth Services</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>520 Pear St. SE
              Olympia, WA 98501
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 918-7845 or (360) 918-7879</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://communityyouthservices.org/programs/young-adult-housing/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Rosie’s Young Adult Housing Program</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>

            <Typography className={classes.rightResourceBoxTypo}>•	18–24-year olds who are homeless, exiting an institution, unsafe, or have been in the foster care system</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>This program provides:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Free to low-cost housing for up to 2 years</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	A full support network of services aimed at finishing school</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Help finding and keeping a job</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Guidance in learning to live independently</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Continual support after graduating the program</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Low Income Housing Institute</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>Corner of Plum St and Union Ave.
              Olympia, WA 98501
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(206) 957-8067</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="https://olympiawa.gov/community/homelessness/Plum-Street.aspx" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Plum Street Tiny House Village</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>

            <Typography className={classes.rightResourceBoxTypo}>•	Homeless adults and couples without children</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>This village has about 29 temporary homes. Each 8’ x 12’ home has electricity and heat. The village also provides communal:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Bathrooms</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Laundry</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Case management</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Showers</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Kitchen</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	And more</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Family Support Center of South Sound</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>837 7th Ave SE
              Olympia, WA 98501
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 754-9297 ext.200</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="http://fscss.org/services/pear-blossom-place/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Pear Blossom Place Family Shelter</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>

            <Typography className={classes.rightResourceBoxTypo}>•	Homeless families with children under 18</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Pregnant women</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>Pear Blossom Place provides:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	36 shelter beds with open-ended stay</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Private bathrooms</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Small kitchens</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Children outdoor and indoor play areas</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Laundry facilities</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Onsite staff and volunteer support</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	7 permanent supportive apartments are also available</Typography>
          </Container>
        </Container>

        <Container className={classes.resourceContainer}>
          <Typography className={classes.resourcesTypo}>Transitional Housing</Typography>
          <Container className={classes.leftInnerResourceBox}>
            <Typography><b><u>Organization</u></b></Typography>
            <Typography>Fresh Start Housing</Typography>
            <Typography><b><u>Address</u></b></Typography>
            <Typography>3532 Mary Elder Rd. NE #1-11
              Olympia, WA 98506
            </Typography>
            <Typography><b><u>Phone Number</u></b></Typography>
            <Typography>(360) 481-6949 or (253) 332-2122</Typography>
            <Typography><b><u>Website</u></b></Typography>
            <a href="http://www.freshstarthousing.org/" target="_blank" rel="noreferrer">Link</a>
          </Container>
          <Container className={classes.rightInnerResourceBox}>
            <Typography variant="h5"><b>Homeless Family Services</b></Typography>
            <Typography><b><u>Who They Help</u></b></Typography>
            <Typography className={classes.rightResourceBoxTypo}>Tenants range from:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Formerly incarcerated</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	People released from treatment programs</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Mental health outpatients</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Houseless people</Typography>
            <Typography><b><u>How They Help</u></b></Typography>
            <Typography>Fresh Start Housing provides:</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Furnished shared housing that is clean and sober</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Access to the internet, phone, and Netflix</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Case management and life-skills coaching</Typography>
            <Typography className={classes.rightResourceBoxTypo}>•	Weekly group meetings and one-on-one meetings</Typography>
            <Typography className={classes.rightResourceBoxTypo}>• <a href="https://assets.website-files.com/5823cde699878c937c69553a/5d49dcb715f2c1c77901f891_House%20Rules.pdf" target="_blank" rel="noreferrer">House rules</a> that must be followed</Typography>
          </Container>
        </Container>

        
        <Container>
          <a href="#top"><Typography>Top of page</Typography></a>
        </Container>
      </Container>
    </Grid>
  )
}

export default Housing