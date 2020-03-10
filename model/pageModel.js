const db = require("../config/db");
module.exports = {
  getPage: async function(key) {
    // key = trim(key.toLowerCase());
    console.log(key);
    let conn = await db.getConnection();
    const row = await conn.query(
      "SELECT pageKey,title,content FROM pages WHERE pagekey = ?",
      [key]
    );
    conn.end();
    return row;
  }
};
