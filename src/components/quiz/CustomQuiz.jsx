import { useState } from 'react'
import '../../styles/quiz.css'

function CustomQuiz() {
  const [availableQuizzes, setAvailableQuizzes] = useState([
    // Sample data - replace with actual data from backend
    {
      id: 1,
      title: 'General Knowledge',
      description: 'Test your general knowledge',
      author: 'John Doe'
    },
    {
      id: 2,
      title: 'Science Quiz',
      description: 'Basic science concepts',
      author: 'Jane Smith'
    }
  ])

  return (
    <div className="custom-quiz-container">
      <h2>Available Quizzes</h2>
      <div className="quiz-grid">
        {availableQuizzes.map(quiz => (
          <div key={quiz.id} className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <p className="quiz-author">By: {quiz.author}</p>
            <button className="take-quiz-btn">Take Quiz</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomQuiz 