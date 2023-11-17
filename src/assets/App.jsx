import { AppRouter } from './routers/AppRouter'
import { AuthProvider } from './context/AuthProvider';

export const App = () => {
  return (
      <AuthProvider>
          <AppRouter />
      </AuthProvider>
  )
}
