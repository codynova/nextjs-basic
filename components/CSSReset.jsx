import { css } from 'styled-components'

const CSSReset = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ul,
    figure,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }  
`

export { CSSReset }
