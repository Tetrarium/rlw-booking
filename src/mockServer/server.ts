import { createServer } from "miragejs";

export function makeServer() {
  const server = createServer({
    routes() {
      this.get('/api/routes', () => {
        return { status: 'success' };
      });
      this.get('/api/routes/cities', (_, request) => {
        console.log(request);

        return [{ _id: 1, name: 'Москва' }];
      });
    }
  });

  return server;
}