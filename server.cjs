const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);


server.use(jsonServer.rewriter({
  '/api/mpesa/stkpush': '/transactions'
}));


server.use(jsonServer.bodyParser);


server.use((req, res, next) => {
  console.log(`Received ${req.method} request on ${req.url}`);
  setTimeout(() => next(), 1000);
});

server.use(router);


server.listen(4000, () => {
  console.log('Mock server running at https://home-hero-server.vercel.app/trasactions');
});
