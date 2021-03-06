import React from 'react'
import { Container, Content, HeaderWrapper, Header, DropboxLogo } from './styles'
import { Props } from '../../interfaces'
const Section: React.FC<Props<string>> = ({ variant, title, description }) => {
  const buttonVariant = Math.round(Math.random()); // 0 ou 1
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu()
  }
  return (
    <Container className={variant}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropboxLogo></DropboxLogo>
            <span>Dropbox</span>
          </h1>
          <button onClick={handleToggle}>{buttonVariant === 0 ? 'Acessar' : 'Interagir'}</button>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  )
}

export default Section;