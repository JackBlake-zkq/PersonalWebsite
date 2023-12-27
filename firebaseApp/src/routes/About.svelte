<script>
    import * as d3 from 'd3';
    import { onMount, onDestroy } from 'svelte';
    import PageTransition from '../PageTransition.svelte';

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
        svg = d3.select('#svgContainer')
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

    const about = [
        "Hi! I'm <b>Jack Blake</b> 👋",
        "I'm a mission driven developer interested in climate change, health, and government",
        "I enjoy climbing, golfing, disc golfing, table tennis, hiking, movies, and board games"
        
</script>

<PageTransition>
    <main>
        <div style="width: 80%; margin-top: 5rem; margin-left: 10%;">
            {#each about as sect}
                <p>{@html sect}</p>
            {/each}
        </div>
        <div id="svgContainer"></div>
    </main>
</PageTransition>

<style>
    main {
        padding-bottom: 2rem;
    }
    #svgContainer{
        width: 100vw;
        height: 100vh;
        z-index: -2;
        overflow: hidden;
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
</style>
