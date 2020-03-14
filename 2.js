function equal(arr, str){

    let hasil = []
    let temp = ''

    for(let j = 0; j < arr.length; j ++){
        for(let k = 0; k < arr[j].length; k ++){
            for(let i = 0; i < str.length; i ++){
                if(arr[j][k] == str[i]){
                    temp += arr[j][k]
                }
            }
        }
        if(arr[j] == temp){
            hasil.push(temp)
            console.log(arr[j] + ' ==> true')
            temp = ''
        }
    }

    for(let i = 0; i < arr.length; i ++){
        for(var j = 0; j < hasil.length; j ++){
            if(arr[i] == hasil[j]){
                arr.splice(i,1)
            }
        }
    }

    for(let i = 0; i < arr.length; i ++){
        console.log(arr[i] + ' ==> false')
    }
}

equal(['dumb', 'ways', 'the', 'best'], 'dumbways')
equal(['madi', 'juma', 'ter', 'baik'], 'jumadi')