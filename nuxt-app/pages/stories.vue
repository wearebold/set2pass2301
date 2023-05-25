<script setup>
const counter = useState('counter', () => 0 )
const color = useColor() // Same as useState('color')
</script>

<template>
    <div>
      <Head>
        <Title>Customer Testimonials - Set to Pass Driving School Success Stories</Title>
        <Meta name="description" content="Read the inspiring success stories and testimonials from satisfied learners at Set to Pass driving school in Shrewsbury. Discover how our experienced instructors have helped individuals become confident and skilled drivers. Get a glimpse of the positive learning experiences and exceptional service provided by Set to Pass. Find out why learners choose us for their driving education needs."/>
    </Head>

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