import { UserProvider } from "./context/UserProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"

function App() {

  return (
    <UserProvider>
    <MainLayout>
      <AppRoutes />     
    </MainLayout>
    </UserProvider>
    
  )
}

export default App
