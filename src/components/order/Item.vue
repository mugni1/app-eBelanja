<script setup lang="ts">
import { RouterLink } from 'vue-router'

const props = defineProps<{
  imageUrl: string
  title: string
  status: string
  trxId: string
  phone: string
}>()
</script>
<template>
  <RouterLink :to="'/order/' + trxId" class="p-4 card w-full bg-base-200 grid grid-cols-12 gap-4" role="button">
    <div class="col-span-3 md:col-span-2 aspect-square bg-base-300 rounded-md overflow-hidden">
      <img :src="imageUrl" alt="image" />
    </div>
    <div class="col-span-9 md:col-span-10 text-base flex flex-col justify-between">
      <div class="md:space-y-1">
        <h3 class="font-semibold line-clamp-1 text-sm md:text-base">{{ title }}</h3>
        <div class="badge capitalize badge-success badge-xs md:badge-sm" v-if="status == 'paid' || status == 'success'">
          Berhasil
        </div>
        <div class="badge capitalize badge-error badge-xs md:badge-sm" v-if="status == 'failed' || status == 'error'">
          Gagal
        </div>
        <div
          class="badge capitalize badge-warning badge-xs md:badge-sm"
          v-if="status == 'pending' || status == 'waiting'"
        >
          Menunggu
        </div>
        <div class="badge capitalize badge-error badge-xs md:badge-sm" v-if="status == 'expired'">Kadaluwarsa</div>
        <div class="badge capitalize badge-error badge-xs md:badge-sm" v-if="status == 'cancelled'">Dibatalkan</div>
        <div class="badge capitalize badge-info badge-xs md:badge-sm" v-if="status == 'processing'">Diproses</div>
      </div>
      <div class="grid grid-cols-1 gap-1">
        <span class="text-xs md:text-sm mt-auto line-clamp-1">{{ trxId }}</span>
      </div>
    </div>
  </RouterLink>
</template>
