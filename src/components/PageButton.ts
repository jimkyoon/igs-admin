import styled from "@emotion/styled";

interface PageButtonProps {
  selected: boolean;
}

const PageButton =
  styled.div <
  PageButtonProps >
  `
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  display: inline;
  text-align: center;
  padding: 25px;
  font-size: 1.2rem;
  margin-right: 25px;
  border-bottom: ${(props) =>
    props.selected ? "5px solid #611e2a" : "transparent"};
  &:hover {
    border-bottom: 5px solid white;
  }
  a {
    text-decoration: none;
    color: black;
    padding: 10px;
  }
`;

export default PageButton;
