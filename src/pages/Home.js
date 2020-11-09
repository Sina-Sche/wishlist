import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deleteListById, getLists } from '../api/lists';
import FloatingActionButton from '../components/FloatingActionButton';
import addPath from '../assets/add.svg';
import Button from '../components/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemContainer = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  background: hsla(149, 17%, 84%, 0.1);
  box-shadow: 10px 5px 10px 1px #4c0013;
  font-weight: bold;
  height: 80px;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.header`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
`;

const Home = () => {
  const [lists, setLists] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [loading, setLoading] = useState(false);

  useEffect(async () => {
    // try {
    // setLoading(true);
    // setErrorMessage
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  const handleDelete = async (listId) => {
    await deleteListById(listId);
  };

  return (
    <Container>
      <Header>
        <h1>My Wishlists</h1>
      </Header>
      <main>
        <List>
          {lists?.map((list) => (
            <li key={list.id}>
              <ItemContainer>
                <Link to={`/${list.id}`}>{list.title}</Link>
                <Button
                  type="submit"
                  onClick={() => {
                    handleDelete(list.id);
                  }}
                >
                  ✖
                </Button>
              </ItemContainer>
            </li>
          ))}
        </List>
        <Link to="/add">
          <FloatingActionButton>
            <img src={addPath} alt="Link to add page" />
          </FloatingActionButton>
        </Link>
      </main>
    </Container>
  );
};

export default Home;
