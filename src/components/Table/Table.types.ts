export interface Header {
  title: string
  key: string
  icon?: boolean
  appendText?: string
  colors?: string[]
}

export interface TableProps {
  headers: Header[]
  data: Record<string, any>[]
}
