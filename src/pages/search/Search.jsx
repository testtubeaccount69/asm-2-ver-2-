import { useState } from "react";
import axios from "../../api";
import { API_KEY } from "../../requests";
import "./Search.css";
import { Link } from "react-router-dom";
import MovieDetail from "../../components/MovieDetail";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const Search = () => {
	const [query, setQuery] = useState("");
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();
		if (!query.trim()) return;

		try {
			const res = await axios.get(
				`/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`
			);
			setMovies(res.data.results);
			setSelectedMovie(null);     // Reset detail when new search
		} catch (err) {
			console.error(err);
		}
	};

	const handleReset = () => {
		setQuery("");
		setMovies([]);
		setSelectedMovie(null);
	};

	return (
		<div className="search-page">

			{/* clickable home */}
			<Link to="/browse" className="logo">
				Movie App
			</Link>

			<form className="search-box" onSubmit={handleSearch}>
				<div className="input-row">
					<input
						type="text"
						placeholder="Search movie..."
						value={query}
						onChange={(e) => setQuery(e.target.value)}
					/>
					<span className="search-icon">🔍</span>
				</div>

				<div className="action-row">
					<button type="button" className="reset-btn" onClick={handleReset}>
						RESET
					</button>

					<button type="submit" className="search-btn">
						SEARCH
					</button>
				</div>
			</form>

			<h2 className="result-title">Search Result</h2>

			<div className="result-grid">
				{movies.map((movie) => (
					<img
						key={movie.id}
						src={`${IMAGE_BASE_URL}${movie.poster_path}`}
						alt={movie.title}
						className="result-img"
						onClick={() =>
							selectedMovie?.id === movie.id
								? setSelectedMovie(null)
								: setSelectedMovie(movie)
						}
					/>
				))}
			</div>

			{/* SHOW MOVIE DETAIL BELOW RESULTS */}
			{selectedMovie && (
				<div className="search-detail-wrapper">
					<MovieDetail movie={selectedMovie} />
				</div>
			)}
		</div>
	);
};

export default Search;