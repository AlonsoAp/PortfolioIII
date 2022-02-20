import { Container, Box,
  Heading,  Image, 
  useColorModeValue, Button, 
   ListItem , List, Icon , Link} from "@chakra-ui/react"
import Section from "../components/section"
import Paragraph from "../components/paragraph"
import { ChevronRightIcon} from "@chakra-ui/icons"
import NextLink from 'next/link'
import { BioSection, BioYear } from "../components/bio"
import Layout from "../components/layout/article"
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'


const Page =() => {

 const IconCircle = () => (
   <>
     <Icon viewBox='0 20 200 200' color={useColorModeValue('whiteAplha.400' , 'whiteAlpha.900')}>
   <path
     fill='currentColor'
     d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
   />
   </Icon>
   </>
   
 )


 return (
 <Layout>
  <Container>
    <Box borderRadius="lg" bg={useColorModeValue('whiteAplha.500' , 'whiteAlpha.200')} p={3} mb={6} aling="center">
      Hello, I&apos;m a Junior Software Developer based in Perú!
    </Box>

    <Box display={{md:'flex'}}>
     <Box flexGrow={1}>
       <Heading as="h2" variant="page-tittle">
        Ernesto Alonso
       </Heading>
       <p>FrontEnd - Mobile ( Developer )</p>
     </Box>
     <Box 
       flexShrink={0} 
       mt={{base: 4, md: 0}}
       ml={{md: 6}}
       align="center">
       <Image borderColor="whiteAlpha.800"
       borderWidth={2}
       borderStyle="solid"
       maxWidth="100px"
       display="inline-block"
       borderRadius="full"
       src="/images/alonso.jpg"
       alt="profile Image"/>
     </Box>
    </Box>

    <Section delay={0.1}>
     <Heading as="h3" variant="section-title">
       Work
     </Heading>
     <br/>
     <Paragraph>
         Hi, I&apos;m Alonso is Junior Software Developer based in Perú with a passion for digital services. 
         I have a skill that allows you to help people.
         When not online, he loves hanging out with his camera and play videogames. 
         Currently,he&apos;s still learning and improving.
         If you are interested in working with me or hiring me, you can contact me through
         my linkedin or my social networks.
         I&apos;m excited that we create the applications of the future!.
     </Paragraph>
     <Box align="center" my={4}>
       <NextLink href="/works">
         <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal" >
           My Portfolio
         </Button>
       </NextLink>
     </Box>
    </Section>

    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
       Bio
      </Heading>
      <br/>
      <BioSection>
        <BioYear>1997</BioYear>
        Born in Lima, Perú.
      </BioSection>
      <br/>
      <BioSection>
        <BioYear>2020</BioYear>
        Graduate of development of Information Technologies at Institute 
        CIBERTEC  Lima - Perú
      </BioSection>
      <br/>
      <BioSection>
        <BioYear>2021</BioYear>
         Worked at Keos ( payment gateway )
         <br/> 
         FrontEnd Developer - React | Next / React-native 
         <br/>

         Lima - Perú
      </BioSection>
      <br/>
      <BioSection>
        <BioYear>2022</BioYear>
         Worked at RPA Latam
         <br/> 
         FrontEnd Developer - React / React-native <br/>
         Lima - Perú
      </BioSection>
    </Section>

    <Section delay={0.3}>
       <Heading as="h3" variant="section-title">
        Technologies
       </Heading>
       <br/>
       <Paragraph>
       <BioSection>
        <BioYear>FrontEnd</BioYear>
         <br/>
         <BioYear><IconCircle/></BioYear>
         React.js | Next.js 
         <br/> 
         <BioYear><IconCircle/></BioYear>
         JavaScript | HTML | CSS 
         <br/>
         <BioYear><IconCircle/></BioYear>
         TailWind UI | Material UI | Chakra UI 
       </BioSection>

       <BioSection>
       <BioYear>BackEnd</BioYear>
         <br/>
         <BioYear><IconCircle/></BioYear>
         Node.js | Django
         <br/> 
         <BioYear><IconCircle/></BioYear>
         JavaScript | Python 
         <br/>  
       </BioSection>

       <BioSection>
       <BioYear>DataBase</BioYear>
         <br/>
         <BioYear><IconCircle/></BioYear>
         PostgresSQL | SQLserver | MySQL
         <br/> 
         
       </BioSection>

       <BioSection>
       <BioYear>Mobile</BioYear>
         <br/>
         <BioYear><IconCircle/></BioYear>
         Kotlin(Android) | Dart(Flutter) | react-native(Hybrid)
         <br/> 
         <BioYear><IconCircle/></BioYear>
         Firebase | SQLite | mongoDB
         <br/>
       </BioSection>

       <BioSection>
       <BioYear>Control Versions</BioYear>
         <br/>
         <BioYear><IconCircle/></BioYear>
         Github | Gitlab
         <br/>
         <BioYear><IconCircle/></BioYear>
         Git
         <br/> 
         
       </BioSection>
       <BioSection>
       <BioYear>VideoGames</BioYear>
         <br/>
         <BioYear><IconCircle/></BioYear>
         Unity
         <br/> 
         <BioYear><IconCircle/></BioYear>
         C#
         <br/>
        
       </BioSection>
       </Paragraph>
     </Section>

   <Section>
     <Heading as="h3" variant="section-title">Skills</Heading>
     <br/>
     <Paragraph>
       Team worked, Trello, Slack, Meets, methodology SCRUM, Confidence, Humility,
       Empathy,
       Communication,
       Collaboration,
       Adaptability

     </Paragraph>
   </Section>

    <Section delay={0.3}>
       <Heading as="h3" variant="section-title">
         I ♥
       </Heading>
       <br/>
       <Paragraph>
         VoxelArt, Music,{' '}
         {/* <Link href="prox" target="_blank">
           Drawing
         </Link> */}
         Develop VideoGames
         , Playing VideoGames,{' '}
         {/* <Link href="prox.." target="_blank">
           Photography
         </Link> */}
         , Yoga, Horticulture, Machine Learning
       </Paragraph>
     </Section>

     <Section delay={0.3}>  
         <Heading as="h3" variant="section-title">
           On the web
         </Heading>
         <br/>
         <List>
           <ListItem>
             <Link href="https://github.com/AlonsoAp" target="_blank">
               <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                 @AlonsoAp
               </Button>
             </Link>
           </ListItem>
           
           <ListItem>
             <Link href="https://www.linkedin.com/in/ernesto-alonso-aparicio-rojas-a7482719a/" target="_blank">
               <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                 @ErnestoAlonsoAparicioRojas
               </Button>
             </Link>
           </ListItem>

           <ListItem>
             <Link href="https://www.instagram.com/alonso_ap1/" target="_blank">
               <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoInstagram}/>}>
                 @Alonso_Ap01
               </Button>
             </Link>
           </ListItem>

           <ListItem>
             <Link href="https://twitter.com/AlonsoApqwq" target="_blank">
               <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>
                 @AlonsoAp
               </Button>
             </Link>
           </ListItem>
         </List>
     </Section>
  </Container>
 </Layout>
 )
}

export default Page