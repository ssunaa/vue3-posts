<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">Home으로 이동</button>

    <p>counter INIT : {{ counter2 }}</p>
    <p>counter : {{ counter }}</p>
    <p>doubleCount : {{ doubleCount }}</p>
    <p>doubleCount : {{ doubleCountPlusOne }}</p>
    <button @click="increment()">Click!!</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const route = useRoute()
console.log('route.path: ', route.path)

const store = useCounterStore()
const { counter: counter2 } = store;
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store)
const { increment } = store

</script>

<style lang="scss" scoped></style>