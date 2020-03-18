<template>
  <div class="navMenu">
   <label v-for="(navMenu,index) in navMenus" :key='index'>
    <el-menu-item v-if="navMenu.children==null" :key="navMenu.path" :data="navMenu" :index="navMenu.path" :route="navMenu.path">
     <!-- <i :class="navMenu.entity.icon"></i> -->
       <span slot="title">{{navMenu.meta.title}}</span>
    </el-menu-item>
 
    <el-submenu v-if="navMenu.children" :key="index" :data="navMenu" :index="navMenu.path">
     <template slot="title">
      <!-- <i v-if='navMenu.meta.icon' :class="navMenu.meta.icon"></i> -->
      <span>{{navMenu.meta.title}}</span>
     </template>
     <NavMenu :navMenus="navMenu.children"></NavMenu>
    </el-submenu>
   </label>
  </div>
 </template>
 
 <script>
 export default {
   name: 'NavMenu',
   props: ['navMenus'],
   data () {
     return {}
   },
   watch: {
    navMenus(val) {
      console.log(val)
    }
   },
   methods: {}
 }
 </script>
 
 <style scoped>
 </style>