<script setup>
import { ref, onMounted, watch, defineExpose, nextTick, computed } from 'vue';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const countrySvg = ref();
const currentSelect = ref();
var allTowns = null;

const props = defineProps({
    width: {
        type: Number,
        default: () => window.innerWidth,
    },
    height: {
        type: Number,
        default: () => window.innerHeight,
    },
});

const isPhoneSize = computed(() => {
    return props.width.value < 420;
});

var reset = null;
var svg = null;

const emit = defineEmits(['change']);

watch(
    () => currentSelect.value,
    (val) => {
        emit('change', val);
    }
);
var countryMapGraph = null;
const renderCountry = (code) => {
    if (!code) return false;
    // console.log(code);

    let targetCountry = JSON.parse(JSON.stringify(allTowns));
    targetCountry.objects.TOWN_MOI_1111118.geometries = targetCountry.objects.TOWN_MOI_1111118.geometries.filter(
        (item) => item.properties.COUNTYCODE === code
    );

    countryMapGraph = svg.append('g').attr('id', `countrySVG`);

    const projection = d3
        .geoEquirectangular()
        .scale(11000)
        .center(isPhoneSize ? [121, 24] : [122, 24.5])
        .translate([props.width / 2, props.height / 2]);

    const path = d3.geoPath().projection(projection);

    countryMapGraph
        .append('path')
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-linejoin', 'round')
        .attr('d', path(topojson.mesh(targetCountry, targetCountry.objects.TOWN_MOI_1111118, (a, b) => a !== b)));
    countryMapGraph
        .append('g')
        .attr('fill', '#72cbcc6f')
        .attr('cursor', 'pointer')
        .selectAll('path')
        .data(topojson.feature(targetCountry, targetCountry.objects.TOWN_MOI_1111118).features)
        .join('path')
        .attr('d', path);
};

const render = () => {
    svg = d3
        .select('#theSVG')
        .attr('viewBox', [0, 0, props.width, props.height])
        .attr('width', props.width)
        .attr('height', props.height);

    const mapGraph = svg.append('g');

    const projection = d3
        .geoEquirectangular()
        .scale(11000)
        .center(isPhoneSize ? [121, 24] : [122, 24.5])
        .translate([props.width / 2, props.height / 2]);

    const path = d3.geoPath().projection(projection);

    function clicked(event, d) {
        d3.select('#countrySVG').remove();
        currentSelect.value = d;

        renderCountry(d.properties.COUNTYCODE);

        const target = this || `#path-${d.properties.COUNTYCODE}`;
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();
        countrySvg.value.transition().style('fill', null);
        nextTick(() => {
            d3.select(target).transition().style('fill', '#72cbcc');
            svg.transition()
                .duration(750)
                .call(
                    zoom.transform,
                    d3.zoomIdentity
                        .translate(props.width / 2, props.height / 2)
                        .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / props.width, (y1 - y0) / props.height)))
                        .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
                    d3.pointer(event, svg.node())
                );
        });
    }

    reset = () => {
        d3.select('#countrySVG').remove();
        countrySvg.value.transition().style('fill', null);
        currentSelect.value = null;
        svg.transition()
            .duration(750)
            .call(
                zoom.transform,
                d3.zoomIdentity,
                d3.zoomTransform(svg.node()).invert([props.width / 2, props.height / 2])
            );
    };

    function zoomed(event) {
        const { transform } = event;
        mapGraph.attr('transform', transform);
        mapGraph.attr('stroke-width', 1 / transform.k);
        if (countryMapGraph) {
            countryMapGraph.attr('transform', transform);
            countryMapGraph.attr('stroke-width', 1 / transform.k);
        }
    }

    const zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', zoomed);

    const xyFixedMap = {
        10017: {
            x: 10,
            y: -10,
        },
        63000: {
            x: -10,
            y: -45,
        },
        65000: {
            x: -25,
            y: 20,
        },
        68000: {
            x: -15,
            y: -15,
        },
        10004: {
            x: -15,
            y: 0,
        },
        10018: {
            x: -35,
            y: 0,
        },
        10005: {
            x: -15,
            y: 5,
        },
        66000: {
            x: -45,
            y: 5,
        },
        10007: {
            x: -10,
            y: 5,
        },
        10009: {
            x: -25,
            y: 0,
        },
        10020: {
            x: 15,
            y: 0,
        },
        10016: {
            x: -25,
            y: -40,
        },
        '09020': {
            x: 0,
            y: -40,
        },
        67000: {
            x: -20,
            y: 0,
        },
        10010: {
            x: -65,
            y: 0,
        },
        64000: {
            x: -10,
            y: 0,
        },
        10013: {
            x: -10,
            y: -20,
        },
        10014: {
            x: -30,
            y: -30,
        },
        10008: {
            x: -15,
            y: 5,
        },
        10002: {
            x: 0,
            y: 15,
        },
    };

    fetch('./COUNTY_MOI_topo.json')
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            countrySvg.value = mapGraph
                .append('g')
                .attr('fill', '#666')
                .attr('cursor', 'pointer')
                .selectAll('path')
                .data(topojson.feature(data, data.objects.COUNTY_MOI_1090820).features)
                .join('path')
                .attr('id', (d) => {
                    return 'path-' + d.properties.COUNTYCODE;
                })
                .on('click', clicked)
                .attr('d', path);

            mapGraph
                .append('path')
                .attr('fill', 'none')
                .attr('stroke', 'white')
                .attr('stroke-linejoin', 'round')
                .attr('d', path(topojson.mesh(data, data.objects.COUNTY_MOI_1090820, (a, b) => a !== b)));

            topojson.feature(data, data.objects.COUNTY_MOI_1090820).features.forEach((data) => {
                let { x = 0, y = 0 } = xyFixedMap[data.properties.COUNTYCODE] || {};
                mapGraph
                    .append('text')
                    .attr('class', 'countryText')
                    .attr('x', () => {
                        const [[x0, y0], [x1, y1]] = path.bounds(data);
                        return (x0 + x1) / 2 + x;
                    })
                    .attr('y', () => {
                        const [[x0, y0], [x1, y1]] = path.bounds(data);
                        return (y0 + y1) / 2 + y;
                    })
                    .text(() => {
                        // console.log(data.properties.COUNTYNAME, data.properties.COUNTYCODE);
                        return data.properties.COUNTYNAME;
                    })
                    .on('click', (evt) => {
                        clicked(evt, data);
                    });
            });

            svg.on('click', reset);
            svg.call(zoom);
        });
};

defineExpose({
    reset: () => {
        if (reset) reset();
    },
    render: () => {
        if (render) {
            d3.selectAll('#theSVG > *').remove();
            nextTick(() => {
                render();
            });
        }
    },
});

onMounted(() => {
    render();

    fetch('./TOWN_MOI_topo.json')
        .then((res) => res.json())
        .then((data) => {
            allTowns = data;
        });
});
</script>

<template>
    <div class="taiwan-wrapper">
        <svg id="theSVG"></svg>
    </div>
</template>

<style lang="scss">
$main: #72cbcc;
$bg: #ccc;
.taiwan-wrapper {
    // color:#72cbcc6f;
    #theSVG {
        @apply mx-auto;
        background: $bg;
        &:hover {
            cursor: grab;
        }
    }

    .countryText {
        cursor: pointer;
        font-size: 12px;
        fill: #fff;
        @apply select-none;
        z-index: 2;
    }
}
</style>
