class Sub extends Base {
  constructor(...args) {
    super(...args);
    this.log = console.log.bind(console);
  }

  async render(data) {
    /**
     * We don't want to log everything, only 30% of entire sample
     * to reduce stress in the server
     */
    if (data.shouldDebug === true && Math.random() < .3) {
      this.log(`Debugging ${JSON.stringify(data)}`);
    }

    return {
      type: 'sub',
      "props": {
      }
    };
  }
}

