import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { FirebaseAuth } from '../db';
import { IUserGoogleModel } from '@/models';

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async (): Promise<IUserGoogleModel> => {
  const result = await signInWithPopup(FirebaseAuth, googleProvider);
  // const credential = GoogleAuthProvider.credentialFromResult(result);
  return result.user.toJSON() as IUserGoogleModel;
};

export default signInWithGoogle;
