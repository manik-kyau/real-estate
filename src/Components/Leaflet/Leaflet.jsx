/* eslint-disable react/jsx-key */
import React from 'react';
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
import { MapContainer, Polygon, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from '../../leafletJS/leaflet';

const center = [24.18781811395875, 90.39395029893139];

const Leaflet = () => {
    return (
        <div>
            <MapContainer
                center={center}
                zoom={10}
                // className='w-full h-[50%]'
                style={{ width: '[100%]', height: '70vh' }}

            >
                <TileLayer
                    url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=EqHVdHYRx1jI6vE0GGzF"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                >
                </TileLayer>
                {/* {
                    statesData.features.map(state => {
                        const coordinates = state.geometry.coordinates[0].map(item => [item[1], item[0]]);

                        return (<Polygon
                            pathOptions={{
                                fillColor: '#FD8D3C',
                                fillOpacity: 0.7,
                                weight: 2,
                                opacity: 1,
                                dashArray: 3,
                                color: 'white',
                            }}
                            positions={coordinates}
                            eventHandlers={{
                                mouseover: (e) => {
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity: 0.7,
                                        weight: 5,
                                        dashArray: '',
                                        color: '#666'
                                    })
                                },
                                mouseout: (e) => {
                                    const layer = e.target;
                                    layer.setStyle({
                                        fillOpacity: 5,
                                        weight: 2,
                                        dashArray: '3',
                                        color: 'white'
                                    })
                                },
                                click: (e) => {

                                }
                            }}
                        ></Polygon>)
                    })
                } */}
            </MapContainer>
        </div>
    );
};

export default Leaflet;