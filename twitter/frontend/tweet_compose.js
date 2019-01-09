class TweetCompose {

  constructor (el) {
    this.$el = $(el);
    this.$el.on('submit', e => {
      e.preventDefault();
      this.submit();
    });  
    }

  submit() {
    let content = this.$el.children('textarea');
    let mention = this.$el.children('select');
    
  }

}