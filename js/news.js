// Opsi konfigurasi untuk permintaan fetch API
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '00dd35f21cmshafe7a748871a626p1bdee7jsn37b8335d4209',  // Kunci API untuk autentikasi
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com'  // Host API yang digunakan
    }
};

// Melakukan permintaan fetch ke API berita
fetch('https://free-news.p.rapidapi.com/v1/search?q=Cosmetic&lang=en', options)
    .then((response) => response.json())  // Mengonversi respons menjadi JSON
    .then((res) => {
        // Memilih elemen dengan kelas 'tam' untuk menampilkan artikel berita
        const box = document.querySelector('.tam');
        const data = res.articles;  // Mengambil data artikel dari respons
        console.log(res);  // Menampilkan data respons di konsol untuk debugging

        // Hitung jumlah item yang akan diproses
        const totalItems = Math.min(data.length, 25);  // Menampilkan maksimal 25 artikel
        const endIndex = totalItems;  // Indeks item terakhir yang harus ditampilkan

        // Iterasi untuk memproses setiap artikel
        data.slice(0, endIndex).forEach(element => {
            // Membuat elemen div untuk setiap artikel
            const bx = document.createElement('div');
            bx.className = 'cart';  // Menambahkan kelas 'cart' untuk styling

            // Membuat elemen h2 untuk menampilkan judul artikel
            const hrf = document.createElement('h2');
            hrf.textContent = element.title;  // Mengatur teks dengan judul artikel
            hrf.className = 'p';  // Menambahkan kelas 'p' untuk styling
            bx.appendChild(hrf);  // Menambahkan elemen judul ke dalam div bx

            // Membuat elemen img untuk menampilkan gambar artikel
            const g = document.createElement('img');
            g.src = element.media || 'default-image.png';  // Menggunakan gambar default jika media tidak tersedia
            g.alt = "Sorry, Image not Found";  // Mengatur teks alternatif jika gambar tidak ditemukan
            g.className = 'gg';  // Menambahkan kelas 'gg' untuk styling
            bx.appendChild(g);  // Menambahkan elemen gambar ke dalam div bx

            // Membuat elemen p untuk menampilkan tanggal publikasi artikel
            const p = document.createElement('p');
            const d = new String(element.published_date);  // Mengonversi tanggal publikasi ke string
            p.textContent = "Published by: " + d;  // Mengatur teks dengan tanggal publikasi
            p.className = 'l';  // Menambahkan kelas 'l' untuk styling
            bx.appendChild(p);  // Menambahkan elemen tanggal publikasi ke dalam div bx

            // Membuat elemen h5 untuk menampilkan ringkasan artikel
            const s = document.createElement('h5');
            s.textContent = element.summary;  // Mengatur teks dengan ringkasan artikel
            bx.appendChild(s);  // Menambahkan elemen ringkasan ke dalam div bx

            // Membuat elemen a untuk tautan "Learn More"
            const l = document.createElement('a');
            l.href = element.link;  // Mengatur href dengan link artikel
            l.textContent = "Learn More..";  // Mengatur teks tautan
            bx.appendChild(l);  // Menambahkan elemen tautan ke dalam div bx

            // Menambahkan div bx yang berisi informasi artikel ke dalam elemen dengan kelas 'tam'
            box.appendChild(bx);
        });
    })
    .catch((error) => {
        // Menangani kesalahan jika permintaan fetch gagal
        console.error('Error fetching data:', error);
    });
