<template>
    <div>
    <!-- Output -->
      <button v-show="loggedIn">Logout</button>
    </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
        // Input
          loggedIn: false
        }
      }
    }
    </script>