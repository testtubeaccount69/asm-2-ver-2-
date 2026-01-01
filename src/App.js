import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/browse" replace />} />
				{/**redirect to browse (seen below) if path is /, basically replace it with browse path, making it default */}
				<Route path="/browse" element={<Browse />} />
				<Route path="/search" element={<Search />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

