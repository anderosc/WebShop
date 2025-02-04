import { useMap } from 'react-leaflet';

function ChangeView(props) {  
  const map = useMap();  
  map.setView(props.center, props.zoom);  
  return null;
}

export default ChangeView;