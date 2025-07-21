// Data dummy santri per rayon & kamar
const dataSantri = {
  "Al Jufri": {
    "1": ["Fulan 1", "Fulan 2", "Fulan 3"],
    "2": ["Fulan 4", "Fulan 5"]
  },
  "Al Kautsar": {
    "1": ["Zaid", "Umar"],
    "2": ["Ali", "Bilal"]
  }
};

const rayonSelect = document.getElementById("rayon");
const kamarSelect = document.getElementById("kamar");
const tbody = document.getElementById("absensi-body");

function renderTable() {
  const rayon = rayonSelect.value;
  const kamar = kamarSelect.value;
  const santriList = (dataSantri[rayon] && dataSantri[rayon][kamar]) || [];

  tbody.innerHTML = ""; // kosongkan isi lama

  santriList.forEach((nama, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${nama}</td>
      <td><input type="radio" name="absen${index}" value="Hadir" required></td>
      <td><input type="radio" name="absen${index}" value="Izin"></td>
      <td><input type="radio" name="absen${index}" value="Sakit"></td>
      <td><input type="radio" name="absen${index}" value="Alpha"></td>
    `;

    tbody.appendChild(tr);
  });
}

// Load awal saat halaman dibuka
window.addEventListener("DOMContentLoaded", renderTable);

// Ganti tabel saat rayon/kamar berubah
rayonSelect.addEventListener("change", renderTable);
kamarSelect.addEventListener("change", renderTable);

// Tangani submit form
document.querySelector(".form-absensi").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  alert("Data absensi berhasil disimpan!");

  // Di sini bisa tambahkan logika kirim data ke server / API jika diperlukan
});