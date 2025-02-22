import styled from 'styled-components'

interface IRadioButton {
  isSelected: boolean
}

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`

export const CheckboxWrapp = styled.div`
  display: flex;
`

export const Label = styled.label`
  margin-right: 10px;
`

export const Checkbox = styled.input.attrs((props) => ({
  type: 'checkbox',
}))`
  cursor: pointer;
  margin-right: 5px;
`
export const RadioButtonGroup = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 20px;
  margin-top: 10px;

  & > * {
    margin-left: 10px;

    :first-child {
      margin-left: 0;
    }
  }
`

export const RadioButton = styled.button<IRadioButton>`
  appearance: none;
  background-color: ${(props) => (props.isSelected ? '#007bff' : '#fff')};
  color: ${(props) => (props.isSelected ? '#fff' : '#000')};
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#0056b3' : '#f0f0f0')};
  }

  &:focus {
    outline: none;
  }
`
