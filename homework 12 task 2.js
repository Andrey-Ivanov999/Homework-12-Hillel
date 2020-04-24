var elem = document.getElementById('elem');

function func(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}

func.call(elem, 'Иванов', 'Иван');