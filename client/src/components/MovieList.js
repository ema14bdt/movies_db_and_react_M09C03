import React from 'react';

export default function MovieList({id, title, rating, awards, length}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{rating}</td>
            <td>{awards}</td>
            <td>{length} min.</td>
        </tr>
    );
}
