// components/Map.js
"use client";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});

// قائمة بالمواقع وإحداثياتها
const locations = {
  'القاهرة': [30.0444, 31.2357],
  'الاسكندرية': [31.2156, 29.9553],
  'الاقصر': [25.6872, 32.6396],
  'اسوان': [24.0925, 32.8998],
  'الجيزة': [30.0131, 31.2089],
  'شرم الشيخ': [27.9159, 34.3299],
  'الغردقة': [27.2579, 33.8116],
  'سيوة': [29.2056, 25.5135],
  'الفيوم': [29.3058, 30.8450],
  'دهب': [28.5114, 34.5123],
  'سانت كاترين': [28.5732, 33.9755],
  'المنيا': [28.1014, 30.7530],
  'قنا': [26.1685, 32.7310],
  'معبد حتشبسوت': [25.7403, 32.6016],
  'وادي الملوك': [25.7408, 32.6010],
  'الاهرامات': [29.9753, 31.1376],
  'قلعة صلاح الدين': [30.0345, 31.2500],
  'مكتبة الاسكندرية': [31.2159, 29.8852],
  'بحيرة ناصر': [22.1535, 32.9031],
  'حديقة الأزهر': [30.0469, 31.2366],
  'محمية راس محمد': [27.8726, 34.3096],
  'مدينة الأمل': [30.1866, 31.1961],
  'الخرطوم': [30.5852, 31.2382], // مثال على مدينة أخرى
  'مدينة الفسطاط': [30.0167, 31.2361],
};


const Map = ({ handelMap }) => {
  const [position, setPosition] = useState([30.0444, 31.2357]); // إحداثيات القاهرة
  const [markerPosition, setMarkerPosition] = useState(null);
  const [search, setSearch] = useState('');
  const LocationMarker = ({ setPosition }) => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        /* start change */
        handelMap(e.latlng.lat.toFixed(4), e.latlng.lng.toFixed(4));
        /* stop change */

      },
    });

    return null;
  };



  const handleSearch = () => {
    const coords = locations[search];
    if (coords) {
      setMarkerPosition(coords);


      setPosition(coords);
    } else {
      alert('الموقع غير موجود.');
    }
  };



  return (
    <div>
      <input
        style={{ width: '80%', padding: '10px', fontSize: '18px' }}
        type="text"
        placeholder="ابحث عن مدينة أو بلد"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button style={{ padding: '10px', fontSize: '18px', width: '20%', textAlign: "center" }} onClick={handleSearch}>ابحث</button>
      <MapContainer center={position} zoom={6} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker setPosition={setMarkerPosition} />
        {markerPosition && (
          <Marker position={markerPosition}>
            <Popup>
              إحداثيات: {markerPosition[0].toFixed(4)}, {markerPosition[1].toFixed(4)}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
