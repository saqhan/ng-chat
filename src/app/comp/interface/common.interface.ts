export interface Message {
  /**
   * содержимое сообщения
   * */
  content: any;

  /**
   * тип сообщения
   * */
  type: MessageTypeEnum;

  /** время создание */
  time: {
    /** время создания */
    created: any;
    /** время доставки */
    delivery?: any;
    /** время прочтения */
    read?: any;
  };

  /**
   * направления сообщения
   * */
  direction: MessageDirectionEnum;

  /**
   * отправитель
   * */
  sender: {
    uid: string;
    icon: string;
    name: string;
    phone: string;
  };
}

/**
 *
 * */
export enum MessageDirectionEnum {
  /**
   * сообщения написал кто то другой, и получено мною
   * */
  toMe,
  /**
   * сообщения написал я
   * */
  fromMe,
  /**
   * сообщения которое будет отображаться в центре
   * */
  center
}

/**
 *
 * */
export enum MessageTypeEnum {
  /**
   * сообщения написал кто то другой, и получено мною
   * */
  text = 'text',
  /**
   * аудио сообщения записанное самим пользователем
   * */
  liveAudio = 'live-audio',
  /**
   * аудио сообщение любое которое не записано самим пользователем
   * */
  audio = 'audio',
  /**
   * фотка сделанная на устройстве пользователя и отправленная сразу
   * */
  liveImage = 'live-image',
  /**
   * фотка из устройства отправителя
   * */
  image = 'image',
  /**
   * видео сделанная на устройстве пользователя и отправленная сразу
   * */
  liveVideo = 'live-video',
  /**
   * видео из устройства отправителя
   * */
  video = 'video',
  /**
   * файл из устройства отправителя
   * */
  file = 'file'
}


