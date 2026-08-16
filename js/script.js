// About page content
const user = {
  name: 'Letherius Miller',
  imageUrl: 'images/about.jpg',
  bio: 'My name is Letherius Miller. I work in IT support and I am currently earning my bachelor’s degree in software development. I enjoy learning more about web development, building practical projects, and spending time with my family.'
};

// Create the React elements
const heading = React.createElement(
  'h1',
  null,
  'About ' + user.name
);

const image = React.createElement('img', {
  src: user.imageUrl,
  alt: 'Photo of ' + user.name,
  className: 'about-image'
});

const paragraph = React.createElement(
  'p',
  null,
  user.bio
);

// Render the React elements on the About page
ReactDOM.render(
  heading,
  document.getElementById('h1')
);

ReactDOM.render(
  image,
  document.getElementById('img')
);

ReactDOM.render(
  paragraph,
  document.getElementById('content')
);
