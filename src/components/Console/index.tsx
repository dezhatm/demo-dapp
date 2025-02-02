import { Box, Collapsible } from '@0xsequence/design-system'

import * as styles from './styles.css'

export interface ConsoleProps {
  message: string | null
  loading: boolean
}

export const Console = ({ message, loading }: ConsoleProps) => {
  const getLoadingDots = () => {
    if (message) {
      return '\n...'
    }
    return '...'
  }

  return (
    <Collapsible label="Console">
      <Box as="pre" style={{ fontFamily: 'monospace', whiteSpace: 'break-spaces', overflowWrap: 'anywhere' }}>
        {message}
        {loading && getLoadingDots()}
        {
          <Box
            className={styles.cursor}
            display="inline-block"
            fontSize="large"
            lineHeight="4"
            style={{ top: '-4px', position: 'relative' }}
          >
            _
          </Box>
        }
      </Box>
    </Collapsible>
  )
}
