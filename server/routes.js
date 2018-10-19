const bp = require('body-parser');
const api = require('./controller');

module.exports = function(app){
    app.use(bp.json())
    app.get('/api/authors', api.getAllAuthors)
    app.get('/api/authors/:author_id', api.getOneAuthor)
    app.post('/api/authors', api.createAuthor)
    app.put('/api/authors/:author_id', api.updateAuthor)
    app.post('/api/quotes', api.createQuote)
    app.patch('/api/quotes/:quote_id', api.updateQuote)
    app.delete('/api/quotes/:quote_id', api.deleteQuote)
    return app
}