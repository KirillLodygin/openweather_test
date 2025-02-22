import React, { FC, useMemo } from 'react'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import chroma from 'chroma-js'
import CustomTooltip from '../CustomTooltip'
import { DataObject } from '../../utils/transformData'
import { CheckboxContainer } from './styled'
import { aggregateByDay } from '../../utils/aggregateByDay'

interface IMultiCityTempChart {
  rawData: DataObject[]
}

type CityTemps = Record<string, number>

const MultiCityTempChart: FC<IMultiCityTempChart> = ({ rawData }) => {
  const combinedData = useMemo(() => {
    const uniqueNames = new Set<string>()
    const data = aggregateByDay(rawData)

    data.forEach((item) => uniqueNames.add(item.name))

    return Array.from(uniqueNames).map((name) => ({
      name,
      ...data.reduce((acc: CityTemps, curr) => {
        if (curr.name === name) {
          acc[curr.city] = curr.temp
        }
        return acc
      }, {}),
    }))
  }, [rawData])

  const cityNames = rawData.map((data) => data.city).filter((value, index, self) => self.indexOf(value) === index)

  const colorScale = chroma.scale(['#ff0000', '#00ff00', '#0000ff']).mode('lch')
  const colors = colorScale.colors(cityNames.length)

  return (
    <CheckboxContainer>
      <h2>Comparison of temperatures in cities</h2>
      <ResponsiveContainer width={1050} height={600}>
        <LineChart data={combinedData} syncId="multi-city-temp">
          <XAxis dataKey="name" />
          <YAxis domain={['auto', 'auto']} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />

          {cityNames.map((city, index) => (
            <Line key={`line-${index}`} type="monotone" dataKey={city} stroke={colors[index]} activeDot={{ r: 8 }} />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </CheckboxContainer>
  )
}

export default MultiCityTempChart
