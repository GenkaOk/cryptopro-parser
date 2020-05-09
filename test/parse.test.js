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
