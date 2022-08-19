import { signOut } from 'firebase/auth';

import { FirebaseAuth } from '../db';

const authSignOut = (): Promise<void> => signOut(FirebaseAuth);

export default authSignOut;
