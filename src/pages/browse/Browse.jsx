import NavBar from "../../components/Navbar";
import Banner from "../../components/Banner";
import MovieList from "../../components/MovieList";
import requests from "../../requests";

const Browse = () => {
	return (
		<>
			<NavBar />
			<Banner />
			<MovieList
				title="Original"
				fetchUrl={requests.fetchNetflixOriginals}
				isLarge
			/>
			{/**requests.fetchX are defined at requests.js , check MovieList.js for the layout*/}
			<MovieList title="Xu hướng" fetchUrl={requests.fetchTrending} />
			<MovieList title="Xếp hạng cao" fetchUrl={requests.fetchTopRated} />
			<MovieList title="Hành động" fetchUrl={requests.fetchActionMovies} />
			<MovieList title="Hài" fetchUrl={requests.fetchComedyMovies} />
			<MovieList title="Kinh dị" fetchUrl={requests.fetchHorrorMovies} />
			<MovieList title="Lãng mạn" fetchUrl={requests.fetchRomanceMovies} />
			<MovieList title="Tài liệu" fetchUrl={requests.fetchDocumentaries} />

		</>
	);
};

export default Browse;