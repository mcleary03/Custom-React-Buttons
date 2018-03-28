import React, { Component } from 'react'

const colors = {
  default: { background: '#38E4F7', border: '#09c5da', shadow: '#04565f', inset: '#69ebf9', text: '#ffffff' },
  white: { background: '#dadada', border: '#b4b4b4', shadow: '#747474', inset: '#f4f4f4', text: '#111111' },
  glass: { background: 'transparent', border: 'rgba(0,0,0,0.05)', shadow: '#666666', inset: '#dddddd', text: 'rgba(100,100,100,0.4)'},
  red: { background: '#f76642', border: '#e3350a', shadow: '#691804', inset: '#f98e73', text: '#ffffff' },
  green: { background: '#42f453', border: '#0ddd21', shadow: '#06640f', inset: '#72f77f', text: '#ffffff' },
  blue: { background: '#4286f4', border: '#0d5cdd', shadow: '#062a64', inset: '#72a5f7', text: '#ffffff' },
  yellow: { background: '#f4f441', border: '#dcdc0d', shadow: '#636306', inset: '#f7f771', text: '#ffffff' },
  orange: { background: '#eaad3a', border: '#c38615', shadow: '#503708', inset: '#efc068', text: '#ffffff' }
}

export default class Btn extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      hover: props.hover || false,
      focus: props.focus || false,
      click: props.click || false
    }

    const { background, border, shadow, inset, text } = typeof props.color=='object' ? props.color : colors[props.color || 'default']

    this.defaultStyle = {
      position: 'relative',
      top: '0',
      bottom: '0',
      border: 'none',
      userSelect: 'none',
      outline: 'none',
      cursor: 'pointer',
      margin: '2px',
      padding: '8px',
      borderBottom: `5px solid ${border}`,
      borderRadius: '15px',
      backgroundColor: `${background}`,
      color: `${text}`,
      boxShadow: `inset 0 0 5px ${inset}`,
      filter: `drop-shadow(0 7px 3px ${shadow})`,
      lineHeight: '1.8',
      fontWeight: 'bold',
      textTransform: props.caps ? 'uppercase' : 'none',
      transition: '0.3s',
      ...props.style // override defaults with inline style object
    }
    this.hoverStyle = {
      ...this.defaultStyle,
      color: `${text}`,
      borderBottom: `3px solid ${border}`,
      filter: `drop-shadow(0 5px 2px  ${shadow})`,
      top: '2px'
    }
    this.clickStyle = {
      ...this.hoverStyle,
      borderBottom: `0 ${border}`,
      filter: `drop-shadow(0 0 0 ${shadow})`,
      boxShadow: `1px 2px 2px ${shadow} inset`,
      top: '5px'
    }

    this.handleEvent = e => {
      this[`handle${e.type}`](e)
      if (this.props[`on${e.type}`]) this.props[`on${e.type}`](e)
    }

    this.handlemouseenter = e => {
      this.setState({ hover: true })
    }
    this.handlemouseleave = e => {
      this.setState({ click: false })
      this.setState({ hover: false })
    }
    this.handlefocus = e => {
      this.setState({ focus: true })
    }
    this.handleblur = e => {
      this.setState({ focus: false })
    }
    this.handlemousedown = e => {
      this.setState({ click: true })
    }
    this.handlemouseup = e => {
      this.setState({ click: false })
      if (this.props.onclick) this.props.onclick(e)
    }

    this.handlekeydown = e => {
      if (this.isClick(e)) this.handlemousedown(e)
    }
    this.handlekeyup = e => {
      if (this.isClick(e)) this.handlemouseup(e)
    }
    this.isClick = e => this.state.focus && (e.keyCode == 32 || e.keyCode == 13)

  } // end constructor
  
  render() {
    const { 
      state: { hover, focus, click },
      props: { children, color },
      defaultStyle,
      hoverStyle,
      clickStyle,
      handleEvent
    } = this

    const style = (hover || focus) ? (click ? clickStyle : hoverStyle) : defaultStyle

    return (
      <button
        style={ style }
        onMouseEnter={ handleEvent }
        onMouseLeave={ handleEvent }
        onFocus={ handleEvent }
        onBlur={ handleEvent }
        onMouseDown={ handleEvent }
        onMouseUp={ handleEvent }
        onKeyDown={ handleEvent }
        onKeyUp={ handleEvent }
      >
        { children }
      </button>
    )
  }
} 
