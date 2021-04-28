import { system, compose, space as spaces, layout, flexbox, grid, position, color as colors, background, border, shadow as shadows, typography } from 'styled-system'

const custom = system({
    transform: true,
    transition: true,
    textDecoration: true,
    textTransform: true,
    gridTemplate: true,
    fill: {
        property: 'fill',
        scale: 'colors',
    },
    stroke: {
        property: 'stroke',
        scale: 'colors',
    },
    strokeWidth: true,
})

export const styleFunctions = compose(
    layout,
    flexbox,
    grid,
    position,
    spaces,
    colors,
    background,
    border,
    shadows,
    typography,
    custom,
)

export const media = (index) => (props) => `@media only screen and (min-width: ${props.theme.breakpoints[index]})`
export const breakpoint = (index) => (props) => props.theme.breakpoints[index]
export const space = (index) => (props) => props.theme.space[index]
export const size = (index) => (props) => props.theme.sizes[index]
export const color = (name) => (props) => props.theme.colors[name]
export const font = (name) => (props) => props.theme.fonts[name]
export const fontSize = (index) => (props) => props.theme.fontSizes[index]
export const fontWeight = (index) => (props) => props.theme.fontWeights[index]
export const lineHeight = (index) => (props) => props.theme.lineHeights[index]
export const letterSpacing = (index) => (props) => props.theme.letterSpacings[index]
export const borderWidth = (index) => (props) => props.theme.borderWidths[index]
export const radius = (index) => (props) => props.theme.radii[index]
export const shadow = (name) => (props) => props.theme.shadows[name]
export const zIndex = (index) => (props) => props.theme.zIndices[index]

export const sx = (props) => {
    if (!props || !props.sx) return
    const styles = {}

    for (const key in props.sx) {
        styles[key] = styleFunctions({ ...props.sx[key], theme: props.theme })
    }

    return styles
}