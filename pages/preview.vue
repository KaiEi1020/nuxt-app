<script lang="ts" setup>
const head = useHead({
  titleTemplate: '%s - useHead example',
  title: 'asdg',
  bodyAttrs: {
    class: 'test'
  },
  script: [{
    src: 'https://cdn.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.min.js'
  }]
})
const res = ref();

onMounted(async () => {
  const a = await $fetch('/api/itable/reports/51175');
  console.log(a);
});
</script>

<template>
  <div>
    Page: {{res}}
  </div>
</template>

<style scoped></style>
