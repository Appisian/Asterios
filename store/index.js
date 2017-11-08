import Vuex from 'vuex'; //eslint-disable-line

import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state = {
};

function createStore() {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
  });
}

export default createStore;
