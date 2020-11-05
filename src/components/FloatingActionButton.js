import styled from 'styled-components';

const FloatingActionButton = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;

  border: none;
  font-size: 2rem;
  border-radius: 50%;
  line-height: 1;
  background: hsla(149, 17%, 84%, 0.5);
  cursor: pointer;
  margin: 30px;
  box-shadow: 2px 1px 10px 1px darkolivegreen;
  width: 40px;
`;

export default FloatingActionButton;
