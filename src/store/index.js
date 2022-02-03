import Vue from 'vue'
import Vuex from 'vuex'
import Library from '@/assets/library.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Kalle Olofsson',
    todos: [], // {id,content,done}
    showDone: true,
    library: [...Library], //library har importerats
    book: '',
    readingList: []
  },

  mutations: {
    setName(state, payload){
      state.name = payload
    },

    addToReadingList(state, book){
      state.readingList.push(book)
    },

    deleteFromReadingList(state, book){
        state.book = book
    },

    toggleDone(state){
      state.showDone = !state.showDone
    }
  },

  getters: {
    activeTodos(state){
      if(state.showDone){
        return state.todos
      }else{
        return state.todos.filter(todo => !todo.done)
      }
    }
  }
})