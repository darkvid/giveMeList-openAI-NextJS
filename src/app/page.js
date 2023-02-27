import ListForm from '@/components/ListForm'
import { Inter } from '@next/font/google'
import '../styles/mvp.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Gime ve a list of...</h1>
      <p>Genera una lista de tareas de lo que necesites con Inteligencia Artificial</p>
      <ListForm></ListForm>
    </main>
  )
}
