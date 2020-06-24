export interface Message {

  content?: any;

  type: MessageTypeEnum;

  time: {
    /** время создания */
    created: any;
    /** время доставки */
    delivery?: any;
    /** время прочтения */
    read?: any;
  };


  direction: MessageDirectionEnum;


  sender: {
    uid: string;
    icon: string;
    name: string;
    phone: string;
  };
}


export enum MessageDirectionEnum {

  toMe,

  fromMe,

  center,
}


export enum MessageTypeEnum {

  text = 'text',

  liveAudio = 'live-audio',

  audio = 'audio',


  liveImage = 'live-image',

  image = 'image',

  liveVideo = 'live-video',

  video = 'video',

  file = 'file',
}
