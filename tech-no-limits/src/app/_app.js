// _app.js

import { IronSessionProvider } from 'next-iron-session';

function MyApp({ Component, pageProps }) {
  return (
    <IronSessionProvider
      session={pageProps.session}
      options={{
        password: process.env.SESSION_PASSWORD,
        cookieName: 'session',
        cookieOptions: {
          secure: process.env.NODE_ENV === 'production',
          maxAge: 86400,
          httpOnly: true,
          sameSite: 'lax',
        },
      }}
    >
      <Component {...pageProps} />
    </IronSessionProvider>
  );
}

export default MyApp;
