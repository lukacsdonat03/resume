import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Slides } from "./components/Carousel";
import Accordion from './components/Accordion.jsx'
import me from './img/me.jpg'
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "#252525" }}>
      <Typography
        variant="h2"
        align="center"
        color={"white"}
        paddingTop={"25px"}
        paddingBottom={"125px"}
      >
        <Grid
          container
          spacing={5}
          alignItems={"center"}
          alignContent={"center"}
          justifyContent={"center"}
        >
          <Grid item ><Typography variant="h2" fontFamily={'cursive'} ><i>Resume of Lukács Donát</i></Typography></Grid>
          <Grid item>
            <Avatar
              alt="Lukács Donát"
              src={me}
              sx={{ width: 156, height: 156 ,}}
              variant="rounded"
            />
          </Grid>
        </Grid>
      </Typography>
      <Accordion />
      <Container sx={{ paddingTop: "120px",  marginBottom:'55px'}}>
        <Slides />
      </Container>
      
      <Grid container>
      <Grid item sm={6}>
      <Typography
        variant="h3"
        textAlign={"center"}
        color={"white"}
        marginLeft={'455px'}
        marginTop={'275px'}
        paddingTop={"25px"}
        paddingBottom={"125px"}
        sx={{ fontFamily: "cursive" }}
      >
        Get to know me
      </Typography>
</Grid>
<Grid item  sm={6}>
            <img id="me" src={me} alt="Lukács Donát" height={'255px'} style={{float:'right',marginRight:'555px',marginTop:'225px',borderRadius:'10px', boxShadow: '0px 2px 15px  rgba(205, 205, 205, 0.5)',}}/>
        </Grid>
      </Grid>
      <Container> 
      <Typography variant="h5" color={'white'} marginBottom={'25px'} marginLeft={'25px'}>
        Beginning
      </Typography>
      <Typography variant="h6" color={'white'} marginLeft={'25px'} sx={{textIndent:'1rem'}}>
        I was born 16th of January 2003 in Nyíregyháza. As a child I was already attractted to computers. <br />
        In High School I chose Computer science as my profession.
        <br />
        After all I studied in Nyíregyházi SZC Széchenyi István Technikum which is a great IT school.
        <br />
        I still passionate about this occuaption, expecially programming.
      </Typography>
      <Typography variant="h5" color={'white'} marginBottom={'25px'} marginLeft={'25px'}>
        Studies
      </Typography>
      <Typography variant="h6" color={'white'} marginLeft={'25px'} sx={{textIndent:'1rem'}}>
        I have final exam that contains mostly 5 grades. I have advanced level final exam in IT (5) and English (5). I achived a profession as <b>System Operator</b>.
        </Typography>
        <Typography variant="h6" color={'white'} marginLeft={'25px'} sx={{textIndent:'1rem'}}>
            After final exam I stayed one more year in Széchenyi to achive the <b>Software developer and tester</b> technician course that I will finish in the beginning of June.
        </Typography>
        <Typography variant="h6" color={'white'} marginLeft={'25px'} sx={{textIndent:'1rem'}}>
            In September I continue my studies at the University of Nyíregyháza as a <b>Software Engineer</b>
        </Typography>
        <Typography variant="h6" color={'white'} marginLeft={'25px'} sx={{textIndent:'1rem'}} marginTop={'15px'}>
            I want to mention that I participate several competitions in High School and I made it to the final in 2022 a competitian called ÁSZÉV which is a competitions of professions in Hungary.
            Also I participate another Competition where I did not get to the finals but I achice enough points to get partly exemption from my exams in the Software Developer and tester course.
        </Typography>
        <Typography variant="h5" color={'white'} marginBottom={'25px'} marginLeft={'25px'} marginTop={'25px'}>
        Hobbies
      </Typography>
      <Typography variant="h6" color={'white'} marginLeft={'25px'} sx={{textIndent:'1rem'}}>
        My main hobby is programming of course but I like sport, expecially basketball. <br />
        I go to the gym regularly as I am a sporty guy. I like also hiking, biking and playing vidio games with my friend.
        </Typography>
        <Typography variant="h5" color={'white'} marginBottom={'25px'} marginLeft={'25px'} marginTop={'25px'}>
        Personality
      </Typography>
      <Typography variant="h6" color={'white'} marginLeft={'25px'} sx={{textIndent:'1rem'}}>
       I consider myself as a friendly and kind person which my friends can confirm as well.
       <br />
       In addition I am communicative, proactive and hard-working. Also I'm a quick learner and I have willingness to learn anything.
       <br />
       My goal is to get a job as a software developer or web developer and fulfill my dream to become a professional developer and help a company to achive it's goal.
       <br />
       </Typography>
       <Box marginLeft={'35px'} marginTop={'35px'}>
       </Box>
       </Container>
      <Footer />
    </div>
    </>
  );
}

export default App;
