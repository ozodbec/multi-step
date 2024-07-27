import { Outlet } from "react-router-dom"
import Saidebar from '../components/Saidebar'
function MainLayout() {
  return (
    <>

        <main className="flex gap-24 p-5">
            <Saidebar/>
            <Outlet/>
        </main>
    </>
  )
}

export default MainLayout
