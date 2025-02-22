import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import cityStore from '../../stores/CityStore'
import { DeleteButton, StyledLabel, StyledUl, StyledLi, CheckboxAndLabelContainer } from './styled'
import CustomCheckbox from '../CustomCheckbox'

const CitiesList: FC = () => {
  const { cities } = cityStore

  return (
    <>
      {cities.length !== 0 ? (
        <>
          <StyledUl>
            {cities.map((city) => (
              <StyledLi key={city.id}>
                <CheckboxAndLabelContainer>
                  <CustomCheckbox id={`${city.id}`} checked={city.isActive} cityName={city.name} />
                  <StyledLabel>{city.name}</StyledLabel>
                </CheckboxAndLabelContainer>
                <DeleteButton onClick={() => cityStore.removeCity(city.id)}>Delete city!</DeleteButton>
              </StyledLi>
            ))}
          </StyledUl>
        </>
      ) : null}
    </>
  )
}

export default observer(CitiesList)
