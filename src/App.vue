<template>
  <div id="app">
    <h3 v-if="loading">Loading...</h3>
    <ul v-if="!loading">
      <li v-for="item in girls" :key="item.avatar">
        <img style="width: 100%;" :src="item.avatar" />
        <div class="list-footer">
          <span>{{ item.name }}</span>
          <button @click="like(item.id)" :id="item.id">Like<span style="margin-left: 5px;">{{item.like}}</span></button>
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
    methods: {
      async like(id) {
        let result = await this.$apollo.mutate({
          mutation: gql`mutation ($id: Float!) {
             like(id: $id) {
              id
              age
              like
              name
              avatar
              dislike
            }
          }`,
          variables: {
            id: Number.parseInt(id),
          },
        })

        this.girls = this.girls.map(item => item.id == id ? result.data.like : item).sort(item => item.id)
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
      this.girls = result.data.girls.sort(item => item.id)
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

  #app ul li {
    margin-bottom: 10px;
    background: #eee;
    padding: 10px;
  }

  .list-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list-footer button {
    width: 60px;
    background: red;
    color: #fff;
    height: 30px;
    border: none;
    box-shadow: none;
    border-radius: 3px;
  }
</style>
