import { Link, useNavigate } from 'react-router-dom'
import '../../styles/navbar.css'

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false)
    navigate('/login')
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to={isAuthenticated ? "/home" : "/login"}>Quiz Builder</Link>
      </div>
      <div className="nav-links">
        {isAuthenticated ? (
          <>
            <Link to="/home">Home</Link>
            <Link to="/create-quiz">Create Quiz</Link>
            <Link to="/custom-quiz">Custom Quiz</Link>
            <Link to="/my-quizzes">My Quizzes</Link>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar 