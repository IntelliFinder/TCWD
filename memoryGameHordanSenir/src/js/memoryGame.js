"use strict";

function Blog(props) {

  var content = props.posts.map(function (post) { //randomize find random map function in js
    return React.createElement(
      "div",
      { key: post.id, className: "container-fluid" },
      React.createElement("img", { className: "img-responsive center-block img-thumbnail",
        src: post.content,
        alt: post.title,
        height: "150",
        width: "150" })
    );
  });
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { className: 'page-header' },
      'Memory Game'
    ),
    React.createElement(
      "section",
      null,
      content
    ),
    React.createElement("hr", null),
    React.createElement(
      "section",
      null,
      content
    ), //attach button to randomize
  React.createElement(
      "footer",
      null ,
      '©all Rights Reserved to Hordan Senir 2017'
    )
  );
}

var posts = [{ id: 1, title: 'Hello World', content: './src/image/pic.jpg' }, { id: 2, title: 'Installation', content: './src/image/pic2.jpg' }, { id: 3, title: 'Hello World', content: './src/image/pic3.jpg' }, { id: 4, title: 'Installation', content: './src/image/pic4.jpg' }, { id: 5, title: 'Hello World', content: './src/image/pic5.jpg' }, { id: 6, title: 'Installation', content: './src/image/pic6.jpg' }, { id: 7, title: 'Installation', content: './src/image/pic7.jpg' }, { id: 8, title: 'Installation', content: './src/image/pic8.jpg' }];
ReactDOM.render(React.createElement(Blog, { posts: posts }), document.getElementById('root'));