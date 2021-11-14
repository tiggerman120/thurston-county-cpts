import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, List, ListItem, Typography } from '@material-ui/core';
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
    border: '1px black solid',
    padding: '10px',
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

  },

  leftAlignedTextData: {
    textAlign: 'left',

  },

  hundredWidth: {
    width: '100%',

  },

  borderedBox: {
    border: '1px solid black',

  },

  borderedCenteredText: {
    border: '1px solid black',
    textAlign: 'center',
  },


  borderedCenteredTextNoUB: {
    borderLeft: '1px solid black',
    borderRight: '1px solid black',
    borderBottom: '1px solid black',

  },

  centeredText: {
    textAlign: 'center',

  },

  fiftyWidthBoxLeft: {
    display: 'inline-block',
    width: '50%',

  },

  fiftyWidthBoxRight: {
    display: 'inline-block',
    width: '50%',

  },

  borderedGrid: {
    backgroundColor: 'white',
    margin: '25px',
  },

}))

const Education = () => {
  const classes = useStyles();

  return (

    <Grid container spacing={3} className={classes.root}>

      <Grid item xs={12} className={classes.hundredWidth}>
        <Container >
          <Typography variant="h2" className={classes.resourcesTypo}>Education</Typography>
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.hundredWidth}>
        <Typography className={classes.leftAlignedTextData}>No matter how far you got in school, there are options to pick up where you left off or start a new path. Thurston County has options for earning a high school diploma or GED, an associate’s degree at a community college, a bachelor’s degree at a 4-year university, and a certificate or degree for a job trade at a technical college or trade school. Below, you’ll find a brief summary of your educational options. Click on the tabs below to learn more about each pathway, view available schools and programs, understand how being formerly incarcerated affects each option, and how financial aid can pay for much of your education.</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3" className={classes.resourcesTypo}>Frequently Requested Information</Typography>
      </Grid>
      <Grid item xs={3} className={classes.twentyWidthPictureBox}>
        <img className={classes.img} src={newBanner} alt="South Puget Sound Community Partnership for Transition Services Logo" ></img>
      </Grid>


      <Grid xs={9} className={classes.eightyWidthBox}>

        <Container>
          <List>
            <ListItem><b>•	High school diploma/GED: </b><Typography className={classes.typography}>Options are available for adults of any age to earn their high school diploma or GED. Nearly all colleges and employers consider a GED equivalent to a high school diploma. Earning a diploma or GED usually takes around 3-6 months.</Typography></ListItem>

            <ListItem><b>•	Community colleges and 4-year universities: </b> <Typography className={classes.typography}>Local colleges are available to earn your 2-year associate’s degree and 4-year bachelor’s degree. There are options to attend in-person and some colleges have programs that are all online.</Typography></ListItem>

            <ListItem><b>•	Technical colleges and trade schools: </b> <Typography>Technical colleges and trade schools combine education and hands-on training for high-demand jobs, such as a cook, mechanic, cosmetologist, HVAC technician, barber, truck driver, carpenter, welder, etc. Programs usually take around six months to two years.</Typography></ListItem>

            <ListItem><b>•	Financial aid for school: </b> <Typography>Financial aid is available to significantly lower tuition costs. There are options for several grants and scholarships that you don’t pay back, and student loans that you pay back slowly over time.</Typography></ListItem>
          </List>
        </Container>
      </Grid>

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



      <Grid item xs={12}>
        <Typography variant='h3' className={classes.resourcesTypo}>
          Earning Your High School Diploma or GED
        </Typography>
      </Grid>

      <Grid item xs={12} >
        <Typography variant="h4" className={classes.resourcesTypo}>
          How your conviction effects getting your high school diploma or GED
        </Typography>
        <Typography className={classes.leftAlignedTextData}>
          Having convictions on your record does not disqualify you in any way from earning your diploma or GED—You can still enroll in a High School+ program or take the GED test. It is not uncommon for formerly incarcerated people to be enrolled in programs to get their diploma or GED.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" className={classes.resourcesTypo}>
          How to earn your high school diploma or GED
        </Typography>
        <Typography className={classes.leftAlignedTextData}>
          If you didn’t finish high school, you can still earn a high school diploma or General Education Development (GED) credential, no matter how old you are. Nearly all employers and colleges consider a GED equivalent to a high school diploma, so the option of which one to get is up to you.
        </Typography>
        <List>
          <ListItem>
            • High School Diploma: To get your high school diploma, you will need to take a High School+ program that has classes to make up for the credits you missed in high school. Some of the credits you missed can also be made up for with real life experience, such as your work history. The High School+ program generally costs about $35 per quarter and online classes are available. Assignments are self-paced and usually takes about 3-6 months to complete. Financial aid and is available for low-income people. Sometimes, financial waivers are available, which means you won’t have to pay any money.
          </ListItem>

          <ListItem>
            •	GED: If you want to get your GED instead of a high school diploma, you will need to pass the GED test. The GED test has four separate tests—one each for math, language arts, social studies, and science. You don’t have to take all four tests at one time—you can space them apart on different days if you want. Even though a GED test does not require classes, it helps a lot to study before taking the test. We’ve listed programs below that help prepare people for the GED test. The GED test costs $120 and if you fail the test, you can take it two more times for free. There are options to take the test in person or online.
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" className={classes.resourcesTypo}>
          Benefits of getting your diploma or GED
        </Typography>
        <Typography className={classes.leftAlignedTextData}>
          Earning your high school diploma or GED will have lifelong benefits, such as:
        </Typography>
        <List>
          <ListItem>
            •	Job opportunity and job satisfaction: Most jobs require a high school diploma or GED. Having one will open up many more job opportunities. Not only will you qualify for more jobs, but with a larger selection of jobs, you’ll be more likely to find one you enjoy more.
          </ListItem>
          <ListItem>
            •	Financial opportunity: Jobs that require a high school diploma or GED typically pay more than jobs that do not require a diploma or GED.
          </ListItem>
          <ListItem>
            •	Qualifying you for colleges and technical schools: Almost all community colleges, universities, and technical schools require a high school diploma or GED. Having a diploma or GED will help you get accepted into a program so that you can earn a certificate or degree, which will open even more job and financial opportunities.
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Typography variant="h4" className={classes.resourcesTypo}>
          Earning Your High School Diploma
        </Typography>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            High School+
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Program
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            South Puget Sound Community College’s (SPSCC) <a href="https://spscc.edu/areas/highschool/hs21" target="_blank" rel="noreferrer">High School+</a> program allows adults (18+) to earn their high school diploma. Classes are available in person and online. Assignments are self-paced – so you can complete an assignment as quick or slow as you want, and whenever works best for your schedule. Most people finish the program in 3-6 months. Once you finish the program, you’ll have your high school diploma. Because you earn your diploma in this program, there is no need to take the GED test. Classes are available online and in person. However, there may be times in-person classes are not available due to Covid-19.
          </Typography>
          <br />
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Cost
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            High School+ costs $35 per quarter. Financial aid to lower cost or financial waivers to eliminate cost is available.
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Typography variant="h4" className={classes.resourcesTypo}>
          Earning your GED
        </Typography>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            General Education Development (GED) Test
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Program
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            The <a href="https://ged.com/" target="_blank" rel="noreferrer">General Education Development (GED) Test</a> is the official test to get your GED. The test is made up of <a href="https://ged.com/about_test/test_subjects/" target="_blank" rel="noreferrer">four subjects</a> (math, language arts, social studies, science). The test is broken into four separate tests. You don’t have to take all four tests at once – you can them on separate days if you want. Questions consist of multiple choice, short answers, fill-in-the-blank, and essay questions. A <a href="https://ged.com/about_test/scores/" target="_blank" rel="noreferrer">passing score</a> is 145 out of 200 for each subject. If you fail the test, you can retake the test two more times for free. The test is available in English and Spanish.
          </Typography>
          <br />
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            How to Take the Test
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            You have the option to taking the test online at home or in-person at a testing center. Either way, you first need to <a href="https://ged.com/about_test/scheduling/" target="_blank" rel="noreferrer">schedule to take the GED test</a>.
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	In person: In-person testing is done at South Puget Sound Community College (SPSCC). SPSCC is an official GED testing center. You can read more on their Assessment Center webpage (scroll down to “GED Test”).
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Online: To take the GED test online at home, read more about <a href="https://ged.com/take-the-ged-test-online/" target="_blank" rel="noreferrer">what is needed to take the online GED test</a>
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Cost to Take the Test
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            In-person testing cost $120 and testing online costs $144 (2021). Testing cost may change depending on the year.
          </Typography>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Helpful Preparation and Study Materials
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	View <a href="https://ged.com/study/free_online_ged_test/" target="_blank" rel="noreferrer">sample test questions</a> for free. It will give you an idea of the type of questions that will be on the test.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	You can also take a <a href="https://ged.com/study/ged_ready/" target="_blank" rel="noreferrer">practice test</a>. It costs $6 per subject ($24 total). It helps you see how well you might do on the test and what subjects you may need to study more.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	To help prepare for the test, this testing service offers <a href="https://ged.com/study/online-classes/" target="_blank" rel="noreferrer">online classes</a> (prices vary) and <a href="https://ged.com/study/practice_questions/" target="_blank" rel="noreferrer">online flash cards</a> with practice questions (prices vary).
              </Typography>
            </ListItem>
          </List>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            More Information
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	See <a href="https://ged.com/policies/washington/" target="_blank" rel="noreferrer">answers to frequently asked questions</a> about the GED test.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	You can also read <a href="https://spscc.edu/students/testing" target="_blank" rel="noreferrer">more information about registering, paying, and scheduling a GED Exam</a> (scroll down to “GED Test”).
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	SPSC can answer all your GED questions. Contact them at (360) 596-5770.
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Typography variant="h4" className={classes.resourcesTypo}>
          Programs to Help You Prepare for the GED Test
        </Typography>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            South Puget Sound Community College GED Preparation Program
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Program
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            SPSCC offers <a href="https://spscc.edu/areas/highschool/GED" target="_blank" rel="noreferrer">GED preperation classes</a> to help adults (18+) for the GED test. Classes are available online and in person. Assignments are self-paced, so you can complete an assignment as quick or slow as you want, and whenever works best for your schedule. This program lasts up to three months, or sooner if you do the assignments at a quick pace. This program includes a practice GED test to see how you do before signing up for the real test.
          </Typography>
          <br />
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            How to Enroll and Learn More
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To enroll in this program or learn more, visit the <a href="https://spscc.edu/areas/highschool/GED" target="_blank" rel="noreferrer">SPSCC GED webpage</a> or call them at (360) 596-5317. They can answer your questions and help you enroll in the program.
          </Typography>
          <br />
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Cost
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            GED preparation classes cost $35 per quarter (the program is typically one quarter). Financial aid to lower cost or financial waivers to eliminate cost is available.
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>

        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            Gravity Learning Centers GED Preparation Program
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Program
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Gravity Learning Center offers free GED preparation program for people 16-21 years old. Classes are only available in person and are available in Olympia, Lacey, and Yelm. Classes take between 5-20 weeks—five weeks of class for each of the four GED subjects. Because you can space the four parts of the GED test out however you want, you can schedule to take each test section after completing preparation classes in that subject.
          </Typography>
          <br />
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            How to Register and Learn More
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To register or learn more about this program, visit the <a href="https://www.gravitycenters.org/overview/programs/" target="_blank" rel="noreferrer">Gravity Learning Centers website</a> or call their Lacey branch (360) 923-4215, Olympia branch (360) 464-6851, or Yelm branch (360) 464-6723
          </Typography>
          <br />
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Cost
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            GED preparation at Gravity Learning Centers is free
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Typography variant='h3' className={classes.resourcesTypo}>
          Community Colleges and 4-Year Universities
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" className={classes.resourcesTypo}>
            How your conviction affects going to college
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Having a past conviction does not automatically disqualify you from being accepted into college. Other formerly incarcerated people have earned degrees that helped them start a new career, and so can you. Past convictions often have a bigger impact on technical colleges, which we cover in the technical colleges section of this website.
          </Typography>
          <br />
          <Typography className={classes.leftAlignedTextData}>
            That said, you should be aware that many colleges and universities will ask about conviction history during the admission process, although not all consider it in their admissions process. An applicant with a past conviction may be asked to provide further information, such as a letter of explanation, a letter from a corrections officer or a personal interview.19 However, research shows that, for the most part, disclosure of past convictions is more likely to trigger additional screening rather than automatic disqualification.10 It’s important to be honest about your history. Lying about your conviction history can result in your application being denied, and if a school finds out that you were dishonest on your application after you’ve already been admitted, you may be expelled.
          </Typography>
          <br />
          <Typography className={classes.leftAlignedTextData}>
            Because your conviction(s) may disqualify you from certain jobs or cause poor likelihood of employment in some careers, it’s important to choose your education path carefully. We recommend first talking with your local reentry navigator (see below) about your education options. If you don’t first talk with a reentry navigator, another good option is to talk with an admissions advisor or another appropriate staff member at the college before you apply. Talking with them and disclosing the type of conviction(s) you have will help you identify what programs/career paths are good options for you to consider and which ones may be ruled out or have poor likelihood of employment. This can help you identify educational programs that interests you and have a good outlook for employment, while preventing you from spending time and money on a degree or certification that has poor likelihood of employment. To meet with an admissions advisor, call or email the college to set up a meeting. Let them know you’re interested in applying to the college and would like to talk with an admissions advisor to learn about your options, given that you have a past conviction. To learn more about how your conviction may affect your education, read the <a href="https://wareentryguide.org/education-and-loans/" target="_blank" rel="noreferrer">Education and Loans section of Washington's Reentry Guide</a>.
          </Typography>
        </Container>

        <Container className={classes.borderedBox}>
          <Typography variant="h4" className={classes.centeredText}>
            Free College Navigation for Formerly Incarcerated People
          </Typography>
          <br />
          <Typography className={classes.leftAlignedTextData}>
            Help is available for formerly incarcerated people who want to learn how their conviction affects going to college, what their options are, how to proceed with the application process, how to apply for financial aid, and more.
          </Typography>
          <br />
          <Typography className={classes.leftAlignedTextData}>
            Reentry Scholars is a free support service that specializes in helping formerly incarcerated people make education and career choices. You can meet with a reentry navigator and they will provide you with.
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	college navigation
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	academic and career counseling
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	advocacy and support
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	peer mentoring
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	leadership and career development
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" className={classes.resourcesTypo}>
            Differences between community college and 4-year universities
          </Typography>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Community Colleges
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            A community college allows you to earn a 2-year degree, such as Associate in Arts and Associate in Science, each with more specific fields of study. Community colleges often have programs for technical job trades as well, which we cover in the technical college section of this website. To be accepted into a community college, you will need a high school diploma or GED, but you don’t need to take the scholastic aptitude test (SAT). To be accepted into community college, you don’t need to have great grades in high school. Community colleges are very lenient about past grades. Community college cost much less than 4-year universities, which makes it great way to start your higher education. While a 2-year associate’s degree is commonly used to transfer to a 4-year university to earn a bachelor’s degree, you also have the option of stopping after two years to use your associate’s degree to get a job. Community colleges have direct transfer agreements with most 4-year universities in Washington State, which allows your credits from community college to easily transfer to the university to earn a bachelor’s degree. Financial aid is available to significantly lower the cost of attending community college.
          </Typography>
          <br />
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            4-Year Universities
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            A 4-year university offers undergraduate programs (bachelor’s degree) and graduate programs (master’s degree), each with specific majors/fields of study. To learn how to be accepted into a university, it is best to visit the colleges website and/or contact their admissions office. Requirements to be accepted differ for each university. Some universities are “test-optional”, which means they don’t require you to take the SAT to be considered, while other universities may require you to take the SAT. If you’re transferring from a community college to a 4-year university, some universities will require you to submit a high school transcript if you have less than certain number of transferable credits—for example, Western Washington University requires a high school transcript if you have less that 40 transferable credits from community college. As mentioned above, a good pathway to a 4-year university is to first get your associate’s degree at a 2-year community college. Because community colleges have direct transfer agreements with 4-year universities, you’ll be able to transfer over the credits from your associate’s degree and earn your bachelor’s degree in about two years. Financial aid is available to significantly lower the cost of attending community college.
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" className={classes.resourcesTypo}>
            Benefits of getting an associate’s or bachelor’s degree
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Earning you’re a degree will have lifelong benefits, such as:
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	Job opportunities and job satisfaction: Some jobs require or prefer candidates with an associate’s or bachelor’s degree. Not only does a degree help you qualify for more jobs, but you’ll also stand out amongst other candidates who don’t have a degree, which can increase your chances of being hired. In addition, college education often replaces work experience—so if you don’t have two years of work experience in the type of job you’re applying for, you can often count your two years of college education in place of that work experience. Because you’ll qualify for more jobs, you’ll be more likely to find a job you enjoy more.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Financial opportunity: Jobs that require a degree typically pay more than jobs that don’t require a degree. The more advanced the degree, the more likely it is to pay more money.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Steppingstone to more education: Starting with associate’s degree at a community college is a great first step toward earning your bachelor’s degree. Associate degrees with direct transfer agreements help you get accepted into 4-year universities, the credits transfer easily, and the cost of the first two years of your education are more affordable at a community college.
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Container>
          <Typography variant="h4" className={classes.resourcesTypo}>
            Local Community College (Associate’s Degrees)
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>

        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            South Puget Sound Community College
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Program
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            <a href="https:spscc.edu" target="_blank" rel="noreferrer">South Puget Sound Community College (SPSCC)</a> has many educational options. It offers about 15 different 2-year associate degrees that can be used to transfer to a 4-year university. Or, you can stop going to school after your 2-year associate degree and use it to qualify for jobs that require/prefer applicants with an associate’s degree. SPSCC also has professional technical programs, which we cover in the technical colleges section of this website. SPSCC offers the following 2-year associate/transfer degrees:
          </Typography>
          <Container>
            <Container className={classes.fiftyWidthBoxLeft}>
              <Typography>
                <b>Associate in Arts (AA)</b>
              </Typography>
              <List>
                <ListItem>
                  <Typography>
                    •	Arts and Communications
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Fine and Performing Arts
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Government, Public, and Nonprofit Administration
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Social Services & Education
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Cultural Studies
                  </Typography>
                </ListItem>
              </List>
              <br />
              <Typography>
                <b>Associate in Science (AS)</b>
              </Typography>
              <List>
                <ListItem>
                  <Typography>
                    •	Associate in Science
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Engineering Physics
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Biology
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	General Physics
                  </Typography>
                </ListItem>
              </List>
            </Container>
            <br />
            <Container className={classes.fiftyWidthBoxRight}>
              <Typography>
                <b>Other Associate Programs</b>
              </Typography>
              <List>
                <ListItem>
                  <Typography>
                    •	Biology
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Computer Science
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Nursing
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Business
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Music
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    •	Pre-Nursing
                  </Typography>
                </ListItem>
              </List>



              <Typography >
                Their <a href="https://spscc.edu/areas/transfer-degrees" target="_blank" rel="noreferrer">list of 2-year (transfer) degrees</a> shows how long each program takes to complete, the classes that are in each program, and the learning outcomes of each program.
              </Typography>
            </Container>
          </Container>
          <br />
          <Typography variant="h5">
            Acedemic Advising
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Before reaching out to SPSCC to learn which educational programs lead to career fields that are more employable and less employable due to your charge(s), we recommend first reaching out to your local reentry navigator. Your reentry navigator specializes in providing formerly incarcerated people with college navigation, academic and career counseling, financial aid guidance, and much more (all for free).
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            While SPSCC doesn’t have a reentry navigator for formerly incarcerated people, they have a social worker/case manager in their <a href="https://spscc.edu/students/personal-support" target="_blank" rel="noreferrer">Personal Support Center</a> that can provide some initial helpful support. After reaching out to your local reentry navigator, it may help to contact their social worker to learn what educational programs they recommend as good options. While staff in their <a href="https://spscc.edu/students/advising-support" target="_blank" rel="noreferrer">Advising, Career, and Transfer Center</a> can also help plan your educational options and needs, their support center is a good first point of contact.
          </Typography>
          <br />
          <Typography variant="h5">
            How to Apply
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To become a student at SPSCC, visit their <a href="https://spscc.edu/apply/newstudents" target="_blank" rel="noreferrer">New & returning Student Admission</a> website for information on how to apply. While you need a high school diploma or GED to be accepted, you don’t need to take the Scholastic Aptitude Test (SAT) to be accepted. It’s perfectly okay if your high school grades aren’t great. Community colleges are very lenient about past grades.
          </Typography>
          <br />
          <Typography variant="h5">
            Cost & Financial Aid
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            For information for the current year’s cost visit the <a href="https://spscc.edu/tuition-fees" target="_blank" rel="noreferrer">SPSCC tuition & fees</a> webpage. Financial aid is available for low- and middle-income students, and can significantly reduce the cost of tuition. For financial aid information and help, you can contact their financial aid office at (360) 596-5241, financialaid@spscc.edu, or visit the <a href="https://spscc.edu/financial-aid" target="_blank" rel="noreferrer">SPSCC Financial aid</a> webpage.
          </Typography>
          <br />
          <Typography variant="h5">
            SPSCC Contact Information
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            You can contact their:
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	Personal Support Center at (360) 596-5523 and basicneeds@spscc.edu
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Advising, Career, and Transfer Center at (360) 596-5267 and advising@spscc.edu
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" className={classes.resourcesTypo}>
          4-Year Universities (Bachelor's and Master's Degrees)
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.borderedGrid}>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            Evergreen State College
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Program Options
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Evergreen State College offers over 45 fields of study. Some include:
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	African American Studies
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Computer Science
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Film/Video/Audio Production
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Health
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Psychology
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Business
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Creative Writing
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Food Justice
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	History
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Sociology and Anthropology
              </Typography>
            </ListItem>
          </List>
          <Typography className={classes.leftAlignedTextData}>
            The <a href="https://www.evergreen.edu/studies" target="_blank" rel="noreferrer">full list of fields of study</a> shows all the fields you can choose from, what classes are in each program, what you can expect to learn, and the type of work it leads towards. Evergreen State College also offers three <a href="https://www.evergreen.edu/graduatestudies/graduate-studies" target="_blank" rel="noreferrer">graduate programs</a> for people with a bachelor’s degree who are looking to earn their master’s degree. Their three graduate programs include public administration, teaching, and environmental studies.
          </Typography>
          <br />
          <Typography variant="h5">
            Academic Advising
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To learn which educational programs lead to career fields that are more employable and less employable due to your charge(s), reach out to your local reentry navigator. Your reentry navigator specializes in providing formerly incarcerated people with college navigation, academic and career counseling, financial aid guidance, and much more (all for free).
          </Typography>
          <br />
          <Typography variant="h5">
            How to Apply
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To become a student at Evergreen, visit their <a href="https://www.evergreen.edu/admissions/how-apply" target="_blank" rel="noreferrer">admissions</a> webpage to see what is required when applying. Evergreen allows people to apply and start school all throughout the year. While you need a high school diploma or GED to be accepted, you don’t need to take the Scholastic Aptitude Test (SAT) to be accepted.
          </Typography>
          <Typography variant="h5">
            Cost and Financial Aid
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            <a href="https://www.evergreen.edu/costs/costs-aid" target="_blank" rel="noreferrer">Tuition cost</a> is about $7,300 a year (2021), but can change a little each year. <a href="https://www.evergreen.edu/financialaid/financial-aid" target="_blank" rel="noreferrer">Financial aid</a> and <a href="https://www.evergreen.edu/scholarships" target="_blank" rel="noreferrer">scholarships</a> are available for low- and middle-income people, and can substantially lower your tuition cost. For financial aid information and help, you can contact their Financial Aid Office at (360) 867-6205, finaid@evergreen.edu, and by meeting them online or in person. You can also learn more by visiting the financial aid section of our website.
          </Typography>
          <Typography variant="h5">
            More Information
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            <List>
              <ListItem>
                <Typography className={classes.leftAlginedTextData}>
                  •	Free online and in-person <a href="https://www.evergreen.edu/admissions/visit-evergreen" target="_blank" rel="noreferrer">information sessions</a> are available to learn more about studying at Evergreen State College. You can listen to staff and current students, and ask any questions you’d like.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography className={classes.leftAlginedTextData}>
                  •	As mentioned above, you can also meet with the re-entry navigator at Evergreen, who specializes in providing formerly incarcerated people with college navigation, academic counseling, and much more. You can contact the re-entry navigator at (360) 867-5947 and jacksoja@evergreen.edu
                </Typography>
              </ListItem>
            </List>
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            St. Martin's University
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            Program Options
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Saint Martin’s University offers around 50 bachelor’s programs. Some include:
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	Computer Science
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Criminal Justice
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Exercise Science
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Music
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Pre-health
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Counseling
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Environmental Studies
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Information Technology
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Psychology
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Social Work
              </Typography>
            </ListItem>
          </List>
          <Typography className={classes.leftAlignedTextData}>
            The <a href="https://www.stmartin.edu/academics/programs-schools" target="_blank" rel="noreferrer">full list of programs</a> has their options for majors, some of the classes that are offered in each program, what you can expect to learn, and the type of job each program leads towards.
            St. Martins also offers graduate programs for people with a bachelor’s degree who are looking to earn their master’s degree. Some of their graduate programs include accounting, business administration, computer science, and counseling.

          </Typography>
          <br />
          <Typography variant="h5">
            Academic Advising
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Before reaching out to St. Martins to learn which educational programs lead to career fields that are more employable and less employable due to your charge(s), we recommend first reaching out to your local reentry navigator. Your reentry navigator specializes in providing formerly incarcerated people with college navigation, academic and career counseling, financial aid guidance, and much more (all for free).

            For additional help with academic and career planning, and to learn how your conviction(s) may affect your program/career path choices, contact their <a href="https://www.stmartin.edu/directory/office-admissions" target="_blank" rel="noreferrer">Admissions Office</a> at 360-438-4596, admissions@stmartin.edu, or meet with them in person.
          </Typography>
          <br />
          <Typography variant="h5">
            How to Apply
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To become a student, visit their <a href="https://www.stmartin.edu/admissions-aid/how-to-apply" target="_blank" rel="noreferrer">admissions</a> webpage to learn what is required to apply. While you need a high school diploma or GED to be accepted, you don’t need to take the Scholastic Aptitude Test (SAT) to be accepted.
          </Typography>
          <Typography variant="h5">
            Cost and Financial Aid
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            <a href="https://www.stmartin.edu/admissions-aid/tuition-fees" target="_blank" rel="noreferrer">Tuition cost</a> is about $40,210 a year (2021), but can change a little each year. <a href="https://www.stmartin.edu/admissions-aid/financial-aid" target="_blank" rel="noreferrer">Financial aid</a> and <a href="https://www.stmartin.edu/admissions-aid/scholarships" target="_blank" rel="noreferrer">scholarships</a> are available for low- and middle-income people, and can substantially lower your tuition cost. For financial aid information and help, you can contact their Student Financial Service Center at (360) 438-4397 and finaid@stmartin.edu. You can also learn more by visiting the financial aid section of our website.
          </Typography>
          <Typography variant="h5">
            More Information
          </Typography>

          <Typography className={classes.leftAlginedTextData}>
            Free online and in-person <a href="https://www.stmartin.edu/admissions-aid/visit" target="_blank" rel="noreferrer">tours of the college</a> are available. You can also learn more by contacting their Office of Admissions at (360) 438-4596 and admissions@stmartin.edu.
          </Typography>

        </Container>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">
            Other Washington State 4-year Universities
          </Typography>
        </Container>

        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5" className={classes.leftAlignedTextData}>
            University and Program Options
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            There are many 4-year universities outside of Thurston County that offer programs to earn your bachelor’s and master’s degree. Some have programs that are all online, so you can earn your degree without having to move to a different city. Some of these universities include:
          </Typography>

          <List>
            <ListItem>
              <Typography>
                Western Washington University
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://www.wwu.edu/majors" target="_blank" rel="noreferrer">•	All majors</a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://online.wwu.edu/degrees-certificates" target="_blank" rel="noreferrer">•	Online degrees</a>
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Typography>
                Central Washington University
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://www.cwu.edu/programs/degrees-and-programs" target="_blank" rel="noreferrer">•	All majors</a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://www.cwu.edu/online-learning/online-undergraduate-degrees-cwu" target="_blank" rel="noreferrer">•	Online degrees</a>
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Typography>
                Eastern Washington University
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://www.ewu.edu/academics/program-explorer/" target="_blank" rel="noreferrer">•	All majors</a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://www.ewu.edu/academics/program-explorer/?formats=online" target="_blank" rel="noreferrer">•	Online degrees</a>
              </Typography>
            </ListItem>
          </List>

          <List>
            <ListItem>
              <Typography>
                University of Washhington
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://www.washington.edu/uaa/advising/degree-overview/majors/list-of-undergraduate-majors/" target="_blank" rel="noreferrer">•	All majors</a>
              </Typography>
            </ListItem>

          </List>

          <List>
            <ListItem>
              <Typography>
                Washington State University
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://admission.wsu.edu/academics/fos/Public/index.castle" target="_blank" rel="noreferrer">•	All majors</a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <a href="https://online.wsu.edu/online-degrees/" target="_blank" rel="noreferrer">•	Online degrees</a>
              </Typography>
            </ListItem>
          </List>

          <Typography variant="h5">
            Academic Advising
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Before reaching out to these college to learn which educational programs lead to career fields that are more employable and less employable due to your charge(s), we recommend first reaching out to your local reentry navigator.Your local reentry navigator specializes in providing formerly incarcerated people with college navigation, academic and career counseling, financial aid guidance, and much more (all for free). If you’re interested in attending college outside of the South Puget Sound area, your local reentry navigator can connect you with the reentry navigator that helps people in the area you’re interested in attending college.
          </Typography>

          <Typography variant="h5">
            Cost and Financial Aid
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Tuition cost varies by college. Financial aid is available for low- and middle-income people, and can substantially lower your tuition cost. For more financial aid information and help, contact the university’s financial aid office. You can also learn more by visiting the financial aid section of our website.
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h4" className={classes.resourcesTypo}>
          Technical Colleges and Trade Schools
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5">
          About Technical Colleges and Trade Schools
        </Typography>
        <Typography className={classes.leftAlignedTextData}>
          In short, a technical college and trade school provide job-specific knowledge and hands-on training for the career the student is pursing. If you’re studying to become a mechanic, all of your classes and training will be related to being a mechanic. Attending a technical college or trade school is a great option for starting a new career. It often leads towards career paths that are more accepting of formerly incarcerated people. There are many reasons and benefits to attend a technical school:
        </Typography>

        <List>
          <ListItem>
            <Typography className={classes.leftAlignedTextData}>
              • <b>Preparing you for high-demand jobs:</b> Many programs at technical colleges and trade schools are for jobs that are in high-demand, have good job security, often pay well, and are more accepting of people with past convictions. They offer programs for being a mechanic, cook, cosmetologist, truck driver, barber, HVAC technician, welder, esthetician, carpenter, and more.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.leftAlignedTextData}>
              • <b>Career-focused education:</b> While many community colleges and 4-year universities often require you to complete pre-requisite classes not directly related to your future job (such as math classes when studying to be a history teacher), a technical school only has you take classes specific to the job you’re training for.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.leftAlignedTextData}>
              •	<b>Hands-on training:</b> Technical colleges and trade schools not only teach you what you need to know, they also provide you with hands-on training/practice that builds your skill and experience in the job you’re training for. You’ll be fully prepared to pass your certification exam and apply your skills on the job.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.leftAlignedTextData}>
              •	<b>Job placement when graduating:</b>  Often times, technical colleges and trade schools will be able to help you get a job right after you graduate. Because instructors have connections in that job field, they can connect you with employers and open jobs.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography className={classes.leftAlignedTextData}>
              •	<b>Starting a new career relatively quick:</b> The amount of time it takes to earn most technical certificates and degrees ranges from about six months to two years. A more basic Certificate of Completion or Proficiency takes about six months to one year, while a more advanced Associate in Applied Science Degree takes around two years.
            </Typography>
          </ListItem>
        </List>

        <Typography variant="h5">
          How your conviction effects going to a technical college
        </Typography>
        <Typography className={classes.leftAlignedTextData}>
          Having a conviction on your record does not automatically disqualify you from being accepted into a technical college or trade school. Other formerly incarcerated people have earned certificates and degrees that helped them start a new career, and so can you. However, some convictions may disqualify you or make it unlikely to be employed in certain job fields. Licensed professions like child care, social work, medicine and finance are regulated by state and federal laws that prevent people with certain criminal convictions from entering those fields. For example, convictions related to manufacturing or delivery of drugs prevents someone from providing child or elder care in a Department of Social and Health Services licensed facility.10 A sex conviction may disqualify you or make it unlikely to work in the health care field. A theft related conviction can make it unlikely to work in accounting. Technical schools may require you to pass a background check for some programs—such as programs to be a pharmacy technician, dental assistant, or veterinary assistant.
        </Typography>
        <br />
        <Typography className={classes.leftAlignedTextData}>
          Because your conviction(s) may disqualify you from certain jobs or cause poor likelihood of employment in some careers, it’s important to choose your education path carefully. We recommend first talking with your local reentry navigator (see below) about your education options. We also recommend talking with an admissions advisor or another appropriate staff member at the college before you apply. Talking with them and disclosing the type of conviction(s) you have will help them inform you what programs/career paths are better options than others. This can help you identify educational programs that interest you and have a good outlook for employment, while preventing you from spending time and money on a degree or certification that has poor likelihood of employment. To meet with an admissions advisor, call or email the college to set up a meeting. Let them know you’re interested in applying to the college and would like to talk with an admissions advisor to learn about your options, given that you have a past conviction
        </Typography>
        <br />
        <Typography className={classes.leftAlignedTextData}>
          Some colleges may ask about past convictions during the application process. It’s important to be honest about your history. Lying about your conviction history can result in your application being denied, and if a school finds out that you were dishonest on your application after you’ve already been admitted, you may be expelled. While some colleges ask about conviction history during the application process, not all consider it in their final decision. In addition, an applicant with a criminal record may be asked to provide further information, such as a letter of explanation, a letter from a corrections officer, or a personal interview.
        </Typography>
        <br />
        <Typography className={classes.leftAlignedTextData}>
          To learn more about how your conviction may affect your education, read the <a href="https://wareentryguide.org/education-and-loans/" target="_blank" rel="noreferrer">Education and Loans section of Washington’s Reentry Guide</a>.
        </Typography>

      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Typography variant="h5">
          Free College Navigation for Formerly Incarcerated People
        </Typography>
        <Typography className={classes.leftAlignedTextData}>
          Help is available for formerly incarcerated people who want to learn how their conviction affects going to college, what their options are, how to proceed with the application process, how to apply for financial aid, and more.
        </Typography>
        <br />
        <Typography className={classes.leftAlignedTextData}>
          Reentry Scholars is a free support service that specializes in helping formerly incarcerated people make education and career choices. You can meet with a reentry navigator and they will provide you with.
        </Typography>

        <List>
          <ListItem>
            <Typography>
              •	college navigation
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              •	academic and career counseling
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              •	advocacy and support
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              •	peer mentoring
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              •	leadership and career development
            </Typography>
          </ListItem>
        </List>

        <Typography className={classes.leftAlignedTextData}>
          Meeting with your local reentry navigator is a great first step in learning about your educational options. Because reentry navigators specialize in helping formerly incarcerated people, they have in-depth understanding of how to best help you and will provide you with valuable advice and guidance. We highly recommend contacting your local reentry navigator before reaching out to an admissions counselor or career advisor at the college you’re interested in. Many formerly incarcerated people have been helped by this program and so can you.
        </Typography>
      </Grid>

      <Typography variant="h5">
        Technical Professional Programs in Thurston County
      </Typography>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5" >
            South Puget Sound Community College (SPSCC) Professional Technical Programs
          </Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5">
            Program Options
          </Typography>
          <Typography className={classes.leftAlignedtextData}>
            While SPSCC is a community college, it also offers professional technical programs for certificates and degrees in many different job trades. Professional technical programs provide you with the knowledge, hand-on training, and skills needed for your career. Some of their technical programs include:
          </Typography>

          <List>
            <ListItem>
              <Typography>
                •	Automotive Technology
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Culinary Arts
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Machining Technologies
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Paralegal
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Craft Brewing & Distilling
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Dental Assisting
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Medical Assisting
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Welding Technology
              </Typography>
            </ListItem>
          </List>

          <Typography className={classes.leftAlignedTextData}>
            Their <a href="https://spscc.edu/areas/professional-technical" target="_blank" rel="noreferrer">full list of professional technical programs</a> shows all the programs they offer, how long each program is, what type of jobs it leads towards, and the classes that are in each program.
          </Typography>
          <br />
          <Typography className={classes.leftAlignedTextData}>
            Technical programs that offer certificates typically range from 2 quarters to 6 quarters. Technical programs that offer Associates in Applied Sciences are typically 9 quarters.
          </Typography>

          <Typography variant="h5">
            Academic Advising
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Before reaching out to SPSCC to learn which educational programs lead to career fields that are more employable and less employable due to your charge(s), we highly recommend first reaching out to your local reentry navigator. Your reentry navigator specializes in providing formerly incarcerated people with college navigation, academic and career counseling, financial aid guidance, and much more (all for free).
          </Typography>
          <br />
          <Typography className={classes.leftAlignedTextData}>
            While SPSCC doesn’t have a reentry navigator for formerly incarcerated people, they have a social worker/case manager in their <a href="https://spscc.edu/students/personal-support" target="_blank" rel="noreferrer">Personal Support Center</a> that can provide some initial helpful support. It may help to first contact their social worker to learn what educational programs lead to career fields that are more employable and less employable due to your charge(s). While staff in their <a href="https://spscc.edu/students/advising-support" target="_blank" rel="noreferrer">Advising, Career, and Transfer Center</a> can also help plan your educational options and needs, their support center is a good first point of contact.
          </Typography>

          <Typography variant="h5">
            How to Apply
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To become a student at SPSCC, visit their <a href="https://spscc.edu/apply/newstudents" target="_blank" rel="noreferrer">new & returning student admission</a> webpage for information on how to apply for admission. While you do need a high school diploma or GED to be accepted, you don’t need to take the Scholastic Aptitude Test (SAT) to be accepted.
          </Typography>
          <Typography variant="h5">
            Cost and Financial Aid
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            For information for the current year’s cost visit the <a href="https://spscc.edu/tuition-fees" target="_blank" rel="noreferrer">SPSCC tuition & fees</a> webpage. Financial aid is available for low- and middle-income students, and can significantly reduce the cost of tuition. For financial aid information and help, you can contact their financial aid office at (360) 596-5241, financialaid@spscc.edu, or visit the <a href="https://spscc.edu/financial-aid" target="_blank" rel="noreferrer">SPSCC financial aid</a> webpage. You can also learn more by visiting the financial aid section of our website.
          </Typography>
          <Typography variant="h5">
            More Information
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            To learn more, you can contact their:
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	Personal Support Center at (360) 596-5523 and basicneeds@spscc.edu
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Advising, Career, and Transfer Center at (360) 596-5267 and advising@spscc.edu
              </Typography>
            </ListItem>
          </List>
        </Container>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" className={classes.centeredText}>Technical Colleges Near Thurston County</Typography>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">Clover Park Technical College (CPTC)</Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
          <Typography variant="h5">
            Program Options
          </Typography>
          <Typography className={classes.leftAlignedTextData}>
            Clover Park Technical College offers a variety of programs for certificates and degrees in technical trades. Some of their professional technical programs include:
          </Typography>
          <List>
            <ListItem>
              <Typography>
                •	Automotive Technician
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Cosmetology
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Dental Assistant
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Forklift Certification
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Medical Assistant
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Construction Technology
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Culinary arts
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Flagger Certification
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	HVAC Technician
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                •	Welding Technology
              </Typography>
            </ListItem>
          </List>

          <Typography className={classes.leftAlignedTextData}>
            Their <a href="https://www.cptc.edu/programs-alpha" target="_blank" rel="noreferrer">full list of programs</a> shows all the programs they offer, what certificates/degrees each program has, how long certificates/degrees take to get, what type of jobs they lead towards, and the classes that are in each program. Some of the certificates and degrees explain how certain criminal convictions may affect your outlook for employment.
          </Typography>
          <Typography variant="h5">Academic Advising</Typography>
          <Typography className={classes.leftAlignedTextData}>
            Before reaching out to Clover Park Technical College to learn which educational programs lead to career fields that are more employable and less employable due to your charge(s), we highly recommend first reaching out to your local reentry navigator. Your reentry navigator specializes in providing formerly incarcerated people with college navigation, academic and career counseling, financial aid guidance, and much more (all for free). Because this college is outside the area of support that your local reentry navigator supports, they will provide you initial support and then connect you with the reentry navigator that helps people with Clover Park Technical College.
          </Typography>
          <br />
          <Typography className={classes.leftAlignedtextData}>
            For additional help with academic and career planning, and to learn how your conviction(s) may affect your program/career path choices, contact their <a href="https://www.cptc.edu/advising" target="_blank" rel="noreferrer">Advising Office</a> at (253) 589-5548, advising@cptc.edu, or meet with them during a free <a href="https://www.cptc.edu/info-sessions" target="_blank" rel="noreferrer">online information session.</a>
          </Typography>

          <Typography variant="h5">How to Apply</Typography>
          <Typography className={classes.leftAlignedTextData}>
            To become a student at CPCT, visit their <a href="https://www.cptc.edu/apply" target="_blank" rel="noreferrer">admissions</a> webpage for information on how to apply for admission. While you do need a high school diploma or GED to be accepted, you don’t need to take the Scholastic Aptitude Test (SAT) to be accepted.
          </Typography>

          <Typography variant="h5">Cost and Financial Aid</Typography>
          <Typography className={classes.leftAlignedTextData}>
            For information for the current year’s cost visit the <a href="https://www.cptc.edu/tuition" target="_blank" rel="noreferrer">CPTC tuition & fees</a> webpage. Financial aid is available for low- and middle-income students, and can significantly reduce the cost of tuition. For financial aid information and help, you can contact their financial aid office at (253) 589-5660, finaid@cptc.edu, or visit the <a href="https://www.cptc.edu/pay-for-cptc" target="_blank" rel="noreferrer">CPTC financial aid</a> webpage. You can also learn more by visiting the financial aid section of our website.
          </Typography>
          <Typography variant="h5">More Information</Typography>
          <Typography className={classes.leftAlignedTextData}>
            To learn more, you can watch a free <a href="https://www.cptc.edu/info-sessions" target="_blank" rel="noreferrer">online information session</a> that occurs twice a month to help prospective students learn about the college.
          </Typography>
        </Container>
      </Grid>

      <Grid item xs={12} className={classes.borderedGrid}>
        <Container className={classes.borderedCenteredText}>
          <Typography variant="h5">Bates Technical College</Typography>
        </Container>
        <Container className={classes.borderedCenteredTextNoUB}>
        <Typography variant="h5">
          Program Options
        </Typography>
        <Typography className={classes.leftAlignedTextData}>
        Bates Technical College offers a variety of programs. Some of their professional technical programs include:
        </Typography>
        <List>
          <ListItem>
            <Typography>
            •	Administrative Assistant
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Automotive Technology
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Carpentry
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Culinary Arts
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	IT Specialist
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Machinist
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Auto Body Rebuilding
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Barber
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Commercial Truck Driving
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	HVAC
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Software Development
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
            •	Welding
            </Typography>
          </ListItem>
        </List>

        <Typography className={classes.leftAlignedTextData}>
        Their <a href="https://www.batestech.edu/career-pathways/" target="_blank" rel="noreferrer">full list of programs</a> shows all the programs they offer, how long each program is, what type of jobs they lead toward, what classes are in each program, and the average salary for the field each program leads towards.
        </Typography>
        <Typography variant="h5">Academic Advising</Typography>
        <Typography className={classes.leftAlignedTextData}>
        Before reaching out to Bates Technical College to learn which educational programs lead to career fields that are more employable and less employable due to your charge(s), we highly recommend first reaching out to your local reentry navigator. Your reentry navigator specializes in providing formerly incarcerated people with college navigation, academic and career counseling, financial aid guidance, and much more (all for free). Because this college is outside the area of support that your local re-entry navigator supports, they will provide you initial support and then connect you with the reentry navigator that helps people with Bates Technical College.
        </Typography>
        <br />
        <Typography className={classes.leftAlignedtextData}>
        For additional help with academic and career planning, and to learn how your conviction(s) may affect your program/career path choices, contact their admissions staff to talk with the appropriate person. The admissions office phone number is (253) 680-7002.
        </Typography>

        <Typography variant="h5">How to Apply</Typography>
        <Typography className={classes.leftAlignedTextData}>
        To become a student at CPCT, visit their <a href="https://www.batestech.edu/getting-started/" target="_blank" rel="noreferrer">admissions</a> webpage for information on how to apply for admission. While you do need a high school diploma or GED to be accepted, you don’t need to take the Scholastic Aptitude Test (SAT) to be accepted.
        </Typography>

        <Typography variant="h5">Cost and Financial Aid</Typography>
        <Typography className={classes.leftAlignedTextData}>
        For information for the current year’s cost visit the Bates Technical College <a href="https://www.batestech.edu/tuition-and-fees/" target="_blank" rel="noreferrer">tuition & fees</a> webpage. Financial aid is available for low- and middle-income students, and can significantly reduce the cost of tuition. For financial aid information and help, you can contact their financial aid office at (253) 680-7020, financialaid@batestech.edu, or visit the their <a href="https://www.batestech.edu/pay-for-college/" target="_blank" rel="noreferrer">financial aid</a> webpage. You can also learn more by visiting the financial aid section of our website.
        </Typography>
        <Typography variant="h5">More Information</Typography>
        <Typography className={classes.leftAlignedTextData}>
        The Bates College Enrollment Team offers <a href="https://www.batestech.edu/information-sessions/" target="_blank" rel="noreferrer">free online information sessions</a> to answer questions of students interested in attending the college. They can answer questions about admissions, academic programs, program costs, scholarships, financial aid, and more.
        </Typography>
        </Container>
      </Grid>

    </Grid>
  )
}

export default Education