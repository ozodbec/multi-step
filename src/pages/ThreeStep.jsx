import { Link } from "react-router-dom"

function ThreeStep() {
  return (

       <>
      <h1>ThreeStep</h1>
      <Link to={'/fourthstep'}>Next Step</Link>
    </>
    
  )
}

export default ThreeStep