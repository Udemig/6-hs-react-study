
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './assets/style.scss'
import AddPostController from './pages/AddPost/AddPostController'
import ListPostsController from './pages/ListPost/ListPostsController'
import Header from './components/Header'

function App() {


  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<ListPostsController />} />
        <Route path='/add-post' element={<AddPostController />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
