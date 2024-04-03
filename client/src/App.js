import './App.css';
import {HomePage, NoteForm, NotFoundPage} from './pages/index';
import { Routes, Route} from "react-router-dom"
import {NoteProvider} from "./context/noteContext"

function App() {

  return (
      <div className='bg-neutral-900 min-h-screen flex items-center'>
        <div className='px-10 bg-red-100 m-auto container'>
          <NoteProvider>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/new' element={<NoteForm />} />
              <Route path='*' element={<NotFoundPage />}/>
            </Routes>
          </NoteProvider>

        </div>
        

      </div>
  );
}

export default App;
