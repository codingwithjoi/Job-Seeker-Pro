import './index.css'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to JobSeekerPro</h2>
        <p className="mt-2 text-sm">Start organizing your job search today.</p>
      </main>
    </div>
  );
}

export default App;
