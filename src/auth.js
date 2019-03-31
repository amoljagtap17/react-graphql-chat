import { AuthenticationError } from 'apollo-server-express'

export const attemptSignIn = (email, password) => {

}

const signedIn = req => req.session.userId

export const checkSignedIn = req => {
  if (!signedIn(req)) {
    throw new AuthenticationError('You must be signed in!')
  }
}

export const checkSignedOut = req => {
  if (signedIn(req)) {
    throw new AuthenticationError('You are already signed in!')
  }
}