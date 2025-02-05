import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 2.5rem;
  background-color: rgba(71, 156, 252, 0.6);
  border-radius: 20px;
  margin-bottom: 5rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
