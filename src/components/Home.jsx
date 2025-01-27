import { Link } from 'react-router-dom'
import '../styles/home.css'

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Quiz Builder</h1>
        <p>Create, share, and take quizzes with ease</p>
      </header>

      <div className="features">
        <div className="feature-card">
          <h3>Create Quiz</h3>
          <p>Design your own custom quizzes with multiple choice questions</p>
          <Link to="/create-quiz" className="feature-link">
            Create New Quiz
          </Link>
        </div>

        <div className="feature-card">
          <h3>Take Quiz</h3>
          <p>Explore and attempt quizzes created by other users</p>
          <Link to="/custom-quiz" className="feature-link">
            Browse Quizzes
          </Link>
        </div>

        <div className="feature-card">
          <h3>My Quizzes</h3>
          <p>View and manage your created quizzes</p>
          <Link to="/my-quizzes" className="feature-link">
            View My Quizzes
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home 