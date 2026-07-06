const inputTugas = document.getElementById('input-tugas');
const btnTambah = document.getElementById('btn-tambah');
const daftarTugas = document.getElementById('daftar-tugas');

function tambahTugas() {
    let teksTugas = inputTugas.value;

    if (teksTugas.trim() === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const liBaru = document.createElement('li');
    liBaru.textContent = teksTugas;
    
    liBaru.addEventListener('click', function() {
        liBaru.classList.toggle('selesai');

        if (liBaru.classList.contains('selesai')) {
            tampilkanNotifikasi(`Tugas "${teksTugas}" telah selesai!`);
        }
    });
    
    daftarTugas.appendChild(liBaru);
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

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 2000);
}

btnTambah.addEventListener('click', tambahTugas);