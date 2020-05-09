# CryptoPro Parser

[![NPM version][npm-version-image]][npm-url]
[![Build Status][travis-image]][travis-url]
______

Библиотека для парсинга данных формата 

`SNILS=99999999999, OGRNIP=123456789123456, INN=123456789123, E=example@example.com, CN=Тестов Тест Тестович, SN=Тестов, G=Тест Тестович, C=RU, L="РАЙОН ПУШКИНО, ПОСЕЛОК ГОРОДСКОГО ТИПА ПУШКИН", S=98 ЛЕНИНГРАДСКАЯ ОБЛАСТЬ`

И поиск по полученным данным
В разработке использовался репозиторий https://github.com/vgoma/crypto-pro

Доступные поля:
- Владелец: `Тестов Тест Тестович`
- Страна: `RU`
- Регион: `98 ЛЕНИНГРАДСКАЯ ОБЛАСТЬ`
- Адрес: `Строителей, д.3, лит.Б`
- Компания: `ООО "Рога и Копыта"`
- Подразделение: `Администрация`
- Должность: `Генеральный директор`
- ОГРН: `123456789123456`
- ОГРНИП: `123456789123456`
- СНИЛС: `99999999999`
- ИНН: `123456789123`
- Email: `example@example.com`
- Город: `РАЙОН ПУШКИНО, ПОСЕЛОК ГОРОДСКОГО ТИПА ПУШКИН`

Как использовать собранный файл:

Получаем объект с разобранными данными
```js
var result = cryptoProParser.subjectName.parse('SNILS=99999999999, OGRNIP=123456789123456, INN=123456789123, E=example@example.com, CN=Тестов Тест Тестович, SN=Тестов, G=Тест Тестович, C=RU, L="РАЙОН ПУШКИНО, ПОСЕЛОК ГОРОДСКОГО ТИПА ПУШКИН", S=98 ЛЕНИНГРАДСКАЯ ОБЛАСТЬ');
```

Получаем нужные нам поля

Правильное получение данных:
```js
var inn = result.findByName('ИНН'); // 123456789123
```
```js
var email = result.findByName('Email'); // example@example.com,
```
```js
var email = result.findByName('email'); // example@example.com,
```

Неправильное получение данных
```js
var inn = result.findByName('inn'); // undefined
```
```js
var inn = result.findByName('ИНННННН'); // undefined
```
```js
var email = result.findByName('e-mail'); // undefined
```


[npm-url]: https://npmjs.org/package/cryptopro-parser
[npm-version-image]: http://img.shields.io/npm/v/cryptopro-parser.svg?style=flat
[travis-url]: https://travis-ci.org/genkaok/cryptopro-parser
[travis-image]: http://img.shields.io/travis/genkaok/cryptopro-parser/master.svg?style=flat
