const FollowToggle = require('./follow_toggle.js');
const APIUtil = require('./api_util.js');
const UsersSearch = require('./users_search.js');

$( () => {
    $('button.follow-toggle').each( (i, btn) => new FollowToggle(btn, {}));
    $('nav.users-search').each((i, el) => new UsersSearch(el));
  });

