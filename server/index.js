const server = require('./api/server.js');
const port = process.env.PORT || 5008;
server.listen(port, () => console.log
(`Running on port ${port}`));