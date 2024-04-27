import { Link } from "react-router-dom"

const NotFound = () => {
  return (
  <>
    <div className="w-full h-full centered-col gap-y-4">
      <h2 className="text-2xl uppercase">page not found</h2>
      <p className="">It seems you have stubbled off the path traveler</p>
      <Link to="/" className="w-1/2 btn centered" >Go Home</Link>
    </div>
  </>
  )
}

export default NotFound