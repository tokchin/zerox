import React from 'react'
import { Image, Spacer, Flex, Box, Container, Button } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import zeroxLogo from './zerox.png'
import SelectNFT from './components/SelectNFT'
import MyTokens from './components/MyTokens'

function App() {
  return (
    <Router>
      <Container align="center">
        <Flex m={1} align="center" width="350px">
          <Box width="120px" align="center">
            <Image src={zeroxLogo} objectFit="cover" />
          </Box>
          <Spacer />
          <Button>login</Button>
        </Flex>
        <Switch>
          <Route path="/market">market</Route>
          <Route path="/myTokens">
            <MyTokens />
          </Route>
          <Route path="/">
            <SelectNFT />
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
