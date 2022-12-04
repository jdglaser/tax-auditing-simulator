import { useState } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"
import BoxLinkView, { BoxLink } from "./BoxLinks"

const boxLinks: BoxLink[] = [
  {title: "Go Here Bitch", link: ""},
  {title: "Link 2", link: ""},
  {title: "Link 3", link: ""}
]

const rootStyles = {
    cottoncandy: "#ffb2e6ff",
    heliotrope: "#d972ffff",
    purplex11: "#8447ffff",
    aquamarine: "#8cffdaff",
    beige: "#ffffe8ff",
}

function App() {
  const [count, setCount] = useState(0)

  const boxLinkViews = boxLinks.map((link) => (
    <BoxLinkView key={link.title} boxLink={link} />
  ));

  return (
    <div className="App">
      <div className='mainContainer'>
        <div className="bannerimage">
        <div style={{textAlign: "center", 
                     lineHeight: "2.5rem",
                     position: "absolute",
                     top: "25%",
                     left: "25%",
                     right: "25%",
                     bottom: "25%",
                     backgroundColor: rootStyles.beige,
                     color: rootStyles.heliotrope,
                     borderRadius: "15px"}}>
            <div style={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "center"}}>
              <div style={{lineHeight: "1.75rem", fontSize: "1.25rem"}}>Tax Auditing Simulator 2020</div>
            </div>
        </div>
          <img style={{objectFit: "fill", maxHeight: "100%", maxWidth: "100%"}} src="src/assets/maxresdefault.jpg" />
        </div>
        <div className='boxLinkHolder'>
          {boxLinkViews}
        </div>
      </div>
    </div>
  )
}

export default App
