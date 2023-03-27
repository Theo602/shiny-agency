import { useState } from "react";
import { useTheme } from "../../utils/hooks";
import { InputWrapper, StyledLabel, StyledInput } from './EmailImputStyle';

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