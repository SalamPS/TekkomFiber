class object {
  constructor (sector,type,name,desc,icon,prev,prop,info,spec,origin) {
    this.sector = sector;
    this.type = type;
    this.name = name;
    this.desc = desc;
    this.icon = icon;
    this.prev = prev;

    this.prop = prop;
    this.info = info;
    this.spec = spec;
    this.origin = origin;
  }
}

export default object;