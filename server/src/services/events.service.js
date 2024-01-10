import * as db from './db.service';

// GET LIST ALL EVENTS
const listAllEvents = async () => {
    const response = await db.query('SELECT * FROM events');
    return response.rows;
  };
  
  export {listAllEvents}