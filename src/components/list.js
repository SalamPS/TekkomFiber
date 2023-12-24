import object from './object'

const list = [
  // Parts of motherboard
  new object('motherboard', 'motherboard', 'Asus Strix B550-F', 'Gaming Motherboard', 'motherboard-fill',
  "",
  {
    scale: 0.8,
    speed: [0, 0, 0],
    light: undefined,
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
  new object('cpu', 'intel', 'CPU Intel', 'Computer', 'cpu-fill',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'dream_computer_CPU'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/dream-computer-setup-82f78bbaf2d34f01af854a52151dbf49"
  ),
  new object('cpu', 'amd', 'CPU AMD', 'Computer', 'cpu-fill',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'dream_computer_CPU'
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
    light: undefined,
    pos: [-1, 0, 3],
    rot: [0, 0, 0],
    src: 'asus_rog_geforce_rtx_VGA_CARD'
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
    scale: 5,
    speed: [0.0005, 0, 0],
    light: undefined,
    pos: [-1, 0, 3],
    rot: [0, 0, 0],
    src: 'asus_rog_geforce_rtx_VGA_CARD'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-rog-geforce-rtx-4090-v20-6f527569f14b4efc94c7072842bd41ac",
  ),

  new object('gpu', 'integrated', 'Geforce-RTX Integrated', 'Virtual Graphic Array', 'gpu-card',
  "",
  {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: undefined,
    pos: [-1, 0, 3],
    rot: [0, 0, 0],
    src: 'asus_rog_geforce_rtx_VGA_CARD'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-rog-geforce-rtx-4090-v20-6f527569f14b4efc94c7072842bd41ac",
  ),

  
  // Parts of ram
  new object('ram', 'ddr4', 'Crucial Ballistix 3600', 'DDR4 RAM', 'memory',
  "",
  {
    scale: 200,
    speed: [0, 0, 0],
    light: 15,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'crucial_ballistix_8gb_ddr4_3600_ram__black'
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
    light: undefined,
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
    light: undefined,
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
    light: undefined,
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
  new object('keyboard', 'mechanical', 'Mechanical RGB Keyboard', 'RGB Keyboard', 'keyboard-fill',
  "",
  {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: undefined,
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
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
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
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
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
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
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
    light: undefined,
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
  new object('display', 'monitor', 'Asus PCG Monitor', 'Gaming Monitor', 'tv-fill',
  "",
  {
    scale: 15,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, -5, 0],
    rot: [-0.3, 3.95, -0.20],
    src: 'asus_pc_gaming_monitor'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/asus-pc-gaming-monitor-941ce968c30a42d0a640a5c9d7f56128"
  ),


  // Parts of cooling
  new object('cooling', 'air', 'PC Cooler', 'Cooling System', 'fan',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'pc_cooler_2'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/pc-cooler-2-5cc52b3d32064c9ca6d476e1a90b634f"
  ),

  
  // Parts of speaker
  new object('speaker', 'speaker', 'Speaker Vipe Nitro X7', 'Gaming Speaker', 'speaker-fill',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'speaker_vipe_nitro_x7'
  },
  [

  ],
  [

  ],
  "https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
];

export default list