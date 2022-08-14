import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />

            <Flex>
                <ul>
                    <li>
                     lorem const span = document.getElementById("mySpan");
                     const h2 = document.getElementById("myH2");
                     h2.insertAdjacentElement("beforeend", span);
                    </li>
                    <li>+1-543-123-4356</li>
                    <li>example@huddle.com</li>
                </ul>
                <ul>
                    <li>About us</li>
                    <li>What we do</li>
                    <li>FQA</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                <SocialIcons/>
            </Flex>
            <p>&copy; 2021cHuddle. All rights reserved</p>
            </Container>

        </StyledFooter>
    )
}