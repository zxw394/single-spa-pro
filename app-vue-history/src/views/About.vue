<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{count}}</h2>
  </div>
</template>
<script>
let timer;
export default {
  data () {
    return {
      count : 0
    }
  },
  mounted() {
    timer = setInterval(() => {
      this.count++
    }, 2000)
  },
  beforeDestroy() {
    timer && clearInterval(timer);
  }
}
</script>
