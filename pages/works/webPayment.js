import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,  Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layout/article";
import UseTabsImages from "../../components/UseTabsImages";


const WebPayment = () => {

    
    return(
        <Layout title="App web payment - Payrabbit">
            <Container>
                <Title>
                    App Web Payment gateway in Colombia <Badge>2021</Badge>
                </Title>
                <P>
                A page developed for managing payments through
                a gateway integrated with a mobile application with react-native
                Payment Gateway  
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://payrabbit.co" target="_blank">
                        https://payrabbit.co <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>LinkedIN</Meta>
                        <Link href="https://www.linkedin.com/company/keos.co/" target="_blank">
                        https://www.linkedin.com/company/keos.co/<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                       <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.JS, WordPress, Flask, Postgress, Docker, Jira</span>
                    </ListItem>
                    
                </List>
                <UseTabsImages 
              
                nameTab={"Home"}
                nameTabII={"Error"}
                nameTabIII={"Result"}
                nameTabIV={"Home/Error"}
                // nameTabV={""}
                // nameTabVI={""}
                src={"/images/works/keos/home.png"} 
                srcD={"/images/works/keos/homeR.png"}
                srcII={"/images/works/keos/errorI.png"}
                srcDII={"/images/works/keos/errorIR.png"}
                srcIII={"/images/works/keos/result.png"}
                srcDIII={"/images/works/keos/resultR.png"}
                srcIV={"/images/works/keos/home.png"}
                srcDIV={"/images/works/keos/errorI.png"}
                />
            </Container>
        </Layout>
    )
}

export default WebPayment