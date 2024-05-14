window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'iEHxViwyMm6mRnBE6JXeXaS2fVvaISZx',
    redirectUri: 'https://skunk-romantic-properly.ngrok-free.app',
    logoutRedirectUri: 'https://skunk-romantic-properly.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

