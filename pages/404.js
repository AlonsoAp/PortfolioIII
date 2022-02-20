import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button  } from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'

const CatStyle = styled.span`

display: inline-flex;
align-items: center;
height: 10px;
padding: 10px;
margin: 10px;
margin-left: 30%;

&:hover img{
    transform: rotate(20deg);
}
`


const NotFound = () =>{
    const cat = `/images/catsad.png`

    return(
        <Container>
            <Heading as="h1">Not Found ):</Heading>
            <br/>
            <Text>The page you&apos;re looking for was not found</Text>  
            <Divider my={6}/> 
            <CatStyle>
            <Image src={cat} width={100} height={100} alt='cat' />
            </CatStyle>
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>

        </Container>
    )
}

export default NotFound