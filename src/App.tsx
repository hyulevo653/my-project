import { HelmetProvider } from 'react-helmet-async';
import useRouteElements from './useRouteElements'


function App() {
  const routeElements = useRouteElements()
  return (
   <div className='w-full'>
     <HelmetProvider>
      {routeElements}
    </HelmetProvider>
   </div>
  );
}

export default App
