import styled from "styled-components";

const Logo = require("../../assets/images/RE_FLIX.png");

const FooterSize = styled.div`
  padding: 80px 8px;
  background-color: #f7f7f7;
  z-index: 0;
  color: white;
  background-color: black;
`;

const FooterWrap = styled.div`
  margin: auto;
  @media (max-width: 690px) {
  }

  @media (min-width: 691px) and (max-width: 890px) {
  }

  @media (min-width: 891px) {
    max-width: 1024px;
    min-width: 891px;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid silver;
  width: 100%;
  flex-direction: column;

  @media (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinkToGitWrapper = styled.div`
  font-size: 12px;
  margin-top: 20px;
  /* background-color: antiquewhite; */

  @media (max-width: 690px) {
    flex-direction: row;
  }

  div {
    float: left;
    text-align: center;
    padding: 0 8px 0 8px;
    h2 {
      font-size: 14px;
    }
    h3 {
      padding-bottom: 10px;
      font-size: 15px;
      font-weight: 400;
      color: #f57b00;
      a {
        color: #f57b00;
        text-decoration: none;
        font-weight: bolder;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const License = styled.div`
  padding: 10px 0;
  text-align: center;
`;

const member = [
  {
    name: "김진권",
    stack: "Back-End",
    githubId: "jeaun80",
  },
  {
    name: "이다혜",
    stack: "Front-End",
    githubId: "leedahye2001",
  },
  {
    name: "최효준",
    stack: "Back-End",
    githubId: "maxbort",
  },
];

const Footer = () => {
  return (
    <>
      <FooterSize>
        <FooterWrap>
          <FooterWrapper>
            <img src={Logo} alt="logo" width="200px" height="100px" />
            <LinkToGitWrapper>
              {member.map(({ name, stack, githubId }) => (
                <div key={githubId}>
                  <h2>
                    {name} {stack}
                  </h2>
                  <h3>
                    👉 GitHubLink
                    <a href={`https://github.com/${githubId}`}> {githubId}</a>
                  </h3>
                </div>
              ))}
            </LinkToGitWrapper>
          </FooterWrapper>
          <License>
            <p>Copyrightⓒ2023 sMilestone All rights reserved.</p>
          </License>
        </FooterWrap>
      </FooterSize>
    </>
  );
};

export default Footer;
