import axios from 'axios'
import UploadingComponent from './UploadingComponent'
import ToDoComponent from './ToDoComponent'

function App() {

  const fetch = async () => { console.log(await axios.get('/api/hello')) }

  fetch()
  return (
    <>
      <ToDoComponent />
      <UploadingComponent />
    </>
  )
}

export default App
