<template>
    <div class="add-container">
      <h1>Tambah Data</h1>
      <form @submit.prevent="addNewItem">
        <div class="form-group">
          <label for="name">Nama:</label>
          <input type="text" id="name" v-model="newItem.name" placeholder="Masukkan Nama" required>
        </div>
        <div class="form-group">
          <label for="description">Deskripsi:</label>
          <textarea id="description" v-model="newItem.description" placeholder="Masukkan Deskripsi" required></textarea>
        </div>
        <button type="submit">Tambah</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useDataStore } from '../stores/dataStore';
  
  export default {
    data() {
      return {
        newItem: {
          name: '',
          description: ''
        }
      }
    },
    methods: {
      addNewItem() {
        const store = useDataStore();
        store.addData(this.newItem);
        this.newItem.name = '';
        this.newItem.description = ''; // Clear form fields
      }
    }
  }
  </script>
  
  <style>
  .add-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 10px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"], textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  