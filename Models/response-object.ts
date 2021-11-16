import { Organisation } from "./organisation"

export class ResponseObject {
    success!: String
    message!: String
    data: Organisation[] = []
}
