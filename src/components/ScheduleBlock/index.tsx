import React, { FC } from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import { DataObject } from '../../utils/transformData'
import chroma from 'chroma-js'
import CustomTooltip from '../CustomTooltip'

interface IScheduleBlock {
  arrForLines: string[],
  data: Record<string, any>[]
}

const ScheduleBlock: FC<IScheduleBlock> = ({ arrForLines, data }) => {
  const colorScale = chroma.scale(['#ff0000', '#00ff00', '#0000ff']).mode('lch').colors(Object.keys(arrForLines).length)
  const lines = arrForLines.map((key, index) => (
    <Line key={`line-${key}`} type="monotone" dataKey={key} stroke={colorScale[index]} activeDot={{ r: 8 }} />
  ))

  return (
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
  )
}

export default ScheduleBlock
