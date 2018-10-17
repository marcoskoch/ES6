class Message{
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
  toString() {
    return `Photo${super.toString()} ` +
           `- Url: ${this.url} ` +
           `Thumbnail: ${this.thumbnail}`;
  }
}

var emptyMessage = new Message();
var textMessage = new Message('yesterday massage', Date.now() - 86400);
var imageMessage = new ImageMassage();


console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(imageMessage));