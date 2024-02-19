import Link from "next/link"
import NavMain from "../NavMain/NavMain"

function Footer() {
  return (
    <footer>
      <div className="container">
        <h6>Footer</h6>
        <nav>
          <NavMain />
        </nav>
      </div>
    </footer>
  )
}

export default Footer