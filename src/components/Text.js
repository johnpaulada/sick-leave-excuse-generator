import styled from 'styled-components'

const Text = styled.p`
    font-size: ${props => 'size' in props && props.size ? props.size : '16px'};
`

export default Text