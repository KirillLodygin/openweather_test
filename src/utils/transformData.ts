import { ICityWeather } from '../stores/CityStore'
import { formatDateTime } from './formatDateTime'

export type DataObject = {
  city: string
  name: string
  temp: number
  humidity: number
  pressure: number
  windSpeed: number
  [key: string]: any
}

const formatValue = (value: number) => {
  return (value / 100).toFixed(2)
}

export const transformData = (cityWeather: ICityWeather[]): DataObject[] | null => {
  if (!cityWeather.length) return null

  return cityWeather.flatMap((city) =>
    city.list.map((item) => ({
      city: city.id,
      name: formatDateTime(item.dt_txt),
      temp: item.main.temp,
      humidity: item.main.humidity,
      pressure: Number(formatValue(item.main.pressure)),
      windSpeed: item.wind.speed,
    })),
  )
}
