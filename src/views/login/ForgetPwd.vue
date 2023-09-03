<template>
  <div class="forget_pwd_container">
    <div class="title">This is Forget Password Page</div>
    <van-button type="danger" block size="small" @click="goBack">Go Back</van-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped lang="scss">
.forget_pwd_container {
  padding: 8px 16px;
  .title {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 5px;
  }
}
</style>
