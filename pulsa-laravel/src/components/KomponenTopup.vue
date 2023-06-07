<template>
          <div class="main">
                <div class="box">
                    <h2>Top Up</h2>
                    <br>
                    <form method="POST" action="">
                        <input class="inputtopup" type="number" placeholder="Masukan Jumlah Uang" name="saldo">
                        <br>
                        <button type="button" class="btn btn-primary">Kirim</button>
                    </form>
                </div>
            </div>
</template>

<script>
export default {
  name: 'KomponenTopup',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.inputtopup {
    width: 100%;
    margin: 5px 0;
    border-radius: 6px;
    padding: 15px;
    border: 1px solid #D9D9D9;
}

.btn {
    border: none;
    width: 100%;
    border-radius: 6px;
    color: #fff;
    font-size: 25px;
    margin-top: 10px;
}
</style>
