import api from '../../api/imgur';
import { router } from '../../main';

const state = {
    images: []
};

const getters = {
    allImages: state => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) { // actions get called with an object as the first arg
        const { token } = rootState.auth; // which contains commit, rootState, etc. rootState refers to all
        const response = await api.fetchImages(token);      // of the state held in our vuex instance
        commit('setImages', response.data.data)   // auth is a module declared in index.js
    },
    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;

        await api.uploadImages(images, token);

        router.push('/');
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}