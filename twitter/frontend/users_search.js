const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {
  constructor(el){
    this.$el = $(el);
    this.$input = $(this.$el.children('input'));
    this.$ul = $(this.$el.children('ul'));
    this.$input.on('input', e => {
      this.handleInput();
    });
  }

  renderResults(users) {
    this.$ul.empty();
    let $li;
    let $btn;
    users.forEach((user) => {
      $li = $(`<li><a href='/users/${user.id}'>${user.username}</a></li>`);
      $btn = $(`<button class='follow-toggle' data-initial-follow-state="" data-user-id=""></button>`);
      new FollowToggle($btn, { userId: user.id, followState: user.followed ? 'followed' : 'unfollowed'});
      $li.append($btn);
      this.$ul.append($li);
    }
    );
  }

  handleInput() {
    APIUtil.searchUsers(this.$input.val(), (users) => {
        this.renderResults(users);
    });
  }
}

module.exports = UsersSearch;