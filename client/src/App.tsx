import MovieCard from './components/MovieCard'
import { dummyData } from './data/movies'

function App() {
  return (
    <main className="py-10 h-full bg-slate-50">
      <h1 className="font-bold text-3xl text-center pb-[10px]">Popular Movies</h1>
      <div className="max-w-lg items-center justify-center">
        <div className="flex flex-row gap-4 justify-center items-center" >
          {dummyData.map(movie => (
            <MovieCard movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
