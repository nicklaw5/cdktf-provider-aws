// https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AmplifyDomainAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#app_id AmplifyDomainAssociation#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#domain_name AmplifyDomainAssociation#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#wait_for_verification AmplifyDomainAssociation#wait_for_verification}
  */
  readonly waitForVerification?: boolean;
  /**
  * sub_domain block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#sub_domain AmplifyDomainAssociation#sub_domain}
  */
  readonly subDomain: AmplifyDomainAssociationSubDomain[];
}
export interface AmplifyDomainAssociationSubDomain {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#branch_name AmplifyDomainAssociation#branch_name}
  */
  readonly branchName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html#prefix AmplifyDomainAssociation#prefix}
  */
  readonly prefix: string;
}

function amplifyDomainAssociationSubDomainToTerraform(struct?: AmplifyDomainAssociationSubDomain): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association}
*/
export class AmplifyDomainAssociation extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_domain_association.html aws_amplify_domain_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AmplifyDomainAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: AmplifyDomainAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_amplify_domain_association',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appId = config.appId;
    this._domainName = config.domainName;
    this._waitForVerification = config.waitForVerification;
    this._subDomain = config.subDomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId: string;
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // certificate_verification_dns_record - computed: true, optional: false, required: false
  public get certificateVerificationDnsRecord() {
    return this.getStringAttribute('certificate_verification_dns_record');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName: string;
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // wait_for_verification - computed: false, optional: true, required: false
  private _waitForVerification?: boolean;
  public get waitForVerification() {
    return this.getBooleanAttribute('wait_for_verification');
  }
  public set waitForVerification(value: boolean ) {
    this._waitForVerification = value;
  }
  public resetWaitForVerification() {
    this._waitForVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForVerificationInput() {
    return this._waitForVerification
  }

  // sub_domain - computed: false, optional: false, required: true
  private _subDomain: AmplifyDomainAssociationSubDomain[];
  public get subDomain() {
    return this.interpolationForAttribute('sub_domain') as any;
  }
  public set subDomain(value: AmplifyDomainAssociationSubDomain[]) {
    this._subDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subDomainInput() {
    return this._subDomain
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      wait_for_verification: cdktf.booleanToTerraform(this._waitForVerification),
      sub_domain: cdktf.listMapper(amplifyDomainAssociationSubDomainToTerraform)(this._subDomain),
    };
  }
}
