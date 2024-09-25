import { Box, styled, Text } from '@ignite-ui/react'

export const ConnectBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',

  marginTop: '$6',
  marginBottom: '$4',
})

export const ConnectItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  border: '1px solid $gray600',
  borderRadius: '$md',

  padding: '$4 $6',
  marginBottom: '$4',

  [`> ${Text}`]: {
    fontWeight: '$medium',
  },
})

export const AuthError = styled(Text, {
  color: '#f75a68',

  marginBottom: '$4',
})
