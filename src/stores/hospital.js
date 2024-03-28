import { defineStore } from 'pinia';

import { hospitalList } from '@/data/hospitalList';

export const useHospitalStore = defineStore('hospital', {
  state: () => ({
    hospitalList: [...hospitalList],
  }),
  getters: {
    hospitals: (state) => {
      return state.hospitalList
    },
  },
  actions: {
    addHospital(item) {
      this.hospitalList.unshift(item)
    },
  },
});
