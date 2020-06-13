import firebase, { getFacebookProvider } from './firebase'

export async function signInWithEmail({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export async function signUpWithEmail({ email, password }) {
  console.log(email, password)
  const user = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
  console.log(user.user.uid)
}

export async function signInWithFacebook() {
  try {
    var provider = getFacebookProvider()
    const result = await firebase.auth().signInWithPopup(provider)
    console.log(result, result.user)
  } catch (error) {
    throw error
  }
}

export async function signOut() {
  return firebase.auth().signOut()
}
