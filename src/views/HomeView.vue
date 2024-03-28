<template>
  <div data-bs-theme="dark">
    <Header />
    <div class="container py-4">
      <div class="p-5 mb-4 bg-dark rounded-3 welcome-header">
        <div class="container-fluid">
          <div class="d-flex align-items-center">
            <img src="../assets/avatar.svg" alt="" width="50" />
            <h5 class="ms-5 display-5 fw-semibold text-white mb-0">Welcome to the App!!</h5>
          </div>
        </div>
      </div>

      <h4 class="text-light mb-4">Your monthly insights</h4>

      <div class="row align-items-md-stretch">
        <div class="col-md-4">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h5 class="mb-5"># of hospitals using TestDynamics</h5>
            <h1>11</h1>
            <button class="btn btn-outline-light" type="button">
              <span class="text-success">1 0%</span> this month
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h5 class="mb-5"># of cases processed</h5>
            <h1>349</h1>
            <button class="btn btn-outline-light" type="button">
              <span class="text-success">^ 59.4%</span> this month
            </button>
          </div>
        </div>
        <div class="col-md-4">
          <div class="h-100 p-5 text-white bg-dark rounded-3">
            <h5 class="mb-5">Average # of cases processed per hospital</h5>
            <h1>31.73</h1>
            <button class="btn btn-outline-light" type="button">
              <span class="text-success">^ 59.4%</span> this month
            </button>
          </div>
        </div>
      </div>

      <footer class="pt-3 mt-4 text-muted border-top">© 2021</footer>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
defineOptions({
  name: 'HomeView'
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.welcome-header {
  background: rgb(40, 40, 40);
  background: linear-gradient(
    90deg,
    rgba(40, 40, 40, 1) 0%,
    rgba(40, 40, 40, 1) 60%,
    rgba(66, 48, 101, 1) 100%
  );
}
</style>
