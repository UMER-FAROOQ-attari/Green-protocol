    import { useState } from 'react'
    import ButtonAppBar from './Component/Nav'
    import Main from './Component/Main_1'
    import Second from './Component/problum'
    import Sal from './Component/Solution'
    import Img from './Component/Gellary'
    import Business from './Component/Business'
    import Example from './Component/Example'
    import Importent from './Component/Improtent'
    import Profit from './Component/Profit'
    import LAST from './Component/last'
    function App() {
      

      return (
        <>
        <ButtonAppBar />
        <Main />
        <Second />
      <Sal />
      <Img pera1="Ocean Wave Renewable Energy"  pera2="Greenhouse with Solar Panel" img1={"https://greenprotocol.netlify.app/static/media/15.4417e6cdc5650ff75447.png"} img2={"https://greenprotocol.netlify.app/static/media/14.e49332e78c2a094d6e47.png"}/>
       <Img  pera1="Wind Renewable Energy"  pera2="Smart Greenhouse" img1="https://greenprotocol.netlify.app/static/media/16.ddc4bc5e43bd313296fa.png" img2={"https://greenprotocol.netlify.app/static/media/17.795312e95eaf8821490c.png"}/> 
        <Img pera1={"Electrical Mobility"} pera2={"Solar Charging Station"} img1={"https://greenprotocol.netlify.app/static/media/18.e1a87917cdc891f79176.png"} img2={"https://greenprotocol.netlify.app/static/media/19.b26aacbf0f4dc89cd7d7.png"} />
        <Img pera1={"Depuration Raining Water"} pera2={"Plastic Recycling Machine"} img1={"https://greenprotocol.netlify.app/static/media/20.9b86d71f1de438c29ea8.png"} img2={"https://greenprotocol.netlify.app/static/media/21.77d5fc49b376b2efc1e0.png"} />
        <Img pera1={"Plastic Ocean Clean Up Machine"} pera2={"Mosquito Misting System"} img1={"https://greenprotocol.netlify.app/static/media/22.c022276840c2d47b6aaa.png"} img2={"https://greenprotocol.netlify.app/static/media/23.9c106ff25bd520901221.png"} />
        <Business />
        <Example />
        <Importent />
        <Profit />
        <LAST />
        </>

      )
    }

    export default App
