import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'
import cityStore from '../../stores/CityStore'
import { transformData } from '../../utils/transformData'
import ScheduleComponent from '../ScheduleComponent'
import MultiCityTempChart from '../MultiCityTempChart'

const TypeSelectionComponentGraphics: FC = () => {
  const { citiesWeather } = cityStore
  const rawData = transformData(toJS(citiesWeather))

  if (!rawData || !rawData.length) {
    return <p>Нет данных для отображения.</p>
  }

  const cities = new Set(rawData.map((item) => item.city))
  const length = cities.size

  return length === 1 ? <ScheduleComponent rawData={rawData} /> : <MultiCityTempChart rawData={rawData} />
}

export default observer(TypeSelectionComponentGraphics)
