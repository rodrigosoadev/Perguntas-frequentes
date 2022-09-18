import { useState } from 'react'
import './App.css'
import questions from './components/data'
import data from './components/data'
import SingleQuestion from './components/Question'

function App() {
  const [questions, setQuestion] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            )
          })}
        </section>
      </div>
    </main>
  )
}

export default App
