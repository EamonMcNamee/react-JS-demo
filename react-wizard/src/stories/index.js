import React from 'react';
import ReactDom from 'react-dom';

import Web3 from 'web3';
import { storiesOf, action } from '@kadira/storybook';
import AccountListItem from '../components/account-list-item';

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

// ACOUNT LIST ACTION IMPLEMENTATION

const AccountList = ({ accounts }) => {
  return (
    <ol>
      {accounts.map(account => <AccountListItem account={account} />)}
    </ol>
  );
}; // eslint-disable-line

AccountList.propTypes = {
  accounts: React.PropTypes.array,
};

// const List
//
// const displayAccounts() => {
//
// }

storiesOf('AccountListItem', module)
.add('Should display a signle account id', () => {
  return (
    <AccountListItem account="0x423472394yuwejofhf" />
  );
});

storiesOf('AccountList', module)
.add('Should display a single account id', () => {
  const accounts = ['0x423472394yuwejofhf', '0x423472394yuwejofhf'];
  return (
    <AccountList accounts={accounts} />
  );
})
.add('Should display a signle account', () => {
  const accounts = web3.eth.accounts;

  return (
    <AccountList id="hey" accounts={accounts} />
  );
}).add('foidusoifus', () => {
  ReactDom.render(<div> yaa</div>, document.getElementById('root'));


});
