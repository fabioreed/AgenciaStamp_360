import { useEffect } from 'react'
import Header from '../../components/Header'
import { KnowMoreBtn, MainContainer, PartnersCompanies, TitleContainer } from './style'
import sebrae from '../../assets/SEBRAE-nacional.gif'
import fortlev from '../../assets/fortlev-logo-white.png'
import partners from '../../assets/Back to back-amico.svg'
import { IoLogoWhatsapp } from 'react-icons/io'
import AboutUs from '../../components/AboutUs'
import SocialMedia from '../../components/SocialMedia'
import Footer from '../../components/Footer'
// import HeaderLogoHome from '../../components/HeaderLogoHome'

const Home = () => {
  const phoneNumber = "+5571992305676"
  const whatsappUrl = `https://wa.me/${phoneNumber}`

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries?.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })

    const hiddenElements: any = document.querySelectorAll('.hidden')
    hiddenElements?.forEach((el: any) => observer.observe(el))

    return () => {
      hiddenElements?.forEach((el: any) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      <Header />
      <MainContainer>
        {/* <HeaderLogoHome /> */}
        <TitleContainer>
          <h1 className='frontend-text'>Pronto para <span>ALAVANCAR</span> sua empresa?</h1>
          <p className='hidden'>Descubra como a <span>STAMP</span> pode impulsionar a sua empresa à novas alturas!</p>
          <KnowMoreBtn to={whatsappUrl} target='_blank'>
            <IoLogoWhatsapp />
            Entre em Contato
          </KnowMoreBtn>
        </TitleContainer>
        <PartnersCompanies>
          <h3 className="hidden">EMPRESAS QUE NOS APOIAM</h3>
          <figure>
            <div className="hidden">
              <img src={sebrae} alt="Logo do Sebrae" className="hidden logo" />
              <img src={fortlev} alt="Logo da FortLev" className="hidden logo" />
            </div>
            <img src={partners} alt="partners desenho" />
          </figure>
        </PartnersCompanies>
        <AboutUs />
        <SocialMedia />
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home