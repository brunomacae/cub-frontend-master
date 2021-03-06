import React from 'react'
import styled from 'styled-components'
import { ChevronDownIcon, ChevronUpIcon, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

export interface ExpandableSectionButtonProps {
  onClick?: () => void
  expanded?: boolean
  onlyArrow?: boolean
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const ExpandableSectionButton: React.FC<ExpandableSectionButtonProps> = ({ onClick, expanded, onlyArrow }) => {
  const TranslateString = useI18n()

  let extra = null
  if (!onlyArrow)
    extra = (
      <Text color="primary" bold>
        {expanded ? 'Hide' : 'Details'}
      </Text>
  )

  return (
    <Wrapper aria-label="Hide or show expandable content" role="button" onClick={() => onClick()}>
      {extra}
      {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
    </Wrapper>
  )
}

ExpandableSectionButton.defaultProps = {
  expanded: false,
}

export default ExpandableSectionButton
