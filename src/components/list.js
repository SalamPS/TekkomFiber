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
  [],
  "https://sketchfab.com/3d-models/asus-strix-b-550-f-gaming-motherboard-realistic-3eba5f45bed74fbeb2647de38047000f"
  ),

  
  // Parts of cpu
  new object('cpu', 'cpu', 'Dream Computer CPU', 'Computer', 'cpu-fill',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'dream_computer_CPU'
  },
  [],
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
  [],
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
  [],
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
  [],
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
  [],
  "https://sketchfab.com/3d-models/crucial-ballistix-8gb-ddr4-3600-ram-black-1fce4935471e46cab6ee57ba140c87f9"
  ),

  
  // Parts of storage
  new object('storage', 'ssd', 'SSD Samsung 980 Pro', 'Solid State Drive', 'hdd-fill',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'ssd_samsung_980_pro_1tb'
  },
  [],
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
  [],
  "https://sketchfab.com/3d-models/mechanical-rgbeyboard-4650f5bafe934a90b9f09396b843a966"
  ),

  
  // Parts of mouse
  new object('mouse', 'ball', 'Gaming Mouse', 'Gaming Mouse', 'mouse3-fill',
  "",
  {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'gaming_mouse'
  },
  [],
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
  [],
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
  [],
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
  [],
  "https://sketchfab.com/3d-models/speaker-vipe-nitro-x7-f8ad99da408f4211b224ef51f08cee06"
  ),
];

export default list