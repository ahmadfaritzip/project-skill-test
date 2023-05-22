const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Konfigurasi koneksi database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal: ' + err.stack);
    return;
  }
  console.log('Terhubung ke database dengan ID ' + db.threadId);
});

// Mendefinisikan route untuk membaca data
app.get('/data', (req, res) => {
  const sql = 'SELECT * FROM data';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Gagal membaca data: ' + err);
      res.status(500).send('Terjadi kesalahan dalam membaca data');
      return;
    }
    res.json(result);
  });
});

// Mendefinisikan route untuk menambah data
app.post('/data', (req, res) => {
  const data = { note : 'Contoh Data' };
  const sql = 'INSERT INTO data SET ?';
  db.query(sql, data, (err, result) => {
    if (err) {
      console.error('Gagal menambah data: ' + err);
      res.status(500).send('Terjadi kesalahan dalam menambah data');
      return;
    }
    res.send('Data berhasil ditambahkan');
  });
});

// Menjalankan server
app.listen(port, () => {
  console.log('Server berjalan di http://localhost:' + port);
});
