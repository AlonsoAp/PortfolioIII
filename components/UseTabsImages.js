import {Tabs, TabList, TabPanels, Tab, TabPanel, Image, useColorModeValue } from '@chakra-ui/react';
import React from 'react';



const UseTabsImages = ({src ,srcD, srcII,srcDII,srcIII,srcDIII,srcIV,srcDIV, srcV, srcDV,
    nameTab,
    nameTabII, 
    nameTabIII,
    nameTabIV,
    // nameTabV,
    // nameTabVI,
    }) => {

     
    return (
        <>
        <Tabs variant='soft-rounded' size='sm' align={'center' } colorScheme={useColorModeValue('green' , 'teal')}>
            <TabPanels>
                <TabPanel>
                <Image
                     alt='image'
                    borderRadius="lg" w="full" mb={4}
                    boxSize={'full'}
                    fit='cover'
                    // src='/images/works/php1.png '
                    
                    src={src}
                />
                </TabPanel>

                <TabPanel>
                <Image
                    alt='image'
                    borderRadius="lg" w="full" mb={4}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php1.png '
                    src={srcII}
                />
                </TabPanel>

                <TabPanel>
                <Image
                     alt='image'
                    borderRadius="lg" w="full" mb={4}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php1.png '
                    src={srcIII}
                />
                </TabPanel>

                <TabPanel>
                <Image
                     alt='image'
                    borderRadius="lg" w="full" mb={4}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php1.png '
                    src={srcIV}
                />
                </TabPanel>

                <TabPanel>
                <Image
                     alt='image'
                    borderRadius="lg" w="full" mb={20}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php1.png '
                    src={srcV}
                />
                </TabPanel>
               
            </TabPanels>
            <TabList >
                <Tab >{nameTab}</Tab>
                <Tab >{nameTabII}</Tab>
                <Tab >{nameTabIII}</Tab>
                <Tab >{nameTabIV}</Tab>
                {/* <Tab >{nameTabV}</Tab>
                <Tab >{nameTabVI}</Tab> */}

            </TabList>
            <TabPanels>
                <TabPanel>
                <Image
                 borderRadius="lg" w="full" mb={5}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php8.jpg '
                    src={srcD}
                />
                </TabPanel>

                <TabPanel>
                <Image
                 borderRadius="lg" w="full" mb={5}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php8.jpg '
                    src={srcDII}
                />
                </TabPanel>

                <TabPanel>
                <Image
                 borderRadius="lg" w="full" mb={5}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php8.jpg '
                    src={srcDIII}
                />
                </TabPanel>

                <TabPanel>
                <Image
                 borderRadius="lg" w="full" mb={5}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php8.jpg '
                    src={srcDIV}
                />
                </TabPanel>

                <TabPanel>
                <Image
                 borderRadius="lg" w="full" mb={5}
                    boxSize='full'
                    fit='cover'
                    // src='/images/works/php8.jpg '
                    src={srcDV}
                />
                </TabPanel>
              
            </TabPanels>
        </Tabs>
        
        </>
    )
};


export default UseTabsImages