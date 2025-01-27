import { useState } from 'react'
import '../../styles/quiz.css'

function MyQuiz() {
  const [myQuizzes, setMyQuizzes] = useState([
    // Sample data - replace with actual data from backend
    {
      id: 1,
      title: 'Sample Quiz 1',
      description: 'This is a sample quiz',
      questions: []
    }
  ])

  const handleDelete = (quizId) => {
    setMyQuizzes(myQuizzes.filter(quiz => quiz.id !== quizId))
  }

  return (
    <div className="my-quizzes-container">
      <h2>My Quizzes</h2>
      <div className="quiz-grid">
        {myQuizzes.map(quiz => (
          <div key={quiz.id} className="quiz-card">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            <div className="quiz-actions">
              <button onClick={() => handleDelete(quiz.id)} className="delete-btn">
                Delete
              </button>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyQuiz 