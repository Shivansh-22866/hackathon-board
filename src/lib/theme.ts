import { extendTheme, ThemeConfig } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#e4e5f1', '#373737')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors })

export default theme