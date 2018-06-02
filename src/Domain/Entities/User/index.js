class User {
  constructor (data) {
    const { displayName: name, uid: id, email, isAnonymous } = data

    Object.assign(this, {
      id,
      name,
      email,
      isAnonymous
    });
  }
}

export default User;
