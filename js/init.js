const secondName = document.querySelector("#surnameOutput");
const firstName = document.querySelector("#firstNameOutput");
const personGender = document.querySelector("#genderOutput");
const yearOfBirthDay = document.querySelector("#birthYearOutput");

// генерация нового персонажа и отображение в карточк
function initPerson(){
    const onePerson = personGenerator.getPerson();
    const personGenderVar = onePerson.gender;

    personGender.innerText = personGenderVar;
    yearOfBirthDay.innerText = onePerson.yearOfBirthDay;
    
    firstName.innerText = onePerson.firstName + ' ' + onePerson.midleName;
    secondName.innerText = onePerson.secondName;
    personHistory.innerText = onePerson.personHistory; 
    document.querySelector("#personFoto").src = "https://thispersondoesnotexist.com/image?" +  Math.random(1000);
    
};

// первая генерация при загрузке страницы
window.onload = initPerson;

// кнопка "Ещё"
document.querySelector("#btnSubmit").addEventListener('click', initPerson);

// кнопка "Очистить"
document.querySelector("#btnClear").addEventListener('click', (event) => {
    personGender.innerText = ""; 
    yearOfBirthDay.innerText = ""; 

    secondName.innerText = "";
    firstName.innerText = ""; 
    personHistory.innerText = ""; 
    document.querySelector("#personFoto").src = "";
});