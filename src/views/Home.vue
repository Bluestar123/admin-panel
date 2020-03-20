<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <i class="el-icon-edit"></i>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  async mounted () {
    const res = await this.$http.get('/v2/movie/in_theaters')
    console.log(res)
  }
}
</script>
