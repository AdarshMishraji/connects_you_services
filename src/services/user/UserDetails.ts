// Original file: src/proto/user.proto


export interface UserDetails {
  'userId'?: (string);
  'name'?: (string);
  'email'?: (string);
  'photoUrl'?: (string);
  'description'?: (string);
  'publicKey'?: (string);
  'createdAt'?: (string);
  'updatedAt'?: (string);
  '_description'?: "description";
}

export interface UserDetailsOutput {
  'userId': (string);
  'name': (string);
  'email': (string);
  'photoUrl': (string);
  'description'?: (string);
  'publicKey': (string);
  'createdAt': (string);
  'updatedAt': (string);
  '_description': "description";
}
