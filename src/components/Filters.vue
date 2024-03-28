<template>
  <div class="filter w-100">
    <div class="d-flex justify-content-between align-items-center w-100 mb-4">
      <h5 class="text-white mb-0">Filter By</h5>
      <button type="button" class="reset-btn btn btn-xs btn-outline-secondary text-white">
        <i class="bi bi-arrow-counterclockwise"></i> Reset
      </button>
    </div>
    <div class="mb-4">
      <div class="form-text d-flex justify-content-between text-white mb-2">
        <span class="fw-semibold">By geographic location</span>
        <i class="bi bi-caret-up"></i>
      </div>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search for a country, state or city (contains)"
        />
      </div>
    </div>
    <div class="mb-4">
      <div class="form-text d-flex justify-content-between text-white mb-2">
        <span class="fw-semibold">By ID</span>
        <i class="bi bi-caret-up"></i>
      </div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search by ID (contains)" />
      </div>
    </div>
    <div class="mb-4">
      <div class="form-text d-flex justify-content-between text-white mb-2">
        <span class="fw-semibold">By status</span>
        <i class="bi bi-caret-up"></i>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label class="form-check-label text-white" for="inlineRadio1">Active</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label class="form-check-label text-white" for="inlineRadio2">Inactive</label>
      </div>
    </div>
  </div>
</template>
<script setup>
defineOptions({
  name: 'Filters'
})
</script>
<style setup>
.reset-btn,
.form-check-label {
  font-size: 13px;
}
</style>
