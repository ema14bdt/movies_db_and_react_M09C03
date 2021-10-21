import React, {Component} from 'react';
import MovieList from './MovieList';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            moviesList: [],
        };
    }

    render() {
        return (
            <>
                <h1 className='h3 mb-2 text-gray-800 ml-4'>All the movies in the Database</h1>

                <div className='card shadow mb-4'>
                    <div className='card-body'>
                        <div className='table-responsive'>
                            <table className='table table-bordered' id='dataTable' width='100%' cellspacing='0'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Titulo</th>
                                        <th>Clasificación</th>
                                        <th>Premios</th>
                                        <th>Duración</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
										this.state.moviesList.map((movie, index) => {
											return <MovieList
												key={movie.title + index}
												id={movie.id}
												title={movie.title}
												rating={movie.rating}
												awards={movie.awards}
												length={movie.length}
											/>
										})
									}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }

	async apiCall(url, handler) {
        try {
            let response = await fetch(url);
            let result = await response.json();
            handler(result);
        } catch (error) {
            console.log(error);
        }
    }

    loadMovies = (result) => {
        this.setState({
            moviesList: result.data,
        });
    };

	async componentDidMount() {
		await this.apiCall('http://localhost:3001/api/movies', this.loadMovies);
	}
}
export default Movie;
