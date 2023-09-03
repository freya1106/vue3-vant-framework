<template>
  <RouterView></RouterView>
  <van-tabbar route>
    <van-tabbar-item replace to="/tabbarHome" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/tabbarWork" icon="bag-o">工作</van-tabbar-item>
    <van-tabbar-item replace to="/tabbarLife" icon="guide-o">生活</van-tabbar-item>
    <van-tabbar-item replace to="/tabbarMy" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup></script>

<style scoped></style>
