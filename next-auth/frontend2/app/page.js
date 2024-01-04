import Image from 'next/image'
import styles from './page.module.css'
import ButtonAuth from '@/components/ButtonAuth'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div>
        <h2>Iniciar Sesión</h2>
        <ButtonAuth  />
        <Link href={'/dashboard'} className='btn btn-primary ml-2'>Dashboard</Link>
      </div>
    </>
  )
}
