var elem = document.getElementById('elem');

function func(surname, name) {
    alert(this.value + ', ' + surname + ' ' + name);
}

//Тут напишите конструкцию с bind()
construct = func.bind(elem)

construct('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
construct('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'