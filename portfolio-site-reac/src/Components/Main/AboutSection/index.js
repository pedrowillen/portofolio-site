import { AboutSectionContainer } from "./styles";

const AboutSection = () => {
    return (
        <AboutSectionContainer>
            <div className="about-img">
                <img src="https://raw.githubusercontent.com/pedrowillen/portofolio-site/150fc19cd624b98a086c2967206a2a21fb70be0d/images/image-rect.svg" alt="Side profile picture" />
            </div>
            <div className="about-description">
                <div>
                    <h2 className="gradient-light-bg">About me</h2>
                    <p className="mb">
                        Hi! My name is Pedro Willen, I'm 21 years old I'm a <span className="gradient-light-bg">Full Stack Developer</span> residing in Brazil. I'm very dedicated, passionate and creative in my work. With some professional projects already operating, I acquired the necessary skills to build websites with responsiveness, acessibility and quality.
                    </p>
                    <p>
                        I have a YouTube channel where I teach programming in a simple and educational way, I also teach programming classes to young people who are still at school, as well as sharing tips on my Instagram.
                    </p>
                    <div class="social-media">
                        <a class="social-media-icons" href=""><img src="https://raw.githubusercontent.com/pedrowillen/portofolio-site/150fc19cd624b98a086c2967206a2a21fb70be0d/images/youtube-icon.svg" alt="Youtube icon" /></a>
                        <a class="social-media-icons" href=""><img src="https://raw.githubusercontent.com/pedrowillen/portofolio-site/150fc19cd624b98a086c2967206a2a21fb70be0d/images/instagram-icon.svg" alt="Instagram icon" /></a>
                    </div>
                </div>
            </div>
        </AboutSectionContainer>
    );
}

export default AboutSection;