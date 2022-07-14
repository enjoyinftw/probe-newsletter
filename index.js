const app = require('./server.js');
const { sequelize } = require('./Users/user.model');

require('dotenv').config({ path: './config/.env' });

async function main() {
  const PORT = process.env.PORT || 5000;

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  try {
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    });
  } catch (err) {
    console.error(e);
    process.exit(1);
  }
}

main().catch(console.error);
