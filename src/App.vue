<template>
  <article class="prose">
    <h1 class="font-bold"> just a template with vue3,tailwind,lint,formate。 </h1>
  </article>
  <section class="flex flex-1 overflow-hidden">
    <div class="w-1/2 overflow-hidden">
      <div
        class="flex flex-col"
        :key="key"
        v-for="(value, key) in { dependencies, devDependencies }"
      >
        <div class="divider capitalize">{{ key }}</div>
        <div class="flex-1 overflow-y-auto overflow-x-hidden pr-10">
          <div
            @pointerenter="fetchNpmInfo(pkgName)"
            @pointerdown="openHomePage(curItemInfo.homepage)"
            class="indicator my-2"
            :key="pkgName"
            v-for="(version, pkgName) in value"
          >
            <button class="btn btn-primary mx-2 gap-2">
              {{ pkgName }}
            </button>
            <span class="badge indicator-item badge-secondary badge-sm w-auto">
              {{ isActiveName(pkgName) ? curItemInfo.license : '' }}{{ version }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition mode="in-out" name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script setup lang="ts">
  import { dependencies, devDependencies } from '../package.json';
  import { url } from '@/view/main';
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
    curItemInfo.description = description;
    curItemInfo.homepage = homepage;
    curItemInfo.license = license;
    return homepage;
  };
  const openHomePage = (homepage: string) => {
    url.value = homepage;
  };
  // openHomePage()
  fetchNpmInfo('vue').then(openHomePage);
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
