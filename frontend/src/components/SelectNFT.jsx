import React, { useState } from 'react'
import { Flex, Container, Box, Image, Heading, Button } from '@chakra-ui/react'
import { fetchNftFromEth } from '../modules/opensea'

const BoxNFT = ({ path }) => {
  return (
    <Box m={4}>
      <Image src={path} boxSize="50px" />
    </Box>
  )
}

const DeployContract = () => {
  const [isCopying, setIsCopying] = useState(false)
  const tokens = fetchNftFromEth()
  const displayNfts = tokens
    .slice(0, 3)
    .map((token) => <BoxNFT path={token.imageUrl} />)

  return (
    <Container m={4} align="center">
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        width="350px"
        height="300px"
        p={5}
      >
        <Image src={tokens[0].imageUrl} boxSize="180px" />
        <Heading>{tokens[0].name}</Heading>
      </Box>
      <Flex
        m={4}
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        width="350px"
      >
        {displayNfts}
      </Flex>
      <Button
        isDisabled={isCopying}
        height="70px"
        width="350px"
        variant="outline"
        colorScheme="teal"
        onClick={() => {
          setIsCopying(!isCopying)
        }}
      >
        <Heading fontSize="lg">zerox to Flow</Heading>
      </Button>
    </Container>
  )
}

export default DeployContract
