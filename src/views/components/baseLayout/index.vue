<template>
  <el-container style="height: 100%;">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          active-text-color='white'
          unique-opened
          router>
          <NavMenu :navMenus="$router.options.routes"></NavMenu>
        </el-menu>
      </el-aside>
      <el-main class="d-flex flex-direction">
        <el-breadcrumb separator="/" class="title">
          <el-breadcrumb-item v-for="item in $route.matched" :key="item.path" v-show='item.name'>
            <router-link :to="item.redirect||item.path">{{ item.name }}</router-link>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <transition mode="out-in">
          <router-view class='flex-1'></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '../components/NavMenu'
export default {
  name: 'baseLayout',
  components: {
    NavMenu
  },
  mounted() {
  }
}
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu-item.is-active {
    background-color: #1989fa!important;
  }
</style>