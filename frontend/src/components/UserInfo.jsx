import React, { useState, useEffect } from 'react'
import * as fcl from '@onflow/fcl'
import { Container, Heading, Box, Text } from '@chakra-ui/react'

const UserInfo = () => {
  const [user, setUser] = useState(null)

  useEffect(
    () =>
      fcl.currentUser().subscribe((currentUser) => setUser({ ...currentUser })),
    []
  )

  return (
    <Container m={4} maxWidth="3xl">
      <Box p={2}>
        <Heading size="md">Current User info</Heading>
        <Text>{user}</Text>
      </Box>
    </Container>
  )
}

export default UserInfo
