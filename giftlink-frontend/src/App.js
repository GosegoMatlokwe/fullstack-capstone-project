import DetailsPage from './components/DetailsPage/DetailsPage';
import SearchPage from './components/SearchPage/SearchPage';

<Route path="/app/product/:productId" element={<DetailsPage/>} />
<Route path="/app/search" element={<SearchPage/>} />
