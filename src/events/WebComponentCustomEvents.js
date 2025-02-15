const webComponentCustomEvent = (type, detail) =>
  new CustomEvent(type, {
    bubbles: true,
    cancelable: false,
    composed: true,
    detail: detail,
  });

export const codeChangedEvent = webComponentCustomEvent("editor-codeChanged");

export const runCompletedEvent = (detail) =>
  webComponentCustomEvent("editor-runCompleted", detail);

export const runStartedEvent = webComponentCustomEvent("editor-runStarted");

export const stepChangedEvent = (detail) =>
  webComponentCustomEvent("editor-stepChanged", detail);

export const logInEvent = webComponentCustomEvent("editor-logIn");

export const signUpEvent = webComponentCustomEvent("editor-signUp");

export const quizReadyEvent = webComponentCustomEvent("editor-quizReady");
