<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { useGetNewsDetail } from '@/hooks/useGetNewsDetail'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id as string
const { data, isPending, isRefetching, refetch } = useGetNewsDetail(id)
</script>

<template>
  <Content>
    <h1>This Detail news</h1>
  </Content>
</template>
