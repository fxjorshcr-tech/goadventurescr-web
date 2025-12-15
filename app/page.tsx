export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-900 to-emerald-950 text-white">
      <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
        GoAdventuresCR.com
      </h1>
      <p className="text-2xl md:text-3xl text-emerald-300 mb-8">
        is coming soon
      </p>
      <div className="flex items-center gap-2 text-emerald-400">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span className="text-lg">Guanacaste, Costa Rica</span>
      </div>
    </main>
  );
}