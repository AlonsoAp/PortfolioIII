import { Container , Heading , SimpleGrid } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem , WorkAppGridItem } from "../components/grid-item";
import thumbPhpWeb from '../public/images/works/php/php1.png'
import thumbwebLimon from '../public/images/works/limon/logim.png'
import thumbReact from '../public/images/works/reactNative/react.jpg'
import thumbAndroid from '../public/images/works/android/android9.png'
import thumbbot from '../public/images/works/botReact/bot.png'
import Layout from "../components/layout/article"
import thumbPayment from '../public/images/works/keos/errorrSe.png'
import { BioSection, BioYear } from "../components/bio";



const Works = () => {
    return(
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>

            <Section>
                <WorkGridItem id="webLimon" title="App Web logistic in Peru" thumbnail={thumbwebLimon}>
                 A app web with Next JS - FrontEnd 
                </WorkGridItem>
            </Section>

            <Section>
                <WorkGridItem id="webPayment" title="Payment gateway in Colombia" thumbnail={thumbPayment}>
                 A app web with Next JS - FrontEnd 
                </WorkGridItem>
            </Section>

            <Section>
                <WorkGridItem id="newsbot" title="Bot News React" thumbnail={thumbbot}>
                 A web React with a bot contextual voice assistant and use API News
                </WorkGridItem>
            </Section>
            <Section>
                <WorkGridItem id="college" title="RSS College PHP" thumbnail={thumbPhpWeb}>
                 A web Admin with PHP and Mysql
                </WorkGridItem>
            </Section>
            
            
{/* 
            <Section>
                <WorkGridItem id="game" title="VideoGame Unity" thumbnail={thumbGame}>
                 A VideoGame with C# and Unity 
                </WorkGridItem>
            </Section>

            <Section>
                <WorkGridItem id="game" title="VideoGame Unity" thumbnail={thumbGame}>
                 A VideoGame with C# and Unity 
                </WorkGridItem>
            </Section>
             */}

            
            <BioSection>
            <BioYear>Mobile Apps</BioYear>
            </BioSection>
            <br/>
            <Section>
                <WorkAppGridItem id="react-native" title="App React-native" thumbnail={thumbReact}>
                 A app with react-native and geolation by google
                </WorkAppGridItem>
            </Section>
            
            <Section>
                <WorkAppGridItem id="android" title="App Android" thumbnail={thumbAndroid}>
                 A app with kotlin and firebase by google
                </WorkAppGridItem>
            </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works;

