<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p v-if="isSingleSpa">single-spa模式独有的文字</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h3>{{count}}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
let timer
export default {
  name: 'home',
  data () {
    return {
      count : 0,
    }
  },
  mounted() {
    timer = setInterval(() => {
      this.count++
    }, 2000)
  },
  beforeDestroy() {
    timer && clearInterval(timer);
  },
  components: {
    HelloWorld
  },
  computed: {
    isSingleSpa(){
      return this.$store.state.isSingleSpa;
    }
  },
}
</script>
