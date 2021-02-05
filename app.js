console.log('lol')

// data array for bar chart
const data = [
    {
        width: 500,
        height: 200,
        fill: '#b342e9'
    }
]

const svg = d3.select('svg')
const rect = svg.select('rect')
                .data(data)
                .attr('width', (d)=> d.width)
                .attr('height', (d)=> d.height)
                .attr('fill', (d)=> d.fill)

console.log(rect)