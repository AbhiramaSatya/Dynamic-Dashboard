// stores/dataStore.js
import { defineStore } from 'pinia';

export const useDataStore = defineStore('dataStore', {
  state: () => ({
    data: JSON.parse(localStorage.getItem('data'))
  }),
  actions: {
    addData(newItem) {
      this.data = [...this.data, newItem];
      this.updateLocalStorage();
    },
    deleteData(index) {
      this.data = this.data.filter((_, i) => i !== index);
      this.updateLocalStorage();
    },
    updateData(index, updatedItem) {
      this.data = this.data.map((item, i) => i === index ? updatedItem : item);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('data', JSON.stringify(this.data));
    }
  }
});
