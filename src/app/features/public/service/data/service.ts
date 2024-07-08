import { TProductCategory, TProduct } from "features/public/product";

export const serviceCategories: TProductCategory[] = [
  {
    "id": 21,
    "name": "Shaving",
    "category_type": "service",
    "product_total": 1,
    "image_url": "https://i.ibb.co/6yxVmHv/Group-1.png",
    "image_url_s": "https://i.ibb.co/6yxVmHv/Group-1.png",
    "image_url_m": "https://i.ibb.co/6yxVmHv/Group-1.png"
  },
  {
    "id": 24,
    "name": "Massage",
    "category_type": "service",
    "product_total": 2,
    "image_url": "https://i.ibb.co/8bbRJjx/Vector-1.png",
    "image_url_s": "https://i.ibb.co/8bbRJjx/Vector-1.png",
    "image_url_m": "https://i.ibb.co/8bbRJjx/Vector-1.png"
  },
  {
    "id": 27,
    "name": "Hair Care",
    "category_type": "service",
    "product_total": 1,
    "image_url": "https://i.ibb.co/m0Qvhns/Group-1105-1.png",
    "image_url_s": "https://i.ibb.co/m0Qvhns/Group-1105-1.png",
    "image_url_m": "https://i.ibb.co/m0Qvhns/Group-1105-1.png"
  },
  {
    "id": 28,
    "name": "Grooming",
    "category_type": "service",
    "product_total": 1,
    "image_url": "https://i.ibb.co/9rqbZ6M/Group-1104-1.png",
    "image_url_s": "https://i.ibb.co/9rqbZ6M/Group-1104-1.png",
    "image_url_m": "https://i.ibb.co/9rqbZ6M/Group-1104-1.png"
  }
]

export const serviceLists: TProduct[] = [
  {
    "id": 1,
    "name": "Hair Cut",
    "name_short": "Hair",
    "price_net": "10.00",
    "description": "&lt;p&gt;Hair cut man&lt;/p&gt;",
    "product_stock_qty": 0,
    "product_category_name": "Shaving",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/product_dummy.png",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/s_product_dummy.png",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/m_product_dummy.png",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 2,
    "name": "Body Massage",
    "name_short": "Body",
    "price_net": "8.00",
    "description": "&lt;p&gt;Full Body Massage&lt;/p&gt;",
    "product_stock_qty": 0,
    "product_category_name": "Massage",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/conscious-design-nMG20MmJV-4-unsplash.jpg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/s_conscious-design-nMG20MmJV-4-unsplash.jpg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/m_conscious-design-nMG20MmJV-4-unsplash.jpg",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 10,
    "name": "Facial Massage",
    "name_short": "Facia",
    "price_net": "10.00",
    "description": "&lt;p&gt;Facial massage with aroma oil&lt;/p&gt;",
    "product_stock_qty": 0,
    "product_category_name": "Massage",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/product_dummy.png",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/s_product_dummy.png",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/m_product_dummy.png",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 5,
    "name": "Hair color",
    "name_short": "Hair",
    "price_net": "12.00",
    "description": "&lt;p&gt;Include paint&lt;/p&gt;",
    "product_stock_qty": 0,
    "product_category_name": "Hair Care",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/35-Best-Men-s-Hairstyles-For-2024.jpg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/s_35-Best-Men-s-Hairstyles-For-2024.jpg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/m_35-Best-Men-s-Hairstyles-For-2024.jpg",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
  {
    "id": 8,
    "name": "Eyebrow Grooming",
    "name_short": "Eyebr",
    "price_net": "6.00",
    "description": "&lt;p&gt;For 1 time service&lt;/p&gt;",
    "product_stock_qty": 0,
    "product_category_name": "Grooming",
    "product_category_type": "service",
    "image_url": "https://pos-barber.otakita.com/asset/file/product/Eyebrow-Grooming-for-Men-_-How-to-Groom-A-Man-s-Eyebrows.jpg",
    "image_url_s": "https://pos-barber.otakita.com/asset/file/product/s_Eyebrow-Grooming-for-Men-_-How-to-Groom-A-Man-s-Eyebrows.jpg",
    "image_url_m": "https://pos-barber.otakita.com/asset/file/product/m_Eyebrow-Grooming-for-Men-_-How-to-Groom-A-Man-s-Eyebrows.jpg",
    price: '',
    stock: {
      id_branch: 0,
      qty: 0
    }
  },
]
