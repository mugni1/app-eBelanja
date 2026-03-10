import type { GetNewsDetailResponse } from '@/types/news.type'
import { getNewsDetailService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import { useQuery } from '@tanstack/vue-query'
import { unref, type Ref } from 'vue'

const fetch = async (id: string): Promise<GetNewsDetailResponse> => {
  try {
    const result = await getNewsDetailService(id)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetNewsDetail = (id: string) => {
  return useQuery({
    queryKey: ['useGetNewsDetail', id],
    queryFn: () => fetch(id),
  })
}
