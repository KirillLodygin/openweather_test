import styled from 'styled-components'

export const CheckboxWrap = styled.div`
  display: inline-flex;
  align-items: center;
  user-select: none;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  position: absolute;
  opacity: 0;
`

export const CheckboxLabel = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding-left: 35px;

  &::before {
    content: '';
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    border: 2px solid #555;
    vertical-align: middle;
    margin-right: 0.5em;
    transition: all 0.3s ease;
    box-sizing: border-box;
  }

  ${HiddenCheckbox}:checked + &::before {
    content: '\u2713'; 
    font-size: 1.2em;
    color: white;
    background-color: #555;
    text-align: center;
  }
`
