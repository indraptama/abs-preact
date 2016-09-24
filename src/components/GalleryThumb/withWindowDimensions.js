
import React from 'react'

function defaultGetWidth () {
  return window.innerWidth;
}

function defaultGetHeight () {
  return window.innerHeight;
}


export function withWindowDimensions({ getHeight,  getWidth } = {}) {
  return (ComposedComponent) => {
    if(!getHeight) getHeight = defaultGetHeight;
    if(!getWidth) getWidth = defaultGetWidth;

    return class DimensionsHOC extends React.Component {

      constructor(props){
        super(props)
        this.state = {}
        this.onResize = this.onResize.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
      }

      updateDimensions(){
        this.setState({
          windowWidth: getWidth(),
          windowHeight: getHeight()
        })
      }

      onResize (){
        if (this.rqf) return
        if( typeof window !== 'undefined' )
          this.rqf = window.requestAnimationFrame(() => {
            this.rqf = null
            this.updateDimensions()
          })
      }

      componentDidMount () {
        this.updateDimensions()
        if( typeof window !== 'undefined' )
          window.addEventListener('resize', this.onResize, false)
      }

      componentWillUnmount () {
        if( typeof window !== 'undefined' )
          window.removeEventListener('resize', this.onResize)
      }

      render () {
        return (
          <span>
            {(this.state.windowWidth || this.state.windowHeight) &&
              <ComposedComponent {...this.state} {...this.props} updateDimensions={this.updateDimensions}/>}
          </span>
        )
      }
    }
  }
}

export const withWindowDimensionsDOM = withWindowDimensions();



/**
* example:
  import {withWindowDimensionsDOM} from '../components/withWindowDimensions';
  const MyComponent = ({windowWidth,windowHeight }) => <div> windows dimensions w: {windowWidth} , h: {windowHeight}  </div>
  const MyComponentDecorated = withWindowDimensionsDOM(MyComponent);
  <MyComponentDecorated />

* example 2 (usefull for SSR):
  import {withWindowDimensions} from '../components/withWindowDimensions';
  const MyComponent = ({windowWidth,windowHeight }) => <div> windows dimensions setted w: {windowWidth} , h: {windowHeight}  </div>
  const MyComponentDecorated = withWindowDimensions({
    getWidth: ()=> 1980,
    getHeight: ()=> 1024
  })(MyComponent);
*/
