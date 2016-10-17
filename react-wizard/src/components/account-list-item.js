import React from 'react';

const AccountListItem = ({ account }) => <li>{account}</li>;

AccountListItem.propTypes = {
  account: React.PropTypes.string,
};

module.exports = AccountListItem;
