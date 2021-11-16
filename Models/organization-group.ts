export class OrganizationGroup {
    id!:string;
	organization!:string
    name !:string;
    description!:string;
    signers!:string[] 
    issuer!:string
	recipients!:string[]
    verifiers!:string[]
}
