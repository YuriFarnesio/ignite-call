import { Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: '1440px',
  height: '100vh',

  display: 'flex',
  alignItems: 'center',
  gap: '6rem',

  paddingLeft: '7.5rem',
  margin: '0 auto',

  '@media(max-width: 768px)': {
    justifyContent: 'center',

    padding: '0 $10',
  },
})

export const Hero = styled('div', {
  maxWidth: 476,

  [`${Heading}`]: {
    '@media(max-width: 768px)': {
      fontSize: '$6xl',
    },
  },

  [`${Text}`]: {
    color: '$gray200',

    marginTop: '$2',
  },
})

export const Preview = styled('div', {
  overflow: 'hidden',

  '@media(max-width: 768px)': {
    display: 'none',
  },
})
