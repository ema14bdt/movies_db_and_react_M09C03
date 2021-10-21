import React, {Component} from 'react';
import imagenFondo from '../assets/images/91218.jpg';

class LastMovieInDB extends Component {
    constructor() {
        super()
        this.state = {
            lastMovie: []
        }
    }
    render() {
        return (
            <>
                {/*<!-- Last Movie in DB -->*/}
                <div className='col-lg-6 mb-4'>
                    <div className='card shadow mb-4'>
                        <div className='card-header py-3'>
                            <h5 className='m-0 font-weight-bold text-gray-800'>Last movie in Data Base</h5>
                        </div>
                        <div className='card-body'>
                            <div className='text-center'>
                                <img
                                    className='img-fluid px-3 px-sm-4 mt-3 mb-4'
                                    style={{width: 40 + 'rem'}}
                                    src={imagenFondo}
                                    alt=' Star Wars - Mandalorian '
                                />
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis
                                iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam
                                voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?
                            </p>
                            <a className='btn btn-danger' target='_blank' rel='nofollow' href='/'>
                                {this.state.lastMovie.title}
                            </a>
                        </div>
                    </div>
                </div>
                {/*<!-- End content row last movie in Data Base -->*/}
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

    lastMovie = (result) => {
        this.setState({
            lastMovie: result.data,
        });
    };

    async componentDidMount() {
        await this.apiCall('http://localhost:3001/api/movies/last', this.lastMovie);
    }
};

export default LastMovieInDB;
