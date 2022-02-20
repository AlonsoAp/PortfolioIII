import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,  Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layout/article";
import UseTabsImages from "../../components/UseTabsImages";


const WebLimon = () => {

    
    return(
        <Layout title="App web logistic - limON">
            <Container>
                <Title>
                    App Web Logistic in Perú <Badge>2021</Badge>
                </Title>
                <P>
                A page developed for the administration of users, countries, companies, etc. logistically   
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="../404.js">
                        https://limON.pe <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>LinkedIN</Meta>
                        <Link href="../404.js">
                        https://www.linkedin.com/in/limON<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                       <span>Windows/macOS/Linux/IOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Next.JS, Tailwind UI , Django, Postgress, Docker</span>
                    </ListItem>
                    
                </List>
                <UseTabsImages 
              
                nameTab={"Login"}
                nameTabII={"Dashboard"}
                nameTabIII={"Register Users"}
                nameTabIV={"Maps"}
                // nameTabV={""}
                // nameTabVI={""}
                src={"/images/works/limonapp/logim.png"} 
                srcD={"/images/works/limonapp/loginR.png"}
                srcII={"/images/works/limonapp/home.png"}
                srcDII={"/images/works/limonapp/homeR.png"}
                srcIII={"/images/works/limonapp/register.png"}
                srcDIII={"/images/works/limonapp/registerR.png"}
                srcIV={"/images/works/limonapp/mpas.png"}
                srcDIV={"/images/works/limonapp/mpasR.png"}
                />
            </Container>
        </Layout>
    )
}

export default WebLimon