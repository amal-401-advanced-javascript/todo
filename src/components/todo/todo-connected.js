import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import './todo.scss';
import useAjax from '../hooks/useAjax.js';
import Header from './header.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from './pagination';
import ToggleShowProvider from '../context/hideShow';
import ToggleHideShow from './toggleHideShow';
import PaginationContext from '../context/paginationCo';
import ChangeNumberOfPages from './itemperpage';

const ToDo = () => {

  const [_addItem, _toggleComplete, _getTodoItems, _deleteItem, list] = useAjax();
  useEffect(_getTodoItems, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <Container>
      <ToggleShowProvider list={list}>
        <Row className="justify-content-md-center">
          <Col>
          <h2>
            There are {list.filter(item => item.complete == 'pending').length} Items To Complete
        </h2>
        </Col>
        <Col>  <ToggleHideShow /> </Col>
        </Row>
        <Row className="todo">
          <Col className="form">
            <div>
              <TodoForm handleSubmit={_addItem} />
            </div></Col>
            <PaginationContext list={list}>
          <Col >
          <ChangeNumberOfPages />
            {/* <div> */}
              <TodoList
                // list={list}
                handleComplete={_toggleComplete}
                handleDelete={_deleteItem}
              />
              <Row >
                <Pagination
                  // itemsPerPage={itemsPerPage}
                  totalItems={list.length}
                // paginate={paginate}
                // currentPage={currentPage}

                />
            {/* </div> */}
            </Row>
          </Col>
          </PaginationContext>
        </Row>
        </ToggleShowProvider>
      </Container>
    </>
  );
};

export default ToDo;
