import { HeaderMainContent } from "./styles";

const HeaderMain = () => {
    return (
        <HeaderMainContent>
            <div className="intro">
                <h1>
                    {/* ::first-line bugging with the first span */}
                    {/* the line down below creates literal text <h1> */}
                    <span className="gradient font-s-40">&lt;h1&gt;</span>
                    <span className="font-s-40">Hello, my name is</span><br />
                    <span className="gradient">Pedro Willen,</span><br />
                    I'm a Software Developer <span className="gradient">&</span> Programming Teaching Monitor.
                    <span className="gradient font-s-40">&lt;/h1&gt;</span>
                </h1>
                <p class="intro-p margin">
                    <span class="gradient font-w-900">&lt;p&gt;</span>
                    As a creative software developer, I'm always looking for new ways to bring the best solutions to my clients, in order to provide a better user experience.
                    <span class="gradient font-w-900">&lt;/p&gt;</span>
                </p>
                <div class="social-media">
                    <a class="social-media-icons" href="">
                        <img src="https://raw.githubusercontent.com/pedrowillen/portofolio-site/150fc19cd624b98a086c2967206a2a21fb70be0d/images/email-icon.svg" alt="Email icon" />
                    </a>
                    <a class="social-media-icons" href="">
                        <img src="https://raw.githubusercontent.com/pedrowillen/portofolio-site/150fc19cd624b98a086c2967206a2a21fb70be0d/images/linkedin-icon.svg" alt="LinkedIn icon" />
                    </a>
                    <a class="social-media-icons" href="">
                        <img src="https://raw.githubusercontent.com/pedrowillen/portofolio-site/150fc19cd624b98a086c2967206a2a21fb70be0d/images/github-icon.svg" alt="GitHub icon" />
                    </a>
                </div>
            </div>
            <div className="profile">
                <img src="https://raw.githubusercontent.com/pedrowillen/portofolio-site/150fc19cd624b98a086c2967206a2a21fb70be0d/images/image.svg" alt="Profile photo" />
            </div>
        </HeaderMainContent>
    );
}

export default HeaderMain;