import JobCard from './components/JobCard'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Job Applications</h2>

        <JobCard
          company="OpenAI"
          title="Front-End Developer"
          status="Interviewing"
          notes="Met with team, technical interview scheduled next week."
        />

        <JobCard
          company="Netflix"
          title="UI Engineer"
          status="Applied"
          notes="Submitted via referral."
        />

        <JobCard
          company="Spotify"
          title="React Developer"
          status="Rejected"
          notes="Got a kind rejection email. Will re-apply in 3 months."
        />
      </main>
    </div>
  );
}
