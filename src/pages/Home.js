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
  padding: 20px;
  border-radius: 5px;
  border: 1px solid black;
  background: hsla(149, 17%, 84%, 0.5);
  box-shadow: 12px 1px 20px 1px black;
  font-weight: bold;
  width: 400px;
  align-items: center;
  justify-content: center;
`;

const Header = styled.header`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
`;

const Home = () => {
  const [lists, setLists] = useState(null);

  useEffect(async () => {
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
                  X
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
