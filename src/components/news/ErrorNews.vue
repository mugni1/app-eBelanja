<script setup lang="ts">
import { LoaderIcon, TriangleAlertIcon } from 'lucide-vue-next'

const props = defineProps<{
  message: string
  status: number
  isRefetching: boolean
}>()
const emits = defineEmits<{
  (e: 'refetch'): void
}>()

// methods
const refetch = () => {
  emits('refetch')
}
</script>

<template>
  <section class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="flex justify-center items-center text-center py-8 bg-base-200 card space-y-2 border border-base-300">
      <p v-if="props.status == 500" class="capitalize card-title text-sm text-error">
        <TriangleAlertIcon class="size-4" /> Terjadi Kesalahan Pada Server.
      </p>
      <p v-else class="capitalize card-title text-sm text-error"><TriangleAlertIcon class="size-4" /> {{ message }}.</p>
      <button class="btn btn-success btn-sm" @click="refetch()">
        <LoaderIcon :class="['size-4', isRefetching && 'animate-spin']" /> Coba Lagi
      </button>
    </div>
  </section>
</template>
