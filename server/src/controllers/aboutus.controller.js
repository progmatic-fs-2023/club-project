import { listFamous, listCharity } from '../services/aboutus.service';
import 'dotenv/config';

// GET ALL FAME AND CHARITY
const listAll = async (req, res) => {
  try {
    const famous = await listFamous();
    const charity = await listCharity();
    res.json({ famous, charity });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { listAll };
