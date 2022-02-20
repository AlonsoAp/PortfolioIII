import { Container , Heading , SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layout/article";
import { PortfolioTwoGridItem, PortfolioOneGridItem } from "../components/grid-item";
import thumbSecondPort from '../public/images/works/SecondPort.png'
import thumbFirstPort from '../public/images/works/FirstPort.png'



const Evolution = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                My Previus Portfolio&apos;s
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6} >
            <Section>
                <PortfolioOneGridItem id="first" title="First Porfolio - 2019" thumbnail={thumbFirstPort}> 
                - 5th cycle student 
                - I worked in another field 
                - Made with HTML CSS and JavaScript
                - Without much experience
                - Programming in my free time 
                </PortfolioOneGridItem>
            </Section>  
            <Section>
                <PortfolioTwoGridItem id="first" title="Second Porfolio - 2020" thumbnail={thumbSecondPort}> 
                - 6th last cycle student 
                - autodidact 
                - learning new technologies
                - I worked in another field 
                - Programming in my free time 
                - Always trying to improve
                </PortfolioTwoGridItem>
            </Section>   
            </SimpleGrid>
        </Container>
        </Layout>
        
    )
}

export default Evolution;

