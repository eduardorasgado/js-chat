import React from 'react';
import { useForm } from 'react-hook-form';
import { withBaseLayout } from '../layouts/Base';
import { useDispatch, useSelector } from 'react-redux';
import { createChat } from '../actions/chats';
import { useHistory } from 'react-router-dom';

function ChatCreate() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const userId = useSelector(({auth}) => auth.user.uid);
  const chatCreateError = null; //useSelector(({chat}) => chat.create.error);

  const onSubmit = data => {
    dispatch(createChat(data, userId))
      // this should not be done in a real application, it could produce unpredictable behavior
      .then(_ => history.push('/home'));
  }
  return (
    <div className="centered-view">
      <div className="centered-container">
        <form onSubmit={handleSubmit((data) => onSubmit(data))} className="centered-container-form">
          <div className="header">Create new chat!</div>
          <div className="subheader">Chat with people you know!</div>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                ref={register}
                type="text"
                className="form-control"
                id="name"
                name="name" />
            </div>

            <div className="form-group">
              <label htmlFor="image">Description</label>
              <textarea
                ref={register}
                name="description"
                className="form-control"
                id="description"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                ref={register}
                type="text"
                name="image"
                className="form-control"
                id="image" />
            </div>

            {chatCreateError && <div className="alert alert-danger small">{chatCreateError}</div>}
            <button
              type="submit" className="btn btn-outline-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withBaseLayout(ChatCreate);