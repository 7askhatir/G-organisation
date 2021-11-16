export class Organisation {
    createdByAdmin!: String;
    name!: String;
    location?: String;
    domain?: String;
    website?: String;
    issuers?: String[];
    signers?: String[];
    verifiers?: String[];
    admins?: String[];
}
