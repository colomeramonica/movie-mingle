import MovieCard from './components/MovieCard'
import { dummyData } from './data/movies'

function App() {
  return (
    <main className="h-full w-full bg-slate-50 py-10">
      <h1 className="pb-[10px] text-center text-3xl font-bold">
        Popular Movies
      </h1>
      <div className=" flex flex-row items-center justify-center gap-4">
        {dummyData.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  )
}

export default App
