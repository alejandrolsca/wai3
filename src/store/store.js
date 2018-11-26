import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';


Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  state: {
    total: 0,
    categoryId: 1,
    categories: [
      { ca_id: 1, ca_name: "Hamburguesas fashion" },
      { ca_id: 2, ca_name: "Hamburguesas no tan buenas" }
    ],
    products: [
      {pr_id: 1, ca_id: 1, title:"Hamburguesa 1", pr_name: "Hamburguesa deliciosa con queso y tocino.", pr_price: 100.99},
      {pr_id: 2, ca_id: 1, title:"Hamburguesa 2", pr_name: "Hamburguesa no tan deliciosa con queso pero tiene lo suyo la neta, osea aguanta.", pr_price: 50.99},
      {pr_id: 3, ca_id: 1, title:"Hamburguesa 3", pr_name: "Esta buenasa", pr_price: 34.99},
      {pr_id: 4, ca_id: 1, title:"Hamburguesa 4", pr_name: "Esta no tanto pero aguanta", pr_price: 89.99},
      {pr_id: 5, ca_id: 1, title:"Hamburguesa 5", pr_name: "iugggggggg wacala!", pr_price: 40.99},
      {pr_id: 6, ca_id: 2, title:"Hamburguesa 6", pr_name: "esta dos dos", pr_price: 38.99},
      {pr_id: 7, ca_id: 2, title:"Hamburguesa 7", pr_name: "Esta es la reyna de las Hamburguesas", pr_price: 76.99},
      {pr_id: 8, ca_id: 2, title:"Hamburguesa 8", pr_name: "Sin comentarios...", pr_price: 120.99},
      {pr_id: 9, ca_id: 2, title:"Hamburguesa 9", pr_name: "Adictiva", pr_price: 35.99},
      {pr_id: 10, ca_id: 2, title:"Hamburguesa Hondureña", pr_name: "Sin frijoles, especialmente diseñada para nuestros migrantes Hondureños, de México para el resto mundo.", pr_price: 25.99}
    ],
    cart:[]
  },
  getters,
  mutations,
  actions,
  plugins: [vuexLocalStorage.plugin]
});
