class buildSector {
  constructor (sector,icon,desc) {
    this.sector = sector;
    this.icon = icon;
    this.desc = desc;
  }
}

const sector = [
  new buildSector('gpu', 'gpu-card',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('display', 'tv-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('motherboard', 'motherboard-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('ram', 'memory-k',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('cpu', 'cpu-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('mouse', 'mouse3-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('keyboard', 'keyboard-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('cooling', 'fan-k',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('speaker', 'speaker-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
  new buildSector('storage', 'hdd-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),
  
];

export default sector