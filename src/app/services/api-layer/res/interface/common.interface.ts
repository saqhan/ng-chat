export interface ChatCategoryInterface {
  name: string,
  id: string
}

export interface ChatDialogInterface {
  id: string | number,
  img: string,
  name: string,
  mess: string,
  time: {
    created: Date,
  },
  category: string,
  online: boolean
}



export interface ChatContactInterface {
  id: string | number,
  img: string,
  name: string,
  mess: string,
  time: {
    created: Date,
  },
  category: string,
  online: boolean
}

