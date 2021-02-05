console.log('lol')

// data array for bar chart
const data = [
    {
        width: 200,
        height: 100,
        fill: '#b342e9'
    }
]

const svg = d3.select('svg')
svg.select('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', '#b342e9')