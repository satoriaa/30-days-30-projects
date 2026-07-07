const inputTugas = document.getElementById('input-tugas');
const btnTambah = document.getElementById('btn-tambah');
const daftarTugas = document.getElementById('daftar-tugas');

// DOM Elements untuk Modal Baru
const editModal = document.getElementById('edit-modal');
const inputModalEdit = document.getElementById('input-modal-edit');
const btnModalBatal = document.getElementById('btn-modal-batal');
const btnModalSimpan = document.getElementById('btn-modal-simpan');

let listTUgas = JSON.parse(localStorage.getItem('dataTugas')) || [];
let indexYangDiedit = null; // Variabel melacak index mana yang sedang diedit

function renderTugas() {
    daftarTugas.innerHTML = "";
    
    listTUgas.forEach((tugas, index) => {
        const liBaru = document.createElement('li');

        const spanTeks = document.createElement('span');
        spanTeks.textContent = tugas.teks;
        spanTeks.style.flex = "1";
        
        if (tugas.isSelesai) {
            spanTeks.classList.add('selesai');
        }

        spanTeks.addEventListener('click', function() {
            listTUgas[index].isSelesai = !listTUgas[index].isSelesai;

            if (listTUgas[index].isSelesai) {
                tampilkanNotifikasi(`${tugas.teks} telah selesai! 🎉`);
            }

            simpanKeStorage();
            renderTugas();
        });
        
        liBaru.appendChild(spanTeks);

        const divAksi = document.createElement('div');
        divAksi.classList.add('action-buttons');

        // --- TOMBOL EDIT (Kustom Modal) ---
        const btnEdit = document.createElement('button');
        btnEdit.textContent = "Edit";
        btnEdit.classList.add('btn-small', 'btn-edit');
        btnEdit.addEventListener('click', function() {
            // Catat index yang diklik dan buka modal kustom kita
            indexYangDiedit = index;
            inputModalEdit.value = tugas.teks; // Set input modal dengan teks lama
            editModal.classList.add('active'); // Memunculkan modal ke layar
            inputModalEdit.focus();
        });

        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Hapus";
        btnDelete.classList.add('btn-small', 'btn-delete');
        btnDelete.addEventListener('click', function() {
            listTUgas.splice(index, 1);
            tampilkanNotifikasi("Tugas telah dihapus! 🗑️");
            simpanKeStorage();
            renderTugas();
        });

        divAksi.appendChild(btnEdit);
        divAksi.appendChild(btnDelete);
        liBaru.appendChild(divAksi);

        daftarTugas.appendChild(liBaru);
    });
}

// --- LOGIKA TOMBOL DI DALAM MODAL ---
btnModalBatal.addEventListener('click', () => {
    editModal.classList.remove('active'); // Sembunyikan modal kembali
});

btnModalSimpan.addEventListener('click', () => {
    let teksBaru = inputModalEdit.value;

    if (teksBaru.trim() !== "" && indexYangDiedit !== null) {
        listTUgas[indexYangDiedit].teks = teksBaru.trim();
        tampilkanNotifikasi("Tugas berhasil diperbarui! ✏️");
        simpanKeStorage();
        renderTugas();
        editModal.classList.remove('active'); // Tutup modal setelah disimpan
    } else {
        alert("Teks tugas tidak boleh kosong!");
    }
});

function simpanKeStorage() {
    localStorage.setItem('dataTugas', JSON.stringify(listTUgas));
}

function tambahTugas() {
    let teksTugas = inputTugas.value;

    if (teksTugas.trim() === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    listTUgas.push({
        teks : teksTugas,
        isSelesai : false
    });

    simpanKeStorage();
    renderTugas();
    inputTugas.value = "";
}

function tampilkanNotifikasi(pesan) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = pesan;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => { toast.remove(); }, 300);
    }, 2000);
}

btnTambah.addEventListener('click', tambahTugas);
renderTugas();