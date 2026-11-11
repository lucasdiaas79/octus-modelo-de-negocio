import type { ComponentType } from 'react'
import S01Cover from './S01Cover'
import S02What from './S02What'
import S03Opportunity from './S03Opportunity'
import S04Value from './S04Value'
import S05Delivery from './S05Delivery'
import S06Coordination from './S06Coordination'
import S07Method from './S07Method'
import S08Clients from './S08Clients'
import S09Phases from './S09Phases'
import S10Phase1 from './S10Phase1'
import S11Phase2 from './S11Phase2'
import S12Transition from './S12Transition'
import S13Closing from './S13Closing'

export const slides: { Component: ComponentType; theme: 'dark' | 'light'; bg: string }[] = [
  { Component: S01Cover, theme: 'dark', bg: '#000000' },
  { Component: S02What, theme: 'dark', bg: '#0A2326' },
  { Component: S03Opportunity, theme: 'dark', bg: '#000000' },
  { Component: S04Value, theme: 'light', bg: '#EEF2F2' },
  { Component: S05Delivery, theme: 'dark', bg: '#000000' },
  { Component: S06Coordination, theme: 'dark', bg: '#0A2326' },
  { Component: S07Method, theme: 'light', bg: '#EEF2F2' },
  { Component: S08Clients, theme: 'dark', bg: '#000000' },
  { Component: S09Phases, theme: 'dark', bg: '#0A2326' },
  { Component: S10Phase1, theme: 'dark', bg: '#000000' },
  { Component: S11Phase2, theme: 'light', bg: '#EEF2F2' },
  { Component: S12Transition, theme: 'dark', bg: '#0A2326' },
  { Component: S13Closing, theme: 'dark', bg: '#000000' },
]
