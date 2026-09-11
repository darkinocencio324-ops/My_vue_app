<script>

export default {

  data() {

    return {

      count: 0

    }

  },

  methods: {

    increase() {

      this.count++

    },

    decrease() {

      this.count--

    }

  }

}

</script>

 

<template>

  <h2>{{ count }}</h2>

  <button @click="increase">+</button>

  <button @click="decrease">-</button>

</template>