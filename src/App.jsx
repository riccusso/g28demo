import Header from './components/Header'
import Saludo from './components/Saludo'
import Cards from './components/Cards'

function App() {

  return (
    <>
      <Header />
      <Saludo nombre={`Ricardo`} />
      <Cards />
    </>
  )
}

export default App
