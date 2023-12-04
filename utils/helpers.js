module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  remember: function (req, user) {
    user.remember();
    req.cookies.set('user_id', user.id, {
      expires: new Date(Date.now() + 20 * 365 * 24 * 3600000),
    });
    req.cookies.set('remember_token', user.remember_token, {
      expires: new Date(Date.now() + 20 * 365 * 24 * 3600000),
    });
  },
};
