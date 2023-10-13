import { ContentContainer, ImageContainer, SectionAboutUsContainer } from "./style"

const AboutUs = () => {

  return (
    <SectionAboutUsContainer>
      <ContentContainer>
        <h2 className="hidden logo">
          O que é a <span>Stamp?</span>
        </h2>
        <p>
          A <span>Stamp</span> é uma agência de comunicação e marketing digital.<br /><br />
          Nós nascemos coma missão de <span><b>impulsionar</b></span> os seus resultados através de soluções criativas para o seu negócio.<br /><br />
          Visamos estabelecer, fortalecer e otimizar a comunicação entre você e seu público-alvo!<br /><br />
          Entendemos que cada cliente é único, por isso elaboramos estratégias personalizadas que geram resultados reais e duradouros.
        </p>
      </ContentContainer>
      <ImageContainer>
        <img
          src="https://images.pexels.com/photos/1181498/pexels-photo-1181498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Imagem mulher com notebook"
          className="hidden logo"
        />
        <div className="color-filter"></div>
      </ImageContainer>
    </SectionAboutUsContainer>
  )
}

export default AboutUs