export const SESSION_ACTIVATE = 'SESSION_ACTIVATE';
export const SESSION_DEACTIVATE = 'SESSION_DEACTIVATE';

export const activateSession = () => ({
  type: SESSION_ACTIVATE,
});

export const deactivateSession = () => ({
  type: SESSION_DEACTIVATE,
});
