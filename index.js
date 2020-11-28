class BaseDb {
  constructor(settings) {
    this.saveOnChange = settings.soc;
    console.log(this.saveOnChange)
    if(this.saveOnChange==null)
      this.saveOnChange = true
    console.log(this.saveOnChange)
  }
  genProxy(data) {
    return new Proxy(data, {
      set: (obj, prop, val) => {
        obj[prop] = val;
        if (this.saveOnChange) {
          this.update();
        }
        return true;
      },
      deleteProperty: (pObj, prop) => {
        const obj = pObj;
        try {
          obj.splice(prop, 1);
        } catch (err) {
          delete obj[prop];
        }
        if (this.saveOnChange) {
          this.update();
        }
        return true;
      },
      get: (obj, prop) =>
        typeof obj[prop] === "object" && obj[prop]
          ? this.genProxy(obj[prop])
          : obj[prop],
    });
  }
  set value(setTo) {
    this.readOnlyValue = setTo;
    if (this.saveOnChange) {
      this.update();
    }
    return true;
  }
  get value() {
    this.onGet();
    return this.genProxy(this.readOnlyValue);
  }
}

module.exports = {
  RemoteDb,
  LocaleDb,
};
