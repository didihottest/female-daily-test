### Soal No 1

#### PASTIKAN DOCKER TELAH TERINSTALL DAN MENGGUNAKAN VERSI TERBARU

```
Masuk Ke dalam folder project_1_social_plugins_endpoint
```

#### Masukkan Command Berikut

###### Build Docker 
```
docker-compose up -d --build
```

#### Lakukan Pengetesan Dengan Command di Bawah
```
docker exec -it pivot_data npm test
```

#### Akses aplikasi pada http://localhost:4000/twitter/timeline

#### Contoh Penggunaan Link
```
localhost:4000/twitter/timeline?pagination_token=7140dibdnow9c7btw3z21amurmhaxq2mip0wyrm27n0hi&max_results=100

- pagination_token digunakan untuk pindah halaman, pagination_token diisi oleh value next_page_token atau prev_page_token yang didapatkan dari response API dan sifatnya opsional. Gunakan next_page_token untuk pindah ke halaman berikutnya dan gunakan prev_page_token untuk pindah ke halaman sebelumnya.

- max_results digunakan untuk membatasi jumlah tweet yang diinginkan, diisi dengan angka bebas dan sifatnya opsional
```