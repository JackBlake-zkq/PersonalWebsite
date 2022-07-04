<script>
        import * as d3 from 'd3';
        import { onMount, onDestroy } from 'svelte';

        const points = [];
        for(let i = 0; i <= 500; i+=5){ points.push({x: i, y: 0}) }

        let svg = null;

        function draw(circle) {
            circle
                .attr('cx', point => point.x)
                .attr('cy', point => point.y)
                .attr('r', 2)
                .attr('fill', point => {
                    let color = `hsl(${Math.trunc(point.x) + Math.trunc(point.y)}, 100%, ${Math.abs((point.x / 5) - 50) + 50}%)`;
                    return color;
                });
        }

        function createSvg() {
            svg = d3.select('#svgCont')
                .append('svg')
                .attr('width', window.innerWidth)
                .attr('height', window.innerHeight)
                .attr('viewBox', '0 -250 500 500')
        }

        function createCircles() {
            svg.selectAll('circle')
                .data(points)
                .enter()
                .append('circle')
                    .attr('cx', point => point.x)
                    .attr('cy', point => point.y)
                    .attr('r', 0)
                    .attr('fill', 'white')
                .transition().duration(3000).call(draw);
        }

        function updateCircles() {
            svg.selectAll('circle')
                .data(points)
                .transition()
                .duration(300).ease(d3.easeLinear).call(draw);
        }

        function pushCircles(fromX, fromY) {
            points.forEach(point => {
                point.y = fromY * Math.cos( (point.x - fromX) / (20 * Math.PI) )
            })
            updateCircles();
        }

        let enableAutoTimeout = null;
        let autoPushInterval = null;
        let pushFromX = 0;
        let pushFromY = 200;

        function clearEventItems() {
            window.onmousemove = null;
            clearTimeout(enableAutoTimeout);
            clearInterval(autoPushInterval);
        }

        function setAutoPushInterval() {
            autoPushInterval = setInterval(() => {
                pushCircles(pushFromX, pushFromY)
                pushFromX += 10;
            }, 100);
        }

        function setEnableAutoTimeout(){
            enableAutoTimeout = setTimeout(() => setAutoPushInterval(), 100);
        }

        function init(){
            svg?.remove();
            clearEventItems();
            pushFromX = 0;
            pushFromY = 200;
            createSvg();
            createCircles();
            if(window.innerWidth < 640) {
                setAutoPushInterval();
            } else {
                window.onmousemove = event => {
                    clearTimeout(enableAutoTimeout);
                    setEnableAutoTimeout();
                    clearInterval(autoPushInterval);
                    //map window mouse position to svg viewbox position
                    const x = d3.scaleLinear().domain([0, window.innerWidth]).range([0, 500]);
                    const y = d3.scaleLinear().domain([window.innerHeight, 0]).range([-250, 250]);

                    pushFromX = x(event.clientX);
                    pushFromY = y(event.clientY);
                    
                    pushCircles(pushFromX, pushFromY);
                }
                //revert circles back to middle if user doesn't move mouse for a second
                setEnableAutoTimeout();
            }
        }

        onMount(init);
        window.onresize = init;

        onDestroy(clearEventItems);

        const welcomeMsg = "Hello, I'm Jack Blake"
        
</script>

<main>
    <h1 class="absoluteCenter">
        {#each welcomeMsg.split('') as char, i}
            <span>{char}</span>
        {/each}
    </h1>
    <div id="svgCont"></div>
</main>

<style>
    main {
        height: 100vh;
    }
    #svgCont{
        height: 100vh;
        width: 100%;
        z-index: -2;
        overflow: hidden;
    }
    h1 {
        background-color: var(--light);
        background-image: var(--rainbow-grad);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
    }
    h1 span {
        transition: color 0.5s;
        color: var(--dark)
    }
    h1 span:hover {
        color: transparent;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }
</style>