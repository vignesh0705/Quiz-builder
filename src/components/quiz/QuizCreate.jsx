import { useState } from 'react'
import '../../styles/quiz.css'

function QuizCreate() {
  const [quizData, setQuizData] = useState({
    title: '',
    description: '',
    questions: []
  })
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  })

  const handleQuestionChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      question: e.target.value
    })
  }

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options]
    newOptions[index] = value
    setCurrentQuestion({
      ...currentQuestion,
      options: newOptions
    })
  }

  const handleCorrectAnswerChange = (index) => {
    setCurrentQuestion({
      ...currentQuestion,
      correctAnswer: index
    })
  }

  const addQuestion = () => {
    if (currentQuestion.question && currentQuestion.options.every(opt => opt !== '')) {
      setQuizData({
        ...quizData,
        questions: [...quizData.questions, currentQuestion]
      })
      setCurrentQuestion({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: 0
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add logic to save quiz
    console.log('Quiz Data:', quizData)
  }

  return (
    <div className="quiz-create-container">
      <h2>Create New Quiz</h2>
      <form onSubmit={handleSubmit} className="quiz-form">
        <input
          type="text"
          placeholder="Quiz Title"
          value={quizData.title}
          onChange={(e) => setQuizData({...quizData, title: e.target.value})}
          className="quiz-title-input"
        />
        <textarea
          placeholder="Quiz Description"
          value={quizData.description}
          onChange={(e) => setQuizData({...quizData, description: e.target.value})}
          className="quiz-description-input"
        />
        
        <div className="question-form">
          <input
            type="text"
            placeholder="Enter your question"
            value={currentQuestion.question}
            onChange={handleQuestionChange}
            className="question-input"
          />
          
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <div key={index} className="option-row">
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
                <input
                  type="radio"
                  name="correctAnswer"
                  checked={currentQuestion.correctAnswer === index}
                  onChange={() => handleCorrectAnswerChange(index)}
                />
                <label>Correct Answer</label>
              </div>
            ))}
          </div>

          <button type="button" onClick={addQuestion} className="add-question-btn">
            Add Question
          </button>
        </div>

        <div className="questions-list">
          <h3>Added Questions:</h3>
          {quizData.questions.map((q, index) => (
            <div key={index} className="question-card">
              <h4>Question {index + 1}: {q.question}</h4>
              <ul>
                {q.options.map((opt, optIndex) => (
                  <li key={optIndex} className={optIndex === q.correctAnswer ? 'correct' : ''}>
                    {opt} {optIndex === q.correctAnswer && '✓'}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <button type="submit" className="save-quiz-btn">Save Quiz</button>
      </form>
    </div>
  )
}

export default QuizCreate 