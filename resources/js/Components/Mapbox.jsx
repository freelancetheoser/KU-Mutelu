import React, { useState, useEffect } from 'react';
import mapboxgl, {Marker} from 'mapbox-gl';

const MapBoxComponent = () => {
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZnJlZWxhbmNldGhlb3NlciIsImEiOiJjbHNuMGJoMzUwMnJrMnFxdzhmbHE3ODltIn0.7Ef9vAIsF3aH_MYvKf0zaw';

        const newMap = new mapboxgl.Map({
            container: 'map',
            center: [100.57208, 13.8451],
            zoom: 15.1,
            pitch: 62,
            bearing: -20
        });


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
                    'line-emissive-strength': 0.8,
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

    const handleCheckboxChange = (event) => {
        map.setConfigProperty('basemap', event.target.id, event.target.checked);
    };

    return (
        <div className='mx-8'>
            {/* <div className="map-overlay">
                <div className="map-overlay-inner">
                    <fieldset className="select-fieldset">
                        <label>Select light preset</label>
                        <select id="lightPreset" name="lightPreset" onChange={handleLightPresetChange}>
                            <option value="dawn">Dawn</option>
                            <option value="day" selected="">Day</option>
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
