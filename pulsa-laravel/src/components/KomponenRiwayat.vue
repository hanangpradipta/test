<template>

<div class="main">
    <div class="box">
        <h2>Riwayat</h2>
        <br>
        <table cellspacing="0" id="example">
            <thead>
                <tr class="thead" style="background-color: #47B5FF !important;">
                    <th>Tanggal</th>
                    <th>No. Telpon</th>
                    <th>Nominal</th>
                    <th>Provider</th>
                </tr>
            </thead>
            <tbody>
            
                    <tr>
                        <td><p>23-10-2021</p></td>
                        <td><p>081926180287</p></td>
                        <td><p>100.000</p></td>
                        <td><p>XL</p></td>
                    </tr>
                    <tr>
                        <td><p>28-08-2021</p></td>
                        <td><p>081926127899</p></td>
                        <td><p>150.000</p></td>
                        <td><p>IM3</p></td>
                    </tr>
                    <tr>
                        <td><p>16-02-2023</p></td>
                        <td><p>081929162804</p></td>
                        <td><p>20.000</p></td>
                        <td><p>Telkomsel</p></td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
                    </template>
                    <script>
export default {
  name: 'KomponenRiwayat',
}
</script>
<style>
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
table {
    width: 100%;
    border: 2px solid #47B5FF !important;
}

td, th {
    padding: 12px 20px !important;
}

thead {
    background-color: #47B5FF !important;
}

.thead {
    background-color: #47B5FF !important;
}

th {
    background-color: #47B5FF !important;
    font-size: 14px;
    text-align: left;
    color: white ;
}

tr:nth-child(even){
    background-color: #DCF4FF;
}

tr:nth-child(odd){
    background-color: #F2FBFF;
}
</style>
