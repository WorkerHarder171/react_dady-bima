REACT FORM
Form merupakan handle input dari user yang digunakan untuk mengambil inputan yang ada. dalam form kita biasanya menggunakannya untuk melakukan  pengisian data yang dilakukan oleh form. pada form sendiri dia mimiliki beberapa element untuk menunjang nya
1. Input Element
	digunakan untuk melakukan inputan dimana inputan ini berupa field
2. Text Area Element
	digunakan untuk melakukan inputan yang panjang.
3. Select Element
	digunakan untuk melakukan inputan yang sudah ditentukan berupa dropdown
4. Radio Button Element
	digunakan untuk melakukan inputan yang bisa dipilih 1 kali
5. CheckBox Element
	digunakan untuk melakukan inputan yang bisa memilih lebih dari 1 kali

Controlled Components
Merupakan sebuah element masukan pada form yang nilainya di control oleh React. dalam penggunaanya controlled components ini menggunakan useState untuk melakukan pengontrolan dimana nantinya dia akan merender dari data yang dimasukan oleh user.

Uncontrolled Components
Merupakan sebuah element yang mana pada uncontrolled components ini menggunakan DOM dalam melakukan kontrol data. jadi secara mudahnya untuk kita mendapatkan data dari form tersebut kita tidak menggunakan useState tapi cukup dari DOM saja. sehingga dalam uncontrolled component ini kita dapat membuat solusi yang cepat tapi tidak rapi.

Basic Validation
Basic Validation merupakan sebuah pengecekan kebenaran terhadap rule pada form yang sudah kita buat. tujuan basic validation ini untuk mencari sebuah inputan yang benar atau yang kita inginkan, untuk melindungi data pengguna dan melindungi sistem aplikasi. dalam validation ini ada 2 model:
1. Client-side
	yang merupakan validasi untuk client melakukan inputan
2. Server-side
	yang merupakan validasi untuk masuk ke server
Pada Basic validation ini untuk membuatnya kita bisa menggunakan beberapa metode yaitu:
1. Required
	digunakan untuk text fields sehingga nantinya ketika text field ini diberi 'require' maka client wajib untuk mengisinya dan tidak boleh melewatinya
2. minlength dan maxlength
	digunkan untuk melakukan penentuan jumlah karakter yang ada pada suatu text field
3. type
	digunakan untuk memberikan kategori dalam inputan field yang ingin dimasukan.
4. pattern
	merupakan suatu aturan regex untuk menentukan pola data