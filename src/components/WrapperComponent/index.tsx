import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'
import cityStore from '../../stores/CityStore'
import CityForm from '../CityForm'
import ErrorWindow from '../ErrorWindow'
import CitiesList from '../CitiesList'
import TypeSelectionComponentGraphics from '../TypeSelectionComponentGraphics'
import { FlexContainer, ObservedCities, ScheduleWrapp } from './styled'

const WrapperComponent: FC = () => {
  if (!cityStore) return null

  const { isShowError, cities } = cityStore

  return (
    <FlexContainer>
      <ObservedCities>
        <CityForm />
        {!!cities.length && <CitiesList />}
      </ObservedCities>
      <ScheduleWrapp>
        <TypeSelectionComponentGraphics />
      </ScheduleWrapp>
      {isShowError && <ErrorWindow />}
    </FlexContainer>
  )
}

export default observer(WrapperComponent)
