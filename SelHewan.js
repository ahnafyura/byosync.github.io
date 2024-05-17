document.querySelectorAll('.item-sel-hewan').forEach(item => {
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
                popupContainer.textContent = 'Ribosom: Pabrik protein sel. Di sinilah instruksi dari DNA diterjemahkan untuk merangkai asam amino menjadi protein.';
                break;
            case '2':
                popupContainer.textContent = 'RE Kasar (Retikulum Endoplasma Kasar): Jaringan membran yang ditempeli ribosom. Berperan dalam produksi, pelipatan, dan modifikasi protein yang akan dikirim ke luar sel atau ke bagian sel lainnya.';
                break;
            case '3':
                popupContainer.textContent = 'RE Halus (Retikulum Endoplasma Halus): Jaringan membran yang tidak memiliki ribosom. Berperan dalam sintesis lipid, detoksifikasi obat-obatan, dan penyimpanan kalsium.';
                break;
            case '4':
                popupContainer.textContent = 'Mitokondria: Pembangkit energi sel. Di sinilah nutrisi dipecah untuk menghasilkan ATP, molekul yang membawa energi untuk aktivitas sel.';
                break;
            case '5':
                popupContainer.textContent = 'Membran Sel: Lapisan tipis yang membungkus sel, memisahkan bagian dalam sel dari lingkungan luar. Mengatur keluar masuknya zat dari dan ke dalam sel.';
                break;
            case '6':
                popupContainer.textContent = 'Membran Sel Inti: Lapisan ganda yang membungkus nukleus, melindungi materi genetik di dalamnya. Memiliki pori-pori yang mengatur lalu lintas molekul antara nukleus dan sitoplasma.';
                break;
            case '7':
                popupContainer.textContent = 'Lisosom: Kantung berisi enzim pencernaan. Berfungsi untuk memecah makromolekul, organel yang rusak, dan partikel asing yang masuk ke dalam sel.';
                break;
            case '8':
                popupContainer.textContent = 'Sentriol: Sepasang struktur berbentuk silinder yang berperan dalam pembelahan sel. Membantu mengatur pembentukan benang-benang spindel yang menarik kromosom ke kutub-kutub sel.';
                break;
            case '9':
                popupContainer.textContent = 'Aparatus Golgi: Tumpukan kantung pipih yang berfungsi sebagai pusat pengemasan dan pengiriman sel. Memodifikasi, menyortir, dan mengemas protein serta lipid untuk dikirim ke tujuan akhir.';
                break;
            case '10':
                popupContainer.textContent = 'Sitoplasma: Cairan kental yang mengisi ruang di dalam sel, di luar nukleus. Tempat terjadinya banyak reaksi kimia penting dan menjadi tempat organel-organel sel berada.';
                break;
            case '11':
                popupContainer.textContent = 'Nukleus: Pusat kendali sel. Mengandung materi genetik (DNA) yang membawa informasi untuk mengatur aktivitas sel.';
                break;
            case '12':
                popupContainer.textContent = 'Nukleoplasma: Cairan kental di dalam nukleus. Mengandung kromatin (DNA dan protein) serta berbagai molekul yang berperan dalam regulasi gen dan replikasi DNA.';
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
