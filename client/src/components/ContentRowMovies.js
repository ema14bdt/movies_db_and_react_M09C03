import React, {Component} from 'react';
import Metric from './Metric';

class ContentRowMovies extends Component {
    constructor() {
        super();
        this.state = {
            movies: {
                color: 'primary',
                title: 'Movies in Data Base',
                value: '',
                icon: 'fas fa-film',
            },

            awards: {
                color: 'success',
                title: 'Total awards',
                value: '',
                icon: 'fas fa-award',
            },

            actors: {
                color: 'warning',
                title: 'Actors quantity',
                value: '',
                icon: 'fas fa-user',
            },
        };
    }

    render() {
        return (
            <div className='row'>
                <Metric
                    color={this.state.movies.color}
                    title={this.state.movies.title}
                    value={this.state.movies.value}
                    icon={this.state.movies.icon}
                />
                <Metric
                    color={this.state.awards.color}
                    title={this.state.awards.title}
                    value={this.state.awards.value}
                    icon={this.state.awards.icon}
                />
                <Metric
                    color={this.state.actors.color}
                    title={this.state.actors.title}
                    value={this.state.actors.value}
                    icon={this.state.actors.icon}
                />
                ;
            </div>
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

    totalMovies = (result) => {
        this.setState({
            movies: {
                ...this.state.movies, // Me traigo los datos que ya tengo
                value: result.data,
            },
        });
    };

    awardsMovies = (result) => {
        this.setState({
            awards: {
                ...this.state.awards,
                value: result.data,
            },
        });
    };

    totalActors = (result) => {
        this.setState({
            actors: {
                ...this.state.actors,
                value: result.data,
            },
        });
    };

    async componentDidMount() {
        await this.apiCall('http://localhost:3001/api/movies/total', this.totalMovies);
        await this.apiCall('http://localhost:3001/api/movies/awards', this.awardsMovies);
        await this.apiCall('http://localhost:3001/api/actors/total', this.totalActors);
    }
}

export default ContentRowMovies;
