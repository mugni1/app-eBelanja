<script setup lang="ts">
import type { GetOrderDetailResponse } from '@/types/order.type'

const props = defineProps<{
  data: GetOrderDetailResponse
}>()
</script>

<template>
  <div class="bg-base-200 border border-base-300 p-4 card">
    <div class="flex justify-between w-full font-semibold text-base text-primary">
      <span>Total Pembayaran</span>
      <span>Rp {{ data.data?.amount.toLocaleString('id-ID') ?? 0 }}</span>
    </div>
  </div>
</template>
