import { Row } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  NavLink,
  LogoContainer,
  FooterContainer,
  FooterSection,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <img src={src} width="48px" height="48px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="#"
                src="https://img.icons8.com/windows/32/333c4f/tiktok.png"
              />
              <SocialLink
                href="#"
                src="https://img.icons8.com/windows/32/333c4f/instagram-new.png"
              />
              <SocialLink
                href="#"
                src="https://img.icons8.com/windows/32/333c4f/twitterx.png"
              />
              <SocialLink
                href="#"
                src="https://img.icons8.com/material-outlined/24/333c4f/whatsapp--v1.png"
              />
            </FooterContainer>
          </Row>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
