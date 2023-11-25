<template>
  <section class="flex flex-1 flex-col" :key="url">
    <p>{{ url }}</p>
    <iframe class="flex-1" :src="url" frameborder="0" ref="curIframe"></iframe>
  </section>
</template>

<script lang="ts" setup>
  import { url, curIframe } from './main';
</script>
