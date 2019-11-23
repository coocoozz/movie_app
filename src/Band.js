/*
import React from 'react';
import PropTypes from 'prop-types';

const bandILike = [
  {
    id: 1,
    name: "RedHotChiliPeppers",
    image: "https://townsquare.media/site/443/files/2012/10/chilipeppers2.jpg?w=980&q=75",
    rating: 5.0
  },
  {
    id: 2,
    name: "Muse",
    image: "https://www.rollingstone.com/wp-content/uploads/2018/11/muse-press-photo-2018-wbr-jeff-forney.jpg?resize=900,600&w=450",
    rating: 4.7
  },
  {
    id: 3,
    name: "X-japan",
    image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/guest/image/KMaVphDsYa-5cO7MBqPJZwmwCro.JPG",
    rating: 4.8
  },
  {
    id: 4,
    name: "Pia",
    image: "https://img4.yna.co.kr/etc/inner/KR/2019/02/25/AKR20190225109100005_03_i_P2.jpg",
    rating: 3.5
  }
];

function Band(props) {
  return (
    <div>
      <h2>I Like {props.name}</h2>
      <h4>Rating {props.rating}</h4>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

Band.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      <h1>Best Band List I Like</h1>
      {bandILike.map(band => (
        <Band key={band.id} name={band.name} image={band.image} rating={band.rating} />
      ))}
    </div>
  );
}

export default App;
*/