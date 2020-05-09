const parser = require('./../src/main')
var assert = require('assert');

it('should find lat', function () {
    var resultParse = parser.subjectName.parse('SNILS=99999999999, OGRNIP=123456789123456, INN=123456789123, E=example@example.com, CN=Тестов Тест Тестович, SN=Тестов, G=Тест Тестович, C=RU, L="РАЙОН ПУШКИНО, ПОСЕЛОК ГОРОДСКОГО ТИПА ПУШКИН", S=98 ЛЕНИНГРАДСКАЯ ОБЛАСТЬ');
    assert.strictEqual('123456789123456', resultParse.findByName('ОГРНИП'))
    assert.strictEqual('99999999999', resultParse.findByName('СНИЛС'))
    assert.strictEqual('123456789123', resultParse.findByName('ИНН'))
});

it('should find cyr', function () {
    var resultParse = parser.subjectName.parse('CN=Иванов Иван Иванович, OID.1.2.840.113549.1.9.2=1.2.643.3.61.1.1.6.502710.3.4.2.1, SN=Иванов, G=Иван Иванович, O="ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ РЕСПУБЛИКИ АДЫГЕЯ ""РОГА И КОПЫТА""", L=Тестово д, S=Республика Адыгея, C=RU, E=example@example.com, СНИЛС=00011111111, ИНН=222222222222');
    assert.strictEqual('00011111111', resultParse.findByName('СНИЛС'))
    assert.strictEqual('222222222222', resultParse.findByName('ИНН'))
});

it('should parse issuer name', function () {
    var resultParse = parser.issuerName.parse('CN="ООО ""КОМПАНИЯ ""ТЕНЗОР""", O="ООО ""КОМПАНИЯ ""ТЕНЗОР""", OU=Удостоверяющий центр, STREET="Московский проспект, д. 12", L=г. Ярославль, S=76 Ярославская область, C=RU, INN=007605016030, OGRN=1027600787994, E=ca_tensor@tensor.ru');
    assert.strictEqual('ООО "КОМПАНИЯ "ТЕНЗОР"', resultParse.findByName('Владелец'));
    assert.strictEqual('ООО "КОМПАНИЯ "ТЕНЗОР"', resultParse.findByName('Компания'));
    assert.strictEqual('Удостоверяющий центр', resultParse.findByName('Подразделение'));
    assert.strictEqual('Московский проспект, д. 12', resultParse.findByName('Адрес'));
    assert.strictEqual('г. Ярославль', resultParse.findByName('Город'));
    assert.strictEqual('76 Ярославская область', resultParse.findByName('Регион'));
    assert.strictEqual('007605016030', resultParse.findByName('ИНН'));
    assert.strictEqual('1027600787994', resultParse.findByName('ОГРН'));
    assert.strictEqual('ca_tensor@tensor.ru', resultParse.findByName('Email'));
});


//