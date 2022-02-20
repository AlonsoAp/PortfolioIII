import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,  Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layout/article";
import UseTabsImages from "../../components/UseTabsImages";


const Work = () => {

    
    return(
        <Layout title="RSS collegue Admin">
            <Container>
                <Title>
                    RSS College Admin<Badge>2019</Badge>
                </Title>
                <P>
                    Administration Web and chat online between users
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="../404.js" target="_blank">
                            https://www.rsscollege.com/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Facebook</Meta>
                        <Link href="https://www.facebook.com/">
                            https://www.facebook.com/rsscollegue <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                       <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, Bootstrap, MYSQL</span>
                    </ListItem>
                    
                    
                </List>
                <UseTabsImages 
              
                nameTab={"Home"}
                nameTabII={"Login"}
                nameTabIII={"Dashboard"}
                nameTabIV={"Chat"}
                src={"/images/works/php/php1.png "} 
                srcD={"/images/works/php/php8.jpg"}
                srcII={"/images/works/php/php2.png"}
                srcDII={"/images/works/php/php9.jpg"}
                srcIII={"/images/works/php/php3.png "}
                srcDIII={"/images/works/php/php10.jpg"}
                srcIV={"/images/works/php/php4.png"}
                srcDIV={"/images/works/php/php5.png"}
                />
               
            </Container>
        </Layout>
    )
}

export default Work