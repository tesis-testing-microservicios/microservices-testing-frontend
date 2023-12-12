import React from 'react'

import { Button, ButtonProps, Text } from '@chakra-ui/react'

import { Link } from '@redwoodjs/router'

export type NavButtonProps = {
  label: string
  to: string
} & ButtonProps

export const NavButton: React.FC<NavButtonProps> = ({
  label,
  to,
  ...props
}) => {
  return (
    <Link to={to}>
      <Button {...props} justifyContent="start" w="full">
        <Text>{label}</Text>
      </Button>
    </Link>
  )
}
