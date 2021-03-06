import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,  Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layout/article";
import UseTabsImages from "../../components/UseTabsImages";


const NewsBot = () => {

    
    return(
        <Layout title="App web NewsBot - Proyect">
            <Container>
                <Title>
                    App Web News Bot voice and Payment gateway with stripe <Badge>2020</Badge>
                </Title>
                <P>
                a news web page developed in react JS
                with stripe and using a bot to navigate between news from an API and payment methods  
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="../404.js" target="_blank">
                        https://newsbot.com <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>API used</Meta>
                        <Link href="https://newsapi.org" target="_blank">
                        https://newsapi.org/<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                       <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React JS, Stripe, Node JS, Material UI</span>
                    </ListItem>
                </List>
                <UseTabsImages 
                nameTab={"Home"}
                nameTabII={"Error"}
                nameTabIII={"Result"}
                nameTabIV={"Home/Error"}
                src={"/images/works/reactapp/home.png"} 
                srcD={"/images/works/reactapp/homeR.png"}
                srcII={"/images/works/reactapp/news.png"}
                srcDII={"/images/works/reactapp/newsR.png"}
                srcIII={"/images/works/reactapp/premium.png"}
                srcDIII={"/images/works/reactapp/premiumR.png"}
                srcIV={"/images/works/reactapp/pay.png"}
                srcDIV={"/images/works/reactapp/payR.png"}
                />
            </Container>
        </Layout>
    )
}

export default NewsBot