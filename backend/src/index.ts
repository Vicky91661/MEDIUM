import { Hono } from 'hono'


// Create the main Hono app
const app = new Hono();

// POST /api/v1/user/signup
app.post('/api/v1/signup', (c) => {
	return c.text('signup route')
})


// POST /api/v1/user/signin
app.post('/api/v1/signin', (c) => {
	return c.text('signin route')
})


// GET /api/v1/blog/:id
app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})


// POST /api/v1/blog
app.post('/api/v1/blog', (c) => {

	return c.text('signin route')
})


// PUT /api/v1/blog
app.put('/api/v1/blog', (c) => {
	return c.text('signin route')
})

// GET /api/v1/blog/bulk
app.get('/api/v1/blog/bulk',(c)=>{
  return c.text('bulk route')
})



export default app;

