import { Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'

import { Form } from './styles'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      {/* @ts-expect-error: Unreachable code error */}
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuário" />

      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>
  )
}
