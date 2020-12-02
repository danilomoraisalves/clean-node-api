export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  body?: any // vai ser opcional
}
