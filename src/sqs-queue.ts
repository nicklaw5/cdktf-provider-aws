// https://www.terraform.io/docs/providers/aws/r/sqs_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqsQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#content_based_deduplication SqsQueue#content_based_deduplication}
  */
  readonly contentBasedDeduplication?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#deduplication_scope SqsQueue#deduplication_scope}
  */
  readonly deduplicationScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#delay_seconds SqsQueue#delay_seconds}
  */
  readonly delaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#fifo_queue SqsQueue#fifo_queue}
  */
  readonly fifoQueue?: boolean;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#fifo_throughput_limit SqsQueue#fifo_throughput_limit}
  */
  readonly fifoThroughputLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#kms_data_key_reuse_period_seconds SqsQueue#kms_data_key_reuse_period_seconds}
  */
  readonly kmsDataKeyReusePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#kms_master_key_id SqsQueue#kms_master_key_id}
  */
  readonly kmsMasterKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#max_message_size SqsQueue#max_message_size}
  */
  readonly maxMessageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#message_retention_seconds SqsQueue#message_retention_seconds}
  */
  readonly messageRetentionSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#name SqsQueue#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#name_prefix SqsQueue#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#policy SqsQueue#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#receive_wait_time_seconds SqsQueue#receive_wait_time_seconds}
  */
  readonly receiveWaitTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#redrive_policy SqsQueue#redrive_policy}
  */
  readonly redrivePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#tags SqsQueue#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#tags_all SqsQueue#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html#visibility_timeout_seconds SqsQueue#visibility_timeout_seconds}
  */
  readonly visibilityTimeoutSeconds?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue}
