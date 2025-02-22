import styled from 'styled-components'

export const StyledTooltip = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  padding: 12px;
  font-size: 14px;
  line-height: 18px;

  & > div + div {
    margin-top: 8px;
  }
`

export const ValueSpan = styled.span`
  display: inline-block;
  margin-left: 8px;
`
