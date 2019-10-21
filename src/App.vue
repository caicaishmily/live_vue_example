<template>
  <div id="app">
    <h3 v-if="loading">Loading...</h3>
    <ul v-if="!loading">
      <li>
        <img style="width: 100%;" src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=8de7d69cb87eca80060831b5f04afcb8/e61190ef76c6a7eff1edd899f5faaf51f2de6641.jpg" alt="">
        <div class="list-footer">
          <span>朴信惠</span>
          <button @click="like(1)" :id="1">Like</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'app',
    data() {
      return {
        loading: true,
        all_videos: []
      }
    },
    apollo: {
      all_videos: gql`query {
         allVideos {
          link
        }
      }`,
    },
    methods: {
      like: function(event) {
        console.log(event)
      }
    },
    async mounted() {
      this.all_videos = await this.$apollo.query({
        query: gql`query {
          allVideos {
            link
          }
        }`
      })
      this.loading = false
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #app ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
