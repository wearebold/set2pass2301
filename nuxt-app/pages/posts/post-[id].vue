<script setup>
const { id } = useRoute().params
 const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { pick: ['title', 'body'] })
</script>
<template>
    <div>
      Post
      <article class="m-4 md:w-1/2 lg:w-1/3">
      <h2 class="mb-2 capitalize text-2xl font-semibold">{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
    </div>
  </template>
  