
import React from 'react';
import Button from './components/Button.tsx'
import HabitForm from './components/HabitForm.tsx';
function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
    <Header />
    <HabitForm/>
    </div>
  )
}

export default App

function Header(){
  return (
    <header className="flex justify-between ">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-bold">Habit Tracker</h1>
        <span className="text-sm text-zinc-400">1/1 done today</span>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <span className="text-sm text-zinc-400">Apr 6- Apr 12</span>
        <div className="flex items-center gap-3">
          <Button >Prev</Button>
          <Button >Next</Button>
        </div>
      </div>
    </header>
  )
}


