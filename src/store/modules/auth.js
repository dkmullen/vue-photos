import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';
// braces indicate that router is a named object, not called 'default' in main.js

const state = {
    token: window.localStorage.getItem('imgur_token')
};

// When state changes, any component using these getters is updated

const getters = {
    isLoggedIn: state => !!state.token // ie is state token false or true?
};

const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({commit}, hash) { // receives window.localtion.hash from AuthHandler.vue
        const query = qs.parse(hash.replace('#', '')); // turns the string into an object w/c inludes access_token
        commit('setToken', query.access_token);
        window.localStorage.setItem('imgur_token', query.access_token);
        router.push('/');
    },
    logout: ({ commit }) => { // the commit function is used to call mutations
        commit('setToken', null); // set token to null
        window.localStorage.removeItem('imgur_token');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};