import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import Activity from "./pages/activity/Activity";
import Events from "./pages/events/Events";
import Projects from "./pages/projects/Projects";
import Resources from "./pages/resources/Resources";
import NavigationBar from "./components/navbar/NavigationBar";

function App() {
	return (
		<BrowserRouter>
			<NavigationBar />
			<h1 className="text-occ_color font-bold text-2xl">CS Club</h1>
			<Routes>
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/activity" element={<Activity />} />
				<Route path="/activity/events" element={<Events />} />
				<Route path="/activity/projects" element={<Projects />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="*" element={<Navigate to="/homepage" replace />} />
			</Routes>
			{/* Add Footer */}
		</BrowserRouter>
	);
}

export default App;
