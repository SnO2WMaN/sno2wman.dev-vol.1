import React from 'react'

import ImageAnimeJS from '../assets/animejs.png'
import ImageAseprite from '../assets/aseprite.png'
import ImageEditorConfig from '../assets/editorconfig.png'
import ImageParcelBundler from '../assets/parcel-bundler.png'
import ImageRenovate from '../assets/renovate.png'
import IconAffinity from '../assets/svg/affinity.svg'
import IconLefthook from '../assets/svg/lefthook.svg'
import IconPostCSS from '../assets/svg/postcss.svg'
import IconStylelint from '../assets/svg/stylelint.svg'
import IconTravisCI from '../assets/svg/travisci.svg'
import SimpleIcon from '../components/SimpleIconWrapper'
import { faGitkraken } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SimpleIcons from 'simple-icons'

export type SkillType = {
  name: string
  icon: JSX.Element
  color: string
}

function fromSimpleIcon(
  key: string,
  override?: Partial<Omit<SkillType, 'icon'>>
) {
  return {
    name: key,
    icon: <SimpleIcon name={key} />,
    color: `#${SimpleIcons[key].hex}`,
    ...override,
  }
}

const set: {
  [category in string]: {
    [key in Exclude<string, 'title'>]: SkillType
  }
} = {
  LANG: {
    js: fromSimpleIcon('JavaScript'),
    ts: fromSimpleIcon('TypeScript'),
  },
  MARKUP: {
    html: fromSimpleIcon('HTML5', { name: 'HTML' }),
    markdown: fromSimpleIcon('Markdown'),
  },
  STYLE: {
    css: fromSimpleIcon('CSS3', { name: 'CSS' }),
    sass: fromSimpleIcon('Sass'),
    postcss: {
      name: 'PostCSS',
      icon: <IconPostCSS />,
      color: '#dd3a0a',
    },
  },
  BUILD: {
    webpack: fromSimpleIcon('Webpack'),
    babel: fromSimpleIcon('Babel'),
    parcel: {
      name: 'Parcel',
      icon: <img src={ImageParcelBundler} />,
      color: '#21374b',
    },
  },
  FRAMEWORK: {
    nodejs: fromSimpleIcon('Node.js'),
    react: fromSimpleIcon('React'),
    next: fromSimpleIcon('Next.js'),
    vue: fromSimpleIcon('Vue.js'),
    nuxt: fromSimpleIcon('Nuxt.js'),
  },
  ANIMATION: {
    animejs: {
      name: 'Anime.js',
      icon: <img src={ImageAnimeJS} />,
      color: '#252423',
    },
  },
  TOOL: {
    eslint: fromSimpleIcon('ESLint'),
    prettier: fromSimpleIcon('Prettier'),
    stylelint: {
      name: 'Stylelint',
      icon: <IconStylelint />,
      color: '#1f1f1f',
    },
    editorconfig: {
      name: 'EditorConfig',
      icon: <img src={ImageEditorConfig} />,
      color: '#e0efef',
    },
    yarn: fromSimpleIcon('Yarn'),
    lefthook: {
      name: 'Lefthook',
      icon: <IconLefthook />,
      color: '#bf0000',
    },
  },
  INFRA: {
    circleci: fromSimpleIcon('CircleCI'),
    travisci: {
      name: 'Travis CI',
      icon: <IconTravisCI />,
      color: '#3EAAAF',
    },
    github: fromSimpleIcon('GitHub', { name: 'Actions', color: '#1074e7' }),
    renovate: {
      name: 'Renovate',
      icon: <img src={ImageRenovate} />,
      color: '#ffc300',
    },
  },
  PLATFORM: {
    netlify: fromSimpleIcon('Netlify'),
    firebase: fromSimpleIcon('Firebase'),
    zeit: fromSimpleIcon('Zeit', { name: 'ZEIT' }),
  },
  VERSIONING: {
    git: fromSimpleIcon('Git'),
    github: fromSimpleIcon('GitHub'),
    gitkraken: {
      name: 'GitKraken',
      icon: <FontAwesomeIcon icon={faGitkraken} />,
      color: '#179287',
    },
  },
  EDITOR: {
    vscode: fromSimpleIcon('Visual Studio Code', { name: 'VSCode' }),
  },
  SOFTWARE: {
    affinity: {
      name: 'Affinity',
      icon: <IconAffinity />,
      color: '#4ecdfa',
    },
    aseprite: {
      name: 'Aseprite',
      icon: <img src={ImageAseprite} />,
      color: '#7d929e',
    },
  },
  SaaS: {
    fossa: fromSimpleIcon('Fossa'),
    codecov: fromSimpleIcon('Codecov'),
  },
}

export default set
