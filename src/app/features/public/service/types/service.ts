export type TServiceCategory = {
  id: number
  icon_url: string
  title: string
}

export type TServiceList = {
  id: number
  category_id: number
  title: string
  description: string
  price: number
}
