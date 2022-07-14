const app = require('./server.js');
require('dotenv').config({ path: './config/.env' });

async function main() {
  const PORT = process.env.PORT || 5000;

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
