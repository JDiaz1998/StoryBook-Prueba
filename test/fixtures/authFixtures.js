export const initialState = {
  status: "checking", // 'checking', 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenitcatedState = {
  status: "authenticated", // 'checking', 'not-authenticated', 'authenticated'
  uid: "123456789",
  email: "prueba@gmail.com",
  displayName: "Prueba Uni",
  photoURL: "https://foto.jpg",
  errorMessage: null,
};

export const notAuthenitcatedState = {
  status: "authenticated", // 'checking', 'not-authenticated', 'authenticated'
  uid: "123456789",
  email: "prueba@gmail.com",
  displayName: "Prueba Uni",
  photoURL: "https://foto.jpg",
  errorMessage: null,
};

export const demoUser = {
  uid: "ABC123",
  email: "demo@google.com",
  displayName: "Demo User",
  photoURL: "https://foto.jpg",
};
