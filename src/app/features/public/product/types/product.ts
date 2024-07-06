export type TProduct = {
  id: number
  name: string
  name_short: string
  price_net: string
  price: string
  product_stock_qty: number
  product_category_name: string
  product_category_type: string
  image_url: string
  image_url_s: string
  image_url_m: string
  description: string
  stock: {
      id_branch: number
      qty: number
  }
}

export type TProductCategory = {
  id: number
  name: string
  category_type: string
  product_total: number
  image_url: string
  image_url_s: string
  image_url_m: string
}

export type TProductDetail = {
  id: number
  id_product_category: number
  created_date: string
  product_code: any
  name: string
  name_short: string
  description: string
  price: string
  price_net: string
  discount: string
  amount: string
  tax: string
  status_available: string
  status_favorite: string
  sell_to_online: string
  product_type: string
  admin_username: string
  image_url: string
  image_url_s: string
  image_url_m: string
  stock: {
      id_branch: number
      qty: number
  }
}
