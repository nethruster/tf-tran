import { h, render, Component } from 'preact'
import { bind } from 'decko'
import 'preact/debug' // TODO Remove on prod

import ContentShell from 'content-shell'

import './styles/index.scss'

const mountPoint = document.getElementById('mount-point')

render(<ContentShell />, mountPoint, mountPoint.lastElementChild)

