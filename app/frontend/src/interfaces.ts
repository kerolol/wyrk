export interface Breadcrumb {
    path: string
    label: string
}

export interface TableData {
    headers: TableHeader[]
    rows: TableRow[]
}

export interface TableHeader {
    id: number
    title: string
    span: number
}

export interface TableContent {
    id: number
    header: TableHeader['id']
    body: string
}

export interface TableRow {
    id: number
    contents: TableContent[]
    path?: string
}