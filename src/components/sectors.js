class buildSector {
  constructor (sector,name,icon,desc) {
    this.sector = sector;
    this.name = name;
    this.icon = icon;
    this.desc = desc;
  }
}

const sector = [
  new buildSector('motherboard', 'Motherboard', 'motherboard-fill',
  [
    "Motherboard menghubungkan semua komponen komputer seperti CPU, RAM, GPU, HDD, dan SSD. Fungsinya mencakup penempatan CPU sebagai otak komputer dan instalasi sistem operasi (OS). Sebagai komponen sentral, motherboard krusial dalam mengkoordinasikan fungsi seluruh sistem.",
    "Sebelum ditemukannya microprocessor, komputer terdiri dari sejumlah papan sirkuit yang terhubung dengan backplane, sebuah papan penghubung perangkat komputer – bisa dibilang nenek moyangnya motherboard. Dahulu setiap perangkat keras komputer ditempatkan pada papan sirkuit yang berbeda. Baru masing-masing papan sirkuit itu dihubungkan ke backplane.",
    "Memasuki era millenium para produsen komputer ternama berlomba-lomba mendesain motherboard sekecil dan seekonomis mungkin, dengan performa yang tidak kalah dengan desain biasa. VIA, sekali lagi dari Taiwan, mengawali dengan membuat terobosan baru: Mini ITX. Meski ditujukan untuk casing kecil, performa motherboard ini sebanding dengan tipe ATX dan Micro ATX."    
  ]),

  new buildSector('cpu', 'Central Processing Unit', 'cpu-fill',
  [
    "CPU, singkatan dari Central Processing Unit, berperan sebagai otak komputer yang menjalankan instruksi-instruksi dan mengkoordinasikan operasi seluruh sistem. Kemampuannya dalam operasi aritmatika, logika, dan kontrol data memastikan efisiensi pelaksanaan tugas-tugas komputasi.",
    "Sebagai pusat kontrol, CPU mengontrol dan mengarahkan aliran informasi serta tugas-tugas yang diberikan kepada komputer. Fungsi utama GPU (Graphics Processing Unit) adalah memproses dan mengoptimalkan tampilan grafis yang ditampilkan pada layar komputer atau perangkat lainnya.",
  ]),

  new buildSector('gpu', 'Graphic Processing Unit', 'gpu-card',
  [
    "GPU yang merupakan singkatan dari ‘Graphics Processing Unit’, adalah komponen khusus dalam komputer yang didesain untuk memproses dan menghasilkan grafik pada layar. Tugas-tugasnya meliputi rendering 2D dan 3D, pemutaran video, dan pemrosesan visual lainnya.",
    "Dengan kemampuan pemrosesan paralel yang tinggi, GPU mampu menangani beban kerja grafis yang kompleks dengan efisien, memastikan tampilan visual yang halus dan responsif pada layar komputer, perangkat mobile, dan berbagai platform lainnya.",
    "Selain peran utamanya dalam pemrosesan grafis, GPU juga telah menjadi inti dari perkembangan dalam dunia komputasi paralel dan kecerdasan buatan. Kemampuannya untuk melakukan sejumlah besar perhitungan secara bersamaan membuat GPU digunakan dalam berbagai aplikasi, termasuk pemodelan cuaca, penelitian ilmiah, dan kecerdasan buatan. "
  ]),

  new buildSector('ram', 'Random Access Memory', 'memory',
  [
    "RAM berfungsi sebagai tempat atau wadah untuk menyimpan data sementara ketika komputer sedang dijalankan dan dapat diakses secara acak. Salah satu jenis RAM adalah DDR SDRAM (Double Date Rate SDRAM) menjadi salah satu yang memiliki kecepatan sangat tinggi diantara jenis-jenis RAM.",
    "RAM ini mampu menjalankan dua instruksi sekaligus dalam satuan waktu yang sama. Memori ini memiliki 184 pin. RAM jenis ini juga mengkonsumsi daya listrik yang lebih rendah.",
    "Karena lebih menghemat daya dan lebih optimal dengan kecepatan tinggi. Untuk kapasitas memori jenis ini pun cukup besar hingga 4 GB per chipnya. Jenis-jenis RAM seperti DDR2, DDR3, DDR4 hingga DDR5 merupakan pengembangan dari DDR SDRAM.",
  ]),

  new buildSector('storage', 'Storage', 'hdd-fill',
  [
    "Storage atau penyimpanan merujuk pada media atau perangkat keras yang digunakan untuk menyimpan dan mendukung akses data pada komputer atau perangkat lainnya. Storage dapat berupa hard drive (HDD), solid-state drive (SSD), USB drive, kartu memori, dan media penyimpanan lainnya.", 
    "Fungsinya adalah menyimpan data secara permanen atau sementara, yang dapat diakses oleh komputer atau perangkat ketika diperlukan. Storage memiliki kapasitas yang bervariasi dan memainkan peran penting dalam menyimpan file, aplikasi, sistem operasi, dan data lainnya untuk penggunaan jangka panjang atau jangka pendek.",
    "Storage menjadi komponen integral dalam ekosistem teknologi informasi, memberikan kemampuan untuk menyimpan, mengakses, dan mengelola data secara efisien. Jenis-jenis storage seperti HDD menawarkan kapasitas besar dengan harga terjangkau, sementara SSD menyediakan kecepatan transfer yang lebih tinggi. "
  ]),

  new buildSector('keyboard', 'Keyboard', 'keyboard-fill',
  [
    "Keyboard adalah perangkat input pada komputer dan perangkat elektronik lainnya yang terdiri dari sekelompok tombol atau kunci yang berfungsi untuk memasukkan data, perintah, atau karakter ke dalam sistem. Setiap tombol pada keyboard mewakili karakter tertentu, angka, atau fungsi khusus, dan ketika ditekan, sinyal elektrik dikirimkan ke perangkat pengolahan data untuk diinterpretasikan. Keyboard umumnya digunakan untuk mengetik teks, menjalankan perintah, dan berinteraksi dengan aplikasi. Sebagai salah satu perangkat input utama, keyboard memainkan peran kunci dalam memfasilitasi interaksi antara pengguna dan sistem komputer.",
    "Beberapa keyboard juga dilengkapi dengan tombol fungsi tambahan, kontrol multimedia, atau pencahayaan latar belakang untuk meningkatkan fungsionalitas dan estetika. Penggunaan keyboard tidak terbatas pada komputer desktop, tetapi juga digunakan pada laptop, tablet, dan perangkat mobile lainnya."
  ]),

  new buildSector('mouse', 'Mouse', 'mouse3-fill',
  [
    "Mouse adalah sebuah perangkat keras input yang digunakan untuk mengontrol dan berinteraksi dengan komputer. Umumnya berbentuk kecil dan ergonomis, mouse dilengkapi dengan dua tombol utama, yaitu tombol kiri dan tombol kanan, serta sebuah roda gulir di antara kedua tombol tersebut. Mouse juga bisa dilengkapi dengan tombol tambahan dan sensor gerak.",
    "Cara kerja mouse melibatkan pergerakan fisik pada permukaan datar, seperti meja, dan sensor di bagian bawah mouse mendeteksi pergerakan tersebut, mengubahnya menjadi gerakan kursor di layar komputer. Tombol pada mouse digunakan untuk melakukan berbagai fungsi, seperti memilih, mengklik, menggeser, dan menggulir, menjadikannya perangkat penting dalam penggunaan komputer sehari-hari. Mouse telah menjadi salah satu perangkat input standar dalam komputasi modern dan digunakan secara luas untuk menjalankan berbagai tugas "
  ]),

  new buildSector('display', 'Display Monitor', 'tv-fill',
  [
    "Display, atau tampilan, merujuk pada perangkat keras atau antarmuka visual pada komputer atau perangkat elektronik lainnya yang menampilkan informasi atau grafik kepada pengguna. Display dapat mengacu pada layar komputer, monitor, televisi, atau layar perangkat seluler. Fungsinya adalah untuk menampilkan output visual dari perangkat, termasuk teks, gambar, video, atau antarmuka pengguna grafis.",
    "Jenis display meliputi teknologi seperti LCD (Liquid Crystal Display), LED (Light Emitting Diode), OLED (Organic Light Emitting Diode), dan lainnya. Ukuran dan resolusi display bervariasi, memberikan pengguna pengalaman visual yang berbeda tergantung pada tujuan penggunaan dan jenis perangkatnya. Display menjadi elemen kunci dalam menyediakan antarmuka yang informatif dan menarik dalam berbagai konteks, dari penggunaan sehari-hari hingga pemutaran konten multimedia dan aplikasi profesional."
  ]),

  new buildSector('cooling', 'Cooling System', 'fan',
  [
    "Cooler CPU adalah perangkat pendingin yang dirancang khusus untuk menjaga suhu prosesor (CPU) agar tetap dalam batas yang aman selama operasi. Prosesor menghasilkan panas saat beroperasi, dan suhu yang tinggi dapat mengurangi kinerjanya atau bahkan merusaknya jika tidak dijaga dengan baik. Cooler CPU biasanya terdiri dari heatsink (radiator) yang terbuat dari bahan konduktif panas, dan kipas untuk membantu menghilangkan panas dari heatsink.",
    "Jenis cooler CPU dapat bervariasi, termasuk cooler udara dan cooler cair. Cooler udara menggunakan udara sebagai media pendingin, dengan heatsink dan kipas yang mengeluarkan panas dari prosesor. Cooler cair menggunakan pendingin cair (biasanya air atau cairan khusus) yang mengalir melalui blok pendingin di atas prosesor dan kemudian disirkulasikan ke radiator untuk dissipasi panas."
  ]),

  new buildSector('speaker', 'Speaker', 'speaker-fill',
  [
    "Speaker adalah perangkat audio yang berfungsi mengubah sinyal listrik menjadi gelombang suara, memungkinkan kita mendengar berbagai jenis audio dari berbagai perangkat seperti ponsel, komputer, televisi, dan radio. Dengan kemampuannya mengkonversi sinyal listrik menjadi getaran mekanis, speaker menjadi komponen krusial dalam sistem audio, bekerja bersama dengan amplifier, sumber audio, dan komponen lainnya untuk menciptakan pengalaman mendengar yang berkualitas dan lengkap.",
    "Aplikasi speaker meluas ke berbagai bidang, mulai dari hiburan seperti home theater dan sistem audio mobil, hingga komunikasi dalam telepon, konferensi, pengeras suara, serta pendidikan di kelas atau seminar. Oleh karena itu, speaker memainkan peran sentral dalam menyediakan pengalaman audio yang mendalam dan bervariasi bagi pengguna di seluruh dunia.",
  ]),
];

export default sector