import firebase, { getFacebookProvider } from './firebase'
import firestore from './firestore'

export async function signInWithEmail({ email, password }) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export async function signUpWithEmail({ email, password }) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
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

export async function saveUserData(uid, data) {
  console.log('save', uid, data)
  return firestore.collection('customers').doc(uid).set(data)
}

export async function signOut() {
  return firebase.auth().signOut()
}
