function pola(nilai) {
    var a = ''

    if (nilai % 2 == 0){
        console.log('Maaf, nilai harus bilangan ganjil!')
    }else{
        for (var i = 0; i < nilai; i++) {
            if (i % 2 == 0) {
                a = '='
                for (var j = 1; j < nilai; j++) {
                    if (j % 2 == 0) {
                        a += ' = '
                    } else {
                        a += ' * '
                    }
                }
            } else {
                a = '*'
                for (var j = 1; j < nilai; j++) {
                    if (j % 2 == 0) {
                        a += ' * '
                    } else {
                        a += ' = '
                    }
                }
            }
            console.log(a)
        }
    }

}

pola(5)
pola(11)
pola(21)