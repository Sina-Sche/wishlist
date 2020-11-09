import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { postList } from '../api/lists';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  background: hsla(149, 17%, 84%, 0.1);
  box-shadow: 12px 1px 20px 1px #4c0013;
  font-weight: bold;
  width: 400px;
`;

const LinkContainer = styled.div`
  justify-self: flex-start;
  align-self: flex-start;
`;

const ErrorMessage = styled.p`
  color: red;
`;

export default function Add() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [state, setState] = useState({
    title: '',
    wishes: '',
  });

  function handleChange(event) {
    const { value } = event.target;
    setState({
      ...state,
      [event.target.name]: value.split(','),
    });
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErrorMessage(null);
      const newList = await postList({
        title: state.title,
        wishes: state.wishes,
      });
      history.push(`/${newList.id}`);
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <Container>
      <LinkContainer>
        <Link to="/">◀ Go Back</Link>
      </LinkContainer>
      <h1>Add a new Wishlist</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Wishlist for:
          <input
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
            placeholder="Wishlist for?"
            required
          />
        </label>

        <label>
          Wishes:
          <input
            type="text"
            name="wishes"
            value={state.wishes}
            onChange={handleChange}
            placeholder="What do they want?"
            required
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {loading && <span>Loading...</span>}
      {errorMessage && <ErrorMessage>Error: {errorMessage}</ErrorMessage>}
    </Container>
  );
}
