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
  ]),

  new buildSector('ram', 'Random Access Memory', 'memory',
  [
    "RAM berfungsi sebagai tempat atau wadah untuk menyimpan data sementara ketika komputer sedang dijalankan dan dapat diakses secara acak. Salah satu jenis RAM adalah DDR SDRAM (Double Date Rate SDRAM) menjadi salah satu yang memiliki kecepatan sangat tinggi diantara jenis-jenis RAM.",
    "RAM ini mampu menjalankan dua instruksi sekaligus dalam satuan waktu yang sama. Memori ini memiliki 184 pin. RAM jenis ini juga mengkonsumsi daya listrik yang lebih rendah.",
    "Karena lebih menghemat daya dan lebih optimal dengan kecepatan tinggi. Untuk kapasitas memori jenis ini pun cukup besar hingga 4 GB per chipnya. Jenis-jenis RAM seperti DDR2, DDR3, DDR4 hingga DDR5 merupakan pengembangan dari DDR SDRAM.",
  ]),

  new buildSector('storage', 'Storage', 'hdd-fill',
  [
    "Secara umum, Storage Device berfungsi untuk menyimpan data-data di sebuah laptop maupun komputer.", 
    "Data-data tersebut berupa OS, software, dan semua file yang ada di komputer atau laptop.",
  ]),

  new buildSector('keyboard', 'Keyboard', 'keyboard-fill',
  [
    "Secara umum, keyboard adalah perangkat input yang digunakan untuk mengetik teks dan melakukan perintah pada komputer. Keyboard terdiri dari rangkaian tombol yang mewakili huruf, angka, dan simbol, serta tombol fungsi khusus."
  ]),

  new buildSector('mouse', 'Mouse the Pointer', 'mouse3-fill',
  [
    "Mouse adalah sebuah perangkat keras input yang digunakan untuk mengontrol dan berinteraksi dengan komputer. Umumnya berbentuk kecil dan ergonomis, mouse dilengkapi dengan dua tombol utama, yaitu tombol kiri dan tombol kanan, serta sebuah roda gulir di antara kedua tombol tersebut. Mouse juga bisa dilengkapi dengan tombol tambahan dan sensor gerak.",
    "Cara kerja mouse melibatkan pergerakan fisik pada permukaan datar, seperti meja, dan sensor di bagian bawah mouse mendeteksi pergerakan tersebut, mengubahnya menjadi gerakan kursor di layar komputer. Tombol pada mouse digunakan untuk melakukan berbagai fungsi, seperti memilih, mengklik, menggeser, dan menggulir, menjadikannya perangkat penting dalam penggunaan komputer sehari-hari. Mouse telah menjadi salah satu perangkat input standar dalam komputasi modern dan digunakan secara luas untuk menjalankan berbagai tugas "
  ]),

  new buildSector('display', 'Display Monitor', 'tv-fill',
  [
    "Secara umum, perangkat display berfungsi untuk menampilkan keluaran dari komputer. Monitor bervariasi dalam ukuran, resolusi, dan teknologi yang digunakan. Termasuk penting dalam pengaturan komputer, monitor memungkinkan pengguna untuk berinteraksi dengan antarmuka grafis dan melihat informasi secara visual."
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