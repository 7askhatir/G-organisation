import { OrganizationReason } from "../enums/organization-reason";

export class Disable {
    reason!:OrganizationReason;
    status!: boolean;
    isPermanent!: boolean;
    date!: Date;
    description!: String;
}
