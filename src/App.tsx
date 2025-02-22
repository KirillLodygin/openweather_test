import React from 'react'
import { observer } from 'mobx-react-lite'
import { Provider } from 'mobx-react'
import { stores } from './stores'
import WrapperComponent from './components/WrapperComponent'

const App: React.FC = () => {
  return (
    <Provider {...stores}>
      <WrapperComponent />
    </Provider>
  )
}

export default observer(App)