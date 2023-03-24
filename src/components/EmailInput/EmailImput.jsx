import { useState } from "react";
import styled from 'styled-components'
import { useTheme } from "../../utils/hooks";
import colors from '../../utils/style/color'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 20px;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.colorBlack : colors.colorWhite)};
`

const StyledInput = styled.input`
  margin: 5px auto;
  padding: 5px;
  border: 2px solid ${colors.colorBlack};
  border-radius: 5px;
  width: 200px;
`
function EmailInput(){

    const [inputValue, setInputValue] = useState('');
    const { theme } = useTheme();

    const updateInputValue = (inputValue) => {
        setInputValue(inputValue);
    }

    return(

        <InputWrapper theme={theme}>
            <StyledLabel theme={theme}>Adresse Email</StyledLabel>
            <StyledInput
                theme={theme}
                onChange={(e) => updateInputValue(e.target.value)}
                value = {inputValue}
            />
            {/* {inputValue} */}
        </InputWrapper>

    )
    
    
}

export default EmailInput;