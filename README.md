# Стек проекта

TypeScript / React / MobX

## Описание

Проект является реализацией тестового задания с нестрогими установками. Основное требование - получать из openweathermap.org для выбранного города данные о погоде на пять дней и отображать их на графике.
При запуске пользователь видит простую форму для ввода названия города. Все названия вводятся на латинице. Попытка ввести в форму кириллический текст будет блокирована, а на форму будет выведено предложение переключить раскладку клавиатуры. Требования к вводу названий нестрогие. Например, можно вводить как Moscow, так и Moskva. В большинстве случаев название будет распознано и отредактировано. Если же название распознано не будет, откроется модальное окно с сообщением City not found! Введенное и распознанное название попадает в список под формой. Каждый пункт списка состоит из чекбокса, названия города и кнопки для удаления города из списка. Размеры списка ограничены. Можно ввести названия не более трех городов. Попытка ввести в список четвертый город будет блокирована, и будет выведено соответствующее сообщение в модальном окне.
Каждый новый город в списке автоматически получает активированный чекбокс. Если в это время в списке уже есть города с активированными чекбоксами, чекбоксы у них будут отключены.
Для города с активированным чекбосом будет отрисован график, на котором будут отображены показатели temp, humidity, pressure, windSpeed. Любой из показателей кроме temp может быть отключен. При наведении на точку графика будут отображаться все полезные метрики погоды в этой точке. Все показатели подписаны. Графики можно гранулировать: узловые точки могут отображать каждые три часа погодных изменений или дневные изменения.
Если в списке городов активировать более одного чекбокса будет отрисован другой график. На нем будут орисованы графики изменения температуры для выбранных городов. Гранулярность графиков в данном случае - день. При наведении на точку на графике отображаются температуры во всех сравниваемых городах.
 Для развертывания проекта необходимо склонировать репозиторий. Создать файл .env, а в нем две переменные окружения: REACT_APP_API_KEY и REACT_APP_USER_NAME. Для получения ключа для REACT_APP_API_KEY необходимо зарегистрироваться на сайте https://openweathermap.org. Для получения ключа REACT_APP_USER_NAME - на сайте http://www.geonames.org.
Склонированный и снабженный .env проект запускается стандартной командой:

### `yarn start`