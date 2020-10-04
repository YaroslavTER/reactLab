const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

const selectSubreddit = subreddit => (
  {
    type: SELECT_SUBREDDIT,
    subreddit
  }
)