import React, { FC, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import {DataObject} from '../../utils/transformData'
import { aggregateByDay } from '../../utils/aggregateByDay'
import chroma from 'chroma-js'
import { CheckboxContainer, Checkbox, Label, CheckboxWrapp, RadioButtonGroup, RadioButton } from './styled'
import CustomTooltip from '../CustomTooltip'

interface IScheduleComponent {
  rawData: DataObject[]
}

const ScheduleComponent: FC<IScheduleComponent> = ({rawData}) => {
  const [timeRange, setTimeRange] = useState('3hours')
  const [visibleLines, setVisibleLines] = useState({
    temp: true,
    humidity: true,
    pressure: true,
    windSpeed: true,
  })

  let data = [...rawData]

  const colorScale = chroma.scale(['#ff0000', '#00ff00', '#0000ff']).mode('lch').colors(Object.keys(data[0]).length)

  if (timeRange === 'day') {
    data = aggregateByDay(rawData)
  }

  const cityName = data[0]?.city

  const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setVisibleLines({ ...visibleLines, [name]: checked })
  }

  const handleRadioButtonChange = (value: '3hours' | 'day') => {
    setTimeRange(value)
  }

  const visibleKeys = Object.keys(visibleLines).filter((key) => visibleLines[key as keyof typeof visibleLines])

  const lines = visibleKeys
    .filter((key) => key !== 'name' && key !== 'city')
    .map((key, index) => (
      <Line key={`line-${key}`} type="monotone" dataKey={key} stroke={colorScale[index]} activeDot={{ r: 8 }} />
    ))

  return (
    <CheckboxContainer>
      <h2>{cityName}</h2>

      <CheckboxWrapp>
        {Object.entries(visibleLines).map(([key, value]) => (
          <Label key={key}>
            <Checkbox name={key} checked={value} onChange={handleCheckBoxChange} disabled={key === 'temp'} /> {key}
          </Label>
        ))}
      </CheckboxWrapp>

      <RadioButtonGroup aria-label="time-range">
        <RadioButton
          isSelected={timeRange === '3hours'}
          value="3hours"
          onClick={() => handleRadioButtonChange('3hours')}
        >
          3 hours
        </RadioButton>
        <RadioButton isSelected={timeRange === 'day'} value="day" onClick={() => handleRadioButtonChange('day')}>
          Day
        </RadioButton>
      </RadioButtonGroup>

      <ResponsiveContainer width={1050} height={600}>
        <LineChart width={700} height={600} data={data}>
          <XAxis dataKey="name" domain={['auto', 'auto']} />
          <YAxis domain={['auto', 'auto']} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </CheckboxContainer>
  )
}

export default observer(ScheduleComponent)
