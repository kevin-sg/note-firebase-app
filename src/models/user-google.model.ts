
export interface IUserGoogleModel {
  uid:             string;
  email:           string;
  emailVerified:   boolean;
  displayName:     string;
  isAnonymous:     boolean;
  photoURL:        string;
  providerData:    IProviderDatum[];
  stsTokenManager: IStsTokenManager;
  createdAt:       string;
  lastLoginAt:     string;
  apiKey:          string;
  appName:         string;
}

export interface IProviderDatum {
  providerId:  string;
  uid:         string;
  displayName: string;
  email:       string;
  phoneNumber: null;
  photoURL:    string;
}

export interface IStsTokenManager {
  refreshToken:   string;
  accessToken:    string;
  expirationTime: number;
}
