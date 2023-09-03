<template>
  <div class="life_container">
    <div class="title">Test Refresh and Load More</div>
    <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
      <van-list
        class="content_list"
        v-model:loading="isLoading"
        :finished="isFinished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div v-for="(item, index) in dataList" :key="index">
          <div class="item_box">
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              :src="getAssetsImages('life-bg.png')"
            />
            <div class="text_box">
              <div class="title">{{ item.title }}</div>
              <span class="desc">{{ item.desc }}</span>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { getLifeData } from '@/api/life'
import {getAssetsImages} from '@/utils/common.js'

const data = reactive({
  pageSize: 10,
  pageNum: 1
})

const dataList = ref([])
const isLoading = ref(false)
const isError = ref(false)
const isFinished = ref(false)
const isRefresh = ref(false)

const getLifeDataList = () => {
  const params = {
    pageNum: data.pageNum++,
    pageSize: data.pageSize,
    id: 111
  }
  getLifeData(params)
    .then((res) => {
      dataList.value.push(res.data.specialist)

      if (dataList.value.length >= 10) {
        isFinished.value = true
      } else {
        isFinished.value = false
      }
    })
    .catch((error) => {
      isError.value = true
      throw new Error(error)
    })
    .finally(() => {
      isLoading.value = false
      isRefresh.value = false
    })
}

const onLoad = () => {
  isLoading.value = true
  getLifeDataList()
}

const onRefresh = () => {
  data.pageNum = 1
  dataList.value = []
  isRefresh.value = true
  isFinished.value = false
  isLoading.value = true

  getLifeDataList()
}
</script>

<style lang="scss" scoped>
.life_container {
  padding-bottom: 45px;
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    margin: 8px 0;
  }

  .content_list {
    padding: 8px 16px;
    .item_box {
      position: relative;
      margin-bottom: 5px;
      .text_box {
        position: absolute;
        top: 5px;
        left: 5px;
        .title {
          font-size: 16px;
          font-weight: 600;
        }

        .desc {
          font-size: 14px;
          color: red;
        }
      }
    }
  }
}
</style>
