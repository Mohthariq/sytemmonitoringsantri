function submitForm() {
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const mufrodat = document.getElementById('mufrodat').value;

    // Simulasikan penyimpanan data
    console.log('Data disimpan:');
    console.log('Nama:', nama);
    console.log('Tanggal:', tanggal);
    console.log('Mufrodat:', mufrodat);

    alert('Data telah disimpan!');

    // Reset form
    document.getElementById('mufrodatForm').reset();
    return false; // Mencegah reload halaman
}
