import { Button } from "@/components"
import { withAuth } from "@/HOC"
import { useCentral } from "@/hooks"

const Home = () => {
  const { logout } = useCentral()
  return (
    <>
      <h2 className="text-2xl capitalize">Home Page</h2>
      <Button onClick={logout} className="btn" >Logout</Button>
    </>
  )
}

export default withAuth(Home)