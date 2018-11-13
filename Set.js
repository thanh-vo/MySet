class MySet {
  constructor() {
    this.list = [];
  }

  add(value) {
    if (!this.list.includes(value)) {
      this.list.push(value);
    }
  }

  remove(value) {
    if (this.list.includes(value)) {
      const valueIndex = this.list.indexOf(value);
      this.list.splice(valueIndex, 1);
    }
  }

  exist(value) {
    return this.list.includes(value);
  }

  toString() {
    return this.list.toString();
  }
}

module.exports = { MySet };
