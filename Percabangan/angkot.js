let jumlahAngkot = 10;
let angkotBeroprasi = 6;

for(let noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++ ) {
      if (noAngkot <= angkotBeroprasi) {
            console.log(`Angkot No. ${noAngkot} Beroperasi dengan baik`);
      }
      else{
             console.log(`Angkot No. ${noAngkot} Tidak beroperasi dengan baik `);
      }
}
