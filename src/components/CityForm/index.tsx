import React, { useState, FC } from 'react'
import { observer } from 'mobx-react-lite'
import { FormEvent } from 'react'
import axios from 'axios'
import cityStore, { ICity } from '../../stores/CityStore'
import { StyledForm, Label, Input, SubmitButton, AttentionMessage } from './styled'
import { API_GEO, MAX_ROWS } from '../../constants/api_const'

const CityForm: FC = () => {
  const { cities } = cityStore
  const [cityName, setCityName] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const filterAllowedCharacters = (text: string) => {
    return text.replace(/[^a-zA-Z\s-]/gu, '')
  }

  const capitalizeFirstLetterOfEachWord = (text: string) => {
    return text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value
    if (cities.length >= 3) {
      setCityName('')
      cityStore.getErrorMessage('Three cities is enough!')
      cityStore.onShowError(true)
      return
    }

    if (/[а-яА-ЯёЁ]/.test(inputValue)) {
      setShowMessage(true)
      event.preventDefault()
    } else {
      setShowMessage(false)
      const filteredValue = filterAllowedCharacters(capitalizeFirstLetterOfEachWord(inputValue))
      setCityName(filteredValue)
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const queryString = `${API_GEO}${encodeURI(cityName)}${MAX_ROWS}${process.env.REACT_APP_USER_NAME}`
    try {
      setIsLoading(true)
      const response = await axios.get(queryString)
      if (response.data.geonames?.length > 0) {
        const { toponymName, countryCode } = response.data.geonames[0]
        if (!toponymName) {
          cityStore.getErrorMessage('City not found!')
          cityStore.onShowError(true)
        } else {
          const city: ICity = {
            id: cities.length,
            name: toponymName,
            countryCode: String(countryCode).toLowerCase(),
            isActive: true,
          }
          setCityName('')
          cityStore.addCity(city)
        }
      } else {
        cityStore.getErrorMessage('City not found!')
        cityStore.onShowError(true)
      }
    } catch (error) {
      cityStore.getErrorMessage(`Error executing request: ${error}`)
      cityStore.onShowError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor="city">Enter the city name:</Label>
      <Input type="text" id="city" name="city" value={cityName} onChange={handleChange} />
      <AttentionMessage showMessage={showMessage}>Switch your keyboard layout to Latin!</AttentionMessage>
      <SubmitButton type="submit" disabled={isLoading || cities.length >= 3} className={isLoading ? 'loading' : ''}>
        Submit
      </SubmitButton>
    </StyledForm>
  )
}

export default observer(CityForm)
