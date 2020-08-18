import React from 'react'

import TrendingPanel from './TrendingPanel'

import { LoadingTrandingPanel } from '../Shimmer/LoadingTrendingPanel'

import { Container } from './styles'
import { LoadingProps } from '../../types'

const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">
      {isLoading ? (
        <>
          <LoadingTrandingPanel />
        </>
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}
    </Container>
  )
}

export default RightColumn
