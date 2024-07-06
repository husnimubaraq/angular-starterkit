import { TProductCategory, TProduct } from "features/public/product";

export const serviceCategories: TProductCategory[] = [
  {
    id: 1,
    image_url: 'https://i.ibb.co/6yxVmHv/Group-1.png',
    image_url_m: 'https://i.ibb.co/6yxVmHv/Group-1.png',
    image_url_s: 'https://i.ibb.co/6yxVmHv/Group-1.png',
    name: 'Shaving',
    category_type: 'service',
    product_total: 0
  },
  {
    id: 2,
    image_url: 'https://i.ibb.co/8bbRJjx/Vector-1.png',
    image_url_m: 'https://i.ibb.co/8bbRJjx/Vector-1.png',
    image_url_s: 'https://i.ibb.co/8bbRJjx/Vector-1.png',
    name: 'Massage',
    category_type: 'service',
    product_total: 0
  },
  {
    id: 3,
    image_url: 'https://i.ibb.co/9rqbZ6M/Group-1104-1.png',
    image_url_m: 'https://i.ibb.co/9rqbZ6M/Group-1104-1.png',
    image_url_s: 'https://i.ibb.co/9rqbZ6M/Group-1104-1.png',
    name: 'Facial',
    category_type: 'service',
    product_total: 0
  },
  {
    id: 4,
    image_url: 'https://i.ibb.co/m0Qvhns/Group-1105-1.png',
    image_url_m: 'https://i.ibb.co/m0Qvhns/Group-1105-1.png',
    image_url_s: 'https://i.ibb.co/m0Qvhns/Group-1105-1.png',
    name: 'Hair Care',
    category_type: 'service',
    product_total: 0
  }
]

export const serviceLists: TProduct[] = [
  {
    "id": 5,
    "name": "Hair Coloring Brown",
    "name_short": "Brown",
    "price_net": "25.00",
    "product_stock_qty": 0,
    "product_category_name": "Hair Care",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/valeriia-kogan-B0T4i_7bSNE-unsplash.jpg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/5s_valeriia-kogan-B0T4i_7bSNE-unsplash.jpg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/5m_valeriia-kogan-B0T4i_7bSNE-unsplash.jpg",
    "description": "A soothing blend of essential oils for a calming massage. Promotes relaxation and stress relief.",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 15,
    "name": "Acne Facial",
    "name_short": "Acne",
    "price_net": "15.00",
    "product_stock_qty": 0,
    "product_category_name": "Facial",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/facial1.jpeg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/15s_facial1.jpeg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/15m_facial1.jpeg",
    "description": "High-quality razor set for a smooth shaving experience. Includes razor handle, blades, and shaving cream.",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 16,
    "name": "Acne Facial Golden Age",
    "name_short": "Acne",
    "price_net": "20.00",
    "product_stock_qty": 0,
    "product_category_name": "Facial",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/facial2.jpg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/16s_facial2.jpg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/16m_facial2.jpg",
    "description": "A soothing blend of essential oils for a calming massage. Promotes relaxation and stress relief.",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 17,
    "name": "Whitening Facial",
    "name_short": "White",
    "price_net": "25.00",
    "product_stock_qty": 0,
    "product_category_name": "Facial",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/facial3.jpg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/17s_facial3.jpg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/17m_facial3.jpg",
    "description": "Deep-cleansing face mask enriched with natural ingredients to revive and refresh your skin.",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 18,
    "name": "Whitening Facial",
    "name_short": "White",
    "price_net": "25.00",
    "product_stock_qty": 0,
    "product_category_name": "Facial",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/facial3.jpg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/17s_facial3.jpg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/17m_facial3.jpg",
    "description": "Deep-cleansing face mask enriched with natural ingredients to revive and refresh your skin.",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
]
