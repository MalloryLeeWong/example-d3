import * as d3 from 'd3'
// importing everything from d3 library

// creating a class but it won't extend from React Component

export default class D3Chart {
  // constructor runs once when class initialized
  constructor(element){
    // select the div in the ChartWrapper return
    // append svg canvas, set width and height
    // store svg in a var to keep track of where it is
    const svg = d3.select(element)
      .append("svg")
      .attr("width", 500)
      .attr("height", 500)

    // append rectangle to svg canvas
    // x and y position rect based on top left corner of canvas
    svg.append("rect")
       .attr("x", 50)
       .attr("y", 50)
       .attr("width", 100)
       .attr("height", 400)
       .attr("fill", "grey")
  }
}
