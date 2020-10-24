 Добавляем SCSS(yarn add node-sass || npm install node-sass)
 Опционально: Достаем настройки CRA проекта(yarn eject || npm run eject)

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
  
  еще очень удобно, если установить concurrently пакет, чтобы 
  автоматически запускать сервера и клиента,
  в скриптах после установки записать обьединение команд, типа:
  "dev": "concurrently \"yarn server\" \"yarn start\""
  и теперь запускать все это добро простой командой yarn dev
  
  сам пакет можно скачать от сюда: https://www.npmjs.com/package/concurrently