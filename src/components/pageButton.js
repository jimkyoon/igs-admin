import styled from "@emotion/styled";

const PageButton = styled.div`
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  display: inline;
  text-align: center;
  padding: 10px;
  border-bottom: ${(props) =>
    props.selected ? "5px solid #611e2a" : "transparent"};
  &:hover {
    border-bottom: 5px solid white;
  }
`;

export default PageButton;
