<template>
  <div class="login_container">
    <div class="title">This is Login Page</div>
    <van-button type="danger" size="small" block @click="goBack">Go Back</van-button>
    <van-button type="primary" size="small" block @click="goPages('ForgetPwd')">Go Forget Password Page</van-button>
    <van-button type="success" size="small" block @click="goPages('Registry')">Go Registry Page</van-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.go(-1)
}

const goPages = (pageName) => {
  router.push({
    name: pageName
  })
}
</script>

<style scoped lang="scss">
.login_container {
  padding: 8px 16px;
  .title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }
  ::v-deep {
    .van-button {
      margin: 5px 0;
    }
  }
}
</style>
