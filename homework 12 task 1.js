var elem = document.getElementById('elem');

function func() {
    console.log(this.value);
}

func.call(elem);