import { createGlobalStyle } from 'styled-components'
import { CSSReset } from '@/components/CSSReset'

const GlobalStyles = createGlobalStyle`
    ${CSSReset}

    * {
        outline: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);  
        -webkit-font-smoothing: antialiased;
    }
`

export { GlobalStyles }
