const APIUtil = {
  followUser: id => {
    return $.ajax({
      method: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json'
    });
  },
  unfollowUser: id => {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json'
    });
  },
  searchUsers: (queryVal, successCb) => {
    return $.ajax({
      method: 'GET',
      url: '/users/search',
      data: { query: queryVal },
      dataType: 'json',
      success: (res) => {
        successCb(res);
      }
    });
  }
}

module.exports = APIUtil;