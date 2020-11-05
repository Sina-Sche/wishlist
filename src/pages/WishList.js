import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { deleteListById, getListById } from '../api/lists';
import Button from '../components/Button';

const List = styled.ul`
  list-style: none;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  background: hsla(149, 17%, 84%, 0.5);
  box-shadow: 12px 1px 20px 1px black;
  font-weight: bold;
  align-items: center;
`;

const WishList = () => {
  const { listId } = useParams();
  const [list, setList] = useState(null);
  const history = useHistory();

  useEffect(async () => {
    const newList = await getListById(listId);
    setList(newList);
  }, []);

  if (!list) {
    return <div>Loading...</div>;
  }
  const handleDelete = async () => {
    await deleteListById(listId);
    history.push('/');
  };

  return (
    <Container>
      <Link to="/">Go Back</Link>
      <h1>{list.title}s Wishlist</h1>
      <List>
        {list.wishes.map((wish) => (
          <li key={wish}>{wish}</li>
        ))}
      </List>
      <Button
        type="submit"
        onClick={() => {
          handleDelete();
        }}
      >
        ✖
      </Button>
    </Container>
  );
};

export default WishList;
