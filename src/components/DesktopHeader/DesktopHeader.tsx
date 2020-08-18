import React from 'react'

import image from '../../assets/shiro.jpg'

import {
  Container,
  Wrapper,
  LinkdinIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CaretDownIcon,
} from './styles'

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkdinIcon />
          <SearchInput />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>

            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>

            <button>
              <ProfileCircle src={image} />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  )
}

export default DesktopHeader
