import React, {Component} from 'react'
import D3Chart from './D3Chart'

export default class ChartWrapper extends Component {

  // ref in react allows us to keep track of certain element
  componentDidMount() {
    // creating new D3 chart, passing a ref to where it will be attached
    new D3Chart(this.refs.chart)
  }

  render() {
    return (
      <div ref="chart"></div>
    )
  }
}
