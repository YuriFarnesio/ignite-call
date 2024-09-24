import { Box, styled, Text } from '@ignite-ui/react'

export const Form = styled(Box, {
  width: 476,

  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',

  padding: '$4',
  marginTop: '$4',

  '@media(max-width: 768px)': {
    width: 'auto',

    gridTemplateColumns: '1fr',
  },
})

export const FormAnnotation = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray400',
  },
})
