<template>
  <div id="app">
    <h3 v-if="loading">Loading...</h3>
    <ul v-if="!loading">
      <li v-for="item in girls" :key="item.avatar">
        <img style="width: 100%;" :src="item.avatar" />
        <div class="list-footer">
          <span>{{ item.name }}</span>
          <button @click="like(item.id)" :id="item.id">Like{{item.like}}</button>
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
        test: "test",
        girls: []
      }
    },
    apollo: {
      girls: gql`query {
          girls{
            age
            id
            name
            avatar
            like
            dislike
          }
      }`,
    },
    methods: {
      like: function(event) {
        console.log(event)
      }
    },
    async mounted() {
      let result = await this.$apollo.query({
        query: gql`query {
          girls{
            age
            id
            name
            avatar
            like
            dislike
          }
        }`
      })
      // console.log(result)
      this.girls = result.data.girls
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
