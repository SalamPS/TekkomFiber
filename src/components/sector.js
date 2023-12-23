class buildSector {
  constructor (sector,name,icon,desc) {
    this.sector = sector;
    this.name = name;
    this.icon = icon;
    this.desc = desc;
  }
}

const sector = [
  new buildSector('gpu', 'Graphic Processing Unit', 'gpu-card',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('display', 'Display Monitor', 'tv-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('motherboard', 'Motherboard', 'motherboard-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('ram', 'Random Access Memory', 'memory',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('cpu', 'Central Processing Unit', 'cpu-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('mouse', 'Mouse as Pointer', 'mouse3-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('keyboard', 'Keyboard', 'keyboard-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('cooling', 'Cooling System', 'fan',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('speaker', 'Speaker', 'speaker-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

  new buildSector('storage', 'Storage', 'hdd-fill',
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac risus nec metus consequat cursus. Aliquam erat volutpat. Duis nec purus nec tortor commodo condimentum vel ut odio."),

];

export default sector