import { Box, styled, Text } from '@ignite-ui/react'

export const ConfirmForm = styled(Box, {
  maxWidth: 542,

  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  margin: '$6 auto 0',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  borderBottom: '1px solid $gray600',

  paddingBottom: '$6',

  [`> ${Text}`]: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    svg: {
      width: '$5',
      height: '$5',

      color: '$gray200',
    },
  },
})

export const FormError = styled(Text, {
  color: '#F75A68',
})

export const FormActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
})
