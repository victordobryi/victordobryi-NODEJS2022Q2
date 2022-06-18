import * as request from 'supertest';
import { server } from '../index';

describe('1st scenario', () => {
  const id = '3d2dc3c2-8c78-4fea-85f0-24f064327a91';
  it('Get array todos -> GET /api/users', async () => {
    const result = await request(server).get('/api/users');
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          username: expect.any(String),
          age: expect.any(Number),
          id: expect.any(String),
          hobbies: expect.any(Array),
        }),
      ])
    );
  });

  it('Add new user -> POST /api/users', async () => {
    const result = await request(server)
      .post('/api/users')
      .send({
        username: 'User',
        hobbies: ['JS'],
        age: 25,
      });
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(201);
    expect(result.body).toEqual(
      expect.objectContaining({
        username: 'User',
        age: 25,
        id: expect.any(String),
        hobbies: ['JS'],
      })
    );
  });

  it('Get current user by id -> GET /api/users/id', async () => {
    const result = await request(server).get(`/api/users/${id}`);
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      expect.objectContaining({
        username: expect.any(String),
        age: expect.any(Number),
        id: expect.any(String),
        hobbies: expect.any(Array),
      })
    );
  });

  it('Update user -> PUT /api/users/id', async () => {
    const result = await request(server)
      .put(`/api/users/${id}`)
      .send({
        username: 'newUser',
        hobbies: ['TS'],
        age: 35,
      });
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      expect.objectContaining({
        username: 'newUser',
        age: 35,
        id: id,
        hobbies: ['TS'],
      })
    );
  });

  it('Delete current user by id -> DELETE /api/users/id', async () => {
    const result = await request(server).delete(`/api/users/${id}`);
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(204);
    expect(result.body).toEqual(expect.objectContaining({}));
  });

  it('Get deleted user by id -> GET /api/users/id', async () => {
    const result = await request(server).get(`/api/users/${id}`);
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(404);
    expect(result.body).toEqual(expect.objectContaining({}));
  });
});

describe('2nd scenario', () => {
  const id = '3d2dc3c2-8c78-4fea-85f0-24f064327a91';
  it('Invalid url -> GET /api/persons', async () => {
    const result = await request(server).get('/api/persons');
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(404);
    expect(result.body).toEqual({ message: 'Route not found' });
  });

  it('Invalid id -> GET /api/users/id', async () => {
    const result = await request(server).get('/api/users/1');
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(400);
    expect(result.body).toEqual({ message: 'Not valid id' });
  });

  it('Delete user by invalid id -> DELETE /api/users/id', async () => {
    const result = await request(server).delete(`/api/users/1`);
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(400);
    expect(result.body).toEqual({ message: 'Not valid id' });
  });

  it('Delete user by non-existent uuid -> DELETE /api/users/id', async () => {
    const result = await request(server).delete(
      `/api/users/3d2dc3c2-8c78-4fea-85f0-24f064327a92`
    );
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(404);
    expect(result.body).toEqual({ message: 'User not found' });
  });

  it('Update user by non-existent parameter -> PUT /api/users/id', async () => {
    const result = await request(server).put(`/api/users/${id}`).send({
      title: 'Non-exident',
    });
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(404);
    expect(result.body).toEqual(expect.objectContaining({}));
  });
});

describe('3rd scenario', () => {
  const id = '3d2dc3c2-8c78-4fea-85f0-24f064327a91';
  it('Get array todos -> GET /api/users', async () => {
    const result = await request(server).get('/api/users');
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          username: expect.any(String),
          age: expect.any(Number),
          id: expect.any(String),
          hobbies: expect.any(Array),
        }),
      ])
    );
  });

  it('Add new user with id parameter -> POST /api/users', async () => {
    const result = await request(server)
      .post('/api/users')
      .send({
        username: 'User',
        hobbies: ['JS'],
        age: 25,
        id: 123,
      });
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(400);
    expect(result.body).toEqual(expect.objectContaining({}));
  });

  it('Update users id -> PUT /api/users/id', async () => {
    const result = await request(server)
      .put(`/api/users/${id}`)
      .send({
        username: 'newUser',
        hobbies: ['TS'],
        age: 35,
        id: 15,
      });
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(404);
    expect(result.body).toEqual(expect.objectContaining({}));
  });

  it('Add new user with invalid parameters types -> POST /api/users', async () => {
    const result = await request(server).post(`/api/users`).send({
      username: 13,
      hobbies: 'Javascript',
      age: '35',
    });
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(400);
    expect(result.body).toEqual(expect.objectContaining({}));
  });

  it('Update user with invalid parameters types -> PUT /api/users/id', async () => {
    const result = await request(server).put(`/api/users`).send({
      username: 13,
    });
    expect(result.header['content-type']).toEqual('application/json');
    expect(result.statusCode).toEqual(404);
    expect(result.body).toEqual(expect.objectContaining({}));
  });
});
