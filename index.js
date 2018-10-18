class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }

  toString() {
    return `Message created at: ${this.created} - Text: ${this.text}`;
  }
}

class ImageMassage extends Message {
  constructor(text = '', created = Date.now(),
    url = '', thumbnail = '') {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  get created() {
    return this._created;
  }

  set created(created) {
    if (typeof created === 'undefined' || isNaN(created)) {
      throw new Error('Invalid created');
    }
    if (Message.prototype.hasOwnProperty.call(this, '_created')) {
      throw new Error('Created already defined');
    }
    this._created = created;
  }

  toString() {
    return `Photo${super.toString()} `
           + `- Url: ${this.url} `
           + `Thumbnail: ${this.thumbnail}`;
  }
}

const emptyMessage = new Message();
const textMessage = new Message('yesterday massage', Date.now() - 86400);
const imageMessage = new ImageMassage();


console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(imageMessage));
