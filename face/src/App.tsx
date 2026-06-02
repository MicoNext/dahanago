import { RootLayout } from './components/Layout/DashboardLayout'
import { ThemeProvider } from './components/providers/ThemeProvider'
import MainPage from './pages/Main/Main'

export default function App() {
  return (
    <ThemeProvider>
      <RootLayout>
        <MainPage />
      </RootLayout>
    </ThemeProvider>
  )
}