<script setup lang="ts">
import type { GetOrderDetailResponse } from '@/types/order.type'
import { ref } from 'vue'

const checked = ref(false)
const props = defineProps<{
  data: GetOrderDetailResponse
}>()
</script>

<template>
  <div class="collapse collapse-arrow overflow-visible space-y-2" @click="checked = !checked">
    <input type="radio" name="my-accordion-2" :checked="checked" />
    <div class="collapse-title font-semibold bg-base-200 border border-base-300 card">Rincian Pembayaran</div>
    <div v-if="checked" class="collapse-content text-sm bg-base-200 border border-base-300 card pt-4 space-y-4">
      <div class="flex justify-between">
        <span>Harga</span>
        <span>Rp {{ data.data?.item.price.toLocaleString('id-ID') ?? 0 }}</span>
      </div>
      <div class="flex justify-between">
        <span>Jumlah</span>
        <span>x1</span>
      </div>
      <div class="flex justify-between">
        <span>Biaya</span>
        <span>Rp 0</span>
      </div>
      <div class="w-full bg-base-300 h-[2px]"></div>
      <div class="flex justify-between">
        <span>Subtotal</span>
        <span>Rp {{ data.data?.amount.toLocaleString('id-ID') ?? 0 }}</span>
      </div>
    </div>
  </div>
</template>
