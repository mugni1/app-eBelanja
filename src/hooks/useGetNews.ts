import type { Params } from '@/types/global.type'
import type { GetNewsResponse } from '@/types/news.type'
import { getNewsService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import { useQuery } from '@tanstack/vue-query'
import { unref, type Ref } from 'vue'

const fetch = async (params?: Params): Promise<GetNewsResponse> => {
  try {
    const result = await getNewsService(params)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetNews = (params?: Ref<Params>) => {
  return useQuery({
    queryKey: ['useGetNews', params],
    queryFn: () => fetch(unref(params)),
  })
}
