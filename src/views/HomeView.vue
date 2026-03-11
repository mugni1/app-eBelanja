<script setup lang="ts">
import type { Category } from '@/types/category'
import type { Params } from '@/types/global.type'
import Blog from '@/components/blog/Blog.vue'
import Carousel from '@/components/carousel/Carousel.vue'
import Content from '@/components/content/Content.vue'
import ListItem from '@/components/home/ListItem.vue'
import { useGetCategories } from '@/hooks/useGetCategories'
import { onMounted, ref, watch } from 'vue'
import IconSmartPhone from '@/icons/IconSmartPhone.vue'
import IconGamepad from '@/icons/IconGamepad.vue'

// state
const creditParams: Params = { limit: '12', type: 'credit' }
const gamesParams: Params = { limit: '12', type: 'games' }
const {
  data: dataCredit,
  refetch: refetchCredit,
  isPending: isPendingCredit,
  isRefetching: isRefetchingCredit,
} = useGetCategories(creditParams)
const {
  data: dataGames,
  refetch: refetchGames,
  isPending: isPendingGames,
  isRefetching: isRefetchingGames,
} = useGetCategories(gamesParams)
const credit = ref<Category[] | undefined>()
const games = ref<Category[] | undefined>()

// watcher
watch(
  () => dataCredit.value,
  (newValue) => {
    credit.value = newValue?.data || []
  },
)
watch(
  () => dataGames.value,
  (newValue) => {
    games.value = newValue?.data || []
  },
)

// onMounted
onMounted(() => {
  if (dataCredit.value && dataCredit.value.data) {
    credit.value = dataCredit.value.data
  }
  if (dataGames.value && dataGames.value.data) {
    games.value = dataGames.value.data
  }
})
</script>

<template>
  <Content class="space-y-8">
    <Ca rousel />
    <ListItem
      title="TOPUP PULSA & KUOTA"
      :icon="IconSmartPhone"
      @refetch="refetchCredit"
      :data="credit"
      :is-pending="isPendingCredit"
      :is-refetching="isRefetchingCredit"
      :status="dataCredit?.status || 500"
      :message="dataCredit?.message || 'Internal server error'"
    />
    <ListItem
      title="TOPUP GAMES"
      :icon="IconGamepad"
      @refetch="refetchGames"
      :data="games"
      :is-pending="isPendingGames"
      :is-refetching="isRefetchingGames"
      :status="dataGames?.status || 500"
      :message="dataGames?.message || 'Internal server error'"
    />
    <Blog />
  </Content>
</template>
