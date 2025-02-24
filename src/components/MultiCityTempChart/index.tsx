import React, { FC, useMemo } from 'react'
import ScheduleBlock from '../ScheduleBlock'
import { DataObject } from '../../utils/transformData'
import { CheckboxContainer } from './styled'
import { aggregateByDay } from '../../utils/aggregateByDay'

interface IMultiCityTempChart {
  rawData: DataObject[]
}

type CityTemps = Record<string, number>

const MultiCityTempChart: FC<IMultiCityTempChart> = ({ rawData }) => {
  const combinedData: Record<string, any>[] = useMemo(() => {
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

  return (
    <CheckboxContainer>
      <h2>Comparison of temperatures in cities</h2>

      <ScheduleBlock data={combinedData} arrForLines={cityNames} />

    </CheckboxContainer>
  )
}

export default MultiCityTempChart
