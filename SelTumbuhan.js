document.querySelectorAll('.item-sel-tumbuhan').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah navigasi default
        const itemId = item.id; // Mengambil id item

        // Menghapus popup yang sudah ada sebelum membuat yang baru
        const existingPopup = document.querySelector('.popup-container');
        if (existingPopup) {
            existingPopup.remove();
        }

        const popupContainer = document.createElement('div');
        popupContainer.className = 'popup-container'; // Menambahkan class untuk identifikasi
        popupContainer.style = `
            position: fixed;
            left: 50%;
            top: 50%;
            border-radius: 10px;
            width: 50%;
            height: auto;
            transform: translate(-50%, -50%);
            padding: 20px;
            background: white;
            border: 1.5px solid black;
            z-index: 1000;
            margin-block: 10px;
            transition: all 0.5s ease-in;
        `;

        // Menentukan konten berdasarkan id
        switch (itemId) {
            case '1':
                popupContainer.textContent = 'Dinding Sel: Pelindung kokoh sel tumbuhan, terbuat dari selulosa, memberikan bentuk tetap dan melindungi dari kerusakan mekanis.';
                break;
            case '2':
                popupContainer.textContent = 'Selaput Plasma: Pembatas selektif yang mengatur keluar masuknya zat, menjaga keseimbangan internal sel.';
                break;
            case '3':
                popupContainer.textContent = 'Nukleus: Pusat kendali sel, menyimpan materi genetik (DNA) yang mengatur aktivitas dan pewarisan sifat.';
                break;
            case '4':
                popupContainer.textContent = 'Retikulum Endoplasma: Jaringan membran yang berperan dalam sintesis protein (RE kasar) dan lipid (RE halus), serta transportasi zat dalam sel.';
                break;
            case '5':
                popupContainer.textContent = 'Ribosom: Pabrik protein sel, menerjemahkan informasi genetik dari RNA untuk merangkai asam amino menjadi protein.';
                break;
            case '6':
                popupContainer.textContent = 'Sitoplasma: Cairan kental pengisi sel, tempat berlangsungnya reaksi kimia dan pergerakan organel.';
                break;
            case '7':
                popupContainer.textContent = 'Badan Golgi: Pusat pengemasan dan pengiriman sel, memodifikasi, menyortir, dan mengemas protein serta lipid untuk dikirim ke tujuan.';
                break;
            case '8':
                popupContainer.textContent = 'Mitokondria: Pembangkit energi sel, menghasilkan ATP melalui respirasi seluler untuk mendukung aktivitas sel.';
                break;
            case '9':
                popupContainer.textContent = 'Vakuola: Ruang penyimpanan serbaguna, berisi air, nutrisi, pigmen, dan produk sampingan metabolisme.';
                break;
            case '10':
                popupContainer.textContent = 'Kloroplas: Tempat berlangsungnya fotosintesis, mengubah energi cahaya menjadi energi kimia dalam bentuk glukosa.';
                break;
            default:
                popupContainer.textContent = 'Informasi tidak tersedia.';
                break;
        }

        document.body.appendChild(popupContainer);

        // Menutup popup ketika diklik
        popupContainer.addEventListener('click', function () {
            popupContainer.remove();
        });
    });
});
