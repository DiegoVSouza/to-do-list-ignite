import ReactDOM from 'react-dom/client'

import './global.scss'
import { Header } from './components/header'
import { AddingTask } from './components/addingTask'
import { ListTask } from './components/listTask'

const App = (): JSX.Element => {

  return (
    <main>
      <Header />
      <AddingTask />
    </main>
  )
}

export default App
