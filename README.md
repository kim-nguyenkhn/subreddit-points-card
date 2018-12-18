# Subreddit Points Card

Simple ReactJS build of the Subreddit Points component. 

Check out the live demo on [Heroku](https://subreddit-points-card.herokuapp.com/).

<img src="subreddit-points.png" width=500>

## Future Tasks
- Change the API call to leverage some form of the [Render Props](https://reactjs.org/docs/render-props.html) pattern. This way, we can do the following:
  - Load the card lazily (on-demand) as the user scrolls it into view.
  - Depending on the desired UX, show some indication that the card is loading/retrieving data (e.g., a loading spinner).
  - Show feedback if there is an error with retrieving or displaying the data.
- Create a single `Section.js` component that abstracts the differences between the `SubredditValueSection.js` and `DonutsSection.js` components.
- [x] Clean up the components' [inline Emotion styling](https://emotion.sh/docs/css-prop). It was convenient for rapid-prototyping, but it ruins the "at-a-glance" of the HTML/JSX structure when there's too much.
- Abstract copy/content away from components, and centralize them. Possibly add localization.
