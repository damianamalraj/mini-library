import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Kalle Olofsson',
    todos: [], // {id,content,done}
    showDone: true
  },

  mutations: {
    setName(state, payload){
      state.name = payload
    },

    addTodo(state, content){
      const todo = {
        id: String(Math.floor(Math.random()*Math.pow(10,10)))+Date.now(),
        content,
        done: Math.random() > 0.5
      }
      state.todos.push(todo)
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