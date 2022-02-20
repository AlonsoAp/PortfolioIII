import { Container, Badge, Link, List, ListItem,  useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title,  Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layout/article";
import UseTabsImages from "../../components/UseTabsImages";


const ReactNative = () => {

    
    return(
        <Layout title="App react-native - Proyect">
            <Container>
                <Title>
                    App Maps  <Badge>2019</Badge>
                </Title>
                <P>
                a app developed in react-native
                with API google maps and using EXPO CLI  
                </P>
                <List ml={4} my={4} >
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="../404.js" target="_blank">
                        https://appmap.com <ExternalLinkIcon mx="2px"/>
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
                       <span>IOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React-native, expo, API GOOGLE</span>
                    </ListItem>
                    
                </List>
                <UseTabsImages 
              
                nameTab={"Home"}
                nameTabII={"List Country"}
                nameTabIII={"Modal"}
                nameTabIV={"Results"}
                // nameTabV={""}
                // nameTabVI={""}
                src={"/images/works/reactnativeapp/react.jpg"} 
                srcD={useColorModeValue("/images/works/fondotroll2.png" , "/images/works/fondotroll.png")}
                srcII={"/images/works/reactnativeapp/react1.jpg"}
                srcDII={useColorModeValue("/images/works/fondotroll2.png" , "/images/works/fondotroll.png")}
                srcIII={"/images/works/reactnativeapp/react2.jpg"}
                srcDIII={useColorModeValue("/images/works/fondotroll2.png" , "/images/works/fondotroll.png")}
                srcIV={"/images/works/reactnativeapp/react3.jpg"}
                srcDIV={useColorModeValue("/images/works/fondotroll2.png" , "/images/works/fondotroll.png")}
                />
            </Container>
        </Layout>
    )
}

export default ReactNative