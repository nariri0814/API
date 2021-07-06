import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Album({ id, title, url, thumbnailUrl }) {
    // console.log(id)
    return (
        <div className="album">
            <Link to={{
                pathname: `/album/${id}`,
                state: {
                    id,
                    title,
                    url,
                    thumbnailUrl
                }
            }}>
                <img className="album_img" src={thumbnailUrl} alt={title} />
                <h5 className="album_title">{title}</h5>
            </Link>
        </div>
    );
}

// Album.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
// }

export default Album;