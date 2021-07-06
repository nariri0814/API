import React from 'react';
import axios from 'axios';
import Album from './components/ApiAlbum';

class Home extends React.Component {
    state = {
        albumdata: []
    }
    getAlbum = async () => {
        const albumData = await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos');
        this.setState({albumData:albumData.data})
        // console.log(albumData)
    }
    componentDidMount() {
        this.getAlbum();
    }
    render() {
        const { albumData } = this.state;
        return (
            <>
                <div className="albums">
                    { albumData && albumData.map(album => (
                        <Album
                            key={album.id}
                            id={album.id}
                            title={album.title}
                            url={album.url}
                            thumbnailUrl={album.thumbnailUrl}
                        />
                    ))}
                </div>
            </>
        );
    }
}

export default Home;