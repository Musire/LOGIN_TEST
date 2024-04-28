import { Outlet } from "react-router-dom"


const Main = () => {
  return (
    <section className="w-screen h-screen p-8 overflow-hidden" >
      <div className="flex flex-col items-center w-full h-full gap-y-8">
        <Outlet />
      </div>
    </section>
  )
}

export default Main