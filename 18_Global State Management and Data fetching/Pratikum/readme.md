GLOBAL STATE MANAGEMENT (explorasi)

🎯 Objective
Mengubah List Product menjadi global state.
📝 Task
Soal Prioritas 1 (Nilai 80)
Rubahlah list products yang sebelumnya berupa state biasa menjadi global state menggunakan redux.
Masukkan data user ke dalam Initial state seperti contoh di bawah
const initialState = {

products: [

{

id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",

productName: "John",

productCategory: "Doe",

productFreshness: "Doe",

productPrice: "Doe",

image: "Doe",

additionalDescription: "Doe",

}

]

};

Pastikan data List Product (ilustrasi pada gambar) berasal dari initialState pada store.

![Alt text](<../Screenshots/WhatsApp Image 2023-10-12 at 10.00.43.jpeg>)

Soal Prioritas 2 (Nilai 20)
Tambahkan fitur untuk menambah, mengedit, dan menghapus data user dalam komponen ListProduct.jsx dengan menggunakan action dan reducer yang sesuai. untuk form edit/menambah kalian dapat menggunakan komponent CreateProduct.jsx atau membuat komponen lain jika diperlukan.
![Alt text](<../Screenshots/WhatsApp Image 2023-10-12 at 10.01.46.jpeg>)

```
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {

    //function untuk menambahkan data object yang ada pada array products di initialState
    addProduct: (state, actions) => {
      state.products = [...state.products, actions.payload];
      console.log("cheked:", actions.payload);
    },

    //function untuk melakukan edit data object yang telah ada pada array products
    editProduct: (state, actions) => {
      const { id, name, category, image, freshness, additional, price } =
        actions.payload;
      const productIndex = state.products.findIndex((data) => data.id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          name: name,
          category: category,
          image: image,
          freshness: freshness,
          additional: additional,
          price: price,
        };
      }
    },

    //function untuk melakukan penghapusan data yang ada
    deleteProduct: (state, action) => {
      state.products = state.products.filter((data) => {
        if (data.id !== action.payload) {
          return { data };
        }
        return alert("Apakah anda ingin menghapus product ini?");
      });
    },
  },
});
```
![Alt text](<../Screenshots/WhatsApp Image 2023-10-12 at 10.28.19.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-10-12 at 10.30.23.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-10-12 at 10.29.55.jpeg>)
![Alt text](<../Screenshots/WhatsApp Image 2023-10-12 at 10.28.54.jpeg>)

Soal Eksplorasi (Nilai 20)
Instal package redux-thunk pada proyek kamu dengan perintah:
npm install --save redux-thunk

Import redux-thunk ke dalam file store.js:
import thunk from 'redux-thunk';

Gunakan thunk sebagai middleware pada store:
const store = createStore(reducer, applyMiddleware(thunk));

Buat action creator baru untuk menambahkan product baru ke dalam store:
export const addProduct = product => {

return (dispatch, getState) => {

const {products } = getState();

const productExists = products.find(u => u.productName === user.productName);

if (productExists) {

dispatch(addProductError('Product Name already exists'));

} else {

dispatch(addProductSuccess(product));

}

};

};

Tambahkan tindakan untuk menangani aksi yang dilakukan oleh action creator:
case ADD_PRODUCT_SUCCESS:

return {

...state,

users: [...state.productss, action.payload],

error: null

};

case ADD_PRODUCT_ERROR:

return {

...state,

error: action.payload

};

Jalankan action creator addUser() dalam component React:
handleSubmit = product => {

this.props.addProduct(product);

};

Koneksikan component dengan store dengan menggunakan connect():
export default connect(null, { addProduct })(AddProductForm);

Tampilkan error dari store jika action addProduct() mengalami error:
{this.props.error && <div>{this.props.error}</div>}

Gunakan logic kondisional sebelum menjalankan aksi addProduct() untuk memastikan bahwa productName baru belum ada dalam list users sebelum menambahkan product baru. Jika ProductName sudah ada, maka action akan mengalami error dan menampilkan pesan error ke user. kalian boleh untuk melakukan modifikasi kode. intinya adalah fitur dapat berjalan sesuai dengan instruksi
💯 Scoring
Mentor tidak menilai user interface melainkan fungsionalitas dan kualitas kode.
Desain / user interface pada contoh di atas dapat kalian rubah sesuai dengan keinginan kalian.
📝 Note
Mentor tidak wajib menerangkan redux thunk. stabdart minimal pemahaman di kelas hanya sampai redux toolkit biasa/ sesuai pada ppt
Soal explorasi digunakan untuk menambah pengetahuan mereka diluar materi, jika mereka dapat mengerjakan soal explorasi sendiri itu lebih bagus. untuk melatih kreatifitas dan problem solving peserta didik.
