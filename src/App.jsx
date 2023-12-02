import {
	AdminPage,
	DatHangPage,
	DatHangThanhCong,
	HomePage,
	LoginPage,
	PoloPage,
	ProductDetailPage,
	QuanShortPage,
	RegisterPage,
} from './pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}></Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<RegisterPage />}></Route>
				<Route path="/quan-short" element={<QuanShortPage />}></Route>
				<Route path="/ao-polo" element={<PoloPage />}></Route>
				<Route path="/detail" element={<ProductDetailPage />}></Route>
				<Route path="/dat-hang" element={<DatHangPage />}></Route>
				<Route
					path="/dat-hang-thanh-cong"
					element={<DatHangThanhCong />}
				></Route>

				<Route path="/admin" element={<AdminPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
