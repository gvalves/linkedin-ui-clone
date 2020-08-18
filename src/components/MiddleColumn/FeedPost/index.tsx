import React from 'react'

import Panel from '../../Panel'

import image from '../../../assets/shiro.jpg'

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles'

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src={image} alt="Avatar" />
          <Column>
            <h3>Shiro NGNL</h3>
            <h4>NGNL Character</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://blog.rocketseat.com.br/content/images/2019/05/Painel.png"
          alt="Image"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  )
}

export default FeedPost
