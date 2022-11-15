<template>
  <div class="mt-4 flex w-3/4 flex-col overflow-auto xl:mt-0">
    <article class="prose">
      <h1 class="font-bold"> just a template with vue3,tailwind,lint,formate。 </h1>
    </article>
    <div :key="key" v-for="(value, key) in { dependencies, devDependencies }">
      <div class="divider capitalize">{{ key }}</div>
      <div>
        <div
          @pointerenter="fetchNpmInfo(pkgName)"
          @pointerdown="openHomePage(curItemInfo.homepage)"
          class="indicator my-2"
          :key="pkgName"
          v-for="(version, pkgName) in value"
        >
          <button class="btn-primary btn mx-2 gap-2">
            {{ pkgName }}
          </button>
          <span class="badge-secondary badge badge-sm indicator-item w-auto">
            {{ isActiveName(pkgName) ? curItemInfo.license : '' }}{{ version }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive, ref } from 'vue';
  import { dependencies, devDependencies } from '../package.json';
  const curACtiveName = ref('');
  const curItemInfo = reactive({
    description: '',
    license: '',
    homepage: '',
  });
  const isActiveName = computed(() => (name: string) => curACtiveName.value == name);
  const baseNpmUrl = 'https://registry.npmmirror.com';
  const fetchNpmInfo = async (name: string) => {
    if (curACtiveName.value == name) {
      return;
    }
    curACtiveName.value = name;
    curItemInfo.license = '';
    curItemInfo.description = '';
    curItemInfo.homepage = '';
    const res = await fetch(`${baseNpmUrl}/${curACtiveName.value}`);
    const { description, license, homepage } = await res.json();
    // console.log(description, license, homepage);
    curItemInfo.description = description;
    curItemInfo.homepage = homepage;
    curItemInfo.license = license;
  };
  const openHomePage = (homepage: string) => {
    if (homepage) window.open(homepage, '_blank');
    else console.log('123');
  };
</script>

<style></style>
