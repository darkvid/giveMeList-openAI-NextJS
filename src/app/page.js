import ListForm from '@/components/ListForm'
import ListAllFirebaseLists from '@/components/ListAllFirebaseLists'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Gime ve a list of...</h1>
      <p>Build a steps list of whatever you need...</p>
      <ListForm></ListForm>
      <ListAllFirebaseLists></ListAllFirebaseLists>
    </main>
  )
}
