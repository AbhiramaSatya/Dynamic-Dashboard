<template>
  <div id="app">
    <div class="sidebar">
      <h2>Dashboard</h2>
      <router-link to="/add" class="nav-link">Tambah Data</router-link>
      <router-link to="/view" class="nav-link">Lihat Data</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style>
/* Gaya untuk sidebar dan konten */
#app {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 200px;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
}
.nav-link {
  display: block;
  padding: 10px 0;
  color: #333;
  text-decoration: none;
}
.nav-link:hover {
  background-color: #e9ecef;
}
.content {
  flex-grow: 1;
  padding: 20px;
}
</style>
