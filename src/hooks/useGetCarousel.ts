import { getCarouselService } from '@/api/services'
import { handleErrorResponse } from '@/libs/response'
import type { GetCarouselResponse } from '@/types/carousel.type'
import type { Params } from '@/types/global.type'
import { useQuery } from '@tanstack/vue-query'
import { unref, type Ref } from 'vue'

const fetch = async (params?: Params): Promise<GetCarouselResponse> => {
  try {
    const result = await getCarouselService(params)
    return result.data
  } catch (err: unknown) {
    return handleErrorResponse(err)
  }
}

export const useGetCarousel = (params?: Ref<Params> | Params) => {
  return useQuery({
    queryKey: ['useGetCarousel', params],
    queryFn: () => fetch(unref(params)),
  })
}
