<template>

  <input v-model="name">
  <input type="number" v-model="age">
  <input v-model="course">

  <h2>Hello {{ name }}</h2>
  <p>Age: {{ age }}</p>
  <p>Course: {{ course }}</p>

</template>

 

<script>

export default {

  data() {

    return {

      name: "",
      age: "",
      course: "",
    }

  }

}

</script>