<template>
   <div class="app">
          <div class="sidebar">
            <h1 class="h1admin"><i>Admin</i></h1>
            <ul>
                <li><a class="listmenu" href="/">Top Up</a></li>
                <li><a class="listmenu" href="/pulsa">Transaksi</a></li>
                <li><a class="listmenu" href="/riwayat">Riwayat</a></li>
            </ul>
        </div>
        <div class="root">
        <div class="nav">
                <h2>
                    <i class="fa-solid fa-wallet" style="color: #256d85;margin-right: 10px;"></i>
                    Rp.200.000
                </h2>
                <h3>
                    NAMA
                    <i class="fa-solid fa-user" style="color: #fff;margin-left: 10px;padding: 10px;background-color: #256d85;border-radius: 20px;"></i>
                </h3>
              </div>
              <router-view/>
            </div>
  </div>
</template>
<script>
export default{
mounted() {
  document.querySelectorAll("a").forEach((comp) => {
      comp.addEventListener("click", (e) => {
          document.querySelectorAll("a").forEach(e => {
              e.classList.remove("active")
          })
  
          e.target.classList.add("active")
      })
  })
}
}
  
</script>
<style>
.sidebar {
    padding: 25px;
    width: 20%;
    height: 100%;
    background-color: #47B5FF;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 0;
}
.nav {
    background-color: #D9D9D9;
    width: 100%;
    height: 10vh;
    padding: 20px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.h1admin{
  color: white;
  margin-top: 30px;
}
.app {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    background-color: #F2FBFF;
}
.root {
    width: 80%;
    height: 100%;
    position: relative;
}
li{
  list-style: none;
  margin-top: 30px;
}
.listmenu{
  color: white;
  text-decoration: none;
  font-size: 18px;
}
ul{
  margin-top: 100px;
}
.active::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    transform: translateY(-35px);
    z-index: -1;
    width: 100%;
    height: 50px;
    background-color: #45adf3;
}

</style>
