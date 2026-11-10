import styled from "@emotion/styled"

type ButtonProps = {
    value: string
    onClick?: () => void

    color: string 
    size: string 
    background: string
    border: string
    borderRadius: string
}

const StyledButton = styled.button<Omit<ButtonProps, 'value' | 'onClick'>>`
    cursor: pointer;
    color: ${p => p.color};
    font-size: ${p => p.size};
    background: ${p => p.background};
    border: ${p => p.border};
    border: ${p => p.borderRadius};
`

export function Button({value, onClick, ...styled}: ButtonProps) {
    return (
    <StyledButton
        {...styled}
        onClick={onClick}
    >
        {value}
    </StyledButton>
    )
}
