import * as db from './db.service';

const updateProfilePicture = async (imgPath, userId) => {
  const response = await db.query('UPDATE members SET member_img=$1 WHERE id=$2 RETURNING *', [
    imgPath,
    userId,
  ]);

  return response.rows[0];
};

export { updateProfilePicture };
