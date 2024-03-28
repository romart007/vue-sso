<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby=""
    aria-hidden="true"
    ref="modalEle"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
        </div>
        <div class="modal-body">
          <slot name="body" />
        </div>
        <div class="modal-footer border-0 px-4 pb-3">
          <div class="d-flex justify-content-between w-100">
            <button
              type="button"
              class="btn btn-outline-secondary action-btn"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Modal } from 'bootstrap'

defineOptions({
  name: 'Modal'
})

defineProps({
  title: {
    type: String,
    default: '<<Title goes here>>'
  }
})
let modalEle = ref(null)
let thisModalObj = null

const emit = defineEmits(['onModalHide'])

onMounted(() => {
  thisModalObj = new Modal(modalEle.value)
  const el = modalEle.value
  el.addEventListener('hidden.bs.modal', function (event) {
    emit('onModalHide')
  })
})
function _show() {
  thisModalObj.show()
}

function _hide() {
  thisModalObj.hide()
}
defineExpose({ show: _show, hide: _hide })
</script>
<style lang="scss">
.modal-content {
  background-color: rgb(23, 24, 26);
}

.action-btn {
  line-height: inherit !important;
}
</style>
