import logo from '../../assets/logo-dash.png.jpg'
import { Aside, ContainerLogoMainHome, Figure } from './style'

const HeaderLogoHome = () => {
  return (
    <ContainerLogoMainHome>
      <Figure>
        <img src={logo} alt="Logo" />

        
      </Figure>
      <Aside>
        <p>Sua visão, nossa estratégia.</p>
      </Aside>
    </ContainerLogoMainHome>
  )
}

export default HeaderLogoHome