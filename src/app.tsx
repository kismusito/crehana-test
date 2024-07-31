import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { client } from '@/api/client';
import { Home, CountryDetail, NoFound } from './pages';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/country/:code' element={<CountryDetail />} />
          <Route path='*' element={<NoFound />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
