 Добавляем SCSS(yarn add node-sass || npm install node-sass)
 Опционально: Достаем настройки CRA проекта(yarn eject || npm run eject)
 Если компилятор будет ругаться, что-то вроде Error: Node Sass version 5.0.0 is incompatible with ^4.0.0.
 удали node-sass (yarn remove node-sass | npm uninstall node-sass)
 и установи корректную версию yarn add node-sass@4.14.1 | npm i node-sass@4.14.1

db.json пример ответа бекенда, после подключения своего, этот удалить
но чтобы все работало в режиме разработки с реально фейковым "беком", 
нужно установить этот феуковый бек.
yarn add -D json-server
а в package.json указать скрипт запуска на другом порту, нежели 
приложение. К примеру
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js",
    "server": "json-server --watch public/db.json --port=3001"
  }
  где public/db.json какую фейковую базу отслеживать
  и --port=3001 на каком порту
  а -D, чтобы пакет устаовился только в режиме разработки, для иммитации
  сервера
  подробное описание этой библиотеки https://github.com/typicode/json-server
  вся сортировка и фильтрация от туда
  
  еще удобно, если установить concurrently пакет, чтобы 
  автоматически запускать сервера и клиента,
  в скриптах после установки записать обьединение команд, типа:
  "dev": "concurrently \"yarn server\" \"yarn start\""
  и теперь запускать все это добро простой командой yarn dev
  
  сам пакет можно скачать от сюда: https://www.npmjs.com/package/concurrently
  
  Пример создания бызы данных
  {
    "data": [                               - собственно название базы
      {
        "id": 0,                            - ну тут понятно
        "imageUrl": "https://31x231.jpg",   - ссылка на картинку
        "name": "А - товар",                - наименование товара
        "types": [0, 1],                    - указание типа товара, можно сделать и больше типов, тоесть отличий, главных характеристик
        "sizes": [26, 30, 40],              - размеры товара, можно указать S, M, XXL
        "price": 803,                       - цена, при чем на беке можно добавить валюту, и фильтрацию валюты
        "category": 0,                      - категория, к которой относится товар
        "rating": 4                         - рейтинг. Можно привязать к счетчику заказов, чтобы устанавливать его автоматически и отдавать на фронт
      }
    ]
 }