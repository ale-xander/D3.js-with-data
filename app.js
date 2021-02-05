console.log('lol')

// data array for bar chart
const data = [
    {
        width: 500,
        height: 200,
        fill: '#b3f2e9'
    },
    {
        width: 100,
        height: 100,
        fill: '#6ba9e0'
    },
    {
        width: 1000,
        height: 10,
        fill: '#7f74d2'
    },
]

const svg = d3.select('svg')
// (d, i, n) ... i= index of array, n= array of elements

// join data to rect
const rect = svg.selectAll('rect')
                .data(data)
                
// add attrs to rect already in the DOM
rect.attr('width', (d, i, n)=> d.width)
    .attr('height', (d)=> d.height)
    .attr('fill', d => d.fill)

console.log(rect)
// append the enter selection to the DOM
rect.enter()
    .append('rect')
    .attr('width', (d, i, n)=> d.width)
    .attr('height', (d)=> d.height)
    .attr('fill', d => d.fill)