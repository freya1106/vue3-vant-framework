<template>
  <div class="my_container">
    <div class="title">This is My Page</div>
    <div class="item_box" v-for="(item, index) in data.pageList" :key="index">
      <van-button size="small" block @click="goPages(item.name)">{{ item.desc }}</van-button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const data = reactive({
  pageList: [
    {
      name: 'MyAboutMe',
      desc: 'Go About Me Page'
    },
    {
      name: 'MyCollection',
      desc: 'Go My Collection Page'
    },
    {
      name: 'MySetting',
      desc: 'Go Setting Page'
    }
  ]
})

const goPages = (pageName) => {
  router.push({
    name: pageName
  })
}
</script>

<style scoped lang="scss">
.my_container {
  padding: 8px 16px;
  .title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }
  .item_box {
    margin: 5px 0;
  }
}
</style>
