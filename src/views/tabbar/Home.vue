<template>
  <div class="home_container">
    <section class="item_box">
      <div class="title">This is Home Page</div>
      <van-button type="primary" block size="small" @click="goLoginPage">Go Login Page</van-button>
    </section>
    <section class="item_box">
      <div class="title">Test Pinia</div>
      <van-stepper
        v-model="data.porkPrice"
        min="0"
        @change="onPorkPriceChange"
        theme="round"
        button-size="22"
      />
      <van-stepper
        v-model="data.beefPrice"
        min="0"
        @change="onBeefPriceChange"
        theme="round"
        button-size="22"
      />
      <div>Total Animal Price: {{ tabbarStore.totalAnimalPrice }}</div>
    </section>
    <section class="item_box">
      <div class="title">Test Computed</div>
      <div v-if="isShowWarningPrice" class="warning_text">It's so expensive!!!</div>
      <div v-else>This is Normal Price</div>
    </section>
  </div>
</template>

<script setup>
import { reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useTabbarStore } from '@/stores/tabbar.js'

/* 变量定义 */
const router = useRouter()
const data = reactive({
  porkPrice: 0,
  beefPrice: 0
})

const tabbarStore = useTabbarStore()

/* computed、watch */
const isShowWarningPrice = computed(() => {
  if (data.porkPrice > 5 && data.beefPrice > 6) {
    return true
  }
  return false
})

/* 生命周期函数 */
onMounted(() => {})

/* 函数调用 */
const goLoginPage = () => {
  router.push({
    name: 'Login'
  })
}

const onPorkPriceChange = (value) => {
  tabbarStore.totalAnimalPrice = value + data.beefPrice
}

const onBeefPriceChange = (value) => {
  tabbarStore.totalAnimalPrice = data.porkPrice + value
}
</script>

<style scoped lang="scss">
.home_container {
  margin: 5px;
  .item_box {
    margin-bottom: 8px;
    border: 2px solid pink;
    border-radius: 5px;
    padding: 8px 16px;
    .title {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 5px;
    }
    .warning_text {
      color: $primay-color;
      font-weight: 600;
    }
  }

  ::v-deep {
    .van-stepper {
      width: 100%;
      margin: 5px 0;
    }
  }
}
</style>
