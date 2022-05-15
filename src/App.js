import './scss/App.scss';
import Routes from './pages/Routes';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    </>
  );
}

export default App;
