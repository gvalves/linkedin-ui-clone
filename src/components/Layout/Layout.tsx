import React, { useEffect, useState } from 'react'

import LeftColumn from '../LeftColumn'
import MiddleColumn from '../MiddleColumn'
import RightColumn from '../RightColumn'
import AdBanner from '../AdBanner'

import { MobileHeader } from '../MobileHeader'
import { DesktopHeader } from '../DesktopHeader'

import { Container } from './styles'

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>{!isLoading && <AdBanner />}</span>

      <main>
        <LeftColumn isLoading={isLoading} />
        <MiddleColumn isLoading={isLoading} />
        <RightColumn isLoading={isLoading} />
      </main>
    </Container>
  )
}

export default Layout
