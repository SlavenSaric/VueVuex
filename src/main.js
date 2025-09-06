import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    state(){
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state){
            state.counter = state.counter + 1
        },
        increase(state, payload){
            console.log(state);
            
            state.counter = state.counter + payload.value
        }
    },
    getters: {
        getAuth(_, a, b, rootGetters){
            console.log(a,b);
            
            return rootGetters.userIsAuthenticated
        },
        finalCounter(state){
            return state.counter * 3
        },
        normalizedCounter(_, getters){
            const finalCounter = getters.finalCounter
            if(finalCounter < 0 ){
                return 0
            }if (finalCounter > 100){
                return 100
            }
            return finalCounter
        },
    },
    actions: {
        increment(context){
            setTimeout(()=> {
                context.commit('increment')
            }, 2000)
        },
        increase(context, payload){
            console.log(context);
            
                context.commit('increase', payload)
        },
    }
}

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state(){
        return {
            isLoggedIn: false
        }
    },
    mutations: {
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth
        }
    },
    getters: {
        userIsAuthenticated(state){
            return state.isLoggedIn
        }
    },
    actions: {
        login(context){
            context.commit('setAuth', {isAuth: true})
        },
        logout(context){
            context.commit('setAuth', {isAuth: false})
        }
    }
})

const app = createApp(App);
app.use(store)

app.mount('#app');
