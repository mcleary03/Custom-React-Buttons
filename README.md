# Custom-React-Buttons
Custom animated buttons made with React.js

## Usage
This is a React component for use in React apps

The only dependency is React

## Color Schemes
There are 8 built-in color schemes:
* glass
* white
* default
* blue
* green
* yellow
* orange
* red

these are used by passing the `color` prop like this:
``` jsx
<Btn color={'red'}> ... </Btn>
```

## Custom Color Schemes
You can create your own color schemes by passing an object to the `color` prop:
``` jsx
<Btn color={{
  background: 'magenta',
  border: 'rgb(97, 42, 205)',
  shadow: 'rgba(124, 55, 12, 0.8)',
  inset: '#20db87',
  text: '#432'
}}> ... </Btn>
```

## Overriding Defaults
You may override anything you want by using an inline style prop as an object:
``` jsx
<Btn 
  style={{
    height: '400px',
    width: '400px',
    fontFamily: 'impact',
    fontSize: '4em',
    textShadow: '0 1px 1px black',
    transform: 'rotate(45deg)',
    margin: '100px',
  }}
>
```

## Optional Props
`caps` is a boolean, add this to uppercase all text:
``` jsx
<Btn caps> this will be all uppercase </Btn>
```
