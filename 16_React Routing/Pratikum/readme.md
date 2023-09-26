REACT Routing


🎯 Objective
Menggunakan dasar Routing
📝 Task
Soal Prioritas 1 (Nilai 80)
Buatlah halaman LandingPage berdasarkan LandingPage.html yang telah kalian buat pada tugas sebelumnya
Tambahkan tombol pada komponen LandingPage.jsx untuk menavigasi ke komponen CreateProduct.jsx dan Gunakan React Routing untuk navigasi antara component LandingPage.jsx dan CreateProduct.jsx
Soal Prioritas 2 (Nilai 20)
Dengan memanfaatkan react routing buatlah fitur ketika user melakukan klik salah satu data pada tabel maka akan masuk ke halaman lain dan memunculkan data tersebut secara lengkap. link figma
![Alt text](<../Screenshots/WhatsApp Image 2023-09-26 at 15.30.06.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-09-26 at 15.34.59.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-09-26 at 15.35.06.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-09-26 at 15.35.17.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-09-26 at 15.35.59.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-09-26 at 15.36.06.jpeg>)


Contoh : ketika user melakukan klik pada nomor “1,001” maka halaman akan berganti ke routing baru “localhost/account/1,001”. pada halaman ini akan berisikan data lengkap dari user tersebut. User Interface tidak ditentukan
Soal Eksplorasi (Nilai 20)
Buatlah sebuah fitur private routing, sehingga hanya user yang sudah login yang bisa mengakses halaman-halaman tertentu.
Kalian dapat menggunakan localstorage atau variabel biasa sebagai parameter user tersebut sudah login atau belum. contoh kode
import React from "react";

import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {

  return (

    <Route

      {...rest}

      render={(props) => {

        if (localStorage.getItem("isLoggedIn")) {

          return <Component {...props} />;

        } else {

          return <Redirect to="/login" />;

        }

      }}

    />

  );

};


export default PrivateRoute;

^ (contoh kode menggunakan localstorage)


import React, { useState } from 'react';

import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {

const [isLoggedIn, setLogin] = useState(true);

  return (

    <Route

      {...rest}

      render={(props) => {

        if (isLoggedIn) {

          return <Component {...props} />;

        } else {

          return <Redirect to="/login" />;

        }

      }}

    />

  );

};


export default PrivateRoute;

^ (contoh kode menggunakan variabel biasa)

💯 Scoring
Penilaian di fokuskan pada penggunaan routing dan logic kode peserta didik
User interface tidak menjadi faktor penentu yang besar
📝 Note
Penamaan routing dapat kalian ganti sesuai dengan keinginan kalian.
Kode di atas hanya sebagai ilustrasi, kalian dapat mengganti logic dan flow sesuai dengan keinginan kalian. yang penting fitur private routenya jalan.
