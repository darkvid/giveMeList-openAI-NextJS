import ListForm from '@/components/ListForm'
import { Inter } from '@next/font/google'
import '../styles/mvp.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Gime ve a list of...</h1>
      <p>Build a steps list of whatever you need...</p>
      <ListForm></ListForm>
    </main>
  )
}
