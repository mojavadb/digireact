import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"

import HomePage from "./pages/HomePage"
import SearchPageMobile from "./pages/SearchPageMobile"
import SearchPageDesktop from "./pages/SearchPageDesktop"
import LoginPage from "./pages/LoginPage"

import { DataProvider } from "./contexts/DataContext"
import { InnerWidthProvider } from "./contexts/InnerWidthContext"

function App() {
  const [query, setQuery] = useState(""); // در صورت نیاز باید به کانتکست منتقل شود
  const width =  window.innerWidth;

  return (
    <InnerWidthProvider>
      <DataProvider>
        <Router>
          <Routes>
          <Route path="/" element={<HomePage />}>
            {width > 768 && 
              <Route path="searchD" element={<SearchPageDesktop query={query} setQuery={setQuery} />} />
            }
            </Route>
            {width <= 768 && 
              <Route path="search" element={<SearchPageMobile query={query} setQuery={setQuery} />} />
            }
            <Route path="login" element={<LoginPage width={width} />} />
            <Route path="*" element={<h1>not found</h1>} />
          </Routes>
        </Router>
      </DataProvider>
    </InnerWidthProvider>
  )
}

export default App
