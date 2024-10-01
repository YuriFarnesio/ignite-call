import { Box, styled, Text } from '@ignite-ui/react'

export const Container = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  position: 'relative',

  padding: 0,
  margin: '$6 auto 0',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 900px)': {
          gridTemplateColumns: '1fr',
        },
      },
      false: {
        width: 542,

        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePicker = styled('div', {
  width: 280,

  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,

  borderLeft: '1px solid $gray600',
  overflowY: 'scroll',

  padding: '$6 $6 0',
})

export const TimePickerHeader = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '$2',

  marginTop: '$3',

  '@media (max-width: 900px)': {
    gridTemplateColumns: '2fr',
  },
})

export const TimePickerItem = styled('button', {
  backgroundColor: '$gray600',
  color: '$gray100',

  fontSize: '$sm',
  lineHeight: '$base',

  border: 0,
  borderRadius: '$sm',

  cursor: 'pointer',

  padding: '$2 0',

  transition: 'all 0.2s ease-out',

  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    background: 'none',
    opacity: 0.4,

    cursor: 'default',
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
