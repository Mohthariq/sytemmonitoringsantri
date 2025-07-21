document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    // Tambahkan logika untuk memproses login
    console.log(`Email: ${email}, Password: ${password}`);

    // Implementasikan validasi atau penerusan ke halaman berikutnya di sini
    alert('Login berhasil!'); // Ganti ini dengan logika login yang sesuai
});
