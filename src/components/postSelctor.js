import styled from "@emotion/styled";

const PostSelector = styled.div`
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;
  display: block;
  text-align: left;
  padding: 20px;
  border: ${(props) =>
    props.selected ? "5px solid #611e2a" : "5px solid transparent"};
  &:hover {
    border: 5px solid white;
  }
`;

export default PostSelector;
