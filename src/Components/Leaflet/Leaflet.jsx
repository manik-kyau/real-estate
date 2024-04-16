
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [23.6850 ,90.3563];

const Leaflet = () => {
    
    return (
        <div>

            <MapContainer center={position} zoom={13} className='w-full h-[300px] lg:h-[500px]'>
                <TileLayer
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                    url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}.png?key=EqHVdHYRx1jI6vE0GGzF"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Leaflet;