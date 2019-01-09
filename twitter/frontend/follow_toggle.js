const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el, options){
    this.$el = $(el) ; 
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = this.$el.data('initial-follow-state') || options.followState;    
    this.render();
    this.$el.on('click', e => {
      e.preventDefault();
      this.handleClick();
    });
  }

  render() {
    if (this.followState === 'followed') {
      this.$el.html('Unfollow!');
      this.$el.prop('disabled', false);
    } else if (this.followState === 'unfollowed') {
      this.$el.html('Follow!'); 
      this.$el.prop('disabled', false);
    } else if ( this.followState.includes('ing')){
          this.$el.prop('disabled', true);
      }
    }
  

  handleClick() {
    if (this.followState === 'unfollowed') {
      this.followState = 'following';
      this.render();
      APIUtil.followUser(this.userId).then(_ => {
        this.followState = "followed";
        this.render();
      });
      
    } else {
      this.followState = 'unfollowing';
      this.render();
      APIUtil.unfollowUser(this.userId).then(_ => {
        this.followState = "unfollowed";
        this.render();
      });
    }
  }
}

module.exports =  FollowToggle;