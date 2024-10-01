import { styled, Text } from '@ignite-ui/react'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  padding: '$6',
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',

  color: '$gray200',

  button: {
    all: 'unset',

    lineHeight: 0,

    borderRadius: '$sm',
    cursor: 'pointer',

    transition: 'all 0.2s ease-out',

    svg: {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100',
    },
  },
})

export const CalendarBody = styled('table', {
  width: '100%',

  fontFamily: '$default',

  tableLayout: 'fixed',
  borderSpacing: '0.25rem',

  'thead th': {
    fontSize: '$sm',
    fontWeight: '$medium',
    color: '$gray200',
  },

  'tbody:before': {
    display: 'block',
    content: '.',

    lineHeight: '0.75rem',
    color: '$gray800',
  },

  'tbody td': {
    boxSizing: 'border-box',
  },
})

export const CalendarDay = styled('button', {
  all: 'unset',

  width: '100%',
  aspectRatio: '1 / 1',

  textAlign: 'center',

  background: '$gray600',
  borderRadius: '$sm',

  cursor: 'pointer',

  transition: 'all 0.2s ease-out',

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
