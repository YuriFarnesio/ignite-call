import { Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 854,

  padding: '0 $4',
  margin: '6rem auto $4',
})

export const UserHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [`> ${Heading}`]: {
    lineHeight: '$base',

    marginTop: '$2',
  },

  [`> ${Text}`]: {
    color: '$gray200',
  },
})
