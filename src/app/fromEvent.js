const { _import } = require('../util')

const { fromEvent } = _import('rxjs')

import { JSDOM } from 'jsdom'

const tag = 'div'
const event = 'click'

const element = new JSDOM(`<${tag}></${tag}>`).window.document.querySelector(tag)

const source = fromEvent(element, event)
