import { makeAutoObservable } from 'mobx'

export interface ICity {
  id: number
  name: string
  countryCode: string
  isActive: boolean
}

export interface ICityWeather {
  id: string
  list: Record<string, any>[]
}

class CityStore {
  cities: ICity[] = []
  errorMassage: string | undefined = undefined
  isShowError = false
  citiesWeather: ICityWeather[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addCity(city: ICity) {
    const namesArr = this.cities.map((city) => city.name)

    if (namesArr.includes(city.name)) {
      this.errorMassage = 'The city is already on the list!'
      this.isShowError = true
      return
    }

    if (this.cities.length) {
      this.cities.forEach((city) => {
        city.isActive = false
      })
    }
    this.cities.push(city)
  }

  onShowError(isShow: boolean) {
    this.isShowError = isShow
  }

  getErrorMessage(message: string) {
    this.errorMassage = message
  }

  checkCity(id: number) {
    const index = this.cities.findIndex((city) => city.id === id)
    if (index !== -1) {
      this.cities[index].isActive = !this.cities[index].isActive
    }
  }

  removeCity(id: number) {
    const index = this.cities.findIndex((city) => city.id === id)
    if (index !== -1) {
      const cityName = this.cities[index].name
      this.cities.splice(index, 1)
      this.cities = this.cities.map((city, index) => {
        city.id = index
        return city
      })
      this.removeCityWeather(cityName)
    }
  }

  removeCityWeather(city: string) {
    const index = this.citiesWeather.findIndex((item) => item.id === city)
    if (index !== -1) {
      this.citiesWeather.splice(index, 1)
    }
  }

  addCityWeather(obj: ICityWeather) {
    const index = this.citiesWeather.findIndex((city) => city.id === obj.id)
    if (index !== -1) return
    this.citiesWeather.push(obj)
  }
}

export default new CityStore()
