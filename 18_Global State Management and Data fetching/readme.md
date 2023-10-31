GLOBAL STATE MANAGEMENT
Merupakan suatu pengaturan tata kelola data yang mana state adalah suatu data yang digunakan untuk menyimpan data yang bisa berubah seiring waktu. dalam menggunakan global state management ini kita nantinya akan menggunakan redux.

Apa itu Redux?
redux merupakan library state management. Redux ini menggunakan konsep action dan reducer dalam pengelolaan statenya. kondisi yang biasanya oleh seorang programmer ketika menggunakan redux adalah ketika :
1. banyak state yang perlu di taruh pada banyak tempat atau file
2. State pada aplikasi sering berubah-ubah
3. Penggunaan logic yang kompleks
4. Ukuran codebase yang sedang-besar
5. perlu mengetahui bagaimana state diupdate seiring berjalan dengan waktu.
itu semua adalan rata-rata kondisi ketika kita menggunakan redux. kemudian dalam redux sendiri memiliki beberapa tools dan libraries yang ada yaitu:
1. react-redux
2. redux-toolkits
3. redux-devtools ekstention

Selain redux kita juga mengenal redux thunk, apa itu redux thunk?

redux thunk sendiri merupakan midleware  dari redux yang memungkin kan untuk kira bisa menulis action creators untuk mengembalikan fungsi bukan aksi. dalam penggunakan thunk sendiri kita nantinya bisa melakukan handle side efect logic yang kompleks dan login async untuk request data.
