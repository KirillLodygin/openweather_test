import React, { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import cityStore, { ICityWeather } from '../../stores/CityStore'
import axios from 'axios'
import { CheckboxWrap, HiddenCheckbox, CheckboxLabel } from './styled'
import { API_OPEN_WEATHER, APPID, UNITS } from '../../constants/api_const'

interface ICustomCheckbox {
  id: string
  checked: boolean
  cityName: string
}

const CustomCheckbox: FC<ICustomCheckbox> = ({ id, checked, cityName }) => {
  const { citiesWeather } = cityStore
  const onClick = () => {
    cityStore.checkCity(Number(id))
  }

  const observedCities = citiesWeather.map((city) => city.id)

  useEffect(() => {
    if (!checked) {
      cityStore.removeCityWeather(cityName)
    }

    if (checked && !observedCities.includes(cityName)) {
      axios
        .get(`${API_OPEN_WEATHER}${encodeURI(cityName)}${APPID}${process.env.REACT_APP_API_KEY}${UNITS}`)
        .then((response) => {
          const obj: ICityWeather = {
            id: cityName,
            list: response.data.list,
          }
          cityStore.addCityWeather(obj)
        })
        .catch((error) => {
          cityStore.getErrorMessage(`Request failed: ${error}`)
          cityStore.onShowError(true)
        })
    }
  }, [checked])

  return (
    <CheckboxWrap>
      <HiddenCheckbox id={id} checked={checked} onChange={onClick} />
      <CheckboxLabel htmlFor={id}></CheckboxLabel>
    </CheckboxWrap>
  )
}

export default observer(CustomCheckbox)
