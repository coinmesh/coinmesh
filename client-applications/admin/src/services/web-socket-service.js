export class WebSocketService {
  subscribers = [];

  subscribe(subscription) {
    let newSubcriber = new Subscriber(subscription);
    this.subscribers.push(newSubcriber);
  }
  connect() {
    this.socket = new WebSocket('ws://localhost:3002');
    this.socket.onmessage = (event) => {
      this.subscribers.forEach(subscriber => {
        subscriber.send(event.data);
      });
    }
  }
  disconnect() {
    this.socket.close();
  }
}

export class Subscriber {
  constructor(subscription) {
    this.send = subscription;
  }
}
