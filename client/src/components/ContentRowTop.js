import React from 'react';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDB from './LastMovieInDB';

const ContentRowTop = () => {
    return (
        <React.Fragment>
            {/*<!-- Content Row Top -->*/}
            <div className='container-fluid'>
                <div className='d-sm-flex aligns-items-center justify-content-between mb-4'>
                    <h1 className='h3 mb-0 text-gray-800'>App Dashboard</h1>
                </div>

                {/*<!-- Content Row Movies-->*/}
                <ContentRowMovies />
                {/*<!-- End movies in Data Base -->*/}

                {/*<!-- Content Row Last Movie in Data Base -->*/}
                <div className='row'>
					<LastMovieInDB />
                    {/*<!-- Genres in DB -->*/}
                    <GenresInDb />

                    {/*<!--End Genres In Db-->*/}
                </div>
            </div>
            {/*<!--End Content Row Top-->*/}
        </React.Fragment>
    );
};
export default ContentRowTop;
