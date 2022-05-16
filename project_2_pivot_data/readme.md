## Soal No 2

### PASTIKAN DOCKER TELAH TERINSTALL DAN MENGGUNAKAN VERSI TERBARU

```
Masuk Ke dalam folder project_2_pivot_data
```

### Masukkan Command Berikut

#### Create VOLUME Docker untuk database (Pastikan tidak ada volume dengan nama yang sama)
```
docker volume create --name=db_volume
```

#### Build Docker 
```
docker-compose up -d --build
```

#### Buat database baru
```
docker exec -it pivot_data npx sequelize-cli db:create
```

#### Buat table Order
```
docker exec -it pivot_data npx sequelize-cli db:migrate
```

#### Isi table Order dengan data dummy
```
docker exec -it pivot_data npx sequelize-cli db:seed:all
```


#### Lakukan Pengetesan Dengan Command di Bawah
```
docker exec -it pivot_data npm test
```
#### Akses aplikasi pada http://localhost:5000