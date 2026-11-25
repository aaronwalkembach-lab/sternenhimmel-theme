import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SKY } from './scene.ts'

// Deep violet night, starlight text, a lavender accent.
const { theme, problems } = makeColors({
  label: 'Sternenhimmel',
  only: 'dark',
  roles: { accent: '#b896ff', danger: '#ff7a8a', success: '#7fe0b0', warning: '#ffd27a', pro: '#e39cff' },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#110b26',
        'surface-1': '#171030',
        'surface-2': '#1c1438',
        'surface-3': '#21183f',
        'text-primary': '#f3eeff',
        'text-secondary': '#cec4e8',
        'text-muted': '#a69bc8',
      },
    },
  },
})

const LOOK: ThemeSetArgs = {
  colors: theme,
  overrideColorScheme: 'dark',
  backdrop: { scene: 'sternenhimmel', glass: { blur: 18, tint: '#110b26', opacity: 0.55 } },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.surface !== 'desktop' && e.surface !== 'mobile') {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SKY} alt="Ein funkelnder Sternenhimmel mit Milchstraße und Sternschnuppen" />
  })
}
