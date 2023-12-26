import object from './object'

const list = [
  // Parts of motherboard
  new object('motherboard', 'lga-1151', 'ASUS ROG Strix X370', 'Motherboard LGA 1151 DDR4', 'motherboard-fill',
  "",
  {
    scale: 1,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-203, 22, 0],
    rot: [-1.575, 0, 0],
    src: 'motherboard_x370'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),
  new object('motherboard', 'am4', 'ROG STRIX B550-F', 'Motherboard AM4 DDR4', 'motherboard-fill',
  "",
  {
    scale: 1,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-2, -12, 11],
    rot: [0, 0, 0],
    src: 'asus_strix_b_550_f_gaming_motherboard_realistic'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),
  new object('motherboard', 'amd-5k', 'ROG STRIX B450-F', 'Motherboard AMD 5K', 'motherboard-fill',
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

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),
  new object('motherboard', 'lga-1200', 'NZXT N7 Z490', 'Motherboard LGA 1200 DDR4', 'motherboard-fill',
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

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),

  
  // Parts of cpu
  new object('cpu', 'intel-661', 'Intel i5 661', 'CPU Intel', 'cpu-fill',
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

  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),
  new object('cpu', 'amd-5950', 'AMD Ryzen 5950X', 'CPU AMD', 'cpu-fill',
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

  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),

  
  // Parts of gpu
  new object('gpu', 'discrete', 'Videocard 3DFX Voodoo', 'Discrete GPU', 'gpu-card', 
  "gpu-discrete", {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-4, -4, -4],
    rot: [.4, .78, -.3],
    src: 'videocard_3dfx_voodoo_2'
  },
  [

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

  ],
  [

  ],
  "https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),
  new object('ram', 'ddr4', 'TridentZ GSkill RGB', 'DDR4 Generation', 'memory',
  "",
  {
    scale: 4,
    speed: [0.0005, 0, 0],
    light: ["direct", 3],
    pos: [0, -12, 0],
    rot: [0, 0.8, -.005],
    src: 'ram_ddr4_g.skill_trident_z_rgb'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),
  new object('ram', 'ddr5', 'Kingston FURY Beast', 'DDR5 Generation', 'memory',
  "",
  {
    scale: 7,
    speed: [0.0005, 0, 0],
    light: ["direct", 3],
    pos: [0, 3, 0],
    rot: [1.36, 0.20, -0.80],
    src: 'kingston_fury_ddr5_low_poly'
  },
  [

  ],
  [

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

  ],
  [

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

  ],
  "https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),
  new object('storage', 'flashdrive', 'GOODRAM UTS2 FD', 'Flash Drive', 'hdd-fill',
  "Rp 55.000",
  {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: ["batch", 2],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'goodram_usb_flash_drive'
  },
  [
    "SSD Non-volatile Memory Express (NVMe) menggunakan bus PCIe yang digunakan untuk menghubungkan SSD terhadap motherboard.",
    "SSD NVMe memiliki kecepatan yang dapat mencapai 2 GB/s pada setiap jalur BUS nya. Dengan performa yang terbilang handal, tentu saja SSD NVMe jauh lebih baik dari SSD SATA yang hanya memiliki kecepatan transfer data maksimal 600 MB/s.",
  ],
  [

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
    "SSD Non-volatile Memory Express (NVMe) menggunakan bus PCIe yang digunakan untuk menghubungkan SSD terhadap motherboard.",
    "SSD NVMe memiliki kecepatan yang dapat mencapai 2 GB/s pada setiap jalur BUS nya. Dengan performa yang terbilang handal, tentu saja SSD NVMe jauh lebih baik dari SSD SATA yang hanya memiliki kecepatan transfer data maksimal 600 MB/s.",
  ],
  [

  ],
  "https://sketchfab.com/3d-models/ssd-samsung-980-pro-1tb-208b846d5a5948368b4ad0676bf4ab97"
  ),

  
  // Parts of keyboard
  new object('keyboard', 'wireless-kb', 'Wireless Keyboard', 'Wireless Era', 'keyboard-fill',
  "",
  {
    scale: 10,
    speed: [0.0005, 0, 0],
    light: ["batch", 1],
    pos: [17, 5, -5],
    rot: [0, .79, 0],
    src: 'mechanical_keyboard___aesthetic'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),
  new object('keyboard', 'mechanical', 'Mechanical Keyboard', 'Mechanical Key', 'keyboard-fill',
  "",
  {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: ["batch", 2],
    pos: [0, 0, 0],
    rot: [0, .79, 0], 
    src: 'mechanical_rgb_keyboard'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),
  new object('keyboard', 'membrane', 'Membrane Keyboard', 'Membrane Key', 'keyboard-fill',
  "",
  {
    scale: 1,
    speed: [0.0005, 0, 0],
    light: ["batch", 1],
    pos: [0, 0, 0],
    rot: [0, .8, 0],
    src: 'wireless_keyboard'
  },
  [

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
    "The cord is 1/8” in diameter"
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
    "Resolusi Sensor: 3200 DPI",
    "Berat: 143 g",
  ],
  "https://sketchfab.com/3d-models/gaming-mouse-ab744476bdb343a9bf4544db12168af6"
  ),

  
  // Parts of display
  new object('display', 'lcd', 'Unbranded LCD Monitor', 'LCD Monitor', 'tv-fill',
  "",
  {
    scale: 23,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-2.5, -6, -2.5],
    rot: [-.5, .72, .35],
    src: 'lcd_display'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),
  new object('display', 'curved', 'Samsung 24" Curved Display', 'Curved Monitor', 'tv-fill',
  "",
  {
    scale: 30,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-23, -5, 22],
    rot: [0, .8, 0],
    src: '24_samsung_monitor_curved_display__'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),
  new object('display', 'crt', 'Unbranded CRT Monitor', 'CRT Monitor', 'tv-fill',
  "",
  {
    scale: 23,
    speed: [0.0005, 0, 0],
    light: ["direct", .5],
    pos: [0,0,0],
    rot: [0, 0, 0],
    src: 'crt_monitor'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),


  // Parts of cooling
  new object('cooling', 'exhaust', 'Katana R1 Fan Cooling', 'Air Cooling', 'fan',
  "",
  {
    scale: 100,
    speed: [0.0005, 0, 0],
    light: ["direct", 5],
    pos: [0, 3, 0],
    rot: [1.1, 0.44, -0.7],
    src: 'katana_r_1'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/pc-cooler-2-5cc52b3d32064c9ca6d476e1a90b634f"
  ),
  new object('cooling', 'liquid', 'Corsair H150i Elite', 'Liquid Cooling', 'fan',
  "",
  {
    scale: 7,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [3.8, 0, 3],
    rot: [0, -.78, 0.1],
    src: 'corsair_h150i_elitie_cpu_liquid_cooler'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/pc-cooler-2-5cc52b3d32064c9ca6d476e1a90b634f"
  ),

  
  // Parts of speaker
  new object('speaker', 'passive', 'Passive Vipe Nitro', 'Passive Speaker', 'speaker-fill',
  "",
  {
    scale: 10.0,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [-26.6, -22.6, 15.0],
    rot: [0, 0.20, 0],
    src: 'loud__speaker-_passive'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
  new object('speaker', 'active', 'Jamo P404', 'Active Speaker', 'speaker-fill',
  "",
  {
    scale: 8,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [3.8, 0, -3.8],
    rot: [0, 0, 0],
    src: 'jamo_p404_active_speakers'
  },
  [

  ],
  [

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

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),
];

export default list