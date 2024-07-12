import { BellIcon, GalleryIcon, OutletIcon, PaperIcon, UserIcon, VoucherIcon } from 'components/icons';
import { TSideBar } from 'layouts/public/types'

export const dataMenu: TSideBar[] = [
  {
      title: "News",
      route: '/news',
      icon: PaperIcon
  },
  {
      title: "Voucher",
      route: '/voucher',
      icon: VoucherIcon
  },
  {
      title: "Barber",
      route: '/outlet',
      icon: OutletIcon
  },
  {
      title: "Account",
      route: '/account',
      icon: UserIcon
  },
  {
      title: "Gallery",
      route: '/gallery',
      icon: GalleryIcon
  },
  {
      title: "Notification",
      route: '/notification',
      icon: BellIcon
  }
]
