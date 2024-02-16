import React, { useState, useEffect } from 'react';
import mapboxgl, { Marker ,feature ,} from 'mapbox-gl';

const MapBoxComponent = () => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    const lat = 13.8421697
    const lng = 100.5730707

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZWxhbmNldGhlb3NlciIsImEiOiJjbHNuMGJoMzUwMnJrMnFxdzhmbHE3ODltIn0.7Ef9vAIsF3aH_MYvKf0zaw';

        const newMap = new mapboxgl.Map({
            container: 'map',
            // center: [100.57208, 13.8451],
            center: [lng, lat],
            zoom: 16.5,
            pitch: 60,
            bearing: -10
        
        });

        // Create a new marker.
        const samburaphajan = new mapboxgl.Marker()
            .setLngLat([100.5730707, 13.8421697])
            .addTo(newMap);

        // Create a new popup
        const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h3">Sambura Phajan</h3><p>This is a marker with text.</p><img src="./Logo.png" className="w-[10px]" alt="" />');

        // Attach popup to marker
        samburaphajan.setPopup(popup);

        const phaphirut = new mapboxgl.Marker()
            .setLngLat([100.5754932, 13.8409383])
            .addTo(newMap);
        
    
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
    }, []);

    const handleLightPresetChange = (event) => {
        map.setConfigProperty('basemap', 'lightPreset', event.target.value);
    };

    return (
        <div className='mx-8'>
            {/* <div className="map-overlay">
                <div className="map-overlay-inner">
                    <fieldset className="flex select-fieldset">
                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-highlights" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z"/>
                            </svg>
                        </label>
                        <select id="lightPreset" className='h-8' name="lightPreset" size={1} onChange={handleLightPresetChange}>
                            <option value="dawn">Dawn</option>
                            <option value="day">Day</option>
                            <option value="dusk">Dusk</option>
                            <option value="night">Night</option>
                        </select>
                    </fieldset>
                </div>
            </div> */}
            <div id="map" className='min-h-[400px] max-h-[1000px] w-full'></div>
        </div>
    );
};

export default MapBoxComponent;
