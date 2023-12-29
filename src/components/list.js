import object from './object'

const list = [
  // Parts of motherboard
  new object('motherboard', 'x370f', 'ASUS ROG Strix X370', 'Motherboard LGA 1151 DDR4', 'motherboard-fill',
  "Rp 3.223.500",
  {
    scale: 1,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-203, 22, 0],
    rot: [-1.575, 0, 0],
    src: 'motherboard_x370'
  },
  [
    "AMD AM4 X370 ATX gaming motherboard with Aura Sync RGB LED, 4 x DDR4 3200MHz, M.2, USB 3.1 front-panel connector and Type-A/C. ",
  ],
  [
    "Aura Sync RGB LED: Stunning synchronized effects and two Aura 4-pin RGB-strip headers",
    "SupremeFX audio: Renowned audio performance with intuitive Sonic Studio III and Sonic Radar III",
    "5-Way Optimization: One-click system-wide overclocking and cooling",
    "Gaming connectivity: USB 3.1 front-panel connector, M.2 and both USB 3.1 Type-A and Type-C™",
    "Gaming networking: Intel® Gigabit Ethernet, LANGuard and GameFirst technologies:",    
  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),
  new object('motherboard', 'b450f', 'ROG STRIX B450-F', 'Motherboard AMD 5K', 'motherboard-fill',
  "",
  {
    scale: 2,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-1, .5, -2],
    rot: [0, 1.6, 0],
    src: 'motherboard_b450f'
  },
  [
    "AMD AM4 B450 Gaming ATX motherboard with 4 x DDR4 4400 MHz support, AI Noise-Canceling Microphone, M.2 with heatsink, USB 3.2 Gen 2, SATA 6 Gbps and Aura Sync RGB lighting."
  ],
  [
    "AM4 socket: Ready for 3rd Gen AMD Ryzen™ processors",
    "Robust power solution: 8+4 discrete MOS with high-quality alloy chokes and durable capacitors",
    "Gaming-optimized connectivity: Dual M.2, USB 3.2 Gen 2, plus HDMI® 2.0 and DisplayPort™ 1.2 output support",
    "Smooth networking: M.2 socket with E-key and Intel® Gigabit Ethernet with ASUS LANGuard",
    "Intuitive software: Easy-to-use UEFI BIOS and ASUS AI Networking make it easy to configure gaming builds",
    "DIY-friendly design: Includes pre-mounted I/O shield, BIOS FlashBack™, Q-LEDs and SafeSlot"
         
  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),
  new object('motherboard', 'n7-z490', 'NZXT N7 Z490', 'Motherboard LGA 1200 DDR4', 'motherboard-fill',
  "",
  {
    scale: .03,
    speed: [0.0005, 0, 0],
    light: ["batch", 1],
    pos: [0, -2, 0],
    rot: [0, 0, 0],
    src: 'motherboard_nzxt_n7_z490'
  },
  [
    "This motherboard enables a visually seamless backdrop for any build with all the features of the Intel Z490 chipset.",
  ],
  [
    "WiFi 6 connectivity and utilizes all PCI express lanes available from the CPU and chipset",
    "Integrated rear I/O shield and optimally placed headers",
    "Intel® Socket LGA1200 for 10th Generation Processors :",
     "Intel® Core™, Pentium Gold, Celeron Processors.",
    "DIMM Slots: 4, DDR4 only",
    "Max Memory Support: 128GB",
    "M.2 Type 2242/2260/2280 (PCIe 3.0 x4 mode)",
    "M.2 Type 2242/2260/2280 (PCIe 3.0 x4 & SATA mode)",
    "SATA 6Gb/s: 4",
  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),

  
  // Parts of cpu
  new object('cpu', 'intel', 'Intel i5 661', 'CPU Intel', 'cpu-fill',
  "",
  {
    scale: 40,
    speed: [0.0005, 0, 0],
    light: ["direct", 4],
    pos: [0.6, -1.2, -4.4],
    rot: [0.5, -2.4, 0.37],
    src: 'intel_processor_core_i5-661'
  },
  [
    "CPU Intel mengacu pada prosesor (Central Processing Unit) yang diproduksi oleh perusahaan teknologi komputer bernama Intel Corporation. Sebagai salah satu produsen terkemuka dalam industri semikonduktor, Intel telah mengembangkan berbagai jenis dan generasi prosesor untuk komputer pribadi, server, dan perangkat lainnya selama beberapa dekade.",
    "Prosesor Intel dikenal dengan berbagai serinya, seperti Intel Core, Intel Pentium, dan Intel Xeon, yang masing-masing dirancang untuk memenuhi kebutuhan performa, konsumsi daya, dan aplikasi khusus tertentu. Dengan inovasi terus menerus dalam desain dan teknologi produksinya, CPU Intel telah menjadi salah satu pilihan utama bagi banyak konsumen dan perusahaan di seluruh dunia karena kinerja, keandalan, dan kompatibilitasnya.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),
  new object('cpu', 'amd', 'AMD Ryzen 5950X', 'CPU AMD', 'cpu-fill',
  "",
  {
    scale: 300,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'ryzen_5950x_v-cache_edition'
  },
  [
    "CPU AMD mengacu pada prosesor (Central Processing Unit) yang diproduksi oleh perusahaan teknologi komputer bernama Advanced Micro Devices, Inc. (AMD). Sebagai pesaing utama Intel dalam industri semikonduktor, AMD telah mengembangkan serangkaian prosesor yang mencakup berbagai segmen pasar, mulai dari komputer desktop, laptop, hingga server.",
    "Seri prosesor terkenal dari AMD meliputi Ryzen untuk komputer desktop, A-Series untuk laptop dan desktop, serta EPYC untuk solusi server. Dengan fokus pada inovasi, kinerja, dan nilai, CPU AMD telah mendapatkan pengakuan dari pengguna dan industri karena kemampuannya dalam menyediakan alternatif kompetitif yang menawarkan kinerja yang baik, efisiensi daya, dan fitur-fitur inovatif dengan harga yang kompetitif.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),
  new object('cpu', 'transmeta', 'Transmeta Crusoe 5304', 'CPU Transmeta', 'cpu-fill',
  "",
  {
    scale: 2,
    speed: [0.0005, 0, 0],
    light: ["batch", 1.5],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'transmeta_crusoe_tm5800_cbga474'
  },
  [
    "CPU Transmeta mengacu pada serangkaian prosesor yang dikembangkan oleh perusahaan Transmeta Corporation pada akhir tahun 1990-an dan awal tahun 2000-an. Prosesor-produk unggulan Transmeta, seperti Crusoe dan Efficeon, dirancang dengan fokus pada efisiensi daya dan performa yang baik, terutama untuk komputer laptop dan perangkat mobile.",
    "Salah satu fitur menonjol dari CPU Transmeta adalah teknologi penghematan daya dan emulasi perangkat keras, yang memungkinkan kompatibilitas dengan instruksi x86 dan kinerja yang relatif baik dengan konsumsi daya yang rendah. Meskipun Transmeta telah menghasilkan inovasi teknologi yang menarik, perusahaan ini pada akhirnya tidak dapat bersaing secara efektif di pasar dan kemudian mengalihkan fokusnya dari produksi prosesor ke lisensi teknologi inti mereka.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),

  
  // Parts of gpu
  new object('gpu', 'discrete', 'Videocard 3DFX Voodoo', 'Discrete GPU', 'gpu-card', 
  "", {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-4, -4, -4],
    rot: [.4, .78, -.3],
    src: 'videocard_3dfx_voodoo_2'
  },
  [
    "Discrete GPU adalah kartu grafis yang berfungsi sebagai unit pemrosesan grafis independen dalam sebuah komputer. Berbeda dengan GPU terintegrasi yang terdapat di dalam prosesor (seperti pada banyak laptop dan beberapa desktop), discrete GPU merupakan kartu grafis yang memiliki sumber daya pemrosesan sendiri dan biasanya terpasang secara terpisah di motherboard.",
    "Dengan keunggulan kinerja yang lebih tinggi dibandingkan dengan GPU terintegrasi, discrete GPU seringkali dipilih untuk aplikasi yang membutuhkan pemrosesan grafis yang intensif, seperti gaming, desain grafis, atau komputasi ilmiah.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-rog-geforce-rtx-4090-v20-6f527569f14b4efc94c7072842bd41ac",
  ),

  new object('gpu', 'integrated', 'AMD Ryzen Threadripper', 'Integrated GPU', 'gpu-card',
  "",
  {
    scale: .3,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [0, 0, 0],
    rot: [1.2, -1.9, 1],
    src: 'amd_ryzen_threadripper'
  },
  [
    "Integrated GPU adalah komponen grafis yang terintegrasi langsung ke dalam prosesor (CPU) atau chipset motherboard pada komputer. Berbeda dengan discrete GPU yang merupakan kartu grafis terpisah dengan sumber daya pemrosesan sendiri, integrated GPU berbagi sumber daya sistem dengan CPU dan menggunakan memori sistem komputer untuk operasinya.",
    "Meskipun seringkali memiliki kinerja grafis yang lebih rendah dibandingkan discrete GPU, integrated GPU cukup untuk kebutuhan komputasi sehari-hari seperti browsing web, pekerjaan kantoran, dan pemutaran video, serta menawarkan keuntungan dalam hal konsumsi energi dan biaya karena tidak memerlukan komponen tambahan.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-rog-geforce-rtx-4090-v20-6f527569f14b4efc94c7072842bd41ac",
  ),

  
  // Parts of ram
  new object('ram', 'ddr1', 'Plain DDR RAM', 'DDR1 Generation', 'memory',
  "",
  {
    scale: 220,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [0, 2.5, 0],
    rot: [-.9, .6, .6],
    src: 'ram_ddr1_micron'
  },
  [
    "Setelah generasi tersebut, hadirlah Double Data Rate SDRAM yang kita kenal dengan DDR. Kecepatan memori ini naik dua kali lipat dibanding pendahulunya. Memori DDR banyak digunakan di Intel Pentium 4 dan AMD Athlon.",
    "Supaya laku di pasaran, manufaktur punya strategi dengan penamaan seri yang dua kali lipat dari kecepatan aslinya. Jadi jika kamu membeli DDR-200 maka kecepatan RAM-nya sebenarnya adalah 100MHz, DDR-226 berkecepatan 133MHz, DDR-333 berkecepatan 166MHz, dan seterusnya.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),
  new object('ram', 'ddr3', 'General DDR3 RAM', 'DDR3 Generation', 'memory',
  "",
  {
    scale: 18,
    speed: [0.0005, 0, 0],
    light: ["direct", `1.5`],
    pos: [0, 1, 0],
    rot: [0, 2.36, -.6],
    src: 'ddr3'
  },
  [
    "DDR 3 keluar pada 2007 dan diklaim kecepatannya meningkat sedangkan pemakaian energinya turun. Namun, sayangnya performa yang didapat hanya lebih besar 2-5% dibandingkan DDR2. Tipe yang dijual DDR3-1066, DDR3-1333, DDR3-1600, DDR3-1800 and DDR3-2000.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),
  new object('ram', 'ddr4', 'TridentZ GSkill RGB', 'DDR4 Generation', 'memory',
  "Rp 938.000",
  {
    scale: 4,
    speed: [0.0005, 0, 0],
    light: ["direct", 3],
    pos: [0, -12, 0],
    rot: [0, 0.8, -.005],
    src: 'ram_ddr4_g.skill_trident_z_rgb'
  },
  [
    "DDR4 dirilis pada 2014. Memori ini menggunakan voltase yang lebih rendah daripada pendahulunya namun kecepatan memorinya jauh lebih besar. Kecepatan yang ditawarkan mulai dari 2133MHz hingga 3200MHz. Chip DDR4 memiliki kerapatan lebih besar, bisa mencapai 16GB atau 2GB per chip. Beberapa model memorinya bisa mencapai 16GB-64GB per module untuk kelas komputer server.",
  ],
  [
    "Capacity 16GB (8GBx2)",
    "Multi-Channel Kit: Dual Channel Kit",
    "Tested Speed (XMP/EXPO) 3600 MT/s",
    "Tested Latency (XMP/EXPO) 15-15-15-35",
    "Tested Voltage (XMP/EXPO) 1.20V",
    "Features Intel XMP 2.0 (Extreme Memory Profile) Ready",
  ],
  "https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),
  new object('ram', 'ddr5', 'Kingston FURY Beast', 'DDR5 Generation', 'memory',
  "Rp 1.032.000",
  {
    scale: 7,
    speed: [0.0005, 0, 0],
    light: ["direct", 3],
    pos: [0, 3, 0],
    rot: [1.36, 0.20, -0.80],
    src: 'kingston_fury_ddr5_low_poly'
  },
  [
    "DDR5 RAM (Double Data Rate 5 Random Access Memory) adalah ddr ram tertinggi saat ini. Baru dirilis pada tahun 2021, ini menjadi generasi terbaru dari teknologi RAM DDR.",
    "RAM DDR5 menawarkan peningkatan kecepatan transfer data sekitar 50-60%. Selain itu, kapasitas yang ditawarkan juga lebih besar, hingga 64 GB per keping. Dua kali lipat lebih tinggi dibandingkan dengan DDR4.",
    "Teknologi baru pada RAM ini yang membuatnya spesial adalah Error Correction Code (ECC) yang dapat memperbaiki kesalahan data secara otomatis, sehingga meningkatkan keamanan dan keandalan data.",
  ],
  [
    "Improved stability for overclocking",
    "Increased efficiency",
    "Intel® XMP 3.0 Certified",
    "AMD EXPO™ Certified",
    "Qualified by the world's leading motherboard manufacturers",
    "Plug N Play at 4800MT/s2",
    "Low-profile heat spreader design in black or white",
  ],
  "https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),

  
  // Parts of storage
  new object('storage', 'hdd', 'HDD PC WD GREEN', 'SATA HDD', 'hdd-fill',
  "Rp 370.000",
  {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: ["batch", 2],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'wd_green_1tb_hard_disk_hdd'
  },
  [
    "Hard disk Serial Advance Technology Attachment (SATA) adalah hdd yang mempunyai bentuk yang ramping daripada HDD yang lainnya.",
    "HDD jenis ini mulai dipasarkan pertama kali di tahun 2002.",
    "HDD berfungsi untuk menyimpan data-data di sebuah laptop maupun komputer. Data-data tersebut berupa OS, software, dan semua file yang ada di komputer atau laptop."
  ],
  [
    "Type : Hard drive - internal",
    "Capacity : 1TB",
    "Form Factor : 3.5 inch",
    "Interface : SATA 6Gb/s",
    "Data Transfer Rate : 300 MBps",
    "Buffer Size : 64 MB",
    "Spindle Speed : 7200 rpm",
    "Transfer Data Rate: Up to 156MB/s"
  ],
  "https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),
  new object('storage', 'ssd-sata', 'SSD PLUS SanDisk', 'SATA SSD', 'hdd-fill',
  "Rp 570.000",
  {
    scale: .3,
    speed: [0.0005, 0, 0],
    light: ["direct", 1],
    pos: [7, -5, 7],
    rot: [0, 2.35, 0],
    src: 'ssd_sata_2_5_7mm'
  },
  [
    "Menyimpan data dengan kecepatan baca dan tulis yang jauh lebih cepat dibandingkan HDD (Hard Disk Drive).",
    "SATA (Serial ATA/Advanced Technology Attachment) adalah suatu interface yang berfungsi untuk menghubungkan penyimpanan." ,
    "Memiliki kemampuan untuk mentransfer suatu data hingga dapat mencapai kecepatan 600 MB/detik.", 
    "Sehingga nanti tiap hardware drive yang tersambung ke motherboard cuma mempunyai kemampuan yang terbatas yaitu 600 MB per detik.",
  ],
  [
    "Capacity : 120GB",
    "Sequential Read Performance: 530MB/s",
    "Sequential Write Performance: 400MB/s",
    "Interface : SATA III",
    "Dimensi (L x W x H): 7mm x 100.5mm x 69.95mm",
  ],
  "https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),
  new object('storage', 'ssd-nvme', 'SSD Samsung 980 Pro', 'NVME SSD', 'hdd-fill',
  "1.780.000",
  {
    scale: 10,
    speed: [0.0005, 0, 0],
    light: ["direct", undefined],
    pos: [0, 3, 0],
    rot: [.8, .62, 2.6],
    src: 'ssd_samsung_980_pro_1tb'
  },
  [
    "SSD Non-volatile Memory Express (NVMe) menggunakan bus PCIe yang digunakan untuk menghubungkan SSD terhadap motherboard.",
    "SSD NVMe memiliki kecepatan yang dapat mencapai 2 GB/s pada setiap jalur BUS nya. Dengan performa yang terbilang handal, tentu saja SSD NVMe jauh lebih baik dari SSD SATA yang hanya memiliki kecepatan transfer data maksimal 600 MB/s.",
  ],
  [
    "Capacity :  1TB.",
    "Dimension :  3.15'' X 0.94 '' X 0.87''",
    "Interface:  PCIe® Gen 4.0 x 4, NVMe® 1.3c.",
    "Form Factor :  M.2 (2280)",
    "Sequential Read Speeds up to :  up to 7,000MB/s",
    "Sequential Write Speeds up to : up to 5,000MB/s",
  ],
  "https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),
  new object('storage', 'flashdrive', 'GOODRAM UTS2 FD', 'Flash Drive', 'hdd-fill',
  "Rp 201.582",
  {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: ["batch", 2],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'goodram_usb_flash_drive'
  },
  [
    "Flashdrive merupakan media penyimpanan yang sangat portable untuk digunakan dan dibawa kemana saja. Flashdisk dapat digunakan hanya dengan menghubungkannya langsung ke port USB dari PC ataupun laptop.",
    "Media penyimpnana portbale ini dapat menyimpan berbagai jenis tipe file, baik audio maupun video. Sehingga saat ini flashdisk tidak hanya bisa digunakan pada komputer atau laptop. Tapi dapat juga digunakan pada DVD player atau audio player yang menyediakan port usb flashdisk.",
  ],
  [
    "Capacities: 16 GB",
    "Interface: USB 2.0 type A backwards compatible with USB 1.1",
    "Speed of operation: read: up to 20 MB/s , write: up to 5 MB/s",
    "Dimension: 57,1 x 19,3 x 10,7 mm",
    "Weight: 15 g",
    "Blister dimensions:103 x 123mm",
  ],
  "https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),
  new object('storage', 'floppy', 'Verbatim MS-DOS Dune 2', 'Floppy Disk', 'hdd-fill',
  "Rp 55.000",
  {
    scale: 10,
    speed: [0.0005, 0, 0],
    light: ["direct", 1],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'floppy_disk'
  },
  [
    "Floppy disk adalah sebuah perangkat penyimpanan data magnetik yang biasanya terbuat dari bahan fleksibel dan dilapisi dengan bahan magnetik, seperti oksida besi.",
    "Floppy disk digunakan sebagai media penyimpanan portabel pada masa awal perkembangan komputer dan terutama pada tahun 1970-an hingga pertengahan 1990-an sebelum digantikan oleh media penyimpanan yang lebih canggih seperti CD, DVD, dan USB flash drive.",
    "Floppy disk memiliki ukuran fisik yang kecil dan tipis, dan dapat dengan mudah dilepas dan dipasang pada drive floppy disk yang terhubung ke komputer. Ukuran yang paling umum adalah 3.5 inci dan 5.25 inci. Kapasitas penyimpanan floppy disk berkisar dari beberapa puluh kilobit hingga beberapa megabit, tergantung pada tipe dan generasinya."
  ],
  [
    "Tipe: 3,5in, 2HD, 135TPI/80Tracks",
    "Kapasitas: 1.44MB",
  ],
  "https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),

  
  // Parts of keyboard
  new object('keyboard', 'wireles', 'Wireless Keyboard', 'Wireless Era', 'keyboard-fill',
  "Rp 399.000",
  {
    scale: 10,
    speed: [0.0005, 0, 0],
    light: ["batch", 1],
    pos: [17, 5, -5],
    rot: [0, .79, 0],
    src: 'mechanical_keyboard___aesthetic'
  },
  [
    "Keyboard nirkabel (wireless keyboard) adalah perangkat input yang terhubung ke komputer atau perangkat lain tanpa menggunakan kabel fisik.", 
    "Keyboard ini menggunakan teknologi nirkabel seperti Bluetooth atau frekuensi radio untuk berkomunikasi dengan komputer, memberikan fleksibilitas dan kebebasan bergerak yang lebih besar dibandingkan keyboard berkabel. Desain tanpa kabel membuat ruang kerja menjadi lebih rapi dan memudahkan pengaturan ruang kerja yang minimalis. Keyboard nirkabel biasanya ditenagai oleh baterai yang dapat diisi ulang atau baterai sekali pakai. Meskipun menawarkan kenyamanan, mereka mungkin memiliki sedikit latensi dibandingkan dengan keyboard berkabel dan memerlukan penggantian atau pengisian baterai secara berkala. Keyboard nirkabel sering digunakan dalam pengaturan rumah atau kantor, serta oleh pengguna yang menginginkan pengaturan yang lebih fleksibel dan portabel."
  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),
  new object('keyboard', 'mechanical', 'Mechanical Keyboard', 'Mechanical Key', 'keyboard-fill',
  "Rp 499.000",
  {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: ["batch", 2],
    pos: [0, 0, 0],
    rot: [0, .79, 0], 
    src: 'mechanical_rgb_keyboard'
  },
  [
    "Keyboard RGB adalah jenis keyboard yang dilengkapi dengan pencahayaan LED berwarna-warni, memungkinkan pengguna untuk mempersonalisasi tampilan keyboard mereka.", 
    "Pencahayaan RGB (Red, Green, Blue) pada keyboard ini dapat dikustomisasi untuk menampilkan berbagai warna dan efek cahaya, seperti berkedip, berpindah-pindah warna, atau tetap pada satu warna tertentu. Pengguna dapat mengatur pencahayaan ini sesuai dengan preferensi pribadi atau untuk meningkatkan estetika ruang kerja mereka. Selain aspek estetika, pencahayaan RGB juga berguna untuk meningkatkan visibilitas tombol dalam kondisi pencahayaan rendah. Keyboard jenis ini populer di kalangan gamer dan penggemar komputer, seringkali dilengkapi dengan fitur tambahan seperti tombol makro, konstruksi yang tahan lama, dan kenyamanan"
  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),
  new object('keyboard', 'membrane', 'Membrane Keyboard', 'Membrane Key', 'keyboard-fill',
  "Rp 380.000",
  {
    scale: 1,
    speed: [0.0005, 0, 0],
    light: ["batch", 1],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'wireless_keyboard'
  },
  [
    "Keyboard membrane adalah jenis keyboard yang menggunakan lapisan plastik lentur sebagai saklar untuk tombolnya.",
    "Ini berbeda dari keyboard mekanik yang menggunakan switch individual. Kelebihannya termasuk harga yang lebih murah dan desain yang lebih tipis dan ringan. Namun, mereka cenderung memiliki umur pemakaian yang lebih pendek dan tidak memberikan umpan balik taktil yang jelas. Meskipun demikian, karena harga terjangkaunya, keyboard membrane populer di kalangan pengguna komputer umum dan mereka yang mencari solusi hemat biaya."
  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),

  
  // Parts of mouse
  new object('mouse', 'trackball', 'Unbranded Trackball', 'Track Ball Mouse', 'mouse3-fill',
  "Rp 305.000",
  {
    scale: .1,
    speed: [0.0005, 0, 0],
    light: ["direct", 1],
    pos: [0, 0, 0],
    rot: [0, -1.6, 0],
    src: 'trackball'
  },
  [
    "Trackball mouse adalah jenis mouse yang memiliki sebuah bola kecil yang memiliki sensor gerak untuk menggerakkan pointer.",
    "Mouse ini sangat populer pada tahun 2008, namun kini sudah jarang dipakai. Karena termasuk jenis mouse awal, sehingga masih menggunakan teknologi yang minim."
  ],
  [
    "Berat : 2.00 kg",
    "The cord is 1/8 inch in diameter"
  ],
  "https://sketchfab.com/3d-models/gaming-mouse-ab744476bdb343a9bf4544db12168af6"
  ),
  new object('mouse', 'optic', 'Logitech G502', 'Optic Mouse', 'mouse3-fill',
  "Rp 629.000",
  {
    scale: 80,
    speed: [0.0005, 0, 0],
    light: ["direct", 10],
    pos: [6, -10, 10.5],
    rot: [0, 4.68, 0],
    src: 'logitech_g502_mouse_USB'
  },
  [
    "Jenis mouse ini menggunakan teknologi optik untuk menggerakkan pointer.",
    "Teknologi optik ini umumnya diletakkan di bagian bawah mouse. Kelebihan mouse ini menggunakan sinar laser di bagian bawah mouse yang mendeteksi pergerakan mouse."
  ],
  [
    "Format data USB: 16 bit/axis",
    "Report rate USB: 1000Hz (1 md)",
    "Mikroprosesor: 32-bit ARM",
    "Format data USB: 16 bit/axis",
    "Report rate USB: 1000Hz (1 md)",
    "Mikroprosesor: 32-bit ARM",
  ],
  "https://sketchfab.com/3d-models/gaming-mouse-ab744476bdb343a9bf4544db12168af6"
  ),
  new object('mouse', 'wireless', 'Logitech G700S', 'Wireless Mouse', 'mouse3-fill',
  "Rp 1.236.000",
  {
    scale: .15,
    speed: [0.0005, 0, 0],
    light: ["direct", undefined],
    pos: [0, -1, 0],
    rot: [0, .65, 0],
    src: 'logitech_g700s_wireless'
  },
  [
    "Mouse wireless adalah mouse yang tidak memiliki kabel.",
    "Supaya bisa dipakai, mouse ini dihubungkan ke laptop atau komputer lewat USB connectivity atau Bluetooth."
  ],
  [
    "Clock: USB 2,4GHz",
    "Sensitivitas: 200 -8200 DPI",
  ],
  "https://sketchfab.com/3d-models/gaming-mouse-ab744476bdb343a9bf4544db12168af6"
  ),
  new object('mouse', 'gaming', 'A4tech Bloody V3M', 'Gaming Mouse', 'mouse3-fill',
  "Rp 287.999",
  {
    scale: 20,
    speed: [0.0005, 0, 0],
    light: ["batch", 2],
    pos: [32, 0, 10],
    rot: [0, 0, 0],
    src: 'gaming_mouse'
  },
  [
    "Gaming mouse adalah sebuah mouse yang khusus dirancang untuk nge-game di komputer (PC).",
    "Dibuat lebih kuat daripada mouse biasa. Mulai dari ketahanan jumlah klik, scroll, sampai bodi yang tahan banting. "
  ],
  [
    "Jumlah Tombol: 8 Button(s)",
    "Sensor Technology: Laser",
    "Resolusi Sensor: 3200 DPI",
    "Berat: 143 g",
    "Dimensi: 63 x 126 x 40 mm"
  ],
  "https://sketchfab.com/3d-models/gaming-mouse-ab744476bdb343a9bf4544db12168af6"
  ),

  
  // Parts of display
  new object('display', 'lcd', 'Unbranded LCD Monitor', 'LCD Monitor', 'tv-fill',
  "Rp 800.000",
  {
    scale: 23,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-2.5, -6, -2.5],
    rot: [-.5, .72, .35],
    src: 'lcd_display'
  },
  [
    "Monitor LCD (Liquid Crystal Display) adalah layar tipis yang menggunakan kristal cair untuk menampilkan gambar.", 
    "Monitor ini menonjol karena efisiensi dan desain rampingnya. Lampu latar LED atau fluorescent menerangi panel, menghasilkan tampilan yang tajam dan jernih. Yang memastikan resolusi tinggi dan reproduksi warna yang akurat. Sudut pandang yang luas adalah kelebihan tambahan, membuatnya ideal untuk berbagai penggunaan."
  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),
  new object('display', 'curved', 'Samsung 24" Curved Display', 'Curved Monitor', 'tv-fill',
  "Rp 1.500.000",
  {
    scale: 30,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-23, -5, 22],
    rot: [0, .8, 0],
    src: '24_samsung_monitor_curved_display__'
  },
  [
    "Monitor lengkung (curved monitor) adalah jenis layar yang memiliki permukaan melengkung, berbeda dari monitor datar tradisional.", 
    "Desain melengkung ini bertujuan untuk meningkatkan pengalaman pengguna dengan memberikan sudut pandang yang lebih alami dan imersif, terutama pada pengaturan gaming dan menonton film. Hal ini juga membantu mengurangi distorsi pada pinggiran layar dan menyediakan konsistensi visual yang lebih baik. Selain itu, beberapa pengguna merasa bahwa monitor lengkung mengurangi kelelahan mata dan memperluas bidang pandang. Namun, monitor ini bisa memerlukan ruang yang lebih banyak dan seringkali lebih mahal dibandingkan dengan monitor datar."
  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),
  new object('display', 'crt', 'Unbranded CRT Monitor', 'CRT Monitor', 'tv-fill',
  "Rp 500.000",
  {
    scale: 23,
    speed: [0.0005, 0, 0],
    light: ["direct", .5],
    pos: [0,0,0],
    rot: [0, 0, 0],
    src: 'crt_monitor'
  },
  [
    "Monitor CRT (Cathode Ray Tube) adalah tampilan klasik yang menggunakan tabung vakum untuk menembakkan elektron ke layar fosfor, menciptakan gambar.", 
    "Keunggulannya termasuk kualitas warna dan kontras yang baik, serta kemampuan menampilkan gambar bergerak cepat tanpa blur. Namun, monitor ini berat dan besar, dan telah digantikan oleh teknologi layar yang lebih efisien seperti LCD dan LED karena faktor praktis dan efisiensi energi. Meski demikian, beberapa penggemar game retro dan profesional grafis masih menghargai CRT untuk keunggulan tertentunya."
  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),


  // Parts of cooling
  new object('cooling', 'exhaust', 'Katana R1 Fan Cooling', 'Air Cooling', 'fan',
  "Rp 489.000",
  {
    scale: 100,
    speed: [0.0005, 0, 0],
    light: ["direct", 5],
    pos: [0, 3, 0],
    rot: [1.1, 0.44, -0.7],
    src: 'katana_r_1'
  },
  [
    "Air cooler adalah sistem pendingin yang menggunakan aliran udara untuk menurunkan suhu komponen-komponen penting seperti CPU (Central Processing Unit).", 
    "Air cooler ini bekerja dengan mengalirkan udara dingin melalui heatsink yang terpasang pada CPU, membantu membuang panas dari prosesor. Heatsink biasanya dilengkapi dengan sirip-sirip logam yang meningkatkan luas permukaan untuk disipasi panas. Fan atau kipas yang terpasang pada air cooler membantu mengalirkan udara sejuk ke heatsink dan mengeluarkan udara panas dari dalam casing. Keunggulan utama dari air cooler adalah biayanya yang lebih terjangkau dan instalasi yang relatif mudah dibandingkan dengan sistem pendingin cair. Namun, efisiensinya bisa berkurang di lingkungan yang sangat panas atau untuk komputer dengan beban kerja yang berat."
  ],
  [

  ],
  "https://sketchfab.com/3d-models/pc-cooler-2-5cc52b3d32064c9ca6d476e1a90b634f"
  ),
  new object('cooling', 'liquid', 'Corsair H150i Elite', 'Liquid Cooling', 'fan',
  "Rp 2.500.000",
  {
    scale: 7,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [3.8, 0, 3],
    rot: [0, -.78, 0.1],
    src: 'corsair_h150i_elitie_cpu_liquid_cooler'
  },
  [
    "Liquid cooler adalah sistem pendingin yang menggunakan cairan untuk menyerap dan membuang panas dari komponen penting seperti CPU (Central Processing Unit).",
    "Sistem ini terdiri dari blok pendingin yang terpasang pada CPU, radiator, pompa, dan saluran untuk mengalirkan cairan pendingin. Cairan tersebut menyerap panas dari CPU dan mengalirkannya ke radiator, di mana panas tersebut kemudian dibuang ke luar sistem melalui kipas yang terpasang pada radiator. Liquid cooler umumnya menawarkan pendinginan yang lebih efisien dibandingkan air cooler, terutama untuk penggunaan PC yang intensif atau overclocking. Walaupun lebih mahal dan instalasinya lebih kompleks, sistem ini dapat mengurangi suhu secara signifikan dan beroperasi lebih senyap dibandingkan dengan solusi pendinginan berbasis udara."
  ],
  [

  ],
  "https://sketchfab.com/3d-models/pc-cooler-2-5cc52b3d32064c9ca6d476e1a90b634f"
  ),

  
  // Parts of speaker
  new object('speaker', 'passive', 'Passive Vipe Nitro', 'Passive Speaker', 'speaker-fill',
  "Rp 5.600.000",
  {
    scale: 10.0,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-26.6, -22.6, 15.0],
    rot: [0, 0.20, 0],
    src: 'loud__speaker-_passive'
  },
  [
    "Speaker pasif adalah jenis speaker yang memerlukan penguat eksternal atau amplifier untuk menghasilkan suara. Berbeda dengan speaker aktif yang memiliki penguat built-in, speaker pasif hanya memiliki komponen speaker tanpa sirkuit penguat.",
    "Sebagai hasilnya, untuk mendapatkan suara dari speaker pasif, perlu dihubungkan dengan penguat eksternal melalui kabel speaker. Speaker pasif sering digunakan dalam sistem audio di mana kontrol dan fleksibilitas lebih penting daripada kebutuhan untuk setup yang lebih sederhana atau portabilitas yang lebih besar.",
  ],
  [
    "Power Output: 300 W (3000 W peak power)",
    "Bluetooth Version: 5.0",
    "Bass Technology: Nitro Bass",
    "LED Features: Full LED lighting with 8 side panel LEDs",
    "Metal Grill: Nitro metal grill",
    "Display: 5-segment LED (white)",
    "Water Protection: IPX4 (on side panel)",
    "Radio FM Frequency: 87.5 - 108.0 MHz",
    "AUX Input: 3.5mm jack",
    "Guitar Jack: 6.35mm",
    "MIK Jack: 6.35mm",
    "USB Charging Port: 5 V/1 A",
    "Digital Input: USB/TYPE-C",
    "Equalizer Modes: 8 EQ modes",
    "Built-in Battery: 12 V/12A",
    "Working Time: Up to 10 hours"
  ],
  "https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
  new object('speaker', 'active', 'Jamo P404', 'Active Speaker', 'speaker-fill',
  "Rp 4.800.000",
  {
    scale: 8,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [3.8, 0, -3.8],
    rot: [0, 0, 0],
    src: 'jamo_p404_active_speakers'
  },
  [
    "'Speaker aktif' adalah sebuah perangkat audio yang memiliki penguat dan pemancar suara (speaker) yang terintegrasi di dalam satu unit. Dengan kata lain, tidak memerlukan amplifier atau penguat tambahan untuk menghasilkan suara yang dapat didengar.",
    "Speaker aktif biasanya dilengkapi dengan sumber daya internal (misalnya, listrik) dan kontrol volume yang dapat disesuaikan. Keuntungannya adalah kemudahan penggunaan dan setup yang sederhana, karena Anda hanya perlu menyambungkannya langsung ke sumber suara (seperti komputer, ponsel, atau perangkat lain) tanpa perlu komponen tambahan.",
  ],
  [
    "Tipe Sistem: 2.0 Aktif Bass Reflex (Kiri Aktif + Kanan Pasif)",
    "Respons Frekuensi: 50Hz-20,000Hz +/-3dB",
    "Output Terkait (Watt): 2x30 (@ 4 ohm, 1% THD)",
    "Berat (Kg/lb): Kiri: 5,1/11,24, Kanan: 3,6/7,93",
    "Output: Sub out, Right spk.out (Aktif)",
    "Tweeter (mm/in): 25/1",
    "Woofer (mm/in): 140/5,5",
    "Input: Optik(2), L/R RCA analog, 3,5mm analog (Aktif)",
  ],
  "https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
  new object('speaker', 'bluetooth', 'Imaignition Bluetooth', 'Bluetooth Speaker', 'speaker-fill',
  "",
  {
    scale: .6,
    speed: [0.0005, 0, 0],
    light: ["direct", 1],
    pos: [0, -20.2, 0],
    rot: [0, -0.9, 0.18],
    src: 'bluetooth_speaker'
  },
  [
    "Speaker Bluetooth adalah perangkat speaker nirkabel yang dapat terhubung ke perangkat lain seperti smartphone, tablet, atau komputer melalui koneksi Bluetooth.",
    "Dengan teknologi ini, pengguna dapat memutar musik atau audio dari perangkat yang berbeda tanpa perlu kabel. Speaker ini memudahkan mobilitas dan memberikan pengalaman mendengarkan yang praktis dan fleksibel.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
  new object('speaker', 'subwoofer', 'Subwoofer Studio', 'Studio Speaker', 'speaker-fill',
  "",
  {
    scale: 22.2,
    speed: [0.0005, 0, 0],
    light: ["direct", undefined],
    pos: [7, -2, 0],
    rot: [0, 0.5, 0],
    src: 'subwoofer'
  },
  [
    "Subwoofer adalah komponen audio yang dirancang khusus untuk menghasilkan suara frekuensi rendah atau bass. Biasanya digunakan sebagai bagian dari sistem audio untuk memperkuat dan meningkatkan kualitas suara bass.",
    "Dengan kehadiran subwoofer, pengguna dapat merasakan efek suara bass yang mendalam dan kuat dalam berbagai konten audio.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),
];

export default list