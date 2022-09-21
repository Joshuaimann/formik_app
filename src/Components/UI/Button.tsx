import styled from 'styled-components'

const UserButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  height: 40px;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

interface Props {
    
}

const Button = (props:any) => {
    return (
      <UserButton type={props.type} onClick={props.onClick}>
        {props.children}
      </UserButton>
    )
}

export default Button