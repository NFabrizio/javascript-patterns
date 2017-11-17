'use strict';

class dataStore {
  constructor() {
    if (! dataStore.instance) {
      this._data = [];
      dataStore.instance = this;
    }

    return dataStore.instance;
  }

  add(datum) {
    this._data.push(datum);
  }

  get(id) {
    this._data.find((item) => item.id === id);
  }
};

const dataStoreInstance = new dataStore();
Object.freeze(dataStoreInstance);

export default dataStoreInstance;
