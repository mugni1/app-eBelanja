import { HttpStatusCode } from 'axios'
import type { Meta } from './meta.type'

export interface News {
  id: string
  image_url: string
  title: string
  content: string
  summary: string
  created_at: string
  updated_at: string
}

export interface GetNewsResponse {
  status: HttpStatusCode
  message: string
  data: News[] | null
  meta: Meta | null
  errors: null
}

export interface GetNewsDetailResponse {
  status: HttpStatusCode
  message: string
  data: News | null
  meta: Meta | null
  errors: null
}
