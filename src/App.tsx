import { useState } from 'react'
import './App.css'

import { UserForm } from './components/forms';

function App() {

  return (
    <div className="w-auto h-auto">
      <div className='flex gap-2 w-full m-4'>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
