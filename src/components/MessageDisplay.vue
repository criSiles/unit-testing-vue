<template>
    <p v-if="error" data-testid="message-error">{{ error }}</p>
    <p v-else data-testid="message">{{ message.text }}</p>
  </template>
  
  <script>
  import { getMessage } from '@/services/axios.js'
  
  export default {
    data() {
      return {
        message: {},
        error: null
      }
    },
    /* When our component is created, it calls getMessage using async/await since axios is asynchronous and we need to wait for the promise it returns to resolve
     But vue-test-utils doesn’t have access to the internals of promises that are enqueued by the created lifecycle hook, we can’t really tap into anything to await for that promise,
     for that we're importing a third-party library called flushPromises in the spec.js
     */
    async created() {
      try {
        this.message = await getMessage()
      } catch (err) {
        this.error = 'Oops! Something went wrong.'
      }
    }
  }
  </script>