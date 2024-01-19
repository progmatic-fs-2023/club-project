import { listAWeekById } from '../services/booking.service';
import HttpError from '../utils/HttpError';

const weekListById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const list = await listAWeekById(id);
    if (list) {
      res.json(list);
    } else {
      next(new HttpError('Week does not exist', 404));
    }
  } catch (err) {
    next(new HttpError(err.message, 500));
  }
};

export { weekListById };
