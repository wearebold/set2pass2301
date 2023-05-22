<script setup>
const counter = useState('counter', () => 0 )
const color = useColor() // Same as useState('color')
</script>

<template>
    <div>
    <p>Current color: {{ color }}</p>

      Counter: {{ counter }}
      <button @click="counter++">
        +
      </button>
      <button @click="counter--">
        -
      </button>
    </div>
  </template>