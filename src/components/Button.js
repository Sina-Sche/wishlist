import styled from 'styled-components/macro';

const Button = styled.button`
  border: none;
  font-size: 0.5rem;
  border-radius: 50%;
  line-height: 2.5;
  background: hsla(149, 17%, 84%, 0.1);
  cursor: pointer;
  margin: 30px;
  box-shadow: 2px 1px 10px 1px #4c0013;
  width: 30px;
  &:hover {
    color: white;
  }
`;

export default Button;
