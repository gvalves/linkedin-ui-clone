import React from 'react'

import image from '../../assets/shiro.jpg'

import { Container, ProfileIcon, SearchInput, MessageIcon } from './styles'

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileIcon src={image} />
      <SearchInput placeholder="Pesquisar" />
      <MessageIcon />
    </Container>
  )
}

export default MobileHeader
