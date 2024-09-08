function tampilkanForm(bentuk) {
    // Sembunyikan semua form
    document.getElementById('formSegitiga').classList.add('hidden');
    document.getElementById('formJajargenjang').classList.add('hidden');
    
    // Tampilkan form sesuai pilihan
    if (bentuk === 'segitiga') {
        document.getElementById('formSegitiga').classList.remove('hidden');
    } else if (bentuk === 'jajargenjang') {
        document.getElementById('formJajargenjang').classList.remove('hidden');
    }
}

function tampilkanSegitiga(type) {
    document.getElementById('luasFormSegitiga').classList.add('hidden');
    document.getElementById('kelilingFormSegitiga').classList.add('hidden');
    
    if (type === 'luas') {
        document.getElementById('luasFormSegitiga').classList.remove('hidden');
    } else if (type === 'keliling') {
        document.getElementById('kelilingFormSegitiga').classList.remove('hidden');
    }
}

function tampilkanJajaran(type) {
    document.getElementById('luasFormJajargenjang').classList.add('hidden');
    document.getElementById('kelilingFormJajargenjang').classList.add('hidden');
    
    if (type === 'luas') {
        document.getElementById('luasFormJajargenjang').classList.remove('hidden');
    } else if (type === 'keliling') {
        document.getElementById('kelilingFormJajargenjang').classList.remove('hidden');
    }
}

// Fungsi hitung luas segitiga
function hitungLuasSegitiga() {
    var alas = parseFloat(document.getElementById('alasSegitiga').value);
    var tinggi = parseFloat(document.getElementById('tinggiSegitiga').value);

    if (isNaN(alas) || alas <= 0 || isNaN(tinggi) || tinggi <= 0) {
        alert('Masukkan nilai alas dan tinggi yang valid dan lebih dari 0.');
        return;
    }

    var luas = 0.5 * alas * tinggi;
    document.getElementById('hasilSegitiga').innerHTML = `
        Rumus: Luas = 1/2 x alas x tinggi<br>
        alas = ${alas} cm <br>
        tinggi = ${tinggi} cm <br>
        Luas segitiga = 1/2 x ${alas} cm x ${tinggi} cm = ${luas} cm²
    `;
}

// Fungsi hitung keliling segitiga
function hitungKelilingSegitiga() {
    var sisi1 = parseFloat(document.getElementById('sisi1Segitiga').value);
    var sisi2 = parseFloat(document.getElementById('sisi2Segitiga').value);
    var sisi3 = parseFloat(document.getElementById('sisi3Segitiga').value);

    if (isNaN(sisi1) || sisi1 <= 0 || isNaN(sisi2) || sisi2 <= 0 || isNaN(sisi3) || sisi3 <= 0) {
        alert('Masukkan nilai sisi yang valid dan lebih dari 0.');
        return;
    }

    var keliling = sisi1 + sisi2 + sisi3;
    document.getElementById('hasilSegitiga').innerHTML = `
        Rumus: Keliling = sisi1 + sisi2 + sisi3<br>
        sisi1 = ${sisi1} cm <br>
        sisi2 = ${sisi2} cm <br>
        sisi3 = ${sisi3} cm <br>
        Keliling segitiga = ${sisi1} cm + ${sisi2} cm + ${sisi3} cm = ${keliling} cm
    `;
}

// Fungsi hitung luas jajar genjang
function hitungLuasJajaran() {
    var alas = parseFloat(document.getElementById('alasJajaran').value);
    var tinggi = parseFloat(document.getElementById('tinggiJajaran').value);

    if (isNaN(alas) || alas <= 0 || isNaN(tinggi) || tinggi <= 0) {
        alert('Masukkan nilai alas dan tinggi yang valid dan lebih dari 0.');
        return;
    }

    var luas = alas * tinggi;
    document.getElementById('hasilJajargenjang').innerHTML = `
        Rumus: Luas = alas x tinggi<br>
        alas = ${alas} cm <br>
        tinggi = ${tinggi} cm <br>
        Luas jajargenjang = ${alas} cm x ${tinggi} cm = ${luas} cm²
    `;
}

// Fungsi hitung keliling jajargenjang
function hitungKelilingJajaran() {
    var alas = parseFloat(document.getElementById('alasJajaranKeliling').value);
    var sisiMiring = parseFloat(document.getElementById('sisiMiring').value);

    if (isNaN(alas) || alas <= 0 || isNaN(sisiMiring) || sisiMiring <= 0) {
        alert('Masukkan nilai alas dan sisi miring yang valid dan lebih dari 0.');
        return;
    }

    var keliling = 2 * (alas + sisiMiring);
    document.getElementById('hasilJajargenjang').innerHTML = `
        Rumus: Keliling = 2 x (alas + sisi miring)<br>
        alas = ${alas} cm <br>
        sisi miring = ${sisiMiring} cm <br>
        Keliling jajargenjang = 2 x (${alas} cm +  ${sisiMiring} cm) = ${keliling} cm
    `;
}

// Fungsi untuk mereset kalkulator segitiga
function resetSegitiga() {
    document.getElementById('alasSegitiga').value = '';
    document.getElementById('tinggiSegitiga').value = '';
    document.getElementById('sisi1Segitiga').value = '';
    document.getElementById('sisi2Segitiga').value = '';
    document.getElementById('sisi3Segitiga').value = '';
    document.getElementById('hasilSegitiga').textContent = '';
}

// Fungsi untuk mereset kalkulator jajargenjang
function resetJajaran() {
    document.getElementById('alasJajaran').value = '';
    document.getElementById('tinggiJajaran').value = '';
    document.getElementById('alasJajaranKeliling').value = '';
    document.getElementById('sisiMiring').value = '';
    document.getElementById('hasilJajargenjang').textContent = '';
}