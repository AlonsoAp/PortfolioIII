import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layout/article";


const AndroidApp = () => {

    
    return(
        <Layout title="App Android - Proyect">
            <Container>
                <Title>
                    App mobile android  <Badge>2019</Badge>
                </Title>
                <P>
                 a app developed in android Studio with Firebase and use API google maps
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="../404.js" target="_blank">
                        https://apppedidos.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>API used</Meta>
                        <Link href="https://developers.google.com/maps" target="_blank">
                        https://developers.google.com/maps<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                       <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>kotlin, Firebase, Android Studio</span>
                    </ListItem>
                    
                </List>
               
                <SimpleGrid gap={2} columns={2} >
              
                <WorkImage src={"/images/works/android/android4.png "} alt='android'/>
                <WorkImage src={"/images/works/android/android5.png "} alt='android'/>
                <WorkImage src={"/images/works/android/android6.png "} alt='android'/>
                <WorkImage src={"/images/works/android/android7.png "} alt='android'/>
                <WorkImage src={"/images/works/android/android8.png "} alt='android'/>
                <WorkImage src={"/images/works/android/android9.png "} alt='android'/>
                </SimpleGrid>
                <WorkImage src={"/images/works/android/android10.png "} alt='android'/>
                <WorkImage src={"/images/works/android/android11.png "} alt='android'/>
            </Container>
        </Layout>
    )
}

export default AndroidApp