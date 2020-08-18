import React from 'react'

import Panel from '../../Panel'

import image from '../../../assets/shiro.jpg'

import { Container } from './styles'

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img src={image} alt="Avatar" className="profile-picture" />
        <h1>Shiro NGNL</h1>
        <h2>NGNL Character @ Geekcode</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  )
}

export default ProfilePanel
