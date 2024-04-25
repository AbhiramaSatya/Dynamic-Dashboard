<template>
    <div class="edit-container">
      <h1>Edit Data</h1>
      <form @submit.prevent="updateItem">
        <div class="form-group">
          <label for="name">Nama:</label>
          <input id="name" type="text" v-model="item.name" required>
        </div>
        <div class="form-group">
          <label for="description">Deskripsi:</label>
          <textarea id="description" v-model="item.description" required></textarea>
        </div>
        <button type="submit">Simpan Perubahan</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useDataStore } from '../stores/dataStore';
  
  export default {
    data() {
      return {
        item: {
          name: '',
          description: ''
        }
      }
    },
    created() {
      const store = useDataStore();
      const index = parseInt(this.$route.params.id, 10);
      const currentItem = store.data[index];
      if (currentItem) {
        this.item = {...currentItem};
      }
    },
    methods: {
      updateItem() {
        const store = useDataStore();
        const index = parseInt(this.$route.params.id, 10);
        store.updateData(index, this.item);
        this.$router.push('/view'); // Redirect to view page after saving changes
      }
    }
  }
  </script>
  
  <style>
  .edit-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-radius: 5px;
  }
  .form-group {
    margin-bottom: 15px;
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
  