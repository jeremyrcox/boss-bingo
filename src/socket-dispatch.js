/* eslint-disable no-param-reassign */
import { SOCKET_OPEN, SOCKET_CLOSE, SOCKET_MESSAGE, SOCKET_ERROR } from './actions';


export default function dispatchSocketEvents(websocket, store) {
  websocket.onopen = () => {
    store.dispatch({
      type: SOCKET_OPEN
    });
  };

  websocket.onclose = () => {
    store.dispatch({
      type: SOCKET_CLOSE
    });
  };

  websocket.onmessage = event => {
    let message = event.data;

    // if message is parseable as JSON then do so, otherwise dispatch as string.
    try {
      message = JSON.parse(message);
    } catch (e) {
      void(0);
    }

    store.dispatch({
      type: SOCKET_MESSAGE,
      message: JSON.parse(event.data)
    });
  };

  websocket.onerror = event => {
    store.dispatch({
      type: SOCKET_ERROR,
      message: event.data
    });
  };
}
