import type { IUserGoogleModel, IUserModel } from '@/models';

const userGoogleAdapter = (user: IUserGoogleModel): IUserModel => ({
  username: user.displayName,
  email: user.email,
  avatar: user.photoURL,
  uid: user.uid,
});

export default userGoogleAdapter;
