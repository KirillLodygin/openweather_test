import styled from 'styled-components'

interface AttentionMessageProps {
  showMessage: boolean
}

export const StyledForm = styled.form`
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 1rem;
  background-color: #eaeaea;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`

export const Input = styled.input`
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.25rem;
  width: 80%;
  padding: 0.5rem;
  transition: box-shadow 150ms ease-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.45);
  }
`

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 250ms ease-out;
  margin-top: 1rem;
  align-self: flex-end;
  position: relative; 

  &:hover {
    background-color: #2e7d32;
  }

  &[disabled] {
    opacity: 0.65;
    cursor: not-allowed;
  }

  &.loading {
    background-color: transparent !important;
    color: transparent !important;
    pointer-events: none; 
  }

  &.loading::after { 
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    border: 6px solid #f3f3f3; 
    border-radius: 50%;
    border-top: 6px solid #3498db;
    width: 25px;
    height: 25px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }
`

export const AttentionMessage = styled.p<AttentionMessageProps>`
  color: red;
  margin-top: 7px;
  margin-bottom: 2px;
  ${(props) => (props.showMessage ? 'opacity: 1;' : 'opacity: 0;')}
`
