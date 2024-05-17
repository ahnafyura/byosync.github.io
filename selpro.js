document.querySelectorAll('.item-sel-pro').forEach(item => {
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
                popupContainer.textContent = 'Pili: Rambut halus seperti benang yang menonjol dari permukaan sel bakteri. Pili memiliki peran penting dalam perlekatan bakteri pada permukaan sel inang, konjugasi (pertukaran materi genetik antar bakteri), dan pembentukan biofilm.';
                break;
            case '2':
                popupContainer.textContent = 'Kapsul: Lapisan pelindung lendir yang terletak di luar dinding sel. Kapsul membantu bakteri menghindari sistem kekebalan tubuh inang, meningkatkan kemampuan bertahan hidup di lingkungan yang keras, dan berperan dalam pembentukan biofilm.';
                break;
            case '3':
                popupContainer.textContent = 'Dinding Sel: Struktur kaku yang mengelilingi sel bakteri, memberikan bentuk, dukungan struktural, dan perlindungan dari tekanan osmotik. Dinding sel bakteri mengandung peptidoglikan, suatu polimer unik yang tidak ditemukan pada sel eukariotik.';
                break;
            case '4':
                popupContainer.textContent = 'Membran Sel: Lapisan tipis yang membatasi sel bakteri dari lingkungan sekitarnya. Membran sel mengatur transportasi zat masuk dan keluar sel, menjaga keseimbangan internal, dan berperan dalam produksi energi.';
                break;
            case '5':
                popupContainer.textContent = 'Inti Sel (DNA): Area di dalam sel yang mengandung materi genetik bakteri (DNA). Berbeda dengan sel eukariotik, DNA bakteri tidak terbungkus dalam membran inti (nukleus), melainkan tersebar di sitoplasma dalam bentuk nukleoid.';
                break;
            case '6':
                popupContainer.textContent = 'Sitoplasma: Cairan kental yang mengisi ruang di dalam sel bakteri. Sitoplasma mengandung enzim, ribosom, nutrisi, dan berbagai molekul lain yang penting untuk fungsi sel.';
                break;
            case '7':
                popupContainer.textContent = 'Ribosom: Partikel kecil yang terdiri dari RNA dan protein. Ribosom merupakan tempat berlangsungnya sintesis protein, proses penting untuk pertumbuhan dan perkembangan bakteri.';
                break;
            case '8':
                popupContainer.textContent = 'Flagela: Struktur seperti cambuk yang memanjang dari permukaan sel bakteri. Flagela memungkinkan bakteri untuk bergerak secara aktif menuju sumber nutrisi atau menjauh dari lingkungan yang tidak menguntungkan. Jumlah dan lokasi flagela bervariasi antar jenis bakteri.';
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
