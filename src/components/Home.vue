<template>
  <div class="home">
    <div class="ui piled segments">
      <div class="ui clearing segment">
        <h1 class="ui teal huge header">Chatopera Engineering</h1>
          <div class="ui grey small right floated header">
            <a href="https://zh.wikipedia.org/wiki/%E8%8E%B1%E7%89%B9%E5%85%84%E5%BC%9F"> Chatbot Service for Enterprise.</a>
          </div>
      </div>
      <div class="ui centered card">
        <div class="image">
            <img :src="'https://unsplash.it/320/240?random&' + Math.random()" v-link="{path: 'archives'}">
        </div>
        <div class="content">
          <div class="meta">
            <span class="date"> <i class="rocket icon"></i> Blog since Mar. 2017</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      posts: []
    }
  },
  methods: {
  },
  ready () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ui.segment {
  max-width: 400px;
  margin: auto;
}
.ui.piled.segments {
  padding-bottom: 4em;
}

img {
  min-height: 290px;
}
</style>
