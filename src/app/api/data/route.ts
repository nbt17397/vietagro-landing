import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'
import { NewsType } from '@/app/types/newtype'

const HeaderData: HeaderItem[] = [
  { label: 'Giới Thiệu', href: '/#aboutus' },
  { label: 'Sản Phẩm', href: '/#menu' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Năng lượng',
    subheading:
      'Enjoy a warm, refined space perfect for intimate dinners or small group gatherings.',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Nông sản',
    subheading:
      'Taste one-of-a-kind dishes crafted with passion by our top culinary team.',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Thủy sản',
    subheading:
      'We use locally sourced goods daily for unmatched taste and quality.',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Ngũ cốc',
    subheading:
      'Reserve online in seconds or walk in anytime — we’re ready when you are.',
  },
  // {
  //   imgSrc: '/images/Features/featureFour.svg',
  //   heading: 'Nông sản khác',
  //   subheading:
  //     'Reserve online in seconds or walk in anytime — we’re ready when you are.',
  // }
]

const ExpertChiefData: ExpertChiefType[] = []

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/foodone.webp',
    name: 'Than gỗ đước(187 Kcal)',
    description: 'Than củi tự nhiên được sản xuất từ gỗ sạch, cháy lâu, ít khói và thân thiện với môi trường.',
    price: 11000,
  },
  {
    src: '/images/Gallery/foodtwo.webp',
    name: 'Than sạch không khói (118 Kcal)',
    description: 'Than sạch không khói, cháy lâu, tỏa nhiệt cao và an toàn cho sức khỏe, thân thiện với môi trường.',
    price: 15000,
  },
  {
    src: '/images/Gallery/foodthree.webp',
    name: 'Than trắng(238 kcal)',
    description: 'Than trắng là loại than cao cấp, cháy lâu, không khói, tỏa nhiệt mạnh và không để lại mùi khi sử dụng.',
    price: 20000,
  },
  {
    src: '/images/Gallery/foodfour.webp',
    name: 'Than gáo dừa(272 kcal)',
    description: 'Than gáo dừa là loại than tự nhiên được làm từ vỏ gáo dừa, cháy lâu, không khói, nhiệt lượng cao và thân thiện với môi trường.',
    price: 25000,
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: '$18.99',
    description: 'Served with lemon butter sauce and grilled vegetables.',
    src: '/images/Gallery/foodfour.webp',
  },
  {
    name: 'Caesar Salad',
    price: '$9.99',
    description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.', src: '/images/Gallery/foodfour.webp',
  },
  {
    name: 'Margherita Pizza',
    price: '$13.49',
    description: 'Classic pizza with tomato, mozzarella, and fresh basil.', src: '/images/Gallery/foodfour.webp',
  },
  {
    name: 'Tomato Basil Soup',
    price: '$6.99',
    description: 'Creamy tomato soup with a hint of garlic and fresh basil.', src: '/images/Gallery/foodfour.webp',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$7.99',
    description:
      'Warm chocolate cake with a molten center served with vanilla ice cream.', src: '/images/Gallery/foodfour.webp',
  },
  {
    name: 'Spaghetti Carbonara',
    price: '$15.25',
    description:
      'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.', src: '/images/Gallery/foodfour.webp',
  },
  {
    name: 'Tiramisu',
    price: '$8.50',
    description:
      'Layered espresso-soaked ladyfingers with mascarpone and cocoa.', src: '/images/Gallery/foodfour.webp',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Công ty',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/#aboutus' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Reserve Table', href: '/#reserve' },
    ],
  },
  {
    section: 'Hỗ trợ',
    links: [
      { label: 'Help/FAQ', href: '/' },
      { label: 'Press', href: '/' },
      { label: 'Affiliates', href: '/' },
      { label: 'Hotel owners', href: '/' },
      { label: 'Partners', href: '/' },
    ],
  },
]

const NewsData: NewsType[] = [
  {
    id: 1,
    title: 'Giới Thiệu về NiDanCo',
    summary: 'Giới Thiệu về NiDanCo – Đối Tác Đáng Tin Cậy trong Lĩnh Vực Nông Nghiệp',
    imgSrc: '/images/hero/banner-image.webp',
    date: '15 Thg 11',
  },
  {
    id: 2,
    title: 'Giới Thiệu về NiDanCo',
    summary: 'Giới Thiệu về NiDanCo – Đối Tác Đáng Tin Cậy trong Lĩnh Vực Nông Nghiệp',
    imgSrc: '/images/Cook/cook.webp',
    date: '01 Thg 12',
  },
  {
    id: 3,
    title: 'Giới Thiệu về NiDanCo',
    summary: 'Giới Thiệu về NiDanCo – Đối Tác Đáng Tin Cậy trong Lĩnh Vực Nông Nghiệp',
    imgSrc: '/images/hero/banner-image.webp',
    date: '22 Thg 12',
  },
  {
    id: 4,
    title: 'Giới Thiệu về NiDanCo',
    summary: 'Giới Thiệu về NiDanCo – Đối Tác Đáng Tin Cậy trong Lĩnh Vực Nông Nghiệp',
    imgSrc: '/images/Cook/cook.webp',
    date: '10 Thg 01',
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
    NewsData
  })
}
