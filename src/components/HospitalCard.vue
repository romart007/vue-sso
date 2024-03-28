<template>
  <div class="card">
    <div class="d-flex py-4 px-5">
      <div class="w-75 d-flex justify-content-start">
        <div class="img me-3">
          <img class="rounded" src="https://placehold.co/60x60" alt="" />
        </div>
        <div class="details">
          <h5 class="title fw-bold">{{ name }}</h5>
          <div class="hospId"><i class="bi bi-tag"></i> ID: {{ hospId }}</div>
        </div>
      </div>
      <div class="action w-25 text-end"><i class="bi bi-pencil me-1"></i> Edit</div>
    </div>
    <div class="card-footer pt-4 px-5">
      <div class="d-flex justify-content-between">
        <div class="show-details w-75">
          <p class="d-inline-flex gap-1">
            <a
              class="text-decoration-none text-white"
              data-bs-toggle="collapse"
              :href="`#collapseExample${hospId}`"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Show Details
              <i class="bi bi-caret-down fs"></i>
            </a>
          </p>
        </div>
        <div class="full-overview w-25 justify-content-end d-inline-flex">
          <p>Full overview</p>
          <i class="bi bi-arrow-right-short"></i>
        </div>
      </div>
      <div class="collapse" :id="`collapseExample${hospId}`">
        <div class="card card-body">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

defineOptions({
  name: 'HospitalCard'
})

const props = defineProps(['name', 'hospId', 'actionText', 'description'])
</script>
<style lang="scss">
.show-details,
.full-overview {
  p {
    font-size: 13px;
  }
}
</style>
