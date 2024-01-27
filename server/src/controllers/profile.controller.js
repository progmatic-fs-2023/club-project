import { updateProfilePicture } from '../services/profile.service';
import 'dotenv/config';

const updatePicture = async (req, res) => {
  try {
    const { userId, filePath } = req.body;
    console.log(userId);
    console.log(filePath);

    const imgPath = `/src/assets/${filePath}`;
    console.log(imgPath);

    const updatedProfile = await updateProfilePicture(imgPath, userId);

    if (updatedProfile) {
      res.json({ success: true, message: 'Event updated successfully', data: updatedProfile });
    } else {
      res.status(404).json({ success: false, message: 'Event not found' });
    }
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { updatePicture };
