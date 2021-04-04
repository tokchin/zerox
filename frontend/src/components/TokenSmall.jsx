import React from 'react'
import { Box, Image, WrapItem, Text } from '@chakra-ui/react'

const TokenName = ({ token }) => {
  return (
    <Box maxWidth="75px">
      <Box pl={1} fontSize="xs" textColor="gray.400" m={0} align="left">
        {token.contractName}
      </Box>
      <Box pl={1} align="left">
        {token.name}
      </Box>
    </Box>
  )
}
const TokenSmall = ({ token }) => {
  return (
    <WrapItem>
      <Box
        border="1px"
        borderRadius="md"
        borderColor="gray.200"
        width="170px"
        height="230px"
        align="left"
      >
        <Image
          src={token.imageUrl}
          boxSize="170px"
          borderBottom="1px"
          borderBottomColor="gray.200"
        />
        <TokenName token={token} />
        <Text pr={2} align="right">
          price
        </Text>
      </Box>
    </WrapItem>
  )
}
export default TokenSmall
