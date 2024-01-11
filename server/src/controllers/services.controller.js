import { listAllServices, serviceByName } from '../services/services.service';
import 'dotenv/config';

// GET ALL SERVICES
const list = async (req, res) => {
  try {
    const allServices = await listAllServices();
    if (allServices) {
      res.json(allServices);
    } else {
      res.status(404).json({ message: 'Services do not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// GET EVENT BY NAME
const getServiceByName = async (req, res) => {
  const { name } = req.params;
  try {
    const service = await serviceByName(name);
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ message: 'Service does not exist' });
    }
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export { list, getServiceByName };
