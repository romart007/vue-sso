<template>
  <Header />
  <HospitalList />
</template>

<script setup>
import Header from '../components/Header.vue'
import HospitalList from '../components/HospitalList.vue'

defineOptions({
  name: 'HospitalsView'
})
</script>
