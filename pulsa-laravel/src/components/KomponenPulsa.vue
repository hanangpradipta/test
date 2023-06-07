<template>
 <div class="main">
                <div class="box">
                    <h2>Pulsa</h2>
                    <br>
                    <form method="POST">
                        <input class="inputpulsa" type="text" placeholder="Masukan Nomer HP" name="no_kartu">
                        <input class="inputpulsa" type="number" placeholder="Masukan Jumlah Pulsa" name="nominal">
                        <br>
                        
                        <label for="xl">XL</label>
                        <input class="inputprov" type="radio" id="xl" value="xl" name="provider">
                        <label for="tri">3</label>
                        <input class="inputprov" type="radio" id="tri" value="tri" name="provider">
                        <label for="m3">IM3</label>
                        <input class="inputprov" type="radio" id="m3" value="m3" name="provider">
                        <label for="tel">Telkomsel</label>
                        <input class="inputprov" type="radio" id="tel" value="tel" name="provider">
                        <button type="button" class="btn btn-primary">Kirim</button>
                    
                    </form>
                </div>
            </div>
</template>
<script>
export default {
  name: 'KomponenPulsa',
  mounted(){
  document.querySelectorAll("label").forEach((comp) => {
      comp.addEventListener("click", (e) => {
          document.querySelectorAll("label").forEach(e => {
              e.classList.remove("on")
          })
  
          e.target.classList.add("on")
      })
  })
  }
}
</script>
<style>
label {
    display: inline-block;
    padding: 10px 30px;
    margin: 7px 0;
    margin-right: 5px;
    color: #bbb;
    border-radius: 6px;
    background-color: #f3f3f3;
    cursor: pointer;
}
label:hover {
    cursor: pointer;
    background-color: #45adf3;
    color: white;
}
.btn {
    border: none;
    width: 100%;
    border-radius: 6px;
    color: #fff;
    font-size: 25px;
    margin-top: 10px;
}
.main {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* content */
.box {
    padding: 25px 40px;
    width: 70%;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 7px 32px rgba(0, 22, 35, 0.1)
}
.inputpulsa {
    width: 100%;
    margin: 5px 0;
    border-radius: 6px;
    padding: 15px;
    border: 1px solid #D9D9D9;
}
.inputprov{
    display: none;
}
.on {
    background-color: #47B5FF;
    color: white;
}
</style>