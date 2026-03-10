<script setup lang="ts">
import Content from '@/components/content/Content.vue'
import { useGetNews } from '@/hooks/useGetNews'
import IconNewspapper from '@/icons/IconNewspapper.vue'
import { LoaderIcon, TriangleAlertIcon } from 'lucide-vue-next'

// state
const { data, isPending, isRefetching, refetch } = useGetNews()
</script>

<template>
  <Content>
    <h1 class="font-bold text-base lg:text-xl flex items-center gap-2 mb-3 text-primary">
      <IconNewspapper class="size-5 lg:size-6" />
      Berita Terkini
    </h1>

    <section v-if="isPending" class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <p>Harap Tunggu..</p>
    </section>

    <section v-if="!isPending && data && data.status != 200" class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="flex justify-center items-center text-center py-8 bg-base-200 card space-y-2 border border-base-300">
        <p v-if="data.status == 500" class="capitalize card-title text-sm text-error">
          <TriangleAlertIcon class="size-4" /> Terjadi Kesalahan Pada Server.
        </p>
        <p v-else class="capitalize card-title text-sm text-error">
          <TriangleAlertIcon class="size-4" /> {{ data.message }}.
        </p>
        <button class="btn btn-success btn-sm" @click="refetch()">
          <LoaderIcon :class="['size-4', isRefetching && 'animate-spin']" /> Coba Lagi
        </button>
      </div>
    </section>

    <section v-else class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="news in data?.data" class="card bg-base-200 overflow-hidden">
        <img :src="news.image_url" :alt="news.title" class="w-full aspect-video object-cover" />
        <div class="p-4 space-y-2">
          <h1 class="card-title text-sm line-clamp-2">{{ news.title }}</h1>
          <p class="menu-title p-0 text-xs line-clamp-4">{{ news.summary }}</p>
        </div>
      </div>
    </section>
  </Content>
</template>
