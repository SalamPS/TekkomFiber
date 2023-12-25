import object from './object'

const list = [
  // Parts of motherboard
  new object('motherboard', 'motherboard', 'Asus Strix B550-F', 'Gaming Motherboard', 'motherboard-fill',
  "",
  {
    scale: 0.8,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [0, -13, 0],
    rot: [1, 0.6, -0.7],
    src: 'asus_strix_b_550_f_gaming_motherboard_realistic'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),

  
  // Parts of cpu
  new object('cpu', 'intel', 'Intel i9 12200H', 'CPU Intel', 'cpu-fill',
  "",
  {
    scale: 5,
    speed: [0, 0, 0],
    light: ["direct", 4],
    pos: [0, .3, 0],
    rot: [0, 0, 0],
    src: 'intel_cpu'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),
  new object('cpu', 'amd', 'AMD Ryzen 6600H', 'CPU AMD', 'cpu-fill',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'amd_am5_socket_and_x3d__cpu_family'
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
    scale: 3,
    speed: [0, 0, 0],
    light: ["point", 2, "30"],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'transmeta_crusoe_tm5800_cbga474'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),

  
  // Parts of gpu
  new object('gpu', 'discrete', 'Geforce-RTX Discrete', 'Virtual Graphic Array', 'gpu-card', 
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

  new object('gpu', 'mobile', 'Geforce-RTX Mobile', 'Virtual Graphic Array', 'gpu-card',
  "",
  {
    scale: 1,
    speed: [0.0005, 0, 0],
    light: ["direct", 2],
    pos: [0, 0, 0],
    rot: [1.58, 1.58, 0],
    src: 'free_realistic_intel_cpu_core_2_mobile_t6600'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-rog-geforce-rtx-4090-v20-6f527569f14b4efc94c7072842bd41ac",
  ),

  new object('gpu', 'miner', 'ARM SkyMiner 2.0', 'Miner GPU', 'gpu-card',
  "",
  {
    scale: .5,
    speed: [0.0005, 0, 0],
    light: ["direct", undefined],
    pos: [0, 3, 0],
    rot: [0, 0, 0],
    src: 'ARM_skyminer_2.0'
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
    scale: 180,
    speed: [0, 0, 0],
    light: ["direct", 2],
    pos: [0, 2.5, 0],
    rot: [-.5, 0, 0],
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
    scale: 13,
    speed: [0, 0, 0],
    light: ["direct", `1.5`],
    pos: [0, 2.5, 0],
    rot: [-.3, 1.58, 0],
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
    scale: 2.5,
    speed: [0, 0, 0],
    light: ["direct", 3],
    pos: [0, -5, 0],
    rot: [0, 0, 0],
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
    scale: 5,
    speed: [0, 0, 0],
    light: ["direct", 3],
    pos: [0, 3, 0],
    rot: [1.2, 0, 0],
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
    scale: 1,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
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
    scale: 1,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'ssd_samsung_980_pro_1tb'
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
    scale: 1,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
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

  
  // Parts of keyboard
  new object('keyboard', 'mechanical-rgb', 'Gaming Mechanical Keyboard', 'Mechanical RGB Keyboard', 'keyboard-fill',
  "",
  {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'mechanical_rgb_keyboard'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),
  new object('keyboard', 'mechanical', 'Mechanical RGB Keyboard', 'RGB Keyboard', 'keyboard-fill',
  "",
  {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'mechanical_rgb_keyboard'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),
  new object('keyboard', 'mechanical', 'Mechanical RGB Keyboard', 'RGB Keyboard', 'keyboard-fill',
  "",
  {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'mechanical_rgb_keyboard'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),

  
  // Parts of mouse
  new object('mouse', 'track-ball', 'Logitech Trackman Marble', 'Track Ball Mouse', 'mouse3-fill',
  "Rp 305.000",
  {
    scale: 100,
    speed: [0, 0, 0],
    light: ["direct", 1],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'lowpoly_trackball_mouse'
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
    speed: [0, 0, 0],
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
  ],
  "https://sketchfab.com/3d-models/gaming-mouse-ab744476bdb343a9bf4544db12168af6"
  ),
  new object('mouse', 'wireless', 'Logitech G700S', 'Wireless Mouse', 'mouse3-fill',
  "Rp 1.236.000",
  {
    scale: .15,
    speed: [0, 0, 0],
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
  new object('mouse', 'wireless', 'A4tech Bloody V3M', 'Gaming Mouse', 'mouse3-fill',
  "Rp 287.999",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [0, 0, 0],
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
    speed: [0, 0, 0],
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
    speed: [0, 0, 0],
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


  // Parts of cooling
  new object('cooling', 'exhaust ', 'Fan CPU Cooler', 'Air Cooling', 'fan',
  "",
  {
    scale: 100,
    speed: [0, 0, 0],
    light: ["direct", 5],
    pos: [0, 3, 0],
    rot: [1, 0, 0],
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
    speed: [0, 0, 0],
    light: ["direct", 2],
    pos: [0, 0, 3],
    rot: [0, -1.57, 0],
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
    scale: 7,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [-21.2, -15, 6],
    rot: [0, 0, 0],
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
    speed: [0, 0, 0],
    light: ["direct", 2],
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'jamo_p404_active_speakers'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
  new object('speaker', 'bluetooth', 'Speaker Vipe Nitro X7', 'Bluetooth Speaker', 'speaker-fill',
  "",
  {
    scale: .35,
    speed: [0, 0, 0],
    light: ["direct", 1],
    pos: [0, -9, 0],
    rot: [0, -.7, 0],
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
    scale: 15,
    speed: [0, 0, 0],
    light: ["direct", undefined],
    pos: [5, 0, 0],
    rot: [0, 0, 0],
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