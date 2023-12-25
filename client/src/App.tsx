import axios from 'axios'
import { UploadingComponent2 } from './Uploadig2'
import ToDoComponent from './ToDoComponent'

function App() {

  const fetch = async () => { console.log(await axios.get('/api/hello')) }

  fetch()
  return (
    <>
      <ToDoComponent />
      {<UploadingComponent2 />}
    </>
  )
}

export default App
