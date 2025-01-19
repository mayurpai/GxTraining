import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/UseAxios';

const ApiComponent = () => {
  // GET request
  const { data: getData, loading: getLoading, error: getError, execute: getPosts } = useAxios(
    'https://jsonplaceholder.typicode.com/posts',
    { method: 'GET' }
  );

  // POST request
  const { data: postResponse, loading: postLoading, error: postError, execute: createPost } = useAxios(
    'https://jsonplaceholder.typicode.com/posts',
    { method: 'POST', headers: { 'Content-Type': 'application/json' } }
  );

  // PUT request
  const [updateId, setUpdateId] = useState('');
  const { data: putResponse, loading: putLoading, error: putError, execute: updatePost } = useAxios(
    `https://jsonplaceholder.typicode.com/posts/${updateId}`,
    { method: 'PUT', headers: { 'Content-Type': 'application/json' } }
  );

  // DELETE request
  const [deleteId, setDeleteId] = useState('');
  const { data: deleteResponse, loading: deleteLoading, error: deleteError, execute: deletePost } = useAxios(
    `https://jsonplaceholder.typicode.com/posts/${deleteId}`,
    { method: 'DELETE' }
  );

  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [updateData, setUpdateData] = useState({ title: '', body: '' });

  // Fetch posts on component mount
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Dynamic API Hook Example</h1>

      {/* GET Example */}
      <section>
        <h2>GET Posts</h2>
        {getLoading ? (
          <p>Loading posts...</p>
        ) : getError ? (
          <p style={{ color: 'red' }}>Error: {getError}</p>
        ) : (
          getData && <pre>{JSON.stringify(getData.slice(0, 3), null, 4)}</pre>
        )}
      </section>

      {/* POST Example */}
      <section>
        <h2>Create a Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          placeholder="Body"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button onClick={() => createPost(newPost)} disabled={postLoading}>
          {postLoading ? 'Creating...' : 'Create Post'}
        </button>
        {postError && <p style={{ color: 'red' }}>Error: {postError}</p>}
        {postResponse && <pre>{JSON.stringify(postResponse, null, 4)}</pre>}
      </section>

      {/* PUT Example */}
      <section>
        <h2>Update a Post</h2>
        <input
          type="text"
          placeholder="Post ID to Update"
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Updated Title"
          value={updateData.title}
          onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
        />
        <textarea
          placeholder="Updated Body"
          value={updateData.body}
          onChange={(e) => setUpdateData({ ...updateData, body: e.target.value })}
        />
        <button onClick={() => updatePost(updateData)} disabled={putLoading || !updateId}>
          {putLoading ? 'Updating...' : 'Update Post'}
        </button>
        {putError && <p style={{ color: 'red' }}>Error: {putError}</p>}
        {putResponse && <pre>{JSON.stringify(putResponse, null, 4)}</pre>}
      </section>

      {/* DELETE Example */}
      <section>
        <h2>Delete a Post</h2>
        <input
          type="text"
          placeholder="Post ID to Delete"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
        />
        <button onClick={() => deletePost()} disabled={deleteLoading || !deleteId}>
          {deleteLoading ? 'Deleting...' : 'Delete Post'}
        </button>
        {deleteError && <p style={{ color: 'red' }}>Error: {deleteError}</p>}
        {deleteResponse && <p>Post Deleted Successfully!</p>}
      </section>
    </div>
  );
};

export default ApiComponent;
