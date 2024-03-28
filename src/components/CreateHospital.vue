<template>
  <div>
    <button @click="showModal" class="create-btn btn btn-xs btn-primary" type="submit">
      <i class="bi bi-plus"></i> Create Hospitals
    </button>
    <Modal class="new-hospital" title="" ref="thisModal" @on-modal-hide="handleModalHide">
      <template #body>
        <div class="p-5 pt-3 pb-0">
          <span class="text-light">STEP 1 OF 3</span>
          <h2 class="text-white my-3">New hospital info</h2>
          <p class="text-light">
            Fill in the info of the Hospital. You can change this at any time by reaching the
            Hospital management page.
          </p>
          <form class="rounded">
            <h5 class="text-light fw-semibold p-4 rounded-top">
              <img src="../assets/hosp.png" alt="" width="30" />
              {{ tempName }}
            </h5>
            <div class="p-4">
              <div class="mb-4 d-flex">
                <div class="w-50 pe-2">
                  <label for="basic-url" class="form-label text-light fw-semibold"
                    >Hospital Name</label
                  >
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                      v-model="hospital.name"
                      @blur="updateTempName"
                    />
                  </div>
                </div>
                <div class="w-50 ps-2">
                  <label for="basic-url" class="form-label text-light fw-semibold"
                    >Hospital Id</label
                  >
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3 basic-addon4"
                      v-model="hospital.hospId"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <div class="form-text fw-semibold">Status</div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    :value="true"
                    v-model="hospital.status"
                  />
                  <label class="form-check-label text-light" for="inlineRadio1">Active</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    :value="false"
                    v-model="hospital.status"
                  />
                  <label class="form-check-label text-light" for="inlineRadio2">Inactive</label>
                </div>
              </div>
              <div class="mb-4">
                <div class="form-text fw-semibold">TestDynamics account manager</div>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Select a TestDynamics account manager</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-4">
                <div class="form-text fw-semibold">Plan</div>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Select a plan</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="show-details">
                <p class="d-inline-flex gap-1">
                  <a
                    class="btn btn-outline-secondary"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Show More Details
                  </a>
                </p>
                <div class="collapse" id="collapseExample">
                  <div class="card card-body">
                    Some placeholder content for the collapse component. This panel is hidden by
                    default but revealed when the user activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </template>
      <template #footer>
        <button @click="handleAdd" v-show="hasError" class="btn btn-primary btn-xs action-btn">
          Save
        </button>
      </template>
    </Modal>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'

import Modal from '../components/Modal.vue'
import { useHospitalStore } from '../stores/hospital'

defineOptions({
  name: 'CreateHospital'
})

const initialState = {
  name: null,
  hospId: null,
  status: true,
  description:
    'Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.'
}

let thisModal = ref(null)

function showModal() {
  resetData()
  thisModal.value.show()
}

function hideModal() {
  resetData()
  thisModal.value.hide()
}

const tempName = ref('New Hospital')
let hospital = ref(initialState)

const updateTempName = (e) => {
  if (hasError) {
    tempName.value = e.target.value
  }
}

function handleModalHide() {
  hospital.value = {}
}

const hasError = computed(() => {
  return (
    hospital.value.name !== null &&
    hospital.value.name !== '' &&
    hospital.value.hospId !== null &&
    hospital.value.hospId !== ''
  )
})

const store = useHospitalStore()

const resetData = () => (hospital.value = initialState)

const handleAdd = () => {
  store.addHospital(hospital.value)
  setTimeout(() => hideModal(), 100)
}
</script>

<style lang="scss">
.new-hospital {
  p {
    font-size: 13px;
  }

  form {
    background-color: rgb(33, 35, 36);

    h5 {
      background: rgb(40, 40, 40);
      background: linear-gradient(
        90deg,
        rgba(40, 40, 40, 1) 0%,
        rgba(40, 40, 40, 1) 60%,
        rgba(20, 78, 98, 1) 100%
      );
    }
  }
}
</style>
