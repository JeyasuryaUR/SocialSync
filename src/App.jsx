import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import PostScheduler from './components/PostScheduler';
import SocialMediaIntegration from './components/SocialMediaIntegration';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/scheduler" element={<PostScheduler />} />
            <Route path="/integration" element={<SocialMediaIntegration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;