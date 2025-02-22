import React, { FC } from 'react'
import { StyledTooltip, ValueSpan } from './styled'

const getUnit = (param: string): string => {
  switch (param) {
    case 'temp':
      return '°C'
    case 'windSpeed':
      return 'm/s'
    case 'humidity':
      return '%'
    case 'pressure':
      return 'kPa'
    default:
      return '°C'
  }
}

interface ITooltipPayload {
  name: string
  value: number | string
  color?: string
}

interface Props {
  payload?: ITooltipPayload[]
}

const CustomTooltip: FC<Props> = ({ payload }) => {
  if (!payload || !payload.length) return null

  return (
    <StyledTooltip>
      {payload.map((entry) => (
        <div key={entry.name}>
          <strong style={{ color: entry.color ? entry.color : '' }}>{entry.name}:</strong>
          <ValueSpan>
            {entry.value}
            {getUnit(entry.name)}
          </ValueSpan>
        </div>
      ))}
    </StyledTooltip>
  )
}

export default CustomTooltip
