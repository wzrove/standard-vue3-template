<template>
  <p class="font-bold text">
    {{msg.split('、')[0]}}
    <span v-for="(item,index) in (msg.split('、').slice(1))">
    、<span :class="`text-red-${index+1}00`" >{{item}}</span>
    </span>
  </p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const  msg = ref('this is template with vite、vue3、windicss、eslint、prettier、lint-staged、lint-staged ')


  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>
