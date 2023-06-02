import { loremIpsum } from 'lorem-ipsum'
import React from 'react'

export const TOOLS = [
  'HTML',
  'CSS',
  'Java Script',
  'Type Script',
  'React',
  'Figma',
  'Git',
  'SCSS',
  'Redux',
  'Redux Saga',
  'Bootstrap',
  'PWA',
  'React Router',
]

// Generate lorem ipsum text
const LOREM_IPSUM_OPTIONS = { count: 10 }
export let landingText = []
export let landingTextBeforeLastLine = loremIpsum(LOREM_IPSUM_OPTIONS)
export let landingTextLastLine = loremIpsum(LOREM_IPSUM_OPTIONS)

for (let i = 0; i < 40; i++) {
  landingText.push(<p key={i}>{loremIpsum(LOREM_IPSUM_OPTIONS)}</p>)
}
