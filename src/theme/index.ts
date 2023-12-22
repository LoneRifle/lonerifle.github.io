import { extendTheme } from '@chakra-ui/react'
import { theme as ogpDsTheme } from '@opengovsg/design-system-react'

export const theme = extendTheme({
  components: {
    ...ogpDsTheme,
  },
})
