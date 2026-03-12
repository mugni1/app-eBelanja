import type { HttpStatusCode } from 'axios'
import type { Meta } from './meta.type'

export interface Carousel {
  id: string
  title: string
  description: string
  image_url: string
  link: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface GetCarouselResponse {
  status: HttpStatusCode
  message: string
  data: Carousel[] | null
  meta: Meta | null
}
