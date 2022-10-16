// Original file: src/proto/auth.proto


export interface AuthenticatedUser {
  'token'?: (string);
  'publicKey'?: (string);
  'name'?: (string);
  'email'?: (string);
  'photoUrl'?: (string);
  'userId'?: (string);
  '_publicKey'?: "publicKey";
  '_photoUrl'?: "photoUrl";
}

export interface AuthenticatedUserOutput {
  'token': (string);
  'publicKey'?: (string);
  'name': (string);
  'email': (string);
  'photoUrl'?: (string);
  'userId': (string);
  '_publicKey': "publicKey";
  '_photoUrl': "photoUrl";
}
