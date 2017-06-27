// @flow
import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    background: 'white',
    padding: 30,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: '2px 5px',
    border: '1px solid #eae9e9',
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },
};

const Welcome = () => (
  <div style={styles.main}>
    <h1>Welcome to the SendGrid Storybook</h1>
    <p>
      This is a UI component dev environment for your app.
    </p>
    <p>
      We've added some style-guide stories inside the
      <code style={styles.code}>src/stories</code>
      directory.
    </p>
    <p>
      A story is a single state of one or more UI components.
      You can have as many stories as you want.
    </p>
  </div>
);

export default Welcome;