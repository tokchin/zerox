import React from 'react'
import { Container, Wrap } from '@chakra-ui/react'
import { fetchNftFromEth } from '../modules/opensea'
import TokenSmall from './TokenSmall'

const MyTokens = () => {
  const tokens = fetchNftFromEth()
  const displayNfts = tokens.map((token) => <TokenSmall token={token} />)

  return (
    <Container align="center">
      <Wrap>{displayNfts}</Wrap>
    </Container>
  )
}

export default MyTokens
