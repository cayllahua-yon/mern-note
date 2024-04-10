import './App.css';
import {HomePage, NoteForm, NotFoundPage} from './pages/index';
import { Routes, Route} from "react-router-dom"
import {NoteProvider} from "./context/noteContext"
import {Toaster} from  "react-hot-toast"

function App() {

  return (
      <div className='bg-neutral-900 min-h-screen flex items-center'>
        <div className='px-10 bg-inherit m-auto container'>
          <NoteProvider>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/new' element={<NoteForm />} />
              <Route path='/edit/:id' element={<NoteForm />} />
              <Route path='*' element={<NotFoundPage />}/>
            </Routes>
            <Toaster />
          </NoteProvider>

        </div>
        

      </div>
  );
}

export default App;
