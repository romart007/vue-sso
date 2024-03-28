<template>
  <header>
    <nav
      class="navbar navbar-expand-md nav-masthead navbar-dark bg-dark"
      aria-label="Fourth navbar example"
    >
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">LOGO</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample04">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/">
                <span><i class="bi bi-house"></i></span>
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true"
                >Discover AI</a
              >
            </li>
          </ul>

          <ul class="nav d-flex align-items-center">
            <div class="dropdown">
              <a
                class="text-white text-decoration-none dropdown-toggle"
                href="#"
                id="dropdown04"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Management</a
              >
              <ul class="dropdown-menu bg-dark" aria-labelledby="dropdown04">
                <li>
                  <a href="#" class="dropdown-item text-white">Manage TestDynamics</a>
                </li>
                <li>
                  <a href="#" class="dropdown-item text-white">Manage TestDynamics Plans</a>
                </li>
                <li>
                  <router-link to="/hospitals" class="dropdown-item text-white"
                    >Manage Hospitals</router-link
                  >
                </li>
                <li>
                  <a href="#" class="dropdown-item text-white">Logs</a>
                </li>
              </ul>
            </div>
            <li class="nav-item"><a href="#" class="nav-link px-2 text-white">User</a></li>
            <li class="nav-item" v-if="isLoggedIn">
              <a @click="handleSignOut" class="nav-link px-2 text-white" role="button">
                <i class="bi bi-box-arrow-right me-1 d-inline-block"></i>Logout</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'Header'
})

// Added handle for logut and visibility
const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})

const router = useRouter()
const handleSignOut = () => {
  signOut(auth).then(() => router.push('/login'))
}
</script>
<style>
nav {
  &.bg-dark {
    background-color: rgb(19, 20, 22) !important;
  }
}

.dropdown-toggle::after {
  top: 2px;
  position: relative;
}
</style>
