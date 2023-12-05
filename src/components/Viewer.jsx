// import './css/App.css'
import { useParams } from "react-router-dom";
import Box from "../canvas/Box";
import { useState } from "react";

class object {
  constructor (type,name,desc,prop) {
    this.type = type;
    this.name = name;
    this.desc = desc;
    this.prop = prop;
  }
}

const list = [
  new object('vga', 'AsusROG Geforce-RTX', 'Virtual Graphic Card', {
    scale: 5,
    speed: [0.0005, 0, 0],
    light: undefined,
    pos: [-1, 0, 3],
    rot: [0, 0, 0],
    src: 'asus_rog_geforce_rtx_VGA_CARD'
  }),
  new object('monitor', 'Asus PC Gaming Monitor', 'Gaming Monitor', {
    scale: 15,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, -5, 0],
    rot: [-0.3, 3.95, -0.20],
    src: 'asus_pc_gaming_monitor'
  }),
  new object('motherboard', 'Asus Strix B550-F Gaming Motherboard', 'Gaming Motherboard', {
    scale: 0.8,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, -13, 0],
    rot: [1, 0.6, -0.7],
    src: 'asus_strix_b_550_f_gaming_motherboard_realistic'
  }),
  new object('ram', 'Crucial Ballistix 8GB DDR4 3600 RAM (Black)', 'DDR4 RAM', {
    scale: 200,
    speed: [0, 0, 0],
    light: 15,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'crucial_ballistix_8gb_ddr4_3600_ram__black'
  }),
  new object('cpu', 'Dream Computer CPU', 'Computer CPU', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'dream_computer_CPU'
  }),
  new object('mouse', 'Gaming Mouse', 'Gaming Mouse', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'gaming_mouse'
  }),
  new object('keyboard', 'Mechanical RGB Keyboard', 'RGB Keyboard', {
    scale: 0.3,
    speed: [0.0005, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'mechanical_rgb_keyboard'
  }),
  new object('cooler', 'PC Cooler 2', 'Cooling System', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'pc_cooler_2'
  }),
  new object('speaker', 'Speaker Vipe Nitro X7', 'Gaming Speaker', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'speaker_vipe_nitro_x7'
  }),
  new object('ssd', 'SSD Samsung 980 Pro 1TB', 'Solid State Drive', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'ssd_samsung_980_pro_1tb'
  }),
  new object('desktop', 'Desktop PC', 'Personal Computer', {
    scale: 1,
    speed: [0, 0, 0],
    light: undefined,
    pos: [0, 0, 0],
    rot: [0, 0, 0],
    src: 'desktop_pc'
  })
];

const View = () => {
  const {part} = useParams();
  const show = list.find(item => item.type == part);
  const prop = show.prop;

  const [toggle, setToggle] = useState(false);
  const toggleSpeed = () => {
    setToggle(!toggle);
  };

  return <>
    <div id="control">
      <div>
        <button id="toggleSpeed" onClick={toggleSpeed} className={(prop.speed.some(speedValue => speedValue !== 0) ? "show" : "hide")}>
          {toggle ? 'Turn Off Rotation' : 'Turn On Rotation'}
        </button>
      </div>
      <div id="navigate">
        <button title="info">
          <span className="bi bi-link-45deg"></span>
        </button>
        <button title="link">
          <span className="bi bi-link-45deg"></span>
        </button>
      </div>
    </div>
    <Box
      scale={prop.scale ? prop.scale : 1}
      speed={toggle ? prop.speed : [0,0,0]}
      light={prop.light}
      pos={prop.pos}
      rot={prop.rot}
      src={prop.src}
    />
  </>
}

const Bar = () => {
  const {part} = useParams();
  const show = list.find(item => item.type == part);

  return (
    <>
      <div className="explainer">
        <div className="del" id="hide"></div>
        <div className="del" id="content">
          <h1>{show.name}</h1>
          <p>{show.desc}</p>
        </div>
      </div>
    </>
  )
}

function Viewer() {

  return (
    <div id="Viewer">
      <div className="title">
        <img src="./src/assets/tekkom.png" alt="Tkm"/>
      </div>

      <View/>
      <Bar/>
    </div>
  )
}

export default Viewer
