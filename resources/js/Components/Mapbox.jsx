import React, { useState, useEffect } from 'react';
import mapboxgl, { Marker ,feature ,} from 'mapbox-gl';
import { router } from '@inertiajs/react';

const MapBoxComponent = ({geojson}) => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    const lat = (geojson.location.latitude);
    const lng = (geojson.location.longtitude);

    const icon_size = [50, 50]; //idex[0]:width and idex[1]:height
    const image_size = [50, 50]; //idex[0]:width and idex[1]:height
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZWxhbmNldGhlb3NlciIsImEiOiJjbHNuMGJoMzUwMnJrMnFxdzhmbHE3ODltIn0.7Ef9vAIsF3aH_MYvKf0zaw';

        const newMap = new mapboxgl.Map({
            container: 'map',
            center: [lng, lat],
            zoom: 16.5,
            pitch: 60,
            bearing: -10
        });

        if (newMap != null){
            for (const marker of geojson.features){
                console.log(geojson.features);
                // Create a DOM element for each marker.
                const base = document.createElement('div');
                base.className = 'marker';
                const landmarkImage = document.createElement('div');

                // Set properties for landmarkImage
                landmarkImage.className = 'rounded bounce';
                landmarkImage.style.backgroundImage = `url(${marker.properties.imageurl}.webp)`; // Specify the path to your location image
                landmarkImage.style.width = `${image_size[0]}px`; // Set size as needed
                landmarkImage.style.height = `${image_size[1]}px`;
                landmarkImage.style.backgroundSize = '100%';

                const markerIcon = document.createElement('div');
                markerIcon.className = 'mb-20 bounce';
                markerIcon.style.backgroundImage = `url(./IconsHub/marker-svgrepo-com.svg)`;
                markerIcon.style.width = `${icon_size[0]}px`;
                markerIcon.style.height = `${icon_size[1]}px`;
                markerIcon.style.backgroundSize = '100%';

                // Add landmarkImage and markerIcon to base
                base.appendChild(landmarkImage);
                base.appendChild(markerIcon);

                base.addEventListener('click', () => {
                    // window.location.href = marker.properties.Name
                    router.get(route('landmark.show', {"name":marker.properties.name}))
                });

                // Add markers to the map.
                new mapboxgl.Marker(base)
                .setLngLat(marker.geometry.coordinates)
                .addTo(newMap);
                }
            }


        newMap.on('style.load', () => {
            newMap.addSource('line', {
                type: 'geojson',
                lineMetrics: true,
                data: {
                    type: 'LineString',
                    coordinates: [
                        [2.293389857555951, 48.85896319631851],
                        [2.2890810326441624, 48.86174223718291]
                    ]
                }
            });

            newMap.addLayer({
                id: 'line',
                source: 'line',
                type: 'line',
                paint: {
                    'line-width': 12,
                    'line-emissive-strength': 1,
                    'line-gradient': [
                        'interpolate',
                        ['linear'],
                        ['line-progress'],
                        0,
                        'red',
                        1,
                        'blue'
                    ]
                }

            });
        });

        setMap(newMap);

        return () => newMap.remove(); // Cleanup when component unmounts
    }, [geojson]);

    const handleLightPresetChange = (event) => {
        map.setConfigProperty('basemap', 'lightPreset', event.target.value);
    };

    return (
        <div className='flex flex-col h-[75%] mx-8'>
            <div id="map" className='flex-1 w-full'>
                {/* ตรงนี้จะเป็นส่วนของการแสดงแผนที่ */}
            </div>
        </div>
    );
};

export default MapBoxComponent;
