import styled from 'styled-components'

export const StyledLabel = styled.label`
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #333;
  margin-right: 10px;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  background-color: #ff6347; 
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff4136; 
  }
`

export const StyledUl = styled.ul`
  padding-left: 0; 
  list-style-type: none; 
`;

export const StyledLi = styled.li`
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  width: 400px; 
  border-bottom: 1px solid #ccc; 
  padding: 10px 0;
`;

export const CheckboxAndLabelContainer = styled.div`
  display: flex; 
  gap: 8px; 
`;
