document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const keluhan = document.getElementById('keluhan').value;

    // Simpan ke dalam database atau lokal storage atau API
    console.log("Nama:", nama);
    console.log("Tanggal:", tanggal);
    console.log("Keluhan:", keluhan);
    
    alert('Data kesehatan santri berhasil disimpan!');
    
    // Reset form
    this.reset();
});
