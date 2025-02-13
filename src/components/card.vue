<template>
  <section>
    <div class="card">
            <img :src="image" class="card-img-top"
              alt="Hollywood Sign on The Hill" />
            <div class="card-body">
              <h5 class="card-title">{{ title }}</h5>
              <p class="card-text">
                {{ description }}
              </p>
            </div>
          </div>
  </section>
</template>

<script setup lang="ts">

defineProps({
  image:{
    type: String,
  },
  title:{
    type: String,
  },
  description:{
    type: String,
  }
})

</script>

<style scoped>

</style>
