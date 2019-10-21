<template>
  <div id="app">
    <ul>
      <li>
        <img src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=8de7d69cb87eca80060831b5f04afcb8/e61190ef76c6a7eff1edd899f5faaf51f2de6641.jpg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name: 'app',
    apollo: {
      all_videos: gql`query {
         allVideos {
          link
        }
      }`,
    },
    methods: {

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
    margin-top: 60px;
  }
</style>
