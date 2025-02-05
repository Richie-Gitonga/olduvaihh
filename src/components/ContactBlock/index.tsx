import { withTranslation, TFunction } from "react-i18next";
import { FlexContainer, TextWrapper, Content, Icon, Link, SmallHeading } from "./styles";
import Block from "../Block";

interface Props {
    icon: string;
    title: string;
    content: string;
    link: string;
    t: TFunction;
}

const ContactBlock = ({ icon, title, content, link, t }: Props) => {
  return (
    <FlexContainer>
      <Icon src={icon} alt={icon} />
      <TextWrapper>
        <SmallHeading>{title}</SmallHeading>
        <Content>{content}</Content>
        <Link href="#">{link}</Link>
      </TextWrapper>
    </FlexContainer>
  );
};

export default withTranslation()(ContactBlock);