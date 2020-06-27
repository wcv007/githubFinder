import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../components/context/github/githubContext';
import AlertContext from '../../components/context/alert/alertContext';
const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert(' Please enter something', 'light');
      return;
    }
    githubContext.searchUsers(text);
    setText((text: ''));
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          name='text'
          type='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearSearch}
        >
          Clear
        </button>
      )}
    </div>
  );
};
// Search.propTypes = {
//   setAlert: PropTypes.func.isRequired,
// };
export default Search;
