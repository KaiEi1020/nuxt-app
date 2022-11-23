<script lang="ts" setup>
const { data } = await useAsyncData<any>(() => $fetch('http://rap2api.taobao.org/app/mock/120100/screen/test'));
const head = useHead({
  titleTemplate: '%s - useHead example',
  title: 'asdg',
  bodyAttrs: {
    class: 'test'
  },
  script: data.value.result
})
</script>

<template>
  <div>
    Page: edit
  </div>
</template>

<style scoped></style>
