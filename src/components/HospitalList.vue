<template>
  <div class="container-fluid mt-5" data-bs-theme="dark">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h2 class="text-white fw-semibold">Manage Hospitals</h2>
        <CreateHospital />
      </div>
      <div class="row mt-3">
        <div class="col-7">
          <SearchInput class="mb-3 pe-5" />
          <HospitalCard
            v-for="hospital in store.hospitals"
            :key="hospital.id"
            v-bind="hospital"
            class="w-100 my-4 rounded-0"
          />
        </div>
        <div class="col-5 pt-5">
          <Filters class="mt-5 px-5" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CreateHospital from '../components/CreateHospital.vue'
import SearchInput from './SearchInput.vue'

import HospitalCard from './HospitalCard.vue'
import Filters from './Filters.vue'

defineOptions({
  name: 'HospitalList'
})

import { useHospitalStore } from '../stores/hospital'

const store = useHospitalStore()
</script>
