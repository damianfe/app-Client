import { CategoriesProvider } from "./context/CategoriesProvider"
import { UserProvider } from "./context/UserProvider"
import MainLayout from "./layout"
import AppRoutes from "./routes"

function App() {

  return (
    <UserProvider>
      <CategoriesProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </CategoriesProvider>

    </UserProvider>

  )
}

export default App
