function bunga(awal, tempo) {
    var awal = awal
    var bunga = 2.1 / 100

    var hasil = 0

    for (var i = 1; i <= tempo; i++) {
        hasil = awal + awal * bunga
        console.log(`bulan ke-${i} ${awal} bunga ${awal*bunga}`)
        awal = hasil
    }

    return hasil
}

var awal = 2921690
var tempo = 12

console.log(bunga(awal, tempo))