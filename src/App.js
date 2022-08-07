import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Home } from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Friends from './pages/Friends';
import UserRoutes from './UserRoutes';
import Navbar from './components/navbar/Navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/friends" element={<Friends />} />

        <Route path="/users/*" element={<UserRoutes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
