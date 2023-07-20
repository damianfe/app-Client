import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import { CartProvider } from "./context/CartProvider"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"

import MainLayout from "./layout"
import AppRoutes from "./routes"

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <CategoriesProvider>
        <DrinksProvider>
          <CartProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
        </CartProvider>
        </DrinksProvider>
        
      </CategoriesProvider>

    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
