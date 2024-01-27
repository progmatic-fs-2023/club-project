import * as db from './db.service';

const updateProfilePicture = async (imgPath, userId) => {
  const response = await db.query('UPDATE members SET member_img=$1 WHERE id=$2 RETURNING *', [
    imgPath,
    userId,
  ]);
  // console.log(response.rows[0])
  return response.rows[0];
};

export { updateProfilePicture };