*/
export class SqsQueue extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue.html aws_sqs_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqsQueueConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqsQueueConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sqs_queue',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contentBasedDeduplication = config.contentBasedDeduplication;
    this._deduplicationScope = config.deduplicationScope;
    this._delaySeconds = config.delaySeconds;
    this._fifoQueue = config.fifoQueue;
    this._fifoThroughputLimit = config.fifoThroughputLimit;
    this._kmsDataKeyReusePeriodSeconds = config.kmsDataKeyReusePeriodSeconds;
    this._kmsMasterKeyId = config.kmsMasterKeyId;
    this._maxMessageSize = config.maxMessageSize;
    this._messageRetentionSeconds = config.messageRetentionSeconds;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
    this._receiveWaitTimeSeconds = config.receiveWaitTimeSeconds;
    this._redrivePolicy = config.redrivePolicy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._visibilityTimeoutSeconds = config.visibilityTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // content_based_deduplication - computed: false, optional: true, required: false
  private _contentBasedDeduplication?: boolean;
  public get contentBasedDeduplication() {
    return this.getBooleanAttribute('content_based_deduplication');
  }
  public set contentBasedDeduplication(value: boolean ) {
    this._contentBasedDeduplication = value;
  }
  public resetContentBasedDeduplication() {
    this._contentBasedDeduplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentBasedDeduplicationInput() {
    return this._contentBasedDeduplication
  }

  // deduplication_scope - computed: true, optional: true, required: false
  private _deduplicationScope?: string;
  public get deduplicationScope() {
    return this.getStringAttribute('deduplication_scope');
  }
  public set deduplicationScope(value: string) {
    this._deduplicationScope = value;
  }
  public resetDeduplicationScope() {
    this._deduplicationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deduplicationScopeInput() {
    return this._deduplicationScope
  }

  // delay_seconds - computed: false, optional: true, required: false
  private _delaySeconds?: number;
  public get delaySeconds() {
    return this.getNumberAttribute('delay_seconds');
  }
  public set delaySeconds(value: number ) {
    this._delaySeconds = value;
  }
  public resetDelaySeconds() {
    this._delaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delaySecondsInput() {
    return this._delaySeconds
  }

  // fifo_queue - computed: false, optional: true, required: false
  private _fifoQueue?: boolean;
  public get fifoQueue() {
    return this.getBooleanAttribute('fifo_queue');
  }
  public set fifoQueue(value: boolean ) {
    this._fifoQueue = value;
  }
  public resetFifoQueue() {
    this._fifoQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoQueueInput() {
    return this._fifoQueue
  }

  // fifo_throughput_limit - computed: true, optional: true, required: false
  private _fifoThroughputLimit?: string;
  public get fifoThroughputLimit() {
    return this.getStringAttribute('fifo_throughput_limit');
  }
  public set fifoThroughputLimit(value: string) {
    this._fifoThroughputLimit = value;
  }
  public resetFifoThroughputLimit() {
    this._fifoThroughputLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fifoThroughputLimitInput() {
    return this._fifoThroughputLimit
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_data_key_reuse_period_seconds - computed: true, optional: true, required: false
  private _kmsDataKeyReusePeriodSeconds?: number;
  public get kmsDataKeyReusePeriodSeconds() {
    return this.getNumberAttribute('kms_data_key_reuse_period_seconds');
  }
  public set kmsDataKeyReusePeriodSeconds(value: number) {
    this._kmsDataKeyReusePeriodSeconds = value;
  }
  public resetKmsDataKeyReusePeriodSeconds() {
    this._kmsDataKeyReusePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsDataKeyReusePeriodSecondsInput() {
    return this._kmsDataKeyReusePeriodSeconds
  }

  // kms_master_key_id - computed: false, optional: true, required: false
  private _kmsMasterKeyId?: string;
  public get kmsMasterKeyId() {
    return this.getStringAttribute('kms_master_key_id');
  }
  public set kmsMasterKeyId(value: string ) {
    this._kmsMasterKeyId = value;
  }
  public resetKmsMasterKeyId() {
    this._kmsMasterKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyIdInput() {
    return this._kmsMasterKeyId
  }

  // max_message_size - computed: false, optional: true, required: false
  private _maxMessageSize?: number;
  public get maxMessageSize() {
    return this.getNumberAttribute('max_message_size');
  }
  public set maxMessageSize(value: number ) {
    this._maxMessageSize = value;
  }
  public resetMaxMessageSize() {
    this._maxMessageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessageSizeInput() {
    return this._maxMessageSize
  }

  // message_retention_seconds - computed: false, optional: true, required: false
  private _messageRetentionSeconds?: number;
  public get messageRetentionSeconds() {
    return this.getNumberAttribute('message_retention_seconds');
  }
  public set messageRetentionSeconds(value: number ) {
    this._messageRetentionSeconds = value;
  }
  public resetMessageRetentionSeconds() {
    this._messageRetentionSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionSecondsInput() {
    return this._messageRetentionSeconds
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // receive_wait_time_seconds - computed: false, optional: true, required: false
  private _receiveWaitTimeSeconds?: number;
  public get receiveWaitTimeSeconds() {
    return this.getNumberAttribute('receive_wait_time_seconds');
  }
  public set receiveWaitTimeSeconds(value: number ) {
    this._receiveWaitTimeSeconds = value;
  }
  public resetReceiveWaitTimeSeconds() {
    this._receiveWaitTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveWaitTimeSecondsInput() {
    return this._receiveWaitTimeSeconds
  }

  // redrive_policy - computed: false, optional: true, required: false
  private _redrivePolicy?: string;
  public get redrivePolicy() {
    return this.getStringAttribute('redrive_policy');
  }
  public set redrivePolicy(value: string ) {
    this._redrivePolicy = value;
  }
  public resetRedrivePolicy() {
    this._redrivePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redrivePolicyInput() {
    return this._redrivePolicy
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // visibility_timeout_seconds - computed: false, optional: true, required: false
  private _visibilityTimeoutSeconds?: number;
  public get visibilityTimeoutSeconds() {
    return this.getNumberAttribute('visibility_timeout_seconds');
  }
  public set visibilityTimeoutSeconds(value: number ) {
    this._visibilityTimeoutSeconds = value;
  }
  public resetVisibilityTimeoutSeconds() {
    this._visibilityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityTimeoutSecondsInput() {
    return this._visibilityTimeoutSeconds
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_based_deduplication: cdktf.booleanToTerraform(this._contentBasedDeduplication),
      deduplication_scope: cdktf.stringToTerraform(this._deduplicationScope),
      delay_seconds: cdktf.numberToTerraform(this._delaySeconds),
      fifo_queue: cdktf.booleanToTerraform(this._fifoQueue),
      fifo_throughput_limit: cdktf.stringToTerraform(this._fifoThroughputLimit),
      kms_data_key_reuse_period_seconds: cdktf.numberToTerraform(this._kmsDataKeyReusePeriodSeconds),
      kms_master_key_id: cdktf.stringToTerraform(this._kmsMasterKeyId),
      max_message_size: cdktf.numberToTerraform(this._maxMessageSize),
      message_retention_seconds: cdktf.numberToTerraform(this._messageRetentionSeconds),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      policy: cdktf.stringToTerraform(this._policy),
      receive_wait_time_seconds: cdktf.numberToTerraform(this._receiveWaitTimeSeconds),
      redrive_policy: cdktf.stringToTerraform(this._redrivePolicy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      visibility_timeout_seconds: cdktf.numberToTerraform(this._visibilityTimeoutSeconds),
    };
  }
}
