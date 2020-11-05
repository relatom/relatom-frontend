import current from '~/assets/data/user.json';

export const state = () => ({
  current: current
})

export const mutations = {

}

export const getters = {
  get (state) {
    return state.current
  }
}
