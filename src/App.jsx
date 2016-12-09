import React    from 'react'
import Mozaik   from 'mozaik/browser'
import EXT_NAME from 'mozaik-ext-EXT_NAME'


const MozaikComponent = Mozaik.Component.Mozaik
const ConfigActions   = Mozaik.Actions.Config

Mozaik.Registry.addExtensions({ EXT_NAME })

React.render(<MozaikComponent/>, document.getElementById('mozaik'))

ConfigActions.loadConfig()
