<template>
    <div>
      <h1>Data Tersimpan</h1>
      <table>
        <tr>
          <th class="nama">Nama</th>
          <th>Deskripsi</th>
          <th>Aksi</th>
        </tr>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.description }}</td>
          <td>
            <button @click="deleteItem(index)">Hapus</button>
            <router-link :to="'/edit/' + index" class="edit-btn">Edit</router-link>
          </td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  import { useDataStore } from '../stores/dataStore';
  
  export default {
    // computed: {
    //   data() {
    //     const store = useDataStore();
    //     return store.data;
    //   }
    // },
    data() {
      return {
        list : []
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      deleteItem(index) {
        const store = useDataStore();
        store.deleteData(index);
      },
      getData() {
        const data = localStorage.getItem("data")
        this.list = data
        console.log(this.list)
        console.log(data)
      }
    }
  }
  </script>
  <style>
  table {
    width: 100%;
    border-collapse: separate; /* Menggunakan 'separate' untuk mengelola spacing antar cells */
    border-spacing: 0 10px; /* Mengatur spacing horizontal dan vertikal */
  }
  th, td {
    border: 1px solid #dee2e6;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f8f9fa;
  }
  button {
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #c82333;
  }
  .edit-btn {
    margin-left: 10px;
    background-color: #ffc107;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
  }
  .edit-btn:hover {
    background-color: #e0a800;
  }
  </style>
  
  