/*
async function getData() {
    const res = await fetch("https://randomall.ru/api/custom/gens/85");
    if (res.ok) {
        console.log(res);
        return await res.json();
    } else {
        console.log(false);
        return false;
    }
}
*/
// фамилии мужские
const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    
    // имена мужские
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    // имена женские
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Дианна",
            "id_2": "Таисия",
            "id_3": "Агата",
            "id_4": "Василиса",
            "id_5": "Елизавета",
            "id_6": "Варвара",
            "id_7": "Кристина",
            "id_8": "Забава",
            "id_9": "Аида",
            "id_10": "Анастасия"
        }
    }`,

    // отчества мужские
    midleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитьевич",
            "id_7": "Михаилович",
            "id_8": "Данилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,

    // отчества женские
    midleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитьевна",
            "id_7": "Михаиловна",
            "id_8": "Даниловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,

    // города рождения
    townJson: `{
        "count": 10,
        "list": {     
            "id_1": "Москва",
            "id_2": "Урюпинск",
            "id_3": "Улан-у-дэ",
            "id_4": "Камышин",
            "id_5": "Торжок",
            "id_6": "Нью-Васюки",
            "id_7": "Грязноводск",
            "id_8": "Грозный",
            "id_9": "Новосибирск",
            "id_10": "Кимры"
        }
    }`,

    // профессии мужские
    profMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "дворником",
            "id_2": "слесарем",
            "id_3": "кочегаром",
            "id_4": "ассенизатором",
            "id_5": "президентом",
            "id_6": "директором",
            "id_7": "конюхом",
            "id_8": "конферансье",
            "id_9": "1С'ником",
            "id_10": "программистом"
        }
    }`,

    // профессии женские
    profFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "фотомоделью",
            "id_2": "портной",
            "id_3": "дояркой",
            "id_4": "швеёй",
            "id_5": "балериной",
            "id_6": "вагоновожатой",
            "id_7": "терапевтом",
            "id_8": "фасовщицой",
            "id_9": "фарцовщицей",
            "id_10": "налётчитцей"
        }
    }`,

    // названия месяцев
    monthNameJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_10": "ноября",
            "id_10": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    // случайное число в диапазоне
    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),

    // выбор случайного элемента массива в JSON
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(1, obj.count)}`; // this = personGenerator
        return obj.list[prop];
    },

    // имя
    randomFirstName: function () {

        let fn;

        if (this.person.gender === this.GENDER_MALE) {
            fn = this.randomValue(this.firstNameMaleJson);
        } else {
            fn = this.randomValue(this.firstNameFemaleJson);
        }

        return fn;
    },

    // отчество
    randomMidleName: function () {

        let mn;

        if (this.person.gender === this.GENDER_MALE) {
            mn = this.randomValue(this.midleNameMaleJson);
        } else {
            mn = this.randomValue(this.midleNameFemaleJson);
        }

        return mn;
    },

    // фамилия
    randomSurname: function () {

        let sn = this.randomValue(this.surnameJson);

        if (this.person.gender === this.GENDER_FEMALE) {
            sn = sn + 'а';
        }

        return sn;
    },

    // пол
    randomGender: function () {

        let pg = this.randomIntNumber(1, 2);
        console.log(pg);

        if (pg == 1) {
            return this.GENDER_MALE;
        } else {
            return this.GENDER_FEMALE
        }

    },

    // дата рождения
    randomBirthDay: function () { 

        // генерируем случайную дату с 01.01.1930 по сегодня
        // кол-во дней в месяце не корректируем. JS делает это самостоятельно !!!
        let dt = new Date(this.randomIntNumber(1930, dateNow.getFullYear()), this.randomIntNumber(1, 12), this.randomIntNumber(1, 31));

        return dt;
    },

    // наименование месяца по номеру
    monthToName: function (month) {
        const monthNameArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        return monthNameArray[month - 1];
    },

    // краткое жизнеописание
    randomnHistory: function () {
        let dateNow = new Date();
        let ds = this.person.firstName + ' родил';
        // родилось        
        if (this.person.gender === this.GENDER_FEMALE) {
            ds = ds + 'ась';
        } else {
            ds = ds + 'ся';
        }
        ds = ds + ' ' + this.person.birthDay.getDate() + ' ' + this.monthToName(this.person.birthDay.getMonth()) + ' ' + this.person.yearOfBirthDay + ' в городе ' + this.randomValue(this.townJson) + '.';
        if ((this.person.yearOfBirthDay + 17) > dateNow.getFullYear()) {
            return ds;
        }
        // школа
        ds = ds + ' В ' + (this.person.yearOfBirthDay + 17) + ' году закончил';
        if (this.person.gender === this.GENDER_FEMALE) {
            ds = ds + 'а';
        }
        ds = ds + ' школу № ' + this.randomIntNumber(1, 5000) + '.';

        if ((this.person.yearOfBirthDay + 18) > dateNow.getFullYear()) {
            return ds;
        }
        // работа
        ds = ds + ' С ' + (this.person.yearOfBirthDay + 18) + ' года работал';
        if (this.person.gender === this.GENDER_FEMALE) {
            ds = ds + 'а ' + this.randomValue(this.profFemaleJson) + '.';
        } else {
            ds = ds + ' ' + this.randomValue(this.profMaleJson) + '.';
        }

        return ds;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.midleName = this.randomMidleName();
        this.person.secondName = this.randomSurname();
        this.person.birthDay = this.randomBirthDay();
        this.person.yearOfBirthDay = this.person.birthDay.getFullYear();
        this.person.personHistory = this.randomnHistory();

        return this.person;

    }
};