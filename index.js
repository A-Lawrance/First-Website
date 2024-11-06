let pesanan;
let Burger = 10.00, Nasi = 2.00, Ayam = 3.00;
let Jumlah;


// document.getElementById("subMit").onclick = function() {
//     username = document.getElementById("pesanan").value;
//     console.log(username);
// }

document.getElementById("subMit").onclick = function() {
    pesanan = document.getElementById("peSanan").value;
    Jumlah = document.getElementById("jum_pesan").value;

    if (pesanan == "Burger") {
        let jumlah_bayaran = Burger * Jumlah;
        alert("Jumlah bayaran anda ialah RM" + jumlah_bayaran);
    } else if (pesanan == "Nasi") {
        let jumlah_bayaran = Nasi * Jumlah;
        alert("Jumlah bayaran anda ialah RM" + jumlah_bayaran);
    } else if (pesanan == "Ayam") {
        let jumlah_bayaran = Ayam * Jumlah;
        alert("Jumlah bayaran anda ialah RM" + jumlah_bayaran);
    }
}