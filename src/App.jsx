import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import QuizCreate from './components/quiz/QuizCreate'
import CustomQuiz from './components/quiz/CustomQuiz'
import MyQuiz from './components/quiz/MyQuiz'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }
    return children
  }

  return (
    <Router>
      <div className="app">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <Login setIsAuthenticated={setIsAuthenticated} />
          } />
          <Route path="/signup" element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <Signup setIsAuthenticated={setIsAuthenticated} />
          } />

          {/* Protected routes */}
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/create-quiz" element={
            <ProtectedRoute>
              <QuizCreate />
            </ProtectedRoute>
          } />
          <Route path="/custom-quiz" element={
            <ProtectedRoute>
              <CustomQuiz />
            </ProtectedRoute>
          } />
          <Route path="/my-quizzes" element={
            <ProtectedRoute>
              <MyQuiz />
            </ProtectedRoute>
          } />

          {/* Redirect root to login if not authenticated, home if authenticated */}
          <Route path="/" element={
            isAuthenticated ? 
            <Navigate to="/home" replace /> : 
            <Navigate to="/login" replace />
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
