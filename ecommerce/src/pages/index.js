import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ProductImageGrid from '../../components/ProductImageGrid'
import BigImage from '../../components/BigImage'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <ProductImageGrid/>

    </>
  )
}
