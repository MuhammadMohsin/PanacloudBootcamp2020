import { Server } from 'miragejs';

export function makeServer({ environment = 'test' } = {}) {
  let server = new Server({
    environment,
    routes() {
      this.get('/api/randomnumber', () => {
        return Math.ceil(Math.random() * 10);
      });
    },
  });

  return server;
}
