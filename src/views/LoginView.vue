<template>
  <div class="container-fluid">
    <div class="row row-container">
      <div class="col-lg-5 col-left"></div>
      <div class="col-lg-7 col-right d-flex align-items-center justify-content-center">
        <div class="form-container">
          <div class="google-sso">
            <h1>Sign in via SSO</h1>
            <button
              @click.prevent="signInWithGoogle"
              type="button"
              class="btn btn-light w-100 fw-bolder"
            >
              <span class="btn-label me-3 d-inline text-light">
                <img src="../assets/google-logo.jpeg" width="15" alt="" /> </span
              >Continue with Google
            </button>
          </div>

          <div class="spacer">
            <div class="d-inline-block"></div>
            <span class="d-inline-block text-center text-white">or</span>
            <div class="d-inline-block"></div>
          </div>

          <form class="email-login">
            <p class="text-white">Sign in with your Satori credentials</p>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-envelope"></i>
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="basic-addon1"
                v-model="email"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <i class="bi bi-lock"></i>
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                v-model="password"
              />
            </div>
            <a role="button" class="text-white text-end text-decoration-none d-block fw-bold mb-4"
              >Forgot password?</a
            >
            <button
              @click.prevent="signIn"
              class="w-100 btn btn-lg btn-primary fw-bolder"
              type="submit"
            >
              Login with Satori Credentials
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

defineOptions({
  name: 'LoginView'
})

// setup basic user data
const email = ref('')
const password = ref('')

const router = useRouter()
const route = useRoute()

// setup regular signIn
const signIn = async (e) => {
  e.preventDefault()
  try {
    const response = await signInWithEmailAndPassword(getAuth(), email.value, password.value)
    if (response) router.push('/')
  } catch (error) {
    console.log(error)
  }
}

// setup oauth signIn
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider()
  try {
    await signInWithRedirect(getAuth(), provider)
  } catch (error) {
    console.log(error)
  }
}

// check if user is from oauth redirect
onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')
  console.log(code)

  const response = await getRedirectResult(getAuth())
  if (response) {
    router.push('/')
  }
})

// const register = (e) => {
//   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//     .then((data) => {
//       console.log('Successfully registered')
//       router.push('/')
//     })
//     .catch((error) => console.log(error))
// }
</script>
<style lang="scss">
.row-container {
  min-height: 100vh;

  h1 {
    color: white;
    margin-bottom: 20px;
  }

  .col {
    &-left {
      background-image: url('../assets/login-bg.svg');
      background-repeat: no-repeat;
      background-size: cover;
    }
    &-right {
      padding: 24px;
    }
  }

  .form-container {
    min-width: 297px;
  }

  .google-sso {
    margin-bottom: 44px;
  }

  .spacer {
    margin-bottom: 22px;

    span {
      width: 10%;
    }
    div {
      border-top: solid 1px #f0f0f0;
      margin-top: 5px;
      padding-bottom: 5px;
      vertical-align: middle;
      text-align: center;
      width: 45%;
    }
  }

  .form-control {
    border-color: #333333;
    border-width: 1px;
    background-color: #333333;
    border-radius: 4px;
    box-shadow: none;
    padding: 0 12px;
    line-height: 40px;
    height: 40px;
    font-size: 16px;
    font-weight: 300;
    color: white;

    &::-webkit-input-placeholder {
      color: #777777;
    }
  }

  .input-group-text {
    background: transparent;
    border: transparent;
    color: white;
  }
}

button[type='submit'] {
  font-size: 16px;
  padding: 0 14px;
}
</style>
