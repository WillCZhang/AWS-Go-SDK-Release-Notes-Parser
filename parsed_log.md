# Parsed AWS Go SDK Release Notes

### `service/cur`

* Updates service API, documentation, and examples

  * Adding support for Athena and new report preferences to the Cost and Usage Report API.




### `service/discovery`

* Updates service documentation

  * Documentation updates for discovery
  * Documentation updates for the AWS Application Discovery Service.



* Updates service API, documentation, and paginators

  * The Application Discovery Service's import APIs allow you to import information about your on-premises servers and applications into ADS so that you can track the status of your migrations through the Migration Hub console.
  * The Application Discovery Service's Continuous Export APIs allow you to analyze your on-premises server inventory data, including system performance and network dependencies, in Amazon Athena.



* Updates service API and documentation

  * Documentation updates for discovery
  * Documentation updates for AWS Application Discovery Service.

  * Adding feature to the Export API for Discovery Service to allow filters for the export task to allow export based on per agent id.





### `aws/endpoints`

* Updated Regions and Endpoints metadata.

* Add customization for AWS GovCloud (US) Application Autoscalling ([#2395](https://github.com/aws/aws-sdk-go/pull/2395))

  * Adds workaround to correct the endpoint for Application Autoscaling running in AWS GovCloud (US).
  * Fixes [#2391](https://github.com/aws/aws-sdk-go/issues/2391)


* Deprecate endpoint service ID generation. ([#2338](https://github.com/aws/aws-sdk-go/pull/2338))

  * Deprecates the service ID generation. The list of service IDs do not directly 1:1 relate to a AWS service. The set of ServiceIDs is confusing, and inaccurate. Instead users should use the EndpointID value defined in each service client's package


* Add workaround for AWS China Application Autoscaling ([#2080](https://github.com/aws/aws-sdk-go/pull/2080))

  * Adds workaround to correct the endpoint for Application Autoscaling running in AWS China. This will allow your application to make API calls to Application Autoscaling service in AWS China.
  * Fixes [#2079](https://github.com/aws/aws-sdk-go/issues/2079)
  * Fixes [#1957](https://github.com/aws/aws-sdk-go/issues/1957)


* Add Get Region description to endpoints package ([#1909](https://github.com/aws/aws-sdk-go/pull/1909))

  * Adds exposing the description field of the endpoints Region struct.
  * Fixes [#1194](https://github.com/aws/aws-sdk-go/issues/1194)


* Use service metadata for fallback signing name ([#1854](https://github.com/aws/aws-sdk-go/pull/1854))

  * Updates the SDK's endpoint resolution to fallback deriving the service's signing name from the service's modeled metadata in addition the endpoints modeled data.
  * Fixes [#1850](https://github.com/aws/aws-sdk-go/issues/1850)


* Add utilities improving endpoints lookup (#1218)

  * Adds several utilities to the endpoints packages to make looking up partitions, regions, and services easier.
  * Fixes #994


* Add option to resolve unknown endpoints (#1074)



### `service/mediaconvert`

* Updates service API and documentation

  * AWS Elemental MediaConvert SDK has added several features including support for: auto-rotation or user-specified rotation of 0, 90, 180, or 270 degrees; multiple output groups with DRM; ESAM XML documents to specify ad insertion points; Offline Apple HLS FairPlay content protection.
  * IMF decode from a Composition Playlist for IMF specializations App #2 and App #2e; up to 99 input clippings; caption channel selection for MXF; and updated rate control for CBR jobs. Added support for acceleration in preview

  * AWS Elemental MediaConvert SDK has added several features including support for: SPEKE full document encryption, up to 150 elements for input stitching, input and motion image insertion, AWS CLI path arguments in S3 links including special characters, AFD signaling, additional caption types, and client-side encrypted input files.

  * To offer lower prices for predictable, non-urgent workloads, we propose the concept of Reserved Transcode pricing. Reserved Transcode pricing Reserved Transcoding pricing would offer the customer access to a fixed parallel processing capacity for a fixed monthly rate. This capacity would be stated in terms of number of Reserved Transcode Slots (RTSs). One RTS would be able to process one job at a time for a fixed monthly fee.

  * This release adds support for Cost Allocation through tagging and also enables adding, editing, and removal of tags from the MediaConvert console.

  * Added WriteSegmentTimelineInRepresentation option for Dash Outputs

  * This release adds support for a new rate control mode, Quality-Defined Variable Bitrate (QVBR) encoding, includes updates to optimize transcoding performance, and resolves previously reported bugs.

  * Fixes an issue with modeled timestamps being labeled with the incorrect format.

  * This release adds support for the following 1) users can specify tags to be attached to queues, presets, and templates during creation of those resources on MediaConvert. 2) users can now view the count of jobs in submitted state and in progressing state on a per queue basis.

  * This release adds language code support according to the ISO-639-3 standard. Custom 3-character language codes are now supported on input and output for both audio and captions.

  * This release adds the support for Common Media Application Format (CMAF) fragmented outputs, RF64 WAV audio output format, and HEV1 or HEVC1 MP4 packaging types when using HEVC in DASH or CMAF outputs.

  * Nielsen ID3 tags can now be inserted into transport stream (TS) and HLS outputs. For more information on Nielsen configuration you can go to https://docs.aws.amazon.com/mediaconvert/latest/apireference/jobs.html#jobs-nielsenconfiguration



* Updates service documentation

  * Documentation updates for mediaconvert


* Updates service paginators

  * Added Paginators for all the MediaConvert list operations


* Updates service API

  * This release fixes backward-incompatible changes from a previous release. That previous release changed non-required job settings to required, which prevented jobs and job templates from merging correctly. The current change removes validation of required settings from the SDK and instead centralizes the validation in the service API. For information on required settings, see the Resources chapter of the AWS Elemental MediaConvert API Reference https://docs.aws.amazon.com/mediaconvert/latest/apireference/resources.html


* Adds new service

  * AWS Elemental MediaConvert is a file-based video conversion service that transforms media into formats required for traditional broadcast and for internet streaming to multi-screen devices.




### `service/opsworkscm`

* Updates service documentation

  * Documentation updates for opsworkscm
  * Documentation updates for opsworkscm

  * Documentation updates for opsworkscm



* Updates service API and documentation

  * This release introduces a new API called ExportServerEngineAttribute to Opsworks-CM. You can use this API call to export engine specific attributes like the UserData script used for unattended bootstrapping of new nodes that connect to the server.
  * Provide engine specific information for node associations.



* Updates service API, documentation, and waiters

  * Documentation updates for OpsWorks-cm: a new feature, OpsWorks for Puppet Enterprise, that allows users to create and manage OpsWorks-hosted Puppet Enterprise servers.


* Updates service API, documentation, and paginators

  * OpsWorks for Chef Automate has added a new field "AssociatePublicIpAddress" to the CreateServer request, "CloudFormationStackArn" to the Server model and "TERMINATED" server state.


* Adds new service



### `service/organizations`

* Updates service documentation

  * Documentation updates for AWS Organizations
  * Documentation updates for organizations

  * Documentation updates for AWS Organizations

  * Documentation updates for organizations

  * This release updates permission statements for several API operations, and corrects some other minor errors.

  * Documentation updates for AWS Organizations



* Updates service API and documentation

  * Introducing a new exception - AccountOwnerNotVerifiedException which will be returned for InviteAccountToOrganization call for unverified accounts.
  * This release adds additional reason codes to improve clarity to exceptions that can occur.

  * This release supports integrating other AWS services with AWS Organizations through the use of an IAM service-linked role called AWSServiceRoleForOrganizations. Certain operations automatically create that role if it does not already exist.

  * This release flags the HandshakeParty structure's Type and Id fields as 'required'. They effectively were required in the past, as you received an error if you did not include them. This is now reflected at the API definition level.

  * The exception ConstraintViolationException now contains a new reason subcode MASTERACCOUNT_MISSING_CONTACT_INFO to make it easier to understand why attempting to remove an account from an Organization can fail. We also improved several other of the text descriptions and examples.

  * Improvements to Exception Modeling



* Updates service API, documentation, and paginators

  * This release adds APIs that you can use to enable and disable integration with AWS services designed to work with AWS Organizations. This integration allows the AWS service to perform operations on your behalf on all of the accounts in your organization. Although you can use these APIs yourself, we recommend that you instead use the commands provided in the other AWS service to enable integration with AWS Organizations.


* Updates service API, documentation, paginators, and examples

  * AWS Organizations APIs that return an Account object now include the email address associated with the account’s root user.


* Updates service documentation and examples

  * Doc-only Update for Organizations: Add SDK Code Snippets


* Adds new service

  * AWS Organizations is a web service that enables you to consolidate your multiple AWS accounts into an organization and centrally manage your accounts and their resources.




### `service/pinpoint`

* Updates service API and documentation

  * This release adds support for the Amazon Resource Groups Tagging API to Amazon Pinpoint, which means that you can now add and manage tags for Amazon Pinpoint projects (apps), campaigns, and segments. A tag is a label that you optionally define and associate with Amazon Pinpoint resource. Tags can help you categorize and manage these types of resources in different ways, such as by purpose, owner, environment, or other criteria. For example, you can use tags to apply policies or automation, or to identify resources that are subject to certain compliance requirements. A project, campaign, or segment can have as many as 50 tags. For more information about using and managing tags in Amazon Pinpoint, see the Amazon Pinpoint Developer Guide at https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html. For more information about the Amazon Resource Group Tagging API, see the Amazon Resource Group Tagging API Reference at https://docs.aws.amazon.com/resourcegroupstagging/latest/APIReference/Welcome.html.
  * This release updates the PutEvents operation. AppPackageName, AppTitle, AppVersionCode, SdkName fields will now be accepted as a part of the event when submitting events.

  * 1. With Amazon Pinpoint Voice, you can use text-to-speech technology to deliver personalized voice messages to your customers. Amazon Pinpoint Voice is a great way to deliver transactional messages -- such as one-time passwords and identity confirmations -- to customers. 2. Adding support for Campaign Event Triggers. With Campaign Event Triggers you can now schedule campaigns to execute based on incoming event data and target just the source of the event.

  * This update adds the ability to send transactional email by using the SendMessage API. Transactional emails are emails that you send directly to specific email addresses. Unlike campaign-based email that you send from Amazon Pinpoint, you don't have to create segments and campaigns in order to send transactional email.

  * This release includes a new batch API call for Amazon Pinpoint which can be used to update endpoints and submit events. This call will accept events from clients such as mobile devices and AWS SDKs. This call will accept requests which has multiple endpoints and multiple events attached to those endpoints in a single call. This call will update the endpoints attached and will ingest events for those endpoints. The response from this call will be a multipart response per endpoint/per event submitted.

  * This release of the Amazon Pinpoint SDK adds the ability to create complex segments and validate phone numbers for SMS messages. It also adds the ability to get or delete endpoints based on user IDs, remove attributes from endpoints, and list the defined channels for an app.

  * With this release, you can delete endpoints from your Amazon Pinpoint projects. Customers can now specify one of their leased dedicated long or short codes to send text messages.

  * With this release, you can export endpoints from your Amazon Pinpoint projects. You can export a) all of the endpoints assigned to a project or b) the subset of endpoints assigned to a segment.

  * Added support for APNs VoIP messages. Added support for collapsible IDs, message priority, and TTL for APNs and FCM/GCM.

  * Added two new push notification channels: Amazon Device Messaging (ADM) and, for push notification support in China, Baidu Cloud Push. Added support for APNs auth via .p8 key file. Added operation for direct message deliveries to user IDs, enabling you to message an individual user on multiple endpoints.

  * This release of the Pinpoint SDK enables App management - create, delete, update operations, Raw Content delivery for APNs and GCM campaign messages and From Address override.

  * Starting today Amazon Pinpoint adds SMS Text and Email Messaging support in addition to Mobile Push Notifications, providing developers, product managers and marketers with multi-channel messaging capabilities to drive user engagement in their applications. Pinpoint also enables backend services and applications to message users directly and provides advanced user and app analytics to understand user behavior and messaging performance.

  * Amazon Pinpoint User Segmentation
  * Added ability to segment endpoints by user attributes in addition to endpoint attributes. Amazon Pinpoint Event Stream Preview
  * Added functionality to publish raw app analytics and campaign events data as events streams to Kinesis and Kinesis Firehose
  * The feature provides developers with increased flexibility of exporting raw events to S3, Redshift, Elasticsearch using a Kinesis Firehose stream or enable real time event processing use cases using a Kinesis stream



* Adds new service



### `service/resource-groups`

* Updates service documentation

* Updates service API and documentation



### `service/autoscaling`

* Updates service API and documentation

  * Added support for passing an empty SpotMaxPrice parameter to remove a value previously set when updating an Amazon EC2 Auto Scaling group.
  * EC2 Auto Scaling now allows users to provision and automatically scale instances across purchase options (Spot, On-Demand, and RIs) and instance types in a single Auto Scaling group (ASG).

  * Add batch operations for creating/updating and deleting scheduled scaling actions.

  * Amazon EC2 Auto Scaling support for service-linked roles

  * You can now use Auto Scaling with EC2 Launch Templates via the CreateAutoScalingGroup and UpdateAutoScalingGroup APIs.

  * Customers can create Life Cycle Hooks at the time of creating Auto Scaling Groups through the CreateAutoScalingGroup API

  * Auto Scaling now supports a new type of scaling policy called target tracking scaling policies that you can use to set up dynamic scaling for your application.



* Fix documentation for PutScalingPolicy.AutoScalingGroupName [#1522](https://github.com/aws/aws-sdk-go/pull/1522)

* Updates service documentation, paginators, and examples

  * Various Auto Scaling documentation updates


* Updates service documentation.



### `service/ce`

* Updates service documentation

* Updates service API and documentation



### `service/elasticloadbalancingv2`

* Updates service API and documentation

* Updates service documentation

* Updates service waiters

* Updates service documentation.



### `service/mediastore`

* Updates service API and documentation

  * This release adds support for access logging, which provides detailed records for the requests that are made to objects in a container.
  * This release adds Delete Object Lifecycling to AWS MediaStore Containers.

  * AWS Elemental MediaStore now supports per-container CORS configuration.



* Adds new service

  * AWS Elemental MediaStore is an AWS storage service optimized for media. It gives you the performance, consistency, and low latency required to deliver live and on-demand video content. AWS Elemental MediaStore acts as the origin store in your video workflow.




### `service/athena`

* Updates service API and documentation

  * This release adds tagging support for Workgroups to Amazon Athena. Use these APIs to add, remove, or list tags on Workgroups, and leverage the tags for various authorization and billing scenarios.
  * 1. GetQueryExecution API changes to return statementType of a submitted Athena query.  2. GetQueryResults API changes to return the number of rows added to a table when a CTAS query is executed.



* Updates service API, documentation, and paginators

  * This release adds support for Workgroups to Amazon Athena. Use Workgroups to isolate users, teams, applications or workloads in the same account, control costs by setting up query limits and creating Amazon SNS alarms, and publish query-related metrics to Amazon CloudWatch.


* Adds new service

  * This release adds support for Amazon Athena. Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.




### `service/cloud9`

* Updates service API and documentation

  * Adding EnvironmentLifecycle to the Environment data type.


* Updates service documentation and examples

  * API usage examples for AWS Cloud9.




### `service/glue`

* Updates service API, documentation, and paginators

  * AWS Glue adds support for assigning AWS resource tags to jobs, triggers, development endpoints, and crawlers. Each tag consists of a key and an optional value, both of which you define. With this capacity, customers can use tags in AWS Glue to easily organize and identify your resources, create cost allocation reports, and control access to resources.


* Updates service API and documentation

  * AllocatedCapacity field is being deprecated and replaced with MaxCapacity field
  * API Update for Glue: this update enables encryption of password inside connection objects stored in AWS Glue Data Catalog using DataCatalogEncryptionSettings.  In addition, a new "HidePassword" flag is added to GetConnection and GetConnections to return connections without passwords.

  * New Glue APIs for creating, updating, reading and deleting Data Catalog resource-based policies.

  * AWS Glue now supports data encryption at rest for ETL jobs and development endpoints. With encryption enabled, when you run ETL jobs, or development endpoints, Glue will use AWS KMS keys to write encrypted data at rest. You can also encrypt the metadata stored in the Glue Data Catalog using keys that you manage with AWS KMS. Additionally, you can use AWS KMS keys to encrypt the logs generated by crawlers and ETL jobs as well as encrypt ETL job bookmarks. Encryption settings for Glue crawlers, ETL jobs, and development endpoints can be configured using the security configurations in Glue. Glue Data Catalog encryption can be enabled via the settings for the Glue Data Catalog.

  * AWS Glue now supports data encryption at rest for ETL jobs and development endpoints. With encryption enabled, when you run ETL jobs, or development endpoints, Glue will use AWS KMS keys to write encrypted data at rest. You can also encrypt the metadata stored in the Glue Data Catalog using keys that you manage with AWS KMS. Additionally, you can use AWS KMS keys to encrypt the logs generated by crawlers and ETL jobs as well as encrypt ETL job bookmarks. Encryption settings for Glue crawlers, ETL jobs, and development endpoints can be configured using the security configurations in Glue. Glue Data Catalog encryption can be enabled via the settings for the Glue Data Catalog.

  * New Glue APIs for creating, updating, reading and deleting Data Catalog resource-based policies.

  * AWS Glue now supports data encryption at rest for ETL jobs and development endpoints. With encryption enabled, when you run ETL jobs, or development endpoints, Glue will use AWS KMS keys to write encrypted data at rest. You can also encrypt the metadata stored in the Glue Data Catalog using keys that you manage with AWS KMS. Additionally, you can use AWS KMS keys to encrypt the logs generated by crawlers and ETL jobs as well as encrypt ETL job bookmarks. Encryption settings for Glue crawlers, ETL jobs, and development endpoints can be configured using the security configurations in Glue. Glue Data Catalog encryption can be enabled via the settings for the Glue Data Catalog.

  * Glue Development Endpoints now support association of multiple SSH public keys with a development endpoint.

  * AWS Glue adds the ability to crawl DynamoDB tables.

  * AWS Glue now sends a delay notification to Amazon CloudWatch Events when an ETL job runs longer than the specified delay notification threshold.

  * "AWS Glue now supports timeout values for ETL jobs. With this release, all new ETL jobs have a default timeout value of 48 hours. AWS Glue also now supports the ability to start a schedule or job events trigger when it is created."

  * API Updates for DevEndpoint: PublicKey is now optional for CreateDevEndpoint. The new DevEndpoint field PrivateAddress will be populated for DevEndpoints associated with a VPC.

  * This new feature will now allow customers to add a customized json classifier. They can specify a json path to indicate the object, array or field of the json documents they'd like crawlers to inspect when they crawl json files.

  * New AWS Glue DataCatalog APIs to manage table versions and a new feature to skip archiving of the old table version when updating table.

  * Support is added to generate ETL scripts in Scala which can now be run by  AWS Glue ETL jobs. In addition, the trigger API now supports firing when any conditions are met (in addition to all conditions). Also, jobs can be triggered based on a "failed" or "stopped" job run (in addition to a "succeeded" job run).

  * API update for AWS Glue. New crawler configuration attribute enables customers to specify crawler behavior. New XML classifier enables classification of XML data.



* Adds new service

  * AWS Glue: Adding a new API, BatchStopJobRun, to stop one or more job runs for a specified Job.




### `service/states`

* Updates service API and documentation

  * This release adds support for tag-on-create. You can now add tags when you create AWS Step Functions activity and state machine resources. For more information about tagging, see AWS Tagging Strategies.
  * This release adds support for cost allocation tagging. You can now create, delete, and list tags for AWS Step Functions activity and state machine resources. For more information about tagging, see AWS Tagging Strategies.

  * AWS Step Functions is now integrated with eight additional AWS services: Amazon ECS, AWS Fargate, Amazon DynamoDB, Amazon SNS, Amazon SQS, AWS Batch, AWS Glue, and Amazon SageMaker. To learn more, please see https://docs.aws.amazon.com/step-functions/index.html

  * You can now use the UpdateStateMachine API to update your state machine definition and role ARN. Existing executions will continue to use the previous definition and role ARN. You can use the DescribeStateMachineForExecution API to determine which state machine definition and role ARN is associated with an execution



* Updates service API, documentation, and paginators

  * Documentation update.


* Adds new service



### `service/codebuild`

* Updates service API and documentation

  * Add support for CodeBuild local caching feature
  * Add customized webhook filter support

  * This release adds support for cross-account ECR images and private registry authentication.

  * Support personal access tokens for GitHub source and app passwords for Bitbucket source

  * Adding queue phase and configurable queue timeout to CodeBuild.

  * Add resolved source version field in build output

  * Support build logs configuration.

  * Support multiple sources and artifacts for CodeBuild projects.

  * Release semantic versioning feature for CodeBuild

  * Add artifacts encryptionDisabled and build encryptionKey.

  * API changes to CodeBuild service, support report build status for Github sources

  * Adding support for more override fields for StartBuild API, add support for idempotency token field  for StartBuild API in AWS CodeBuild.

  * Adding support for branch filtering when using webhooks with AWS CodeBuild.

  * Adding support for Shallow Clone and GitHub Enterprise in AWS CodeBuild.

  * Adding support allowing AWS CodeBuild customers to select specific curated image versions.

  * Adding support for accessing Amazon VPC resources from AWS CodeBuild, dependency caching and build badges.

  * Adding support for Building GitHub Pull Requests in AWS CodeBuild

  * Supporting Parameter Store in environment variables for AWS CodeBuild

  * Add support to APIs for privileged containers. This change would allow performing privileged operations like starting the Docker daemon inside builds possible in custom docker images.



* Updates service documentation

  * Documentation updates for codebuild


* Updates service API

  * Update CodeBuild CreateProject API - serviceRole is a required input
  * AWS CodeBuild Adds Support for Windows Builds.

  * Supporting Bitbucket as source type in AWS CodeBuild.



* Updates service API, documentation, and examples

  * The AWS CodeBuild HTTP API now provides the BatchDeleteBuilds operation, which enables you to delete existing builds.


* Updates service documentation and paginators

  * Documentation updates


* Adds new service



### `service/kinesis-video-archived-media`

* Updates service API and documentation



### `service/kinesis-video-media`

* Updates service documentation



### `service/kinesisvideo`

* Updates service documentation

  * Documentation updates for Kinesis Video Streams


* Updates service API and documentation

  * Adds support for Tag-On-Create for Kinesis Video Streams. A list of tags associated with the stream can be created at the same time as the stream creation.
  * Adds support for HLS video playback of Kinesis Video streams using the KinesisVideo client by including "GET_HLS_STREAMING_SESSION_URL" as an additional APIName parameter in the GetDataEndpoint input.



* Adds new service

  * Announcing Amazon Kinesis Video Streams, a fully managed video ingestion and storage service. Kinesis Video Streams makes it easy to securely stream video from connected devices to AWS for machine learning, analytics, and processing. You can also stream other time-encoded data like RADAR and LIDAR signals using Kinesis Video Streams.




### `service/monitoring`

* Updates service documentation

  * Documentation updates for monitoring
  * Documentation updates for monitoring

  * This release adds high resolution features to CloudWatch, with support for Custom Metrics down to 1 second and Alarms down to 10 seconds.



* Updates service API and documentation

  * Amazon CloudWatch now supports alarms on metric math expressions.
  * Amazon CloudWatch adds the ability to request png image snapshots of metric widgets using the GetMetricWidgetImage API.

  * Amazon CloudWatch adds the ability to publish values and counts using PutMetricData

  * The new GetMetricData API enables you to collect batch amounts of metric data and optionally perform math expressions on the data. With one GetMetricData call you can retrieve as many as 100 different metrics and a total of 100,800 data points.

  * With this launch, you can now create a CloudWatch alarm that alerts you when M out of N datapoints of a metric are breaching your predefined threshold, such as three out of five times in any given five minutes interval or two out of six times in a thirty minutes interval. When M out of N datapoints are not breaching your threshold in an interval, the alarm will be in OK state. Please note that the M datapoints out of N datapoints in an interval can be of any order and does not need to be consecutive. Consequently, you can now get alerted even when the spikes in your metrics are intermittent over an interval.

  * We are excited to announce the availability of APIs and CloudFormation support for CloudWatch Dashboards. You can use the new dashboard APIs or CloudFormation templates to dynamically build and maintain dashboards to monitor your infrastructure and applications. There are four new dashboard APIs - PutDashboard, GetDashboard, DeleteDashboards, and ListDashboards APIs. PutDashboard is used to create a new dashboard or modify an existing one whereas GetDashboard is the API to get the details of a specific dashboard. ListDashboards and DeleteDashboards are used to get the names or delete multiple dashboards respectively. Getting started with dashboard APIs is similar to any other AWS APIs. The APIs can be accessed through AWS SDK or through CLI tools.





### `service/transfer`

* Updates service API and documentation

  * Bug fix: increased the max length allowed for request parameter NextToken when paginating List operations


* Adds new service

  * AWS Transfer for SFTP is a fully managed service that enables transfer of secure data over the internet into and out of Amazon S3. SFTP is deeply embedded in data exchange workflows across different industries such as financial services, healthcare, advertising, and retail, among others.




### `service/workdocs`

* Updates service documentation

  * Documentation updates for workdocs


* Updates service API and documentation

  * With this release, clients can now use the GetResources API to fetch files and folders from the user's SharedWithMe collection. And also through this release, the existing DescribeActivities API has been enhanced to support additional filters such as the ActivityType and the ResourceId.
  * DescribeGroups API and miscellaneous enhancements

  * This release provides a new API to retrieve the activities performed by WorkDocs users.

  * This release includes new APIs to manage tags and custom metadata on resources and also new APIs to add and retrieve comments at the document level.



* Adds new service

  * The Administrative SDKs for Amazon WorkDocs provides full administrator level access to WorkDocs site resources, allowing developers to integrate their applications to manage WorkDocs users, content and permissions programmatically




### `service/codecommit`

* Updates service API and documentation

  * This release adds an API for adding / updating / deleting / copying / moving / setting file modes for one or more files directly to an AWS CodeCommit repository without requiring a Git client.
  * The PutFile API will now throw new exception FilePathConflictsWithSubmodulePathException when a submodule exists at the input file path; PutFile API will also throw FolderContentSizeLimitExceededException when the total size of any folder on the path exceeds the limit as a result of the operation.

  * This release adds API support for getting the contents of a file, getting the contents of a folder, and for deleting a file in an AWS CodeCommit repository.

  * This release adds additional optional fields to the pull request APIs.

  * This release adds an API for adding a file directly to an AWS CodeCommit repository without requiring a Git client.

  * This release includes the DeleteBranch API and a change to the contents of a Commit object.



* Updates service API

  * This release supports a more graceful handling of the error case when a repository is not associated with a pull request ID in a merge request in AWS CodeCommit.


* Updates service API, documentation, and paginators

  * AWS CodeCommit now supports pull requests. You can use pull requests to collaboratively review code changes for minor changes or fixes, major feature additions, or new versions of your released software.
  * AWS CodeCommit now includes the option to view the differences between a commit and its parent commit from within the console. You can view the differences inline (Unified view) or side by side (Split view). To view information about the differences between a commit and something other than its parent, you can use the AWS CLI and the get-differences and get-blob commands, or you can use the GetDifferences and GetBlob APIs.





### `service/directconnect`

* Updates service API and documentation

  * Documentation updates for AWS Direct Connect
  * This release enables DirectConnect customers to have logical redundancy on virtual interfaces within supported DirectConnect locations.

  * This release adds support for Jumbo Frames over AWS Direct Connect. You can now set MTU value when creating new virtual interfaces. This release also includes a new API to modify MTU value of existing virtual interfaces.

  * 1. awsDeviceV2 field is introduced for Connection/Lag/Interconnect/VirtualInterface/Bgp Objects, while deprecating the awsDevice field for Connection/Lag/Interconnect Objects. 2. region field is introduced for VirtualInterface/Location objects

  * AWS DirectConnect now provides support for Global Access for Virtual Private Cloud (VPC) via a new feature called Direct Connect Gateway. A Direct Connect Gateway will allow you to group multiple Direct Connect Private Virtual Interfaces (DX-VIF) and Private Virtual Gateways (VGW) from different AWS regions (but belonging to the same AWS Account) and pass traffic from any DX-VIF to any VPC in the grouping.



* Updates service documentation

  * Documentation updates for AWS Direct Connect.


* Updates service API

  * Deprecated DescribeConnectionLoa, DescribeInterconnectLoa, AllocateConnectionOnInterconnect and DescribeConnectionsOnInterconnect operations in favor of DescribeLoa, DescribeLoa, AllocateHostedConnection and DescribeHostedConnections respectively.


* Updates service API, documentation, and paginators

  * This update will introduce the ability for Direct Connect customers to take advantage of Link Aggregation (LAG).     This allows you to bundle many individual physical interfaces into a single logical interface, referred to as a LAG.     This makes administration much simpler as the majority of configuration is done on the LAG while you are free     to add or remove physical interfaces from the bundle as bandwidth demand increases or decreases. A concrete example     of the simplification added by LAG is that customers need only a single BGP session as opposed to one session per     physical connection.




### `service/medialive`

* Updates service API and documentation

  * This release adds support for VPC inputs, allowing you to push content from your Amazon VPC directly to MediaLive.
  * This release adds tagging of channels, inputs, and input security groups.

  * This release adds support for Frame Capture output groups and for I-frame only manifests (playlists) in HLS output groups.

  * This release provides support for ID3 tags and video quality setting for subgop_length.

  * This release enables the AWS Elemental MediaConnect input type in AWS Elemental MediaLive. This can then be used to automatically create and manage AWS Elemental MediaConnect Flow Outputs when you create a channel using those inputs.

  * You can now include the media playlist(s) from both pipelines in the HLS master manifest for seamless failover.

  * You can now switch a live channel between preconfigured inputs. This means assigned inputs for a running channel can be changed according to a defined schedule. You can also use MP4 files as inputs.

  * This release allows you to now turn on Quality-Defined Variable Bitrate (QVBR) encoding for your AWS Elemental MediaLive channels. You can now deliver a consistently high-quality video viewing experience while reducing overall distribution bitrates by using Quality-Defined Variable Bitrate (QVBR) encoding with AWS Elemental MediaLive. QVBR is a video compression technique that automatically adjusts output bitrates to the complexity of source content and only use the bits required to maintain a defined level of quality. This means using QVBR encoding, you can save on distribution cost, while maintaining, or increasing video quality for your viewers.

  * With AWS Elemental MediaLive you can now output live channels as RTMP (Real-Time Messaging Protocol) and RTMPS as the encrypted version of the protocol (Secure, over SSL/TLS). RTMP is the preferred protocol for sending live streams to popular social platforms which  means you can send live channel content to social and sharing platforms in a secure and reliable way while continuing to stream to your own website, app or network.

  * AWS Elemental MediaLive has added support for updating Inputs and Input Security Groups. You can update Input Security Groups at any time and it will update all channels using that Input Security Group. Inputs can be updated as long as they are not attached to a currently running channel.

  * Updates API to model required traits and minimum/maximum constraints.

  * AWS Elemental MediaLive has added support for updating channel settings for idle channels. You can now update channel name, channel outputs and output destinations, encoder settings, user role ARN, and input specifications. Channel settings can be updated in the console or with API calls. Please note that running channels need to be stopped before they can be updated. We've also deprecated the 'Reserved' field.

  * Add InputSpecification to CreateChannel (specification of input attributes is used for channel sizing and affects pricing);  add NotFoundException to DeleteInputSecurityGroups.



* Updates service API, documentation, and paginators

  * Adds two APIs for working with Channel Schedules: BatchUpdateSchedule and DescribeSchedule. These APIs allow scheduling actions for SCTE-35 message insertion and for static image overlays.
  * AWS Elemental MediaLive now makes Reserved Outputs and Inputs available through the AWS Management Console and API. You can reserve outputs and inputs with a 12 month commitment in exchange for discounted hourly rates. Pricing is available at https://aws.amazon.com/medialive/pricing/

  * AWS Elemental MediaLive now makes channel log information available through Amazon CloudWatch Logs. You can set up each MediaLive channel with a logging level; when the channel is run, logs will automatically be published to your account on Amazon CloudWatch Logs



* Adds new service

  * AWS Elemental MediaLive is a video service that lets you easily create live outputs for broadcast and streaming delivery.




### `service/ds`

* Updates service API and documentation

  * This release adds support for tags during directory creation (CreateDirectory, CreateMicrosoftAd, ConnectDirectory).
  * SDK changes to create a new type of trust for active directory

  * API changes related to launch of cross account for Directory Service.

  * Added CreateLogSubscription, DeleteLogSubscription, and ListLogSubscriptions APIs for Microsoft AD. Customers can now opt in to have Windows security event logs from the domain controllers forwarded to a log group in their account.

  * Added ResetUserPassword API. Customers can now reset their users' passwords without providing the old passwords in Simple AD and Microsoft AD.

  * On October 24 we introduced AWS Directory Service for Microsoft Active Directory (Standard Edition), also known as AWS Microsoft AD (Standard Edition), which is a managed Microsoft Active Directory (AD) that is optimized for small and midsize businesses (SMBs). With this SDK release, you can now create an AWS Microsoft AD directory using API. This enables you to run typical SMB workloads using a cost-effective, highly available, and managed Microsoft AD in the AWS Cloud.



* Updates service API

  * Updated the regex of some input parameters to support longer EC2 identifiers.


* Updates service API, documentation, and paginators

  * You can now improve the resilience and performance of your Microsoft AD directory by deploying additional domain controllers. Added UpdateNumberofDomainControllers API that allows you to update the number of domain controllers you want for your directory, and DescribeDomainControllers API that allows you to describe the detailed information of each domain controller of your directory. Also added the 'DesiredNumberOfDomainControllers' field to the DescribeDirectories API output for Microsoft AD.




### `service/elasticfilesystem`

* Updates service API, documentation, and examples

  * Amazon EFS now supports adding tags to file system resources as part of the CreateFileSystem API . Using this capability, customers can now more easily enforce tag-based authorization for EFS file system resources.


* Updates service API and documentation

  * Customers can now use the EFS Infrequent Access (IA) storage class to more cost-effectively store larger amounts of data in their file systems. EFS IA is cost-optimized storage for files that are not accessed every day. You can create a new file system and enable Lifecycle Management to automatically move files that have not been accessed for 30 days from the Standard storage class to the IA storage class.
  * Amazon EFS now allows you to instantly provision the throughput required for your applications independent of the amount of data stored in your file system, allowing you to optimize throughput for your applications performance needs. Starting today, you can provision the throughput your applications require quickly with a few simple steps using AWS Console, AWS CLI or AWS API to achieve consistent performance.



* Updates service API, documentation, and paginators

  * Customers can create encrypted EFS file systems and specify a KMS master key to encrypt it with.


*  documentation updates.



### `service/iot`

* Updates service API and documentation

  * AWS IoT - AWS IoT Device Defender adds support for configuring behaviors in a security profile with statistical thresholds. Device Defender also adds support for configuring multiple data-point evaluations before a violation is either created or cleared.
  * In this release, IoT Device Defender introduces support for tagging Scheduled Audit resources.

  * This release adds tagging support for rules of AWS IoT Rules Engine. Tags enable you to categorize your rules in different ways, for example, by purpose, owner, or environment. For more information about tagging, see AWS Tagging Strategies (https://aws.amazon.com/answers/account-management/aws-tagging-strategies/). For technical documentation, look for the tagging operations in the AWS IoT Core API reference or User Guide (https://docs.aws.amazon.com/iot/latest/developerguide/tagging-iot.html).

  * As part of this release, we are extending capability of AWS IoT Rules Engine to support IoT Events rule action. The IoT Events rule action lets you send messages from IoT sensors and applications to IoT Events for pattern recognition and event detection.

  * IoT now supports resource tagging and tag based access control for Billing Groups, Thing Groups, Thing Types, Jobs, and Security Profiles. IoT Billing Groups help you group devices to categorize and track your costs. AWS IoT Device Management also introduces three new features: 1. Dynamic thing groups. 2. Jobs dynamic rollouts. 3. Device connectivity indexing. Dynamic thing groups lets you to create a group of devices using a Fleet Indexing query. The devices in your group will be automatically added or removed when they match your specified query criteria. Jobs dynamic rollout allows you to configure an exponentially increasing rate of deployment for device updates and define failure criteria to cancel your job. Device connectivity indexing allows you to index your devices' lifecycle events to discover whether devices are connected or disconnected to AWS IoT.

  * We are releasing job execution timeout functionalities to customers. Customer now can set job execution timeout on the job level when creating a job.

  * This release adds support to create a Stream and Code signing for Amazon FreeRTOS job along with Over-the-air updates.

  * This release adds support for IoT Thing Group Indexing and Searching functionality.

  * As part of this release we are introducing a new IoT security service, AWS IoT Device Defender, and extending capability of AWS IoT to support Step Functions rule action. The AWS IoT Device Defender is a fully managed service that helps you secure your fleet of IoT devices. For more details on this new service, go to https://aws.amazon.com/iot-device-defender. The Step Functions rule action lets you start an execution of AWS Step Functions state machine from a rule.

  * get rid of documentParameters field from CreateJob API

  * We are releasing force CancelJob and CancelJobExecution functionalities to customers.

  * We are releasing DeleteJob and DeleteJobExecution APIs to allow customer to delete resources created using AWS IoT Jobs.

  * Add IotAnalyticsAction which sends message data to an AWS IoT Analytics channel

  * We added new fields to the response of the following APIs. (1) describe-certificate: added new generationId, customerVersion fields (2) describe-ca-certificate: added new generationId, customerVersion and lastModifiedDate fields (3) get-policy: added generationId, creationDate and lastModifiedDate fields

  * This release adds support for code signed Over-the-air update functionality for Amazon FreeRTOS. Users can now create and schedule Over-the-air updates to their Amazon FreeRTOS devices using these new APIs.

  * Add error action API for RulesEngine.

  * This release adds support for a number of new IoT features, including AWS IoT Device Management (Jobs, Fleet Index and Thing Registration), Thing Groups, Policies on Thing Groups, Registry & Job Events, JSON Logs, Fine-Grained Logging Controls, Custom Authorization and AWS Service Authentication Using X.509 Certificates.

  * Revert the last release: remove CertificatePem from DescribeCertificate API.

  * In addition to using certificate ID, AWS IoT customers can now obtain the description of a certificate with the certificate PEM.



* Updates service API

  * We are exposing DELETION_IN_PROGRESS as a new job status in regards to the release of DeleteJob API.
  * Update client side validation for SalesForce action.



* Updates service API, documentation, paginators, and examples

  * Added Salesforce action to IoT Rules Engine.


* Updates service API and documentation.



### `service/ssm`

* Updates service API and documentation

  * AWS Systems Manager now supports adding tags when creating Activations, Patch Baselines, Documents, Parameters, and Maintenance Windows
  * AWS Systems Manager State Manager now supports configuration management of all AWS resources through integration with Automation.

  * AWS Systems Manager Distributor helps you securely distribute and install software packages.

  * AWS Systems Manager Automation now allows you to execute and manage Automation workflows across multiple accounts and regions.

  * Compliance Severity feature release for State Manager. Users now have the ability to select compliance severity to their association in state manager console or CLI.

  * Rate Control feature release for State Manager. Users now have the ability to apply rate control parameters similar to run command to their association in state manager console or CLI.

  * Adds StartDate, EndDate, and ScheduleTimezone to CreateMaintenanceWindow and UpdateMaintenanceWindow; Adds NextExecutionTime to GetMaintenanceWindow and DescribeMaintenanceWindows; Adds CancelMaintenanceWindowExecution, DescribeMaintenanceWindowSchedule and DescribeMaintenanceWindowsForTarget APIs.

  * Adds RejectedPatchesAction to baseline to enable stricted validation of the rejected Patches List ; Add InstalledRejected and InstallOverrideList to compliance reporting

  * Session Manager is a fully managed AWS Systems Manager capability that provides interactive one-click access to Amazon EC2 Linux and Windows instances.

  * AWS Systems Manager Inventory now supports groups to quickly see a count of which managed instances are and arent configured to collect one or more Inventory types

  * AWS Systems Manager Automation is launching two new features for Automation Execution Rate Control based on tags and customized parameter maps. With the first feature, customer can target their resources by specifying a Tag with Key/Value. With the second feature, Parameter maps rate control, customers can benefit from customization of input parameters.

  * Two new filters ExecutionStage and DocumentName will be added to ListCommands so that customers will have more approaches to query their commands.

  * This release updates AWS Systems Manager APIs to let customers create and use service-linked roles to register and edit Maintenance Window tasks.

  * This release updates AWS Systems Manager APIs to allow customers to attach labels to history parameter records and reference history parameter records via labels.  It also adds Parameter Store integration with AWS Secrets Manager to allow referencing and retrieving AWS Secrets Manager's secrets from Parameter Store.

  * Support Conditional Branching OnFailure for SSM Automation

  * Added support for new parameter, CloudWatchOutputConfig, for SendCommand API. Users can now have RunCommand output sent to CloudWatchLogs.

  * Added support for new parameter, DocumentVersion, for SendCommand API. Users can now specify version of SSM document to be executed on the target(s).

  * Added new APIs DeleteInventory and DescribeInventoryDeletions, for customers to delete their custom inventory data.

  * Added TooManyUpdates exception for AddTagsToResource and RemoveTagsFromResource API

  * This Inventory release supports the status message details reported by the last sync for the resource data sync API.

  * This Patch Manager release supports configuring Linux repos as part of patch baselines, controlling updates of non-OS security packages and also creating patch baselines for SUSE12

  * This release updates AWS Systems Manager APIs to enable executing automations at controlled rate, target resources in a resource groups and execute entire automation at once or single step at a time. It is now also possible to use YAML, in addition to JSON, when creating Systems Manager documents.

  * EC2 Systems Manager GetInventory API adds support for aggregation.

  * EC2 Systems Manager versioning support for Parameter Store. Also support for referencing parameter versions in SSM Documents.

  * EC2 Systems Manager support for tagging SSM Documents. Also support for tag-based permissions to restrict access to SSM Documents based on these tags.

  * Adding KMS encryption support to SSM Inventory Resource Data Sync. Exposes the ClientToken parameter on SSM StartAutomationExecution to provide idempotent execution requests.

  * Changes to associations in Systems Manager State Manager can now be recorded. Previously, when you edited associations, you could not go back and review older association settings. Now, associations are versioned, and can be named using human-readable strings, allowing you to see a trail of association changes. You can also perform rate-based scheduling, which allows you to schedule associations more granularly.

  * Systems Manager Maintenance Windows include the following changes or enhancements: New task options using Systems Manager Automation, AWS Lambda, and AWS Step Functions; enhanced ability to edit the targets of a Maintenance Window, including specifying a target name and description, and ability to edit the owner field; enhanced ability to edits tasks; enhanced support for Run Command parameters; and you can now use a --safe flag when attempting to deregister a target. If this flag is enabled when you attempt to deregister a target, the system returns an error if the target is referenced by any task. Also, Systems Manager now includes Configuration Compliance to scan your fleet of managed instances for patch compliance and configuration inconsistencies. You can collect and aggregate data from multiple AWS accounts and Regions, and then drill down into specific resources that aren't compliant.

  * Adds a SendAutomationSignal API to SSM Service. This API is used to send a signal to an automation execution to change the current behavior or status of the execution.

  * Amazon EC2 Systems Manager now expands Patching support to Amazon Linux, Red Hat and Ubuntu in addition to the already supported Windows Server.

  * Adding Resource Data Sync support to SSM Inventory.  New APIs:  * CreateResourceDataSync - creates a new resource data sync configuration,  * ListResourceDataSync - lists existing resource data sync configurations,  * DeleteResourceDataSync - deletes an existing resource data sync configuration.

  * UpdateAssociation API now supports updating document name and targets of an association. GetAutomationExecution API can return FailureDetails as an optional field to the StepExecution Object, which contains failure type, failure stage as well as other failure related information for a failed step.

  * This will provide customers with access to the Patch Baseline and Patch Compliance APIs.



* Updates service API, documentation, and examples

  * Execution History and StartAssociationOnce release for State Manager. Users now have the ability to view association execution history with DescribeAssociationExecutions and DescribeAssociationExecutionTargets. Users can also execute an association by calling StartAssociationOnce.
  * Adds Amazon Linux 2 support to Patch Manager



* Updates service documentation

  * Updates documentation for the HierarchyLevelLimitExceededException error.

  * Documentation updates for ssm



* Updates service API

  * This Patch Manager release supports creating patch baselines for CentOS.


* Updates service API, documentation, and paginators

  * Adding hierarchy support to the SSM Parameter Store API. Added support tor tagging. New APIs: GetParameter - retrieves one parameter, DeleteParameters - deletes multiple parameters (max number 10), GetParametersByPath - retrieves parameters located in the hierarchy. Updated APIs: PutParameter - added ability to enforce parameter value by applying regex (AllowedPattern), DescribeParameters - modified to support Tag filtering.
  * Updated validation rules for SendCommand and RegisterTaskWithMaintenanceWindow APIs.





### `service/secretsmanager`

* Updates service API and documentation

  * This release increases the maximum allowed size of SecretString or SecretBinary from 4KB to 7KB in the CreateSecret, UpdateSecret, PutSecretValue and GetSecretValue APIs.
  * This release introduces a ForceDeleteWithoutRecovery parameter to the DeleteSecret API enabling customers to force the deletion of a secret without any recovery window



* Updates service documentation

  * Documentation updates for AWS Secrets Manager.
  * Documentation updates for secretsmanager

  * Documentation updates for secretsmanager

  * Documentation updates for Secrets Manager

  * Documentation updates for secretsmanager

  * Documentation updates for secretsmanager

  * Documentation updates for secretsmanager

  * Documentation updates for secretsmanager

  * Documentation updates for secretsmanager

  * Documentation updates for secretsmanager



* Updates service examples

  * New SDK code snippet examples for the new APIs released for the Resource-based Policy support in Secrets Manager


* Updates service documentation, paginators, and examples

  * Documentation updates for secretsmanager


* Updates service API, documentation, paginators, and examples

  * This release adds support for resource-based policies that attach directly to your secrets. These policies provide an additional way to control who can access your secrets and what they can do with them. For more information, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html in the Secrets Manager User Guide.


* Updates service documentation and examples

  * Documentation updates


* Adds new service

  * AWS Secrets Manager enables you to easily create and manage the secrets that you use in your customer-facing apps.  Instead of embedding credentials into your source code, you can dynamically query Secrets Manager from your app whenever you need credentials.  You can automatically and frequently rotate your secrets without having to deploy updates to your apps.  All secret values are encrypted when they're at rest with AWS KMS, and while they're in transit with HTTPS and TLS.




### `service/s3/s3manager`

* Update S3 Upload Multipart location ([#2453](https://github.com/aws/aws-sdk-go/pull/2453))

  * Updates the Location returned value of S3 Upload's Multipart UploadOutput type to be consistent with single part upload URL. This update also brings the multipart upload Location inline with the S3 object URLs created by the SDK
  * Fix [#1385](https://github.com/aws/aws-sdk-go/issues/1385)


* Generate Upload Manager's UploadInput structure ([#2296](https://github.com/aws/aws-sdk-go/pull/2296))

  * Updates the SDK's code generation to also generate the S3 Upload Manager's UploadInput structure type based on the modeled S3 PutObjectInput. This ensures parity between the two types, and the S3 manager does not fall behind the capabilities of PutObject.


* Fix Download Manager with iterator docs ([#2131](https://github.com/aws/aws-sdk-go/pull/2131))

  * Fixes the S3 Download manager's DownloadWithIterator documentation example.
  * Fixes [#1824](https://github.com/aws/aws-sdk-go/issues/1824)


* Document default behavior for Upload's MaxNumParts ([#2077](https://github.com/aws/aws-sdk-go/issues/2077))

  * Updates the S3 Upload Manager's default behavior for MaxNumParts, and ensures that the Uploader.MaxNumPart's member value is initialized properly if the type was created via struct initialization instead of using the NewUploader function.
  * Fixes [#2015](https://github.com/aws/aws-sdk-go/issues/2015)


* Add documentation for sequential download [#2065](https://github.com/aws/aws-sdk-go/pull/2065)

  * Adds documentation for downloading object sequentially with the S3 download manager.


* Fix check for nil OrigErr in Error() [#1749](https://github.com/aws/aws-sdk-go/issues/1749)

* Clarify S3 Upload manager Concurrency config [#1521](https://github.com/aws/aws-sdk-go/pull/1521)

  * Fixes [#1458](https://github.com/aws/aws-sdk-go/issues/1458)


* adding cleanup function to batch objects [#1375](https://github.com/aws/aws-sdk-go/issues/1375)

  * This enhancement will add an After field that will be called after each iteration of the batch operation.


* Adds batch operations to s3manager [#1333](https://github.com/aws/aws-sdk-go/pull/1333)

  * Allows for batch upload, download, and delete of objects. Also adds the interface pattern to allow for easy traversal of objects. E.G `DownloadWithIterator`, `UploadWithIterator`, and `BatchDelete`. `BatchDelete` also contains a utility iterator using the `ListObjects` API to easily delete a list of objects.


* service/s3/s3manager: Fix Downloader ignoring Range get parameter [#1311](https://github.com/aws/aws-sdk-go/pull/1311)

  * Fixes the S3 Download Manager ignoring the GetObjectInput's Range parameter. If this parameter is provided it will force the downloader to fallback to a single GetObject request disabling concurrency and automatic part size gets.
  * Fixes [#1296](https://github.com/aws/aws-sdk-go/issues/1296)


* Adding support for SSE (#1097)

  * Fixes SSE fields not being applied to a part during multi part upload.




### `service/s3`

* Update BucketRegionError message to include more information ([#2451](https://github.com/aws/aws-sdk-go/pull/2451))

  * Updates the BucketRegionError error message to include information about the endpoint and actual region the bucket is in if known. This error message is created by the SDK, but could produce a confusing error message if the user provided a region that doesn't match the endpoint.
  * Fix [#2426](https://github.com/aws/aws-sdk-go/pull/2451)


* Updates service API

  * S3 Inventory reports can now be generated in Parquet format by setting the Destination Format to be 'Parquet'.
  * Added ORC to the supported S3 Inventory formats.



* Updates service documentation

  * Fixed issue with Content-MD5 for S3 PutObjectLegalHold, PutObjectRetention and PutObjectLockConfiguration.


* Updates service API and examples

  * Fixed issue with ObjectLockRetainUntilDate in S3 PutObject


* Updates service API and documentation

  * Four new Amazon S3 Glacier features help you reduce your storage costs by making it even easier to build archival applications using the Amazon S3 Glacier storage class. S3 Object Lock enables customers to apply Write Once Read Many (WORM) protection to objects in S3 in order to prevent object deletion for a customer-defined retention period. S3 Inventory now supports fields for reporting on S3 Object Lock. "ObjectLockRetainUntilDate", "ObjectLockMode", and "ObjectLockLegalHoldStatus" are now available as valid optional fields.
  * S3 Cross Region Replication now allows customers to use S3 object tags to filter the scope of replication. By using S3 object tags, customers can identify individual objects for replication across AWS Regions for compliance and data protection. Cross Region Replication for S3 enables automatic and asynchronous replication of objects to another AWS Region, and with this release customers can replicate at a bucket level, prefix level or by using object tags.

  * S3 Select support for BZIP2 compressed input files

  * Add AllowQuotedRecordDelimiter to Amazon S3 Select API. Please refer to https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html for usage details.

  * Added BytesReturned details for Progress and Stats Events for Amazon S3 Select .

  * ONEZONE_IA storage class stores object data in only one Availability Zone at a lower price than STANDARD_IA. This SDK release provides API support for this new storage class.

  * This release includes support for Glacier Select, a new feature that allows you to filter and analyze your Glacier storage class objects and store the results in a user-specified S3 location.

  * API Update for S3: Adding Object Tagging Header to MultipartUpload Initialization



* Updates service API, documentation, and examples

  * The INTELLIGENT_TIERING storage class is designed to optimize storage costs by automatically moving data to the most cost effective storage access tier, without performance impact or operational overhead. This SDK release provides API support for this new storage class.
  * Add support for new S3 Block Public Access bucket-level APIs. The new Block Public Access settings allow bucket owners to prevent public access to S3 data via bucket/object ACLs or bucket policies.

  * Parquet input format support added for the SelectObjectContent API

  * This releases adds support for 4 features: 1. Default encryption for S3 Bucket, 2. Encryption status in inventory and Encryption support for inventory.  3. Cross region replication of KMS-encrypted objects, and 4. ownership overwrite for CRR.



* Update SelectObjectContent doc example to be on the API not nested type. ([#1991](https://github.com/aws/aws-sdk-go/pull/1991))

* Fix PutObject and UploadPart API to include ContentMD5 field ([#1559](https://github.com/aws/aws-sdk-go/pull/1559))

  * Fixes the SDK's S3 PutObject and UploadPart API code generation to correctly render the ContentMD5 field into the associated input types for these two API operations.
  * Fixes [#1553](https://github.com/aws/aws-sdk-go/pull/1553)


*  Use interfaces assertions instead of ValuesAtPath for S3 field lookups. [#1401](https://github.com/aws/aws-sdk-go/pull/1401)

  * Improves the performance across the board for all S3 API calls by removing the usage of `ValuesAtPath` being used for every S3 API call.


* Updates service paginators and examples

  * New example snippets for Amazon S3.


* Add utilities to make getting a bucket's region easier (#1207)

  * Adds two features which make it easier to get a bucket's region, `s3.NormalizeBucketLocation` and `s3manager.GetBucketRegion`.


* Fix HeadObject's incorrect documented error codes (#1213)

  * The HeadObject's model incorrectly states that the operation can return the NoSuchKey error code.
  * Fixes #1208


* Fix S3 HostID to be available in S3 request error message (#1131)

  * Adds a new type s3.RequestFailure which exposes the S3 HostID value from a S3 API operation response. This is helpful when you have an error with S3, and need to contact support. Both RequestID and HostID are needed.


* Add support for accelerate with dualstack [#887](https://github.com/aws/aws-sdk-go/issues/887)

* Update Amazon Simple Storage Service model

*  api and documentation updates.



### `service/application-autoscaling`

* Updates service API and documentation

* Updates service documentation

* Updates service API



### `service/chime`

* Updates service documentation

  * Documentation updates for Amazon Chime


* Updates service API and documentation

  * This release adds support in ListUsers API to filter the list by an email address.


* Adds new service

  * This is the initial release for the Amazon Chime AWS SDK. In this release, Amazon Chime adds support for administrative actions on users and accounts. API Documentation is also updated on https://docs.aws.amazon.com/chime/index.html




### `service/ec2`

* Updates service API and documentation

  * This release adds tagging and ARN support for AWS Client VPN Endpoints.You can now run bare metal workloads on EC2 M5 and M5d instances. m5.metal and m5d.metal instances are powered by custom Intel Xeon Scalable Processors with a sustained all core frequency of up to 3.1 GHz. m5.metal and m5d.metal offer 96 vCPUs and 384 GiB of memory. With m5d.metal, you also have access to 3.6 TB of NVMe SSD-backed instance storage. m5.metal and m5d.metal instances deliver 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking, as well as 14 Gbps of bandwidth to EBS.You can now run bare metal workloads on EC2 z1d instances. z1d.metal instances are powered by custom Intel Xeon Scalable Processors with a sustained all core frequency of up to 4.0 GHz. z1d.metal offers 48 vCPUs, 384 GiB of memory, and 1.8 TB of NVMe SSD-backed instance storage. z1d.metal instances deliver 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking, as well as 14 Gbps of bandwidth to EBS.
  * Add Linux with SQL Server Standard, Linux with SQL Server Web, and Linux with SQL Server Enterprise to the list of allowed instance platforms for On-Demand Capacity Reservations.

  * ec2.DescribeVpcPeeringConnections pagination support

  * EC2 Spot: a) CreateFleet support for Single AvailabilityZone requests and b) support for paginated DescribeSpotInstanceRequests.

  * This release adds support for specifying partition as a strategy for EC2 Placement Groups. This new strategy allows one to launch instances into partitions that do not share certain underlying hardware between partitions, to assist with building and deploying highly available replicated applications.

  * Client VPN, is a client-based VPN service. With Client VPN, you can securely access resources in AWS as well as access resources in on-premises from any location using OpenVPN based devices. With Client VPN, you can set network based firewall rules that can restrict access to networks based on Active Directory groups.

  * Adds the following updates: 1. You can now hibernate and resume Amazon-EBS backed instances using the StopInstances and StartInstances APIs. For more information about using this feature and supported instance types and operating systems, visit the user guide. 2. Amazon Elastic Inference accelerators are resources that you can attach to current generation EC2 instances to accelerate your deep learning inference workloads. With Amazon Elastic Inference, you can configure the right amount of inference acceleration to your deep learning application without being constrained by fixed hardware configurations and limited GPU selection. 3. AWS License Manager makes it easier to manage licenses in AWS and on premises when customers run applications using existing licenses from a variety of software vendors including Microsoft, SAP, Oracle, and IBM.

  * With VPC sharing, you can now allow multiple accounts in the same AWS Organization to launch their application resources, like EC2 instances, RDS databases, and Redshift clusters into shared, centrally managed VPCs.

  * Adds the following updates: 1. Transit Gateway helps easily scale connectivity across thousands of Amazon VPCs, AWS accounts, and on-premises networks. 2. Amazon EC2 A1 instance is a new Arm architecture based general purpose instance. 3. You can now launch the new Amazon EC2 compute optimized C5n instances that can utilize up to 100 Gbps of network bandwidth.

  * Adding AvailabilityZoneId to DescribeAvailabilityZones

  * Amazon EC2 Fleet now supports a new request type "Instant" that you can use to provision capacity synchronously across instance types & purchase models and CreateFleet will return the instances launched in the API response.

  * VM Import/Export now supports generating encrypted EBS snapshots, as well as AMIs backed by encrypted EBS snapshots during the import process.

  * As part of this release we are introducing EC2 On-Demand Capacity Reservations. With On-Demand Capacity Reservations, customers can reserve the exact EC2 capacity they need, and can keep it only for as long as they need it.

  * Add pagination support for ec2.describe-route-tables API.

  * Added support for customers to tag EC2 Dedicated Hosts on creation.

  * Amazon VPC Flow Logs adds support for delivering flow logs directly to S3

  * This change provides the EC2/Spot customers with two new allocation strategies -- LowestN for Spot instances, and OD priority for on-demand instances.

  * Support CpuOptions field in Launch Template data and allow Launch Template name to contain hyphen.

  * You are now able to use instance storage (up to 3600 GB of NVMe based SSD) on M5 instances, the next generation of EC2's General Purpose instances in us-east-1, us-west-2, us-east-2, eu-west-1 and ca-central-1. M5 instances offer up to 96 vCPUs, 384 GiB of DDR4 instance memory, 25 Gbps in Network bandwidth and improved EBS and Networking bandwidth on smaller instance sizes and provide a balance of compute, memory and network resources for many applications.

  * You are now able to use instance storage (up to 1800 GB of NVMe based SSD) on C5 instances, the next generation of EC2's compute optimized instances in us-east-1, us-west-2, us-east-2, eu-west-1 and ca-central-1. C5 instances offer up to 72 vCPUs, 144 GiB of DDR4 instance memory, 25 Gbps in Network bandwidth and improved EBS and Networking bandwidth on smaller instance sizes to deliver improved performance for compute-intensive workloads.You can now run bare metal workloads on EC2 with i3.metal instances. As a new instance size belonging to the I3 instance family, i3.metal instances have the same characteristics as other instances in the family, including NVMe SSD-backed instance storage optimized for low latency, very high random I/O performance, and high sequential read throughput. I3.metal instances are powered by 2.3 GHz Intel Xeon processors, offering 36 hyper-threaded cores (72 logical processors), 512 GiB of memory, and 15.2 TB of NVMe SSD-backed instance storage. These instances deliver high networking throughput and lower latency with up to 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking.

  * Enable support for latest flag with Get Console Output

  * Enable support for specifying CPU options during instance launch.

  * Amazon EC2 Fleet is a new feature that simplifies the provisioning of Amazon EC2 capacity across different EC2 instance types, Availability Zones, and the On-Demand, Reserved Instance, and Spot Instance purchase models. With a single API call, you can now provision capacity to achieve desired scale, performance, and cost.

  * Added support for customers to see the time at which a Dedicated Host was allocated or released.

  * Added support for modifying Placement Group association of instances via ModifyInstancePlacement API.

  * Adds support for tagging an EBS snapshot as part of the API call that creates the EBS snapshot

  * Network interfaces now supply the following additional status of "associated" to better distinguish the current status.

  * Users can now better understand the longer ID opt-in status of their account using the two new APIs DescribeAggregateIdFormat and DescribePrincipalIdFormat

  * Elastic IP tagging enables you to add key and value metadata to your Elastic IPs so that you can search, filter, and organize them according to your organization's needs.

  * Adds the following updates: 1. Spread Placement ensures that instances are placed on distinct hardware in order to reduce correlated failures. 2. Inter-region VPC Peering allows customers to peer VPCs across different AWS regions without requiring additional gateways, VPN connections or physical hardware

  * Adds the following updates: 1. T2 Unlimited enables high CPU performance for any period of time whenever required 2. You are now able to create and launch EC2 m5 and h1 instances

  * Adds the following updates: 1. You are now able to host a service powered by AWS PrivateLink to provide private connectivity to other VPCs. You are now also able to create endpoints to other services powered by PrivateLink including AWS services, Marketplace Seller services or custom services created by yourself or other AWS VPC customers. 2. You are now able to save launch parameters in a single template that can be used with Auto Scaling, Spot Fleet, Spot, and On Demand instances. 3. You are now able to launch Spot instances via the RunInstances API, using a single additional parameter. RunInstances will response synchronously with an instance ID should capacity be available for your Spot request. 4. A simplified Spot pricing model which delivers low, predictable prices that adjust gradually, based on long-term trends in supply and demand. 5. Amazon EC2 Spot can now hibernate Amazon EBS-backed instances in the event of an interruption, so your workloads pick up from where they left off. Spot can fulfill your request by resuming instances from a hibernated state when capacity is available.

  * Introduces the following features: 1. Create a default subnet in an Availability Zone if no default subnet exists. 2. Spot Fleet integrates with Elastic Load Balancing to enable you to attach one or more load balancers to a Spot Fleet request. When you attach the load balancer, it automatically registers the instance in the Spot Fleet to the load balancers which distributes incoming traffic across the instances.

  * AWS PrivateLink for Amazon Services - Customers can now privately access Amazon services from their Amazon Virtual Private Cloud (VPC), without using public IPs, and without requiring the traffic to traverse across the Internet.

  * Adding pagination support for DescribeSecurityGroups for EC2 Classic and VPC Security Groups

  * You can now change the tenancy of your VPC from dedicated to default with a single API operation. For more details refer to the documentation for changing VPC tenancy.

  * This release includes updates to AWS Virtual Private Gateway.

  * Add EC2 APIs to copy Amazon FPGA Images (AFIs) within the same region and across multiple regions, delete AFIs, and modify AFI attributes. AFI attributes include name, description and granting/denying other AWS accounts to load the AFI.

  * Amazon EC2 now lets you opt for Spot instances to be stopped in the event of an interruption instead of being terminated.  Your Spot request can be fulfilled again by restarting instances from a previously stopped state, subject to availability of capacity at or below your preferred price.  When you submit a persistent Spot request, you can choose from "terminate" or "stop" as the instance interruption behavior.  Choosing "stop" will shutdown your Spot instances so you can continue from this stopped state later on.  This feature is only available for instances with Amazon EBS volume as their root device.

  * With Tagging support, you can add Key and Value metadata to search, filter and organize your NAT Gateways according to your organization's needs.

  * Descriptions for Security Group Rules enables customers to be able to define a description for ingress and egress security group rules . The Descriptions for Security Group Rules feature supports one description field per Security Group rule for both ingress and egress rules . Descriptions for Security Group Rules provides a simple way to describe the purpose or function of a Security Group Rule allowing for easier customer identification of configuration elements .      Prior to the release of Descriptions for Security Group Rules , customers had to maintain a separate system outside of AWS if they wanted to track Security Group Rule mapping and their purpose for being implemented. If a security group rule has already been created and you would like to update or change your description for that security group rule you can use the UpdateSecurityGroupRuleDescription API.

  * Provides capability to add secondary CIDR blocks to a VPC.

  * Provides customers an opportunity to recover an EIP that was released

  * The CreateDefaultVPC API enables you to create a new default VPC . You no longer need to contact AWS support, if your default VPC has been deleted.

  * Amazon EC2 Elastic GPUs allow you to easily attach low-cost graphics acceleration to current generation EC2 instances. With Amazon EC2 Elastic GPUs, you can configure the right amount of graphics acceleration to your particular workload without being constrained by fixed hardware configurations and limited GPU selection.

  * Spot Fleet tagging capability allows customers to automatically tag instances launched by Spot Fleet. You can use this feature to label or distinguish instances created by distinct Spot Fleets. Tagging your EC2 instances also enables you to see instance cost allocation by tag in your AWS bill.

  * X-ENI (or Cross-Account ENI) is a new feature that allows the attachment or association of Elastic Network Interfaces (ENI) between VPCs in different AWS accounts located in the same availability zone. With this new capability, service providers and partners can deliver managed solutions in a variety of new architectural patterns where the provider and consumer of the service are in different AWS accounts.

  * Adds API to describe Amazon FPGA Images (AFIs) available to customers, which includes public AFIs, private AFIs that you own, and AFIs owned by other AWS accounts for which you have load permissions.

  * Adds support for creating an Amazon FPGA Image (AFI) from a specified design checkpoint (DCP).

  * Added the billingProduct parameter to the RegisterImage API.

  * This feature allows customers to associate an IAM profile to running instances that do not have any.

  * Adds instance health check functionality to replace unhealthy EC2 Spot fleet instances with fresh ones.



* Updates service API

  * Adjust EC2's available instance types.
  * You can now launch the larger-sized P3dn.24xlarge instance that features NVIDIA Tesla V100s with double the GPU memory, 100Gbps networking and local NVMe storage.

  * You can now launch the smaller-sized G3 instance called g3s.xlarge. G3s.xlarge provides 4 vCPU, 30.5 GB RAM and a NVIDIA Tesla M60 GPU. It is ideal for remote workstations, engineering and architectural applications, and 3D visualizations and rendering for visual effects.

  * You can now use EC2 High Memory instances with 6 TiB memory (u-6tb1.metal), 9 TiB memory (u-9tb1.metal), and 12 TiB memory (u-12tb1.metal), which are ideal for running large in-memory databases, including production deployments of SAP HANA. These instances offer 448 logical processors, where each logical processor is a hyperthread on 224 cores. These instance deliver high networking throughput and lower latency with up to 25 Gbps of aggregate network bandwidth using Elastic Network Adapter (ENA)-based Enhanced Networking. These instances are EBS-Optimized by default, and support encrypted and unencrypted EBS volumes. This instance is only available in host-tenancy. You will need an EC2 Dedicated Host for this instance type to launch an instance.

  * You can now launch f1.4xlarge, a new instance size within the existing f1 family which provides two Xilinx Virtex Field Programmable Arrays (FPGAs) for acceleration. FPGA acceleration provide additional performance and time sensitivity for specialized accelerated workloads such as clinical genomics and real-time video processing. F1.4xlarge instances are available in the US East (N. Virginia), US West (Oregon), GovCloud (US), and EU West (Dublin) AWS Regions.

  * Added support for T3 Instance type in EC2. To learn more about T3 instances, please see https://aws.amazon.com/ec2/instance-types/t3/

  * The 'Attribute' parameter DescribeVolumeAttribute request has been marked as required - the API has always required this parameter, but up until now this wasn't reflected appropriately in the SDK.

  * R5 is the successor to R4 in EC2's memory-optimized instance family. R5d is a variant of R5 that has local NVMe SSD. Z1d instances deliver both high compute and high memory. Z1d instances use custom Intel Xeon Scalable Processors running at up to 4.0 GHz, powered by sustained all-core Turbo Boost. They are available in 6 sizes, with up to 48 vCPUs, 384 GiB of memory, and 1.8 TB of local NVMe storage.

  * This release fixes an issue with tags not showing in DescribeAddresses responses.

  * You are now able to create and launch EC2 x1e smaller instance sizes

  * You are now able to create and launch EC2 C5 instances, the next generation of EC2's compute-optimized instances, in us-east-1, us-west-2 and eu-west-1. C5 instances offer up to 72 vCPUs, 144 GiB of DDR4 instance memory, 25 Gbps in Network bandwidth and improved EBS and Networking bandwidth on smaller instance sizes to deliver improved performance for compute-intensive workloads.

  * You are now able to create and launch EC2 P3 instance, next generation GPU instances, optimized for machine learning and high performance computing applications. With up to eight NVIDIA Tesla V100 GPUs, P3 instances provide up to one petaflop of mixed-precision, 125 teraflops of single-precision, and 62 teraflops of double-precision floating point performance, as well as a 300 GB/s second-generation NVLink interconnect that enables high-speed, low-latency GPU-to-GPU communication. P3 instances also feature up to 64 vCPUs based on custom Intel Xeon E5 (Broadwell) processors, 488 GB of DRAM, and 25 Gbps of dedicated aggregate network bandwidth using the Elastic Network Adapter (ENA).

  * Fixed bug in EC2 clients preventing ElasticGpuSet from being set.

  * You are now able to create and launch EC2 x1e.32xlarge instance, a new EC2 instance in the X1 family, in us-east-1, us-west-2, eu-west-1, and ap-northeast-1. x1e.32xlarge offers 128 vCPUs, 3,904 GiB of DDR4 instance memory, high memory bandwidth, large L3 caches, and leading reliability capabilities to boost the performance and reliability of in-memory applications.

  * Fixed bug in EC2 clients preventing HostOfferingSet from being set

  * Fixed bug in EC2 clients preventing HostReservation from being set

  * New EC2 GPU Graphics instance

  * New EC2 I3 instance type



* Updates service API and paginators

  * You can now launch the new Amazon EC2 memory optimized R5a and general purpose M5a instances families that feature AMD EPYC processors.


* Updates service API, documentation, and examples

  * Provides customers the ability to Bring Your Own IP (BYOIP) prefix.  You can bring part or all of your public IPv4 address range from your on-premises network to your AWS account. You continue to own the address range, but AWS advertises it on the internet.
  * Added support for customers to tag EC2 Dedicated Hosts



* Updates service API, documentation, and paginators

  * Pagination Support for DescribeNetworkInterfaces API
  * Adds support for the new Modify Volumes apis.

  * Amazon EC2 Spot instances now support dedicated tenancy, providing the ability to run Spot instances single-tenant manner on physically isolated hardware within a VPC to satisfy security, privacy, or other compliance requirements. Dedicated Spot instances can be requested using RequestSpotInstances and RequestSpotFleet.



* Updates service documentation

  * Documentation updates for EC2


* Updates service API, documentation, and waiters

  * This release includes service updates to AWS VPN.


* Updates service waiters

  * Ec2 SpotInstanceRequestFulfilled waiter update


* Adds new service

*  api, documentation, and paginators updates.



### `service/mediatailor`

* Updates service API and documentation

* Updates service API

* Adds new service



### `service/rekognition`

* Updates service API and documentation

  * GetContentModeration now returns the version of the moderation detection model used to detect unsafe content.
  * GetLabelDetection now returns bounding box information for common objects and a hierarchical taxonomy of detected labels. The version of the model used for video label detection is also returned. DetectModerationLabels now returns the version of the model used for detecting unsafe content.

  * This release updates the DetectFaces and IndexFaces operation. When the Attributes input parameter is set to ALL, the face location landmarks includes 5 new landmarks: upperJawlineLeft, midJawlineLeft, chinBottom, midJawlineRight, upperJawlineRight.

  * This release updates the DetectLabels operation. Bounding boxes are now returned for certain objects, a hierarchical taxonomy is now available for labels, and you can now get the version of the detection model used for detection.

  * This release updates the Amazon Rekognition IndexFaces API operation. It introduces a QualityFilter parameter that allows you to automatically filter out detected faces that are deemed to be of low quality by Amazon Rekognition. The quality bar is based on a variety of common use cases.  You can filter low-quality detected faces by setting QualityFilter to AUTO, which is also the default setting. To index all detected faces regardless of quality, you can specify NONE.  This release also provides a MaxFaces parameter that is useful when you want to only index the most prominent and largest faces in an image and don't want to index other faces detected in the image, such as smaller faces belonging to people standing in the background.

  * This release introduces a new API called DescribeCollection to Amazon Rekognition. You can use DescribeCollection to get information about an existing face collection. Given the ID for a face collection, DescribeCollection returns the following information: the number of faces indexed into the collection, the version of the face detection model used by the collection, the Amazon Resource Name (ARN) of the collection and the creation date/time of the collection.

  * This release includes updates to Amazon Rekognition for the following APIs. The new DetectText API allows you to recognize and extract textual content from images. Face Model Versioning has been added to operations that deal with face detection.

  * API Update for AmazonRekognition: Adding RecognizeCelebrities API

  * Updated the CompareFaces API response to include orientation information, unmatched faces, landmarks, pose, and quality of the compared faces.

  * Given an image, the API detects explicit or suggestive adult content in the image and returns a list of corresponding labels with confidence scores, as well as a taxonomy (parent-child relation) for each label.

  * DetectFaces and IndexFaces operations now return an estimate of the age of the face as an age range.



* Updates service documentation

  * Documentation updates for Amazon Rekognition
  * Documentation updates for Amazon Rekognition.



* Updates service API, documentation, and examples

  * This release introduces a new API called DescribeCollection to Amazon Rekognition.  You can use DescribeCollection to get information about an existing face collection. Given the ID for a face collection, DescribeCollection returns the following information: the number of faces indexed into the collection, the version of the face detection model used by the collection, the Amazon Resource Name (ARN) of the collection and the creation date/time of the collection.
  * Update the enum value of LandmarkType and GenderType to be consistent with service response



* Updates service documentation and examples

  * Documentation updates for rekognition
  * Doc-only Update for Rekognition: Added code snippets



* Updates service API, documentation, and paginators

  * This release introduces Amazon Rekognition support for video analysis.


* Updates service API

  * Fix for missing file type check


* Updates service documentation.

* Updates service documentation and paginators

  * Added code samples to Rekognition reference topics.


* Adds new service



### `service/lambda`

* Updates service documentation

  * Documentation updates for AWS Lambda


* Updates service documentation and examples

  * Documentation updates for AWS Lambda
  * Doc only updates for Lambda: Added code snippets



* Updates service API and documentation

  * AWS Lambda now supports Lambda Layers and Ruby as a runtime. Lambda Layers are a new type of artifact that contains arbitrary code and data, and may be referenced by zero, one, or more functions at the same time.  You can also now develop your AWS Lambda function code using the Ruby programming language.
  * AWS Lambda now supports python3.7 and  the Kinesis Data Streams (KDS) enhanced fan-out and HTTP/2 data retrieval features for Kinesis event sources.

  * Documentation updates for lambda

  * Support for SQS as an event source.

  * added nodejs8.10 as a valid runtime

  * AWS Lambda now supports Revision ID on your function versions and aliases, to track and apply conditional updates when you are updating your function version or alias resources.

  * Support for creating Lambda Functions using 'dotnetcore2.0' and 'go1.x'.

  * AWS Lambda now supports the ability to set the concurrency limits for individual functions, and increasing memory to 3008 MB.

  * Lambda aliases can now shift traffic between two function versions, based on preassigned weights.

  * Lambda@Edge lets you run code closer to your end users without provisioning or managing servers. With Lambda@Edge, your code runs in AWS edge locations, allowing you to respond to your end users at the lowest latency. Your code is triggered by Amazon CloudFront events, such as requests to and from origin servers and viewers, and it is ready to execute at every AWS edge location whenever a request for content is received. You just upload your Node.js code to AWS Lambda and Lambda takes care of everything required to run and scale your code with high availability. You only pay for the compute time you consume - there is no charge when your code is not running.

  * The Lambda Invoke API will now throw new exception InvalidRuntimeException (status code 502) for invokes with deprecated runtimes.

  * Support for UpdateFunctionCode DryRun option

  * Lambda integration with CloudDebugger service to enable customers to enable tracing for the Lambda functions and send trace information to the CloudDebugger service.

  * You can use tags to group and filter your Lambda functions, making it easier to analyze them for billing allocation purposes. For more information, see Tagging Lambda Functions.  You can now write or upgrade your Lambda functions using Python version 3.6. For more information, see Programming Model for Authoring Lambda Functions in Python. Note: Features will be rolled out in the US regions on 4/19.



* Updates service API

  * Add support for .NET Core 2.1 to Lambda.


* Updates service API and paginators

  * Adds support for new runtime Node.js v6.10 for AWS Lambda service




### `service/appstream`

* Updates service API and documentation

  * This update enables customers to find the start time, max expiration time, and connection status associated with AppStream streaming session.
  * This API update includes support for tagging Stack, Fleet, and ImageBuilder resources at creation time.

  * This API update adds support for creating, managing, and deleting users in the AppStream 2.0 user pool.

  * Added support for enabling persistent application settings for a stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.

  * Amazon AppStream 2.0 adds support for Google Drive for G Suite. With this feature, customers will be able to connect their G Suite accounts with AppStream 2.0 and enable Google Drive access for an AppStream 2.0 stack. Users of the stack can then link their Google Drive using their G Suite login credentials and use their existing files stored in Drive with their AppStream 2.0 applications. File changes will be synced automatically to Google cloud.

  * This API update enables customers to control whether users can transfer data between their local devices and their streaming applications through file uploads and downloads, clipboard operations, or printing to local devices

  * Feedback URL allows admins to provide a feedback link or a survey link for collecting user feedback while streaming sessions. When a feedback link is provided, streaming users will see a "Send Feedback" choice in their streaming session toolbar. On selecting this choice, user will be redirected to the link provided in a new browser tab. If a feedback link is not provided, users will not see the "Send Feedback" option.

  * This API update is to enable customers to copy their Amazon AppStream 2.0 images within and between AWS Regions

  * Adds support for allowing customers to provide a redirect URL for a stack. Users will be redirected to the link provided by the admin at the end of their streaming session.

  * This API update is to enable customers to add tags to their Amazon AppStream 2.0 resources

  * This API update is to support the feature that allows customers to automatically consume the latest Amazon AppStream 2.0 agent as and when published by AWS.

  * Includes APIs for managing and accessing image builders, and deleting images.

  * API updates for supporting On-Demand fleets.

  * AppStream 2.0 Custom Security Groups allows you to easily control what network resources your streaming instances and images have access to. You can assign up to 5 security groups per Fleet to control the inbound and outbound network access to your streaming instances to specific IP ranges, network protocols, or ports.

  * Support added for persistent user storage, backed by S3.



* Updates service API, documentation, and paginators

  * This API update adds support for sharing AppStream images across AWS accounts within the same region.
  * The new feature named "Default Internet Access" will enable Internet access from AppStream 2.0 instances - image builders and fleet instances. Admins will check a flag either through AWS management console for AppStream 2.0 or through API while creating an image builder or while creating/updating a fleet.



* Updates service API, documentation, paginators, and examples

  * This API update adds pagination to the DescribeImages API to support future features and enhancements.
  * This API update enables customers to find their VPC private IP address and ENI ID associated with AppStream streaming sessions.



* Updates service documentation

  * Documentation updates for appstream


* Updates service API, documentation, and waiters

  * Amazon AppStream 2.0 image builders and fleets can now access applications and network resources that rely on Microsoft Active Directory (AD) for authentication and permissions. This new feature allows you to join your streaming instances to your AD, so you can use your existing AD user management tools.


* Adds new service



### `service/mediapackage`

* Updates service API and documentation

  * Adds optional configuration for DASH to compact the manifest by combining duplicate SegmentTemplate tags. Adds optional configuration for DASH SegmentTemplate format to refer to segments by "Number" (default) or by "Time".
  * As a part of SPEKE DRM encryption, MediaPackage now supports encrypted content keys. You can enable this enhanced content protection in an OriginEndpoint's encryption settings. When this is enabled, MediaPackage indicates to the key server that it requires an encrypted response. To use this, your DRM key provider must support content key encryption. For details on this feature, see the AWS MediaPackage User Guide at https://docs.aws.amazon.com/mediapackage/latest/ug/what-is.html.

  * MediaPackage now provides input redundancy. Channels have two ingest endpoints that can receive input from encoders. OriginEndpoints pick one of the inputs receiving content for playback and automatically switch to the other input if the active input stops receiving content. Refer to the User Guide (https://docs.aws.amazon.com/mediapackage/latest/ug/what-is.html) for more details on this feature.

  * Adds support for DASH OriginEnpoints with multiple media presentation description periods triggered by presence of SCTE-35 ad markers in Channel input streams.

  * Adds a new OriginEndpoint package type CmafPackage in MediaPackage. Origin endpoints can now be configured to use the Common Media Application Format (CMAF) media streaming format. This version of CmafPackage only supports HTTP Live Streaming (HLS) manifests with fragmented MP4.



* Adds new service

  * AWS Elemental MediaPackage is a just-in-time video packaging and origination service that lets you format highly secure and reliable live outputs for a variety of devices.




### `service/dlm`

* Updates service API and documentation

* Updates service documentation

* Adds new service



### `service/ecs`

* Updates service API, documentation, and examples

  * Amazon ECS introduces the PutAccountSettingDefault API, an API that allows a user to set the default ARN/ID format opt-in status for all the roles and users in the account. Previously, setting the account's default opt-in status required the use of the root user with the PutAccountSetting API.
  * In this release, Amazon ECS introduces multiple features. First, ECS now supports integration with Systems Manager Parameter Store for injecting runtime secrets. Second, ECS introduces support for resources tagging. Finally, ECS introduces a new ARN and ID Format for its resources, and provides new APIs for opt-in to the new formats.



* Updates service API and documentation

  * This release of Amazon Elastic Container Service (Amazon ECS) introduces support for GPU workloads by enabling you to create clusters with GPU-enabled container instances.
  * This release of Amazon Elastic Container Service (Amazon ECS) introduces support for blue/green deployment feature. Customers can now update their ECS services in a blue/green deployment pattern via using AWS CodeDeploy.

  * This release of Amazon Elastic Container Service (Amazon ECS) introduces support for additional Docker flags as Task Definition parameters. Customers can now configure their ECS Tasks to use pidMode (pid) and ipcMode (ipc) Docker flags.

  * This release of Amazon Elastic Container Service (Amazon ECS) introduces support for additional Docker flags as Task Definition parameters. Customers can now configure their ECS Tasks to use systemControls (sysctl), pseudoTerminal (tty), and interactive (i) Docker flags.

  * This release of Amazon Elastic Container Service (Amazon ECS) introduces support for Docker volumes and Docker volume drivers. Customers can now configure their ECS Tasks to use Docker volumes, enabling stateful and storage-intensive applications to be deployed on ECS.

  * This release of Amazon Elastic Container Service (Amazon ECS) introduces support for private registry authentication using AWS Secrets Manager. With private registry authentication, private Docker images can be used in a task definition.

  * Introduces daemon scheduling capability to deploy one task per instance on selected instances in a cluster.  Adds a "force" flag to the DeleteService API to delete a service without requiring to scale down the number of tasks to zero.

  * Amazon Elastic Container Service (ECS) adds service discovery for services that use host or bridged network mode. ECS can now also register instance IPs for active tasks using bridged and host networking with Route 53, making them available via DNS.

  * Amazon Elastic Container Service (ECS) now includes integrated Service Discovery using Route 53 Auto Naming. Customers can now specify a Route 53 Auto Naming service as part of an ECS service. ECS will register task IPs with Route 53, making them available via DNS in your VPC.

  * Amazon ECS users can now mount a temporary volume in memory in containers and specify the shared memory that a container can use through the use of docker's 'tmpfs' and 'shm-size' features respectively. These fields can be specified under linuxParameters in ContainerDefinition in the Task Definition Template.

  * Amazon Elastic Container Service (ECS) now supports container health checks. Customers can now specify a docker container health check command and parameters in their task definition. ECS will monitor, report and take scheduling action based on the health status.

  * Amazon ECS users can now set a health check initialization wait period of their ECS services, the services that are associated with an Elastic Load Balancer (ELB) will wait for a period of time before the ELB become healthy. You can now configure this in Create and Update Service.

  * Amazon Elastic Container Service (Amazon ECS) released a new launch type for running containers on a serverless infrastructure. The Fargate launch type allows you to run your containerized applications without the need to provision and manage the backend infrastructure. Just register your task definition and Fargate launches the container for you.

  * Added new mode for Task Networking in ECS, called awsvpc mode. Mode configuration parameters to be passed in via awsvpcConfiguration. Updated APIs now use/show this new mode - RegisterTaskDefinition, CreateService, UpdateService, RunTask, StartTask.

  * Amazon ECS users can now add devices to their containers and enable init process in containers through the use of docker's 'devices' and 'init' features. These fields can be specified under linuxParameters in ContainerDefinition in the Task Definition Template.

  * Amazon ECS users can now add and drop Linux capabilities to their containers through the use of docker's cap-add and cap-drop features. Customers can specify the capabilities they wish to add or drop for each container in their task definition.

  * Added support for cpu, memory, and memory reservation container overrides on the RunTask and StartTask APIs.

  * Amazon ECS now supports a state for container instances that can be used to drain a container instance in preparation for maintenance or cluster scale down.

  * Amazon EC2 Container Service (ECS) now supports the ability to customize the placement of tasks on container instances.



* Updates service documentation

  * Documentation updates for Amazon ECS tagging feature.
  * Documentation updates for Amazon ECS.

  * Documentation updates for Amazon ECS

  * Documentation updates for Windows containers.

  * Documentation updates for ecs



* Updates service API, documentation, and paginators

  * Exposes container instance registration time in ECS:DescribeContainerInstances.


* Updates documentation.



### `service/es`

* Updates service API and documentation

  * Feature: Support for three Availability Zone deployments
  * Amazon Elasticsearch Service now supports customer-scheduled service software updates. When new service software becomes available, you can request an update to your domain and benefit from new features more quickly. If you take no action, we update the service software automatically after a certain time frame.

  * Amazon Elasticsearch Service adds support for node-to-node encryption for new domains running Elasticsearch version 6.0 and above

  * Amazon Elasticsearch Service adds support for enabling Elasticsearch error logs, providing you valuable information for troubleshooting your Elasticsearch domains quickly and easily. These logs are published to the Amazon CloudWatch Logs service and can be turned on or off at will.

  * This adds Amazon Cognito authentication support to Kibana.

  * Added support for encryption of data at rest on Amazon Elasticsearch Service using AWS KMS

  * This release adds support for VPC access to Amazon Elasticsearch Service.
  * This release adds support for VPC access to Amazon Elasticsearch Service.

  * AWS Elasticsearch adds support for enabling slow log publishing. Using slow log publishing options customers can configure and enable index/query slow log publishing of their domain to preferred AWS Cloudwatch log group.



* Updates service API, documentation, and paginators

  * Amazon Elasticsearch Service adds support for no downtime, in-place upgrade for Elasticsearch version 5.1 and above.
  * This change brings support for Reserved Instances to AWS Elasticsearch.





### `service/gamelift`

* Updates service API and documentation

  * This release delivers a new API action for deleting unused matchmaking rule sets. More details are available at https://aws.amazon.com/releasenotes/?tag=releasenotes%23keywords%23amazon-gamelift.
  * AutoScaling Target Tracking scaling simplification along with StartFleetActions and StopFleetActions APIs to suspend and resume automatic scaling at will.

  * Updates to allow Fleets to run on On-Demand or Spot instances.

  * Amazon GameLift FlexMatch added the StartMatchBackfill API.  This API allows developers to add new players to an existing game session using the same matchmaking rules and player data that were used to initially create the session.

  * GameLift VPC resources can be peered with any other AWS VPC. R4 memory-optimized instances now available to deploy.

  * The Matchmaking Grouping Service is a new feature that groups player match requests for a given game together into game sessions based on developer configured rules.

  * Allow developers to download GameLift fleet creation logs to assist with debugging.

  * Allow developers to specify how metrics are grouped in CloudWatch for their GameLift fleets. Developers can also specify how many concurrent game sessions activate on a per-instance basis.

  * Allows developers to utilize an improved workflow when calling our Queues API and introduces a new feature that allows developers to specify a maximum allowable latency per Queue.



* Updates service API

  * Update spelling of MatchmakingTicket status values for internal consistency.


* Updates service API, documentation, and paginators

  * Allow developers to configure global queues for creating GameSessions. Allow PlayerData on PlayerSessions to store player-specific data.


* Update service API, and documentation.

  * New APIs to protect game developer resource (builds, alias, fleets, instances, game sessions and player sessions) against abuse.




### `service/robomaker`

* Updates service API and documentation

* Adds new service



### `service/fsx`

* Updates service API and documentation

* Adds new service



### `service/servicecatalog`

* Updates service documentation

  * Service Catalog Documentation Update for ProvisionedProductDetail
  * Documentation updates for servicecatalog.

  * Documentation updates for servicecatalog



* Updates service API and documentation

  * Adds support for Cloudformation StackSets in Service Catalog
  * Users can now pass a new option to ListAcceptedPortfolioShares called portfolio-share-type with a value of AWS_SERVICECATALOG in order to access Getting Started Portfolios that contain selected products representing common customer use cases.

  * This release of ServiceCatalog adds the DeleteTagOption API.

  * ServiceCatalog has two distinct personas for its use, an "admin" persona (who creates sets of products with different versions and prescribes who has access to them) and an "end-user" persona (who can launch cloud resources based on the configuration data their admins have given them access to).  This API update will allow admin users to deactivate/activate product versions, end-user will only be able to access and launch active product versions.



* Updates service API, documentation, and paginators

  * Service Catalog integration with AWS Organizations, enables customers to more easily create and manage a portfolio of IT services across an organization. Administrators can now take advantage of the AWS account structure and account groupings configured in AWS Organizations to share Service Catalog Portfolios increasing agility and reducing risk. With this integration the admin user will leverage the trust relationship that exists within the accounts of the Organization to share portfolios to the entire Organization, a specific Organizational Unit or a specific Account.
  * AWS Service Catalog enables you to reduce administrative maintenance and end-user training while adhering to compliance and security measures. With service actions, you as the administrator can enable end users to perform operational tasks, troubleshoot issues, run approved commands, or request permissions within Service Catalog. Service actions are defined using AWS Systems Manager documents, where you have access to pre-defined actions that implement AWS best practices, such asEC2 stop and reboot, as well as the ability to define custom actions.

  * This release of Service Catalog adds SearchProvisionedProducts API and ProvisionedProductPlan APIs.

  * This release of Service Catalog adds API support to copy products.

  * Proper tagging of resources is critical to post-launch operations such as billing, cost allocation, and resource management. By using Service Catalog's TagOption Library, administrators can define a library of re-usable TagOptions that conform to company standards, and associate these with Service Catalog portfolios and products. Learn how to move your current tags to the new library, create new TagOptions, and view and associate your library items with portfolios and products. Understand how to ensure that the right tags are created on products launched through Service Catalog and how to provide users with defined selectable tags.

  * Added ProvisioningArtifactSummaries to DescribeProductAsAdmin's output to show the provisioning artifacts belong to the product. Allow filtering by SourceProductId in SearchProductsAsAdmin for AWS Marketplace products. Added a verbose option to DescribeProvisioningArtifact to display the CloudFormation template used to create the provisioning artifact.Added DescribeProvisionedProduct API. Changed the type of ProvisionedProduct's Status to be distinct from Record's Status. New ProvisionedProduct's Status are AVAILABLE, UNDER_CHANGE, TAINTED, ERROR. Changed Record's Status set of values to CREATED, IN_PROGRESS, IN_PROGRESS_IN_ERROR, SUCCEEDED, FAILED.



* Updates service API

  * Introduced new length limitations for few of the product fields.




### `service/shield`

* Updates service API and documentation

  * The DescribeProtection request now accepts resource ARN as valid parameter.
  * AWS Shield Advanced API introduced a new service-specific AccessDeniedException which will be thrown when accessing individual attack information without sufficient permission.

  * DDoS Response Team access management for AWS Shield



* Updates service API, documentation, and paginators

  * The AWS Shield SDK has been updated in order to support Elastic IP address protections, the addition of AttackProperties objects in DescribeAttack responses, and a new GetSubscriptionState operation.


* Adds new service



### `service/workspaces`

* Updates service API

  * This release sets ClientProperties as a required parameter.
  * Added support for PowerPro and GraphicsPro WorkSpaces bundles.



* Updates service API and documentation

  * Added new APIs to Modify and Describe WorkSpaces client properties for users in a directory. With the new APIs, you can enable/disable remember me option in WorkSpaces client for users in a directory.
  * Added new Bring Your Own License (BYOL) automation APIs. With the new APIs, you can list available management CIDR ranges for dedicated tenancy, enable your account for BYOL, describe BYOL status of your account, and import BYOL images. Added new APIs to also describe and delete WorkSpaces images.

  * Added new IP Access Control APIs, an API to change the state of a Workspace, and the ADMIN_MAINTENANCE WorkSpace state. With the new IP Access Control APIs, you can now create/delete IP Access Control Groups, add/delete/update rules for IP Access Control Groups, Associate/Disassociate IP Access Control Groups to/from a WorkSpaces Directory, and Describe IP Based Access Control Groups.

  * Modify WorkSpaces have been updated with flexible storage and switching of hardware bundles feature. The following configurations have been added to ModifyWorkSpacesProperties: storage and compute. This update provides the capability to configure the storage of a WorkSpace. It also adds the capability of switching hardware bundle of a WorkSpace by specifying an eligible compute (Value, Standard, Performance, Power).



* Updates service API, documentation, and paginators

  * Doc-only Update for WorkSpaces




### `service/devicefarm`

* Updates service API and documentation

  * Introduces a new rule in Device Pools - "Availability". Customers can now ensure they pick devices that are available (i.e., not being used by other customers).
  * "This release provides support for running Appium Node.js and Appium Ruby tests on AWS Device Farm.

  * Customers can now schedule runs without a need to create a Device Pool. They also get realtime information on public device availability.

  * Disabling device filters

  * Customers can now schedule runs without a need to create a Device Pool. They also get realtime information on public device availability.

  * Support for running tests in a custom environment with live logs/video streaming, full test features parity and reduction in overall test execution time.

  * Adding VPCEndpoint support for Remote access. Allows customers to be able to access their private endpoints/services running in their VPC during remote access.

  * Adding support for VPCEndpoint feature. Allows customers to be able to access their private endpoints/services running in their VPC during test automation.

  * Added Private Device Management feature. Customers can now manage their private devices efficiently - view their status, set labels and apply profiles on them. Customers can also schedule automated tests and remote access sessions on individual instances in their private device fleet.

  * Add InteractionMode in CreateRemoteAccessSession for DirectDeviceAccess feature.

  * DeviceFarm has added support for two features - RemoteDebugging and Customer Artifacts. Customers  can now do remote Debugging on their Private Devices and can now retrieve custom files generated by their tests on the device and the device host (execution environment) on both public and private devices.

  * API Update for AWS Device Farm: Support for Deals and Promotions



* Updates service API, documentation, paginators, and examples

  * Network shaping allows users to simulate network connections and conditions while testing their Android, iOS, and web apps with AWS Device Farm.


* Update AWS Device Farm documentation



### `service/mediaconnect`

* Updates service API and documentation

* Adds new service



### `service/ecr`

* Updates service API

  * Amazon ECR updated the default endpoint URL to support AWS Private Link.


* Updates service API and documentation

  * This release adds support for ECR repository tagging.


* Updates service documentation

  * Documentation updates for Amazon ECR.


* Updates service API, documentation, and paginators

  * Adds support for new API set used to manage Amazon ECR repository lifecycle policies. Amazon ECR lifecycle policies enable you to specify the lifecycle management of images in a repository. The configuration is a set of one or more rules, where each rule defines an action for Amazon ECR to apply to an image. This allows the automation of cleaning up unused images, for example expiring images based on age or status. A lifecycle policy preview API is provided as well, which allows you to see the impact of a lifecycle policy on an image repository before you execute it


* Updates service paginators

* Update Amazon EC2 Container Registry service model

  * DescribeImages is a new api used to expose image metadata which today includes image size and image creation timestamp.




### `service/logs`

* Updates service documentation

  * Documentation updates for CloudWatch Logs


* Updates service API and documentation

  * Six new APIs added to support CloudWatch Logs Insights. The APIs are StartQuery, StopQuery, GetQueryResults, GetLogRecord, GetLogGroupFields, and DescribeQueries.
  * * Adding a log prefix parameter for filter log events API and minor updates to the documentation

  * Documentation Update

  * Adds support for associating LogGroups with KMS Keys.

  * Adds support for the PutResourcePolicy, DescribeResourcePolicy and DeleteResourcePolicy APIs.





### `service/rds`

* Updates service API and documentation

  * The Amazon RDS API allows you to add or remove Identity and Access Management (IAM) role associated with a specific feature name with an RDS database instance. This helps with capabilities such as invoking Lambda functions from within a trigger in the database, load data from Amazon S3 and so on
  * This release adds a new parameter to specify VPC security groups for restore from DB snapshot, restore to point int time and create read replica operations. For more information, see Amazon RDS Documentation.

  * API Update for RDS: this update enables Custom Endpoints, a new feature compatible with Aurora Mysql, Aurora PostgreSQL and Neptune that allows users to configure a customizable endpoint that will provide access to their instances in a cluster.

  * This release adds the listener connection endpoint for SQL Server Always On to the list of fields returned when performing a describe-db-instances operation.

  * This release adds a new parameter to specify the DB instance or cluster parameter group for restore from DB snapshot and restore to point int time operations. For more information, see Amazon RDS Documentation.

  * This release includes Deletion Protection for RDS databases.

  * Adds DB engine version requirements for option group option settings, and specifies if an option setting requires a value.

  * This launch enables RDS start-db-cluster and stop-db-cluster. Stopping and starting Amazon Aurora clusters helps you manage costs for development and test environments. You can temporarily stop all the DB instances in your cluster, instead of setting up and tearing down all the DB instances each time that you use the cluster.

  * This release adds customizable processor features for RDS instances.

  * This release adds CloudWatch Logs integration capabilities to RDS Aurora MySQL clusters

  * Changes to support the Aurora MySQL Backtrack feature.

  * The ModifyDBCluster operation now includes an EngineVersion parameter. You can use this to upgrade the engine for a clustered database.

  * Updates RDS API to indicate whether a DBEngine supports read replicas.

  * With this release you can now integrate RDS DB instances with CloudWatch Logs. We have added parameters to the operations for creating and modifying DB instances (for example CreateDBInstance) to allow you to take advantage of this capability through the CLI and API. Once you enable this feature, a stream of log events will publish to CloudWatch Logs for each log type you enable.

  * Read Replicas for Amazon RDS for MySQL, MariaDB, and PostgreSQL now support Multi-AZ deployments.Amazon RDS Read Replicas enable you to create one or more read-only copies of your database instance within the same AWS Region or in a different AWS Region. Updates made to the source database are asynchronously copied to the Read Replicas. In addition to providing scalability for read-heavy workloads, you can choose to promote a Read Replica to become standalone a DB instance when needed.Amazon RDS Multi-AZ Deployments provide enhanced availability for database instances within a single AWS Region. With Multi-AZ, your data is synchronously replicated to a standby in a different Availability Zone (AZ). In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby, minimizing disruption to your applications.You can now combine Read Replicas with Multi-AZ as part of a disaster recovery strategy for your production databases. A well-designed and tested plan is critical for maintaining business continuity after a disaster. Since Read Replicas can also be created in different regions than the source database, your Read Replica can be promoted to become the new production database in case of a regional disruption.You can also combine Read Replicas with Multi-AZ for your database engine upgrade process. You can create a Read Replica of your production database instance and upgrade it to a new database engine version. When the upgrade is complete, you can stop applications, promote the Read Replica to a standalone database instance and switch over your applications. Since the database instance is already a Multi-AZ deployment, no additional steps are needed.For more information, see the Amazon RDS User Guide.

  * Amazon RDS now supports importing MySQL databases by using backup files from Amazon S3.

  * DescribeOrderableDBInstanceOptions now returns the minimum and maximum allowed values for storage size, total provisioned IOPS, and provisioned IOPS per GiB for a DB instance.

  * You can now call DescribeValidDBInstanceModifications to learn what modifications you can make to your DB instance. You can use this information when you call ModifyDBInstance.

  * Introduces the --option-group-name parameter to the ModifyDBSnapshot CLI command. You can specify this parameter when you upgrade an Oracle DB snapshot. The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.  For more information, see http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG

  * Option group options now contain additional properties that identify requirements for certain options. Check these properties to determine if your DB instance must be in a VPC or have auto minor upgrade turned on before you can use an option. Check to see if you can downgrade the version of an option after you have installed it.

  * API Update for RDS: this update enables copy-on-write, a new Aurora MySQL Compatible Edition feature that allows users to restore their database, and support copy of TDE enabled snapshot cross region.

  * Amazon RDS customers can now easily and quickly stop and start their DB instances.

  * With Amazon Relational Database Service (Amazon RDS) running MySQL or Amazon Aurora, you can now authenticate to your DB instance using IAM database authentication.

  * Add support to using encrypted clusters as cross-region replication masters. Update CopyDBClusterSnapshot API to support encrypted cross region copy of Aurora cluster snapshots.

  * Snapshot Engine Version Upgrade

  * Cross Region Read Replica Copying (CreateDBInstanceReadReplica)

  * Cross Region Encrypted Snapshot Copying (CopyDBSnapshot)



* Updates service documentation

  * Documentation updates for Amazon RDS
  * Fix broken links in the RDS CLI Reference to the Aurora User Guide

  * Updating cross references for the new Aurora User Guide.

  * Documentation updates for rds

  * Changed lists of valid EngineVersion values to links to the RDS User Guide.

  * Correction to the documentation about copying unencrypted snapshots.

  * Documentation updates for RDS

  * Documentation updates for RDS

  * Aurora MySQL now supports MySQL 5.7.

  * Documentation updates for rds

  * Documentation updates for rds

  * Documentation updates for RDS.

  * Updated documentation for CopyDBSnapshot.

  * Doc-only Update for RDS: New versions available in CreateDBInstance



* Updates service API, documentation, and paginators

  * Amazon Aurora Global Database. This release introduces support for Global Database, a feature that allows a single Amazon Aurora database to span multiple AWS regions. Customers can use the feature to replicate data with no impact on database performance, enable fast local reads with low latency in each region, and improve disaster recovery from region-wide outages. You can create, modify and describe an Aurora Global Database, as well as add or remove regions from your Global Database.
  * Introduces DB Instance Automated Backups for the MySQL, MariaDB, PostgreSQL, Oracle and Microsoft SQL Server database engines. You can now retain Amazon RDS automated backups (system snapshots and transaction logs) when you delete a database instance. This allows you to restore a deleted database instance to a specified point in time within the backup retention period even after it has been deleted, protecting you against accidental deletion of data. For more information, see Amazon RDS Documentation.



* Updates service paginators

  * Adds a paginator for the DescribeDBClusters operation.


* Updates service API, documentation, and examples

  * Launch RDS Aurora Serverless
  * This release adds a new parameter to specify the retention period for Performance Insights data for RDS instances. You can either choose 7 days (default) or 731 days. For more information, see Amazon RDS Documentation.

  * The DescribeDBClusterSnapshots API now returns a SourceDBClusterSnapshotArn field which identifies the source DB cluster snapshot of a copied snapshot.



* Updates service API and waiters

  * Adds waiters for DBSnapshotAvailable and DBSnapshotDeleted.


* Fixing issue when not providing `SourceRegion` on cross

* Enables cross region for `CopyDBClusterSnapshot` and

* Updates service API and documentation.

  * Amazon Aurora integrates with other AWS services to allow you to extend your Aurora DB cluster to utilize other capabilities in the AWS cloud. Permission to access other AWS services is granted by creating an IAM role with the necessary permissions, and then associating the role with your DB cluster.




### `service/sms-voice`

* Updates service API and documentation

* Adds new service



### `service/acm-pca`

* Updates service API, documentation, and waiters

* Updates service documentation, waiters, paginators, and examples

* Updates service API, documentation, paginators, and examples

* Adds new service



### `service/apigatewaymanagementapi`

* Updates service API

* Adds new service



### `service/worklink`

* Adds new service



### `aws`

* Update Context to be an alias of context.Context for Go 1.9 ([#2412](https://github.com/aws/aws-sdk-go/pull/2412))

  * Updates aws.Context interface to be an alias of the standard libraries context.Context type instead of redefining the interface. This will allow IDEs and utilities to interpret the aws.Context as the exactly same type as the standard libraries context.Context.


* Add pointer conversion utilities to transform int64 to time.Time [#1433](https://github.com/aws/aws-sdk-go/pull/1433)

  * Adds `SecondsTimeValue` and `MillisecondsTimeValue` utilities.




### `service/dms`

* Updates service waiters

  * Update for DMS TestConnectionSucceeds waiter
  * Update the DMS TestConnectionSucceeds waiter.

  * Add waiters for TestConnectionSucceeds, EndpointDeleted, ReplicationInstanceAvailable, ReplicationInstanceDeleted, ReplicationTaskReady, ReplicationTaskStopped, ReplicationTaskRunning and ReplicationTaskDeleted.



* Updates service API, documentation, and waiters

  * Settings structures have been added to our DMS endpoint APIs to support Kinesis and Elasticsearch as targets. We are introducing the ability to configure custom DNS name servers on a replication instance as a beta feature.


* Updates service API and documentation

  * Added support for DmsTransfer endpoint type and support for re-validate option in table reload API.
  * Native Change Data Capture start point and task recovery support in Database Migration Service.

  * This change includes addition of new optional parameter to an existing API

  * Added tagging for DMS certificates.



* Updates service API, documentation, and paginators

  * This release includes the addition of two new APIs: describe replication instance task logs and reboot instance. The first allows user to see how much storage each log for a task on a given instance is occupying. The second gives users the option to reboot the application software on the instance and force a fail over for MAZ instances to test robustness of their integration with our service.
  * Support for migration task assessment. Support for data validation after the migration.





### `service/fms`

* Updates service API and documentation

* Adds new service



### `service/lightsail`

* Updates service API and documentation

  * This release adds functionality to the CreateDiskSnapshot API that allows users to snapshot instance root volumes. It also adds various documentation updates.
  * This update adds the following features: 1. Copy instance and disk snapshots within the same AWS Region or from one region to another in Amazon Lightsail. 2. Export Lightsail instance and disk snapshots to Amazon Elastic Compute Cloud (Amazon EC2). 3. Create an Amazon EC2 instance from an exported Lightsail instance snapshot using AWS CloudFormation stacks. 4. Apply tags to filter your Lightsail resources, or organize your costs, or control access.

  * Adds support for Lightsail managed databases.

  * Updates to existing Lightsail documentation

  * This release adds support for load balancer and TLS/SSL certificate management. This set of APIs allows customers to create, manage, and scale secure load balanced applications on Lightsail infrastructure. To provide support for customers who manage their DNS on Lightsail, we've added the ability create an Alias A type record which can point to a load balancer DNS name via the CreateDomainEntry API http://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateDomainEntry.html.

  * Lightsail now supports attached block storage, which allows you to scale your applications and protect application data with additional SSD-backed storage disks. This feature allows Lightsail customers to attach secure storage disks to their Lightsail instances and manage their attached disks, including creating and deleting disks, attaching and detaching disks from instances, and backing up disks via snapshot.

  * This release adds support for Windows Server-based Lightsail instances. The GetInstanceAccessDetails API now returns the password of your Windows Server-based instance when using the default key pair. GetInstanceAccessDetails also returns a PasswordData object for Windows Server instances containing the ciphertext and keyPairName. The Blueprint data type now includes a list of platform values (LINUX_UNIX or WINDOWS). The Bundle data type now includes a list of SupportedPlatforms values (LINUX_UNIX or WINDOWS).

  * This release adds a new nextPageToken property to the result of the GetOperationsForResource API. Developers can now get the next set of items in a list by making subsequent calls to GetOperationsForResource API with the token from the previous call. This release also deprecates the nextPageCount property, which previously returned null (use the nextPageToken property instead). This release also deprecates the customImageName property on the CreateInstancesRequest class, which was previously ignored by the API.



* Updates service API

  * Add Managed Database operations to OperationType enum.


* Updates service API, documentation, and paginators

  * This release adds new APIs that make it easier to set network port configurations on Lightsail instances. Developers can now make a single request to both open and close public ports on an instance using the PutInstancePublicPorts operation.


* Adds new service



### `aws/request

* Improve error handling in shouldRetryCancel ([#2298](https://github.com/aws/aws-sdk-go/pull/2298))

  * Simplifies and improves SDK's detection of HTTP request errors that should be retried. Previously the SDK would incorrectly attempt to retry `EHOSTDOWN` connection errors. This change fixes this, by using the `Temporary` interface when available.




### `service/backup`

* Adds new service



### `service/dynamodb`

* Updates service API and documentation

  * Amazon DynamoDB now integrates with AWS Backup, a centralized backup service that makes it easy for customers to configure and audit the AWS resources they want to backup, automate backup scheduling, set retention policies, and monitor all recent backup and restore activity. AWS Backup provides a fully managed, policy-based backup solution, simplifying your backup management, and helping you meet your business and regulatory backup compliance requirements. For more information, see the Amazon DynamoDB Developer Guide.
  * Added provisionedThroughPut exception on the request level for transaction APIs.

  * Amazon DynamoDB now supports the following features: DynamoDB on-demand and transactions. DynamoDB on-demand is a flexible new billing option for DynamoDB capable of serving thousands of requests per second without capacity planning. DynamoDB on-demand offers simple pay-per-request pricing for read and write requests so that you only pay for what you use, making it easy to balance costs and performance. Transactions simplify the developer experience of making coordinated, all-or-nothing changes to multiple items both within and across tables. The new transactional APIs provide atomicity, consistency, isolation, and durability (ACID) in DynamoDB, helping developers support sophisticated workflows and business logic that requires adding, updating, or deleting multiple items using native, server-side transactions. For more information, see the Amazon DynamoDB Developer Guide.

  * New feature for Amazon DynamoDB.

  * Added SSESpecification block to update-table command which allows users to modify table Server-Side Encryption. Added two new fields (SSEType and KMSMasterKeyId) to SSESpecification block used by create-table and update-table commands. Added new SSEDescription Status value UPDATING.

  * Amazon DynamoDB Point-in-time recovery (PITR) provides continuous backups of your table data. DynamoDB now supports the ability to self-restore a deleted PITR enabled table. Now, when a table with PITR enabled is deleted, a system backup is automatically created and retained for 35 days (at no additional cost). System backups allow you to restore the deleted PITR enabled table to the state it was just before the point of deletion. For more information, see the Amazon DynamoDB Developer Guide.

  * With this SDK update, APIs UpdateGlobalTableSettings and DescribeGlobalTableSettings now allow consistently configuring AutoScaling settings for a DynamoDB global table. Previously, they would only allow consistently setting IOPS. Now new APIs are being released, existing APIs are being extended.

  * Added two new fields SSEType and KMSMasterKeyArn to SSEDescription block in describe-table output.

  * Adds two new APIs UpdateGlobalTableSettings and DescribeGlobalTableSettings. This update introduces new constraints in the CreateGlobalTable and UpdateGlobalTable APIs . Tables must have the same write capacity units. If Global Secondary Indexes exist then they must have the same write capacity units and key schema.

  * Point-in-time recovery (PITR) provides continuous backups of your DynamoDB table data. With PITR, you do not have to worry about creating, maintaining, or scheduling backups. You enable PITR on your table and your backup is available for restore at any point in time from the moment you enable it, up to a maximum of the 35 preceding days. PITR provides continuous backups until you explicitly disable it. For more information, see the Amazon DynamoDB Developer Guide.

  * Amazon DynamoDB now supports server-side encryption using a default service key (alias/aws/dynamodb) from the AWS Key Management Service (KMS). AWS KMS is a service that combines secure, highly available hardware and software to provide a key management system scaled for the cloud. AWS KMS is used via the AWS Management Console or APIs to centrally create encryption keys, define the policies that control how keys can be used, and audit key usage to prove they are being used correctly. For more information, see the Amazon DynamoDB Developer Guide.

  * Amazon DynamoDB now supports the following features: Global Table and On-Demand Backup. Global Table is a fully-managed, multi-region, multi-master database. DynamoDB customers can now write anywhere and read anywhere with single-digit millisecond latency by performing database operations closest to where end users reside. Global Table also enables customers to disaster-proof their applications, keeping them running and data accessible even in the face of natural disasters or region disruptions. Customers can set up Global Table with just a few clicks in the AWS Management Console-no application rewrites required. On-Demand Backup capability is to protect data from loss due to application errors, and meet customers' archival needs for compliance and regulatory reasons. Customers can backup and restore their DynamoDB table data anytime, with a single-click in the AWS management console or a single API call. Backup and restore actions execute with zero impact on table performance or availability. For more information, see the Amazon DynamoDB Developer Guide.

  * Release notes: Time to Live (TTL) is a feature that allows you to define when items in a table expire and can be purged from the database, so that you don't have to track expired data and delete it manually. With TTL enabled on a DynamoDB table, you can set a timestamp for deletion on a per-item basis, allowing you to limit storage usage to only those records that are relevant.



* Updates service documentation and examples

  * Corrected a typo.


* Fix DynamoDB using custom retryer (#1170)

  * Fixes (#1139) the DynamoDB service client clobbering any custom retryer that was passed into the service client or Session's config.


* Updates service API, documentation, and paginators

  * Tagging Support for Amazon DynamoDB Tables and Indexes


* Updates service API, documentation, and examples

  * Snippets for the DynamoDB API.




### `service/storagegateway`

* Updates service API and documentation

  * JoinDomain API supports two more  parameters: organizational unit(OU) and domain controllers.  Two new APIs are introduced: DetachVolume and AttachVolume.
  * API list-local-disks returns a list of the gateway's local disks. This release adds a field DiskAttributeList to these disks.

  * AWS Storage Gateway now enables you to specify folders and subfolders when you update your file gateway's view of your S3 objects using the Refresh Cache API.

  * AWS Storage Gateway now enables you to create cached volumes and tapes with AWS KMS support.

  * AWS Storage Gateway (File) support for two new file share attributes are added.           1. Users can specify the S3 Canned ACL to use for new objects created in the file share.         2. Users can create file shares for requester-pays buckets.

  * AWS Storage Gateway now enables you to get notification when all your files written to your NFS file share have been uploaded to Amazon S3. Storage Gateway also enables guessing of the MIME type for uploaded objects based on file extensions.

  * Add optional field ForceDelete to DeleteFileShare api.

  * Two Storage Gateway data types, Tape and TapeArchive, each have a new response element, TapeUsedInBytes. This element helps you manage your virtual tapes. By using TapeUsedInBytes, you can see the amount of data written to each virtual tape.

  * File gateway mode in AWS Storage gateway provides access to objects in S3 as files on a Network File System (NFS) mount point. Once a file share is created, any changes made externally to the S3 bucket will not be reflected by the gateway. Using the cache refresh feature in this update, the customer can trigger an on-demand scan of the keys in their S3 bucket and refresh the file namespace cached on the gateway. It takes as an input the fileShare ARN and refreshes the cache for only that file share. Additionally there is new functionality on file gateway that allows you configure what squash options they would like on their file share, this allows a customer to configure their gateway to not squash root permissions. This can be done by setting options in NfsOptions for CreateNfsFileShare and UpdateNfsFileShare APIs.



* Updates service API, documentation, and examples

  * AWS Storage Gateway now enables you to create stored volumes with AWS KMS support.
  * AWS Storage Gateway now enables you to use Server Message Block (SMB) protocol  to store and access objects in Amazon Simple Storage Service (S3).

  * File gateway is a new mode in the AWS Storage Gateway that support a file interface into S3, alongside the current block-based volume and VTL storage. File gateway combines a service and virtual software appliance, enabling you to store and retrieve objects in Amazon S3 using industry standard file protocols such as NFS. The software appliance, or gateway, is deployed into your on-premises environment as a virtual machine (VM) running on VMware ESXi. The gateway provides access to objects in S3 as files on a Network File System (NFS) mount point.



* Updates service API, documentation, and paginators

  * File gateway mode in AWS Storage gateway provides access to objects in S3 as files on a Network File System (NFS) mount point. This is done by creating Nfs file shares using existing APIs CreateNfsFileShare. Using the feature in this update, the customer can restrict the clients that have read/write access to the gateway by specifying the list of clients as a list of IP addresses or CIDR blocks. This list can be specified using the API CreateNfsFileShare while creating new file shares, or UpdateNfsFileShare while update existing file shares. To find out the list of clients that have access, the existing API DescribeNfsFileShare will now output the list of clients that have access.




### `service/elasticmapreduce`

* Updates service API and documentation

  * Documentation updates for Amazon EMR
  * Documentation updates for EMR.

  * Enable Kerberos on Amazon EMR.

  * Amazon EMR now includes the ability to use a custom Amazon Linux AMI and adjustable root volume size when launching a cluster.





### `service/rds-data`

* Updates service API, documentation, paginators, and examples

* Adds new service



### `service/codedeploy`

* Updates service documentation

  * Documentation updates for codedeploy
  * Documentation updates for codedeploy



* Updates service API and documentation

  * Support for Amazon ECS service deployment - AWS CodeDeploy now supports the deployment of Amazon ECS services. An Amazon ECS deployment uses an Elastic Load Balancer, two Amazon ECS target groups, and a listener to reroute production traffic from your Amazon ECS service's original task set to a new replacement task set. The original task set is terminated when the deployment is complete. Success of a deployment can be validated using Lambda functions that are referenced by the deployment. This provides the opportunity to rollback if necessary. You can use the new ECSService, ECSTarget, and ECSTaskSet data types in the updated SDK to create or retrieve an Amazon ECS deployment.
  * AWS CodeDeploy has a new exception that indicates when a GitHub token is not valid.

  * The AWS CodeDeploy API was updated to support DeleteGitHubAccountToken, a new method that deletes a GitHub account connection.

  * Adds support for specifying Application Load Balancers in deployment groups, for both in-place and blue/green deployments.

  * AWS CodeDeploy now supports the use of multiple tag groups in a single deployment group (an intersection of tags) to identify the instances for a deployment. When you create or update a deployment group, use the new ec2TagSet and onPremisesTagSet structures to specify up to three groups of tags. Only instances that are identified by at least one tag in each of the tag groups are included in the deployment group.

  * AWS CodeDeploy has improved how it manages connections to GitHub accounts and repositories. You can now create and store up to 25 connections to GitHub accounts in order to associate AWS CodeDeploy applications with GitHub repositories. Each connection can support multiple repositories. You can create connections to up to 25 different GitHub accounts, or create more than one connection to a single account. The ListGitHubAccountTokenNames command has been introduced to retrieve the names of stored connections to GitHub accounts that you have created. The name of the connection to GitHub used for an AWS CodeDeploy application is also included in the ApplicationInfo structure.  Two new fields, lastAttemptedDeployment and lastSuccessfulDeployment, have been added to DeploymentGroupInfo to improve the handling of deployment group information in the AWS CodeDeploy console. Information about these latest deployments can also be retrieved using the GetDeploymentGroup and BatchGetDeployment group requests. Also includes a region update  (us-gov-west-1).

  * This release introduces the previousRevision field in the responses to the GetDeployment and BatchGetDeployments actions. previousRevision provides information about the application revision that was deployed to the deployment group before the most recent successful deployment.  Also, the fileExistsBehavior parameter has been added for CreateDeployment action requests. In the past, if the AWS CodeDeploy agent detected files in a target location that weren't part of the application revision from the most recent successful deployment, it would fail the current deployment by default. This new parameter provides options for how the agent handles these files: fail the deployment, retain the content, or overwrite the content.

  * CodeDeploy will support Iam Session Arns in addition to Iam User Arns for on premise host authentication.



* Updates service paginators

  * Add paginators for Codedeploy


* Updates service API, documentation, and paginators

  * This release of AWS CodeDeploy introduces support for blue/green deployments. In a blue/green deployment, the current set of instances in a deployment group is replaced by new instances that have the latest application revision installed on them. After traffic is rerouted behind a load balancer to the replacement instances, the original instances can be terminated automatically or kept running for other uses.




### `service/sagemaker`

* Updates service API and documentation

  * SageMaker Training Jobs now support Inter-Container traffic encryption.
  * Batch Transform Jobs now supports TFRecord as a Split Type. ListCompilationJobs API action now supports SortOrder and SortBy inputs.

  * Amazon SageMaker Automatic Model Tuning now supports early stopping of training jobs. With early stopping, training jobs that are unlikely to generate good models will be automatically stopped during a Hyperparameter Tuning Job.

  * SageMaker now makes the final set of metrics published from training jobs available in the DescribeTrainingJob results.  Automatic Model Tuning now supports warm start of hyperparameter tuning jobs.  Notebook instances now support a larger number of instance types to include instances from the ml.t3, ml.m5, ml.c4, ml.c5 families.

  * SageMaker notebook instances can now have a volume size configured.

  * VolumeKmsKeyId now available in Batch Transform Job

  * Added an optional boolean parameter, 'DisassociateLifecycleConfig', to the UpdateNotebookInstance operation. When set to true, the lifecycle configuration associated with the notebook instance will be removed, allowing a new one to be set via a new 'LifecycleConfigName' parameter.

  * SageMaker updated the default endpoint URL to support Private Link via the CLI/SDK.

  * Added SecondaryStatusTransitions to DescribeTrainingJob to provide more visibility into SageMaker training job progress and lifecycle.

  * Amazon SageMaker NotebookInstances supports 'Updating' as a NotebookInstanceStatus.  In addition, DescribeEndpointOutput now includes Docker repository digest of deployed Model images.

  * SageMaker has added support for VPC configuration for both Endpoints and Training Jobs. This allows you to connect from the instances running the Endpoint or Training Job to your VPC and any resources reachable in the VPC rather than being restricted to resources that were internet accessible.

  * SageMaker is now supporting many additional instance types in previously supported families for Notebooks, Training Jobs, and Endpoints. Training Jobs and Endpoints now support instances in the m5 family in addition to the previously supported instance families. For specific instance types supported please see the documentation for the SageMaker API.

  * CreateTrainingJob and CreateEndpointConfig now supports KMS Key for volume encryption.

  * SageMaker Models no longer support SupplementalContainers.  API's that have been affected are CreateModel and DescribeModel.



* Updates service API, documentation, and paginators

  * Amazon SageMaker now has Algorithm and Model Package entities that can be used to create Training Jobs, Hyperparameter Tuning Jobs and hosted Models. Subscribed Marketplace products can be used on SageMaker to create Training Jobs, Hyperparameter Tuning Jobs and Models. Notebook Instances and Endpoints can leverage Elastic Inference accelerator types for on-demand GPU computing. Model optimizations can be performed with Compilation Jobs. Labeling Jobs can be created and supported by a Workforce. Models can now contain up to 5 containers allowing for inference pipelines within Endpoints. Code Repositories (such as Git) can be linked with SageMaker and loaded into Notebook Instances. Network isolation is now possible on Models, Training Jobs, and Hyperparameter Tuning Jobs, which restricts inbound/outbound network calls for the container. However, containers can talk to their peers in distributed training mode within the same security group. A Public Beta Search API was added that currently supports Training Jobs.
  * Amazon SageMaker has added the capability for customers to run fully-managed, high-throughput batch transform machine learning models with a simple API call. Batch Transform is ideal for high-throughput workloads and predictions in non-real-time scenarios where data is accumulated over a period of time for offline processing.

  * Amazon SageMaker has added the ability to run hyperparameter tuning jobs. A hyperparameter tuning job will create and evaluate multiple training jobs while tuning algorithm hyperparameters, to optimize a customer specified objective metric.

  * This release provides support for ml.p3.xlarge instance types for notebook instances.  Lifecycle configuration is now available to customize your notebook instances on start; the configuration can be reused between multiple notebooks.  If a notebook instance is attached to a VPC you can now opt out of internet access that by default is provided by SageMaker.



* Updates service waiters

  * Waiter for SageMaker Batch Transform Jobs.


* Updates service API

  * CreateModel API Update:  The request parameter 'ExecutionRoleArn' has changed from optional to required.


* Adds new service

  * Initial waiters for common SageMaker workflows.




### `service/docdb`

* Adds new service

  * Amazon DocumentDB (with MongoDB compatibility) is a fast, reliable, and fully-managed database service. Amazon DocumentDB makes it easy for developers to set up, run, and scale MongoDB-compatible databases in the cloud.




### `service/redshift`

* Updates service API and documentation

  * DescribeSnapshotSchedules returns a list of snapshot schedules. With this release, this API will have a list of clusters and number of clusters associated with the schedule.
  * With this release, Redshift is providing API's for better snapshot management by supporting user defined automated snapshot schedules, retention periods for manual snapshots, and aggregate snapshot actions including batch deleting user snapshots, viewing account level snapshot storage metrics, and better filtering and sorting on the describe-cluster-snapshots API. Automated snapshots can be scheduled to be taken at a custom interval and the schedule created can be reused across clusters. Manual snapshot retention periods can be set at the cluster, snapshot, and cross-region-copy level. The retention period set on a manual snapshot indicates how many days the snapshot will be retained before being automatically deleted.

  * Amazon Redshift provides the option to defer non-mandatory maintenance updates to a later date.

  * Adding support to Redshift to change the encryption type after cluster creation completes.

  * You can now resize your Amazon Redshift cluster quickly. With the new ResizeCluster action, your cluster is available for read and write operations within minutes

  * When we make a new version of Amazon Redshift available, we update your cluster during its maintenance window. By selecting a maintenance track, you control whether we update your cluster with the most recent approved release, or with the previous release. The two values for maintenance track are current and trailing. If you choose the current track, your cluster is updated with the latest approved release. If you choose the trailing track, your cluster is updated with the release that was approved previously.The new API operation for managing maintenance tracks for a cluster is DescribeClusterTracks. In addition, the following API operations have new MaintenanceTrackName parameters:  Cluster,  PendingModifiedValues,  ModifyCluster,  RestoreFromClusterSnapshot,  CreateCluster,  Snapshot

  * Feature 1 - On-demand cluster release version - When Amazon Redshift releases a new cluster version, you can choose to upgrade to that version immediately instead of waiting until your next maintenance window. You can also choose to roll back to a previous version. The two new APIs added for managing cluster release version are - ModifyClusterDbRevision, DescribeClusterDbRevisions. Feature 2 - Upgradeable reserved instance - You can now exchange one Reserved Instance for a new Reserved Instance with no changes to the terms of your existing Reserved Instance (term, payment type, or number of nodes). The two new APIs added for managing these upgrades are - AcceptReservedNodeExchange, GetReservedNodeExchangeOfferings.

  * DescribeClusterSnapshotsMessage with ClusterExists flag returns snapshots of existing clusters. Else both existing and deleted cluster snapshots are returned

  * DescribeEventSubscriptions API supports tag keys and tag values as request parameters.



* Updates service documentation

  * Documentation updates for Amazon Redshift
  * Documentation updates for redshift

  * Documentation updates for redshift

  * Documentation updates for redshift



* Updates service API, documentation, and paginators

  * This update adds the GetClusterCredentials API which is used to get temporary login credentials to the cluster. AccountWithRestoreAccess now has a new member AccountAlias, this is the identifier of the AWS support account authorized to restore the specified snapshot. This is added to support the feature where the customer can share their snapshot with the Amazon Redshift Support Account without having to manually specify the AWS Redshift Service account ID on the AWS Console/API.




### `service/appmesh`

* Updates service API and documentation

* Adds new service



### `service/iotanalytics`

* Updates service API and documentation

* Updates service API, documentation, and paginators

* Adds new service



### `aws/credentials`

* Add support for getting credential's ExpiresAt. ([#2375](https://github.com/aws/aws-sdk-go/pull/2375))

  * Adds an Expirer interface that Providers can implement, and add a suitable implementation to Expiry class used by most Providers. Add a method on Credentials to get the expiration time of the underlying Provider, if Expirer is supported, without exposing Provider to callers.
  * Fix [#1329](https://github.com/aws/aws-sdk-go/pull/1329)


* Add EnvProviderName constant. ([#1531](https://github.com/aws/aws-sdk-go/issues/1531))

  * Adds the "EnvConfigCredentials" string literal as EnvProviderName constant.
  * Fixes [#1444](https://github.com/aws/aws-sdk-go/issues/1444)


* Fixes shared credential provider's default filename on Windows. [#1308](https://github.com/aws/aws-sdk-go/pull/1308)

  * The shared credentials provider would attempt to use the wrong filename on Windows if the `HOME` environment variable was defined.




### `aws/ec2metadata`

* bounds check region identifier before split ([#2380](https://github.com/aws/aws-sdk-go/pull/2380))

  * Adds empty response checking to ec2metadata's Region request to prevent a out of bounds panic if empty response received.


* Add support for EC2 User Data [#872](https://github.com/aws/aws-sdk-go/issues/872)



### general

* Fix SDK's generated API reference doc page's constants section links ([#2373](https://github.com/aws/aws-sdk-go/pull/2373))

  * Fixes the SDK's generated API reference documentation page's constants section links to to be clickable.


* deps: Update Go Deps lock file to correct tracking hash [#2354](https://github.com/aws/aws-sdk-go/pull/2354)

* Update SDK client integration tests to be code generated. ([#2308](https://github.com/aws/aws-sdk-go/pull/2308))

* private/mode/api: Update SDK to require URI path members not be empty ([#2323](https://github.com/aws/aws-sdk-go/pull/2323))

  * Updates the SDK's validation to require that members serialized to URI path must not have empty (zero length) values. Generally these fields are modeled as required, but not always. Fixing this will prevent bugs with REST URI paths requests made for unexpected resources.


* aws/session: Fix formatting bug in doc. ([#2294](https://github.com/aws/aws-sdk-go/pull/2294))

  * Fixes a minor issue in aws/session/doc.go where mistakenly used format specifiers in logger.Println.


* Fix SDK model cleanup to remove old model folder ([#2324](https://github.com/aws/aws-sdk-go/pull/2324))

  * Fixes the SDK's model cleanup to remove the entire old model folder not just the api-2.json file.


* Fix SDK's vet usage to use go vet with build tags ([#2300](https://github.com/aws/aws-sdk-go/pull/2300))

  * Updates the SDK's usage of vet to use go vet instead of go tool vet. This allows the SDK to pass build tags and packages instead of just folder paths to the tool.


* Fixup endpoint discovery unit test to be stable ([#2305](https://github.com/aws/aws-sdk-go/pull/2305))

  * Fixes the SDK's endpoint discovery async unit test to be stable, and produce consistent unit test results.


* Add support for EventStream based APIs (S3 SelectObjectContent) ([#1941](https://github.com/aws/aws-sdk-go/pull/1941))

  * Adds support for EventStream asynchronous APIs such as S3 SelectObjectContents API. This API allows your application to receiving multiple events asynchronously from the API response. Your application recieves these events from a channel on the API response.
  * See PR [#1941](https://github.com/aws/aws-sdk-go/pull/1941) for example.
  * Fixes [#1895](https://github.com/aws/aws-sdk-go/issues/1895)


* Fix XML unmarshaler not correctly unmarshaling list of timestamp values ([#1894](https://github.com/aws/aws-sdk-go/pull/1894))

  * Fixes a bug in the XML unmarshaler that would incorrectly try to unmarshal "time.Time" parameters that did not have the struct tag type on them. This would occur for nested lists like CloudWatch's GetMetricDataResponse MetricDataResults timestamp parameters.
  * Fixes [#1892](https://github.com/aws/aws-sdk-go/issues/1892)


* Add dep Go dependency management metadata files (#1544)

  * Adds the Go `dep` dependency management metadata files to the SDK.
  * Fixes [#1451](https://github.com/aws/aws-sdk-go/issues/1451)
  * Fixes [#634](https://github.com/aws/aws-sdk-go/issues/634)


* Fix greengrass service model being duplicated with different casing. ([#1541](https://github.com/aws/aws-sdk-go/pull/1541))

  * Fixes [#1540](https://github.com/aws/aws-sdk-go/issues/1540)
  * Fixes [#1539](https://github.com/aws/aws-sdk-go/issues/1539)


* Update codegen header to use Go std wording (#1172)

  * Go recently accepted the proposal for standard generated file header wording in, https://golang.org/s/generatedcode.


* private/protocol/rest: Use RawPath instead of Opaque (#993)

  * Fixes: HTTP2 request failing with REST protocol services, e.g AWS X-Ray


* private/model/api: Generate REST-JSON JSONVersion correctly (#998)

  * Fixes: REST-JSON protocol service code missing JSONVersion metadata.


* private/protocol/xml/xmlutil: Fix SDK XML unmarshaler #975

  * Fixes GetBucketACL Grantee required type always nil. #916


* aws/endpoints: Add endpoint metadata to SDK #961

  * Adds Region and Endpoint metadata to the SDK. This allows you to enumerate regions and endpoint metadata based on a defined model embedded in the SDK.


* Add build tags to internal SDK tools [#880](https://github.com/aws/aws-sdk-go/issues/880)



### `service/cognito-idp`

* Updates service API and documentation



### `service/comprehend`

* Updates service API and documentation

* Updates service API

* Updates service API, documentation, and paginators



### `service/firehose`

* Updates service API and documentation

  * Support for specifying customized s3 keys and supplying a separate prefix for failed-records
  * With this release, Amazon Kinesis Data Firehose allows you to enable/disable server-side encryption(SSE) for your delivery streams ensuring encryption of data at rest. For technical documentation, look at https://docs.aws.amazon.com/firehose/latest/dev/encryption.html

  * With this release, Amazon Kinesis Data Firehose can convert the format of your input data from JSON to Apache Parquet or Apache ORC before storing the data in Amazon S3. Parquet and ORC are columnar data formats that save space and enable faster queries compared to row-oriented formats like JSON.

  * With this release, Amazon Kinesis Data Firehose allows you to tag your delivery streams. Tags are metadata that you can create and use to manage your delivery streams. For more information about tagging, see AWS Tagging Strategies. For technical documentation, look for the tagging operations in the Amazon Kinesis Firehose API reference.

  * This release includes a new Kinesis Firehose feature that supports Splunk as Kinesis Firehose delivery destination. You can now use Kinesis Firehose to ingest real-time data to Splunk in a serverless, reliable, and salable manner. This release also includes a new feature that allows you to configure Lambda buffer size in Kinesis Firehose data transformation feature. You can now customize the data buffer size before invoking Lambda function in Kinesis Firehose for data transformation. This feature allows you to flexibly trade-off processing and delivery latency with cost and efficiency based on your specific use cases and requirements.



* Updates service API, documentation, and paginators

  * This change will allow customers to attach a Firehose delivery stream to an existing Kinesis stream directly. You no longer need a forwarder to move data from a Kinesis stream to a Firehose delivery stream. You can now run your streaming applications on your Kinesis stream and easily attach a Firehose delivery stream to it for data delivery to S3, Redshift, or Elasticsearch concurrently.


* Updates service API, documentation, and examples

  * Processing feature enables users to process and modify records before Amazon Firehose delivers them to destinations.




### `service/transcribe`

* Updates service API and documentation

* Updates service API, documentation, and paginators

* Adds new service



### `service/dynamodb/expression`

* Clarify expression examples ([#2367](https://github.com/aws/aws-sdk-go/pull/2367))

  * Clarifies the expression package's examples to distinguish the pkg expression from a expr value.


* Add expression building utility for DynamoDB ([#1527](https://github.com/aws/aws-sdk-go/pull/1527))

  * Adds a new package, expression, to the SDK providing builder utilities to create DynamoDB expressions safely taking advantage of type safety.




### `service/waf`

* Updates service API and documentation

  * This release adds rule-level control for rule group. If a rule group contains a rule that blocks legitimate traffic, previously you had to override the entire rule group to COUNT in order to allow the traffic. You can now use the UpdateWebACL API to exclude specific rules within a rule group. Excluding rules changes the action for the individual rules to COUNT. Excluded rules will be recorded in the new "excludedRules" attribute of the WAF logs.
  * This change includes support for the WAF FullLogging feature through which Customers will have access to all the logs of requests that are inspected by a WAF WebACL. The new APIs allow Customers to manage association of a WebACL with one or more supported "LogDestination" and redact any request fields from the logs.

  * The new PermissionPolicy APIs in AWS WAF Regional allow customers to attach resource-based policies to their entities.

  * This release adds support for rule group and managed rule group. Rule group is a container of rules that customers can create, put rules in it and associate the rule group to a WebACL. All rules in a rule group will function identically as they would if each rule was individually associated to the WebACL. Managed rule group is a pre-configured rule group composed by our security partners and made available via the AWS Marketplace. Customers can subscribe to these managed rule groups, associate the managed rule group to their WebACL and start using them immediately to protect their resources.

  * This release adds support for regular expressions as match conditions in rules, and support for geographical location by country of request IP address as a match condition in rules.

  * You can now create, edit, update, and delete a new type of WAF rule with a rate tracking component.



* Updates service API, documentation, and paginators

  * Aws WAF - For GetSampledRequests action, changed max number of samples from 100 to 500.


* Updates service documentation.

* Update AWS WAF service model



### `service/waf-regional`

* Updates service API and documentation



### `service/apigatewayv2`

* Adds new service

  * This is the initial SDK release for the Amazon API Gateway v2 APIs. This SDK will allow you to manage and configure APIs in Amazon API Gateway; this first release provides the capabilities that allow you to programmatically setup and manage WebSocket APIs end to end.




### `service/elasticbeanstalk`

* Updates service API and documentation

  * This release adds a new resource that Elastic Beanstalk will soon support, EC2 launch template, to environment resource descriptions.
  * Support tracking Elastic Beanstalk resources in AWS Config.

  * AWS Elastic Beanstalk is launching a new public API named DescribeAccountAttributes which allows customers to access account level attributes. In this release, the API will support quotas for resources such as applications, application versions, and environments.

  * Added the ability to add, delete or update Tags

  * Add support for paginating the result of DescribeEnvironments     Include the ARN of described environments in DescribeEnvironments output



* Updates service API, documentation, and examples

  * Elastic Beanstalk adds the "Privileged" field to the "CPUUtilization" type, to support enhanced health reporting in Windows environments.
  * Elastic Beanstalk adds "Suspended" health status to the EnvironmentHealthStatus enum type and updates document.



* Updates service documentation

  * Documentation updates for the new Elastic Beanstalk API DescribeAccountAttributes.
  * Documentation updates for AWS Elastic Beanstalk.



* Updates service API, documentation, and paginators

  * Elastic Beanstalk adds support for creating and managing custom platform.


* Update service API, documentation, and pagination.

  * Elastic Beanstalk DescribeApplicationVersions API is being updated to support pagination.




### `service/globalaccelerator`

* Updates service documentation

* Adds new service



### `service/quicksight`

* Updates service API and documentation

  * Amazon QuickSight's RegisterUser API now generates a user invitation URL when registering a user with the QuickSight identity type. This URL can then be used by the registered QuickSight user to complete the user registration process. This release also corrects some HTTP return status codes.


* Adds new service

  * Amazon QuickSight is a fully managed, serverless, cloud business intelligence system that allows you to extend data and insights to every user in your organization. The first release of APIs for Amazon QuickSight introduces embedding and user/group management capabilities. The get-dashboard-embed-url API allows you to obtain an authenticated dashboard URL that can be embedded in application domains whitelisted for QuickSight dashboard embedding. User APIs allow you to programmatically expand and manage your QuickSight deployments while group APIs allow easier permissions management for resources within QuickSight.




### `service/alexaforbusiness`

* Updates service API and documentation

* Updates service API, documentation, and paginators

* Updates service documentation

* Updates service API



### `service/cloudformation`

* Updates service documentation

  * Documentation updates for cloudformation
  * Minor doc update for CloudFormation.



* Updates service API and documentation

  * Use the CAPABILITY_AUTO_EXPAND capability to create or update a stack directly from a stack template that contains macros, without first reviewing the resulting changes in a change set first.
  * 1) Filtered Update for StackSet based on Accounts and Regions: This feature will allow flexibility for the customers to roll out updates on a StackSet based on specific Accounts and Regions.   2) Support for customized ExecutionRoleName: This feature will allow customers to attach ExecutionRoleName to the StackSet thus ensuring more security and controlling the behavior of any AWS resources in the target accounts.

  * Enabling resource level permission control for StackSets APIs. Adding support for customers to use customized AdministrationRole to create security boundaries between different users.

  * 1) Instance-level parameter overrides (CloudFormation-StackSet feature): This feature will allow the customers to override the template parameters on specific stackInstances. Customers will also have ability to update their existing instances with/without parameter-overrides using a new API "UpdateStackInstances"                                                                                                                                                                                                                                                         2) Add support for SSM parameters in CloudFormation - This feature will allow the customers to use Systems Manager parameters in CloudFormation templates. They will be able to see values for these parameters in Describe APIs.

  * You can now prevent a stack from being accidentally deleted by enabling termination protection on the stack. If you attempt to delete a stack with termination protection enabled, the deletion fails and the stack, including its status, remains unchanged. You can enable termination protection on a stack when you create it. Termination protection on stacks is disabled by default. After creation, you can set termination protection on a stack whose status is CREATE_COMPLETE, UPDATE_COMPLETE, or UPDATE_ROLLBACK_COMPLETE.

  * Rollback triggers enable you to have AWS CloudFormation monitor the state of your application during stack creation and updating, and to roll back that operation if the application breaches the threshold of any of the alarms you've specified.

  * AWS CloudFormation StackSets enables you to manage stacks across multiple accounts and regions.



* Updates service API, documentation, and paginators

  * The Drift Detection feature enables customers to detect whether a stack's actual configuration differs, or has drifted, from its expected configuration as defined within AWS CloudFormation.


* Updates service waiters and paginators

  * Adding back the removed waiters and paginators.
  * Adding paginators for ListExports and ListImports



* Updates service API, documentation, waiters, paginators, and examples

  * API update for CloudFormation: New optional parameter ClientRequestToken which can be used as an idempotency token to safely retry certain operations as well as tagging StackEvents.


* Updates service documentation and examples

*  api and documentation updates.



### `private/mode/api`

* Fix idempotency members not to require validation [#2353](https://github.com/aws/aws-sdk-go/pull/2353)

  * Fixes the SDK's usage of API operation request members marked as idempotency tokens to not require validation. These fields will be auto populated by the SDK if the user does not provide a value. The SDK was requiring the user to provide a value or disable validation to use these APIs.


* Fix error code constants being generated incorrectly.([#1958](https://github.com/aws/aws-sdk-go/issues/1958))



### `service/pinpoint-email`

* Updates service API, documentation, and paginators

* Adds new service



### `service/eks`

* Updates service API and documentation

* Updates service waiters

* Adds new service



### `service/route53`

* Updates service API and documentation

  * You can now specify a new region, eu-north-1 (in Stockholm, Sweden), as a region for latency-based or geoproximity routing.
  * This change allows customers to disable health checks.

  * This release adds an exception to the CreateTrafficPolicyVersion API operation.

  * Route 53 added support for a new China (Ningxia) region, cn-northwest-1. You can now specify cn-northwest-1 as the region for latency-based or geoproximity routing. Route 53 also added support for a new EU (Paris) region, eu-west-3. You can now associate VPCs in eu-west-3 with private hosted zones and create alias records that route traffic to resources in eu-west-3.

  * You can use Route 53's GetAccountLimit/GetHostedZoneLimit/GetReusableDelegationSetLimit APIs to view your current limits (including custom set limits) on Route 53 resources such as hosted zones and health checks. These APIs also return the number of each resource you're currently using to enable comparison against your current limits.

  * When a Route 53 health check or hosted zone is created by a linked AWS service, the object now includes information about the service that created it. Hosted zones or health checks that are created by a linked service can't be updated or deleted using Route 53.

  * This change allows customers to reset elements of health check.

  * You can configure Amazon Route 53 to log information about the DNS queries that Amazon Route 53 receives for your domains and subdomains. When you configure query logging, Amazon Route 53 starts to send logs to CloudWatch Logs. You can use various tools, including the AWS console, to access the query logs.

  * Amazon Route 53 now supports CAA resource record type. A CAA record controls which certificate authorities are allowed to issue certificates for the domain or subdomain.

  * Bug fix for InvalidChangeBatch exception.

  * This release reintroduces the HealthCheckInUse exception.

  * Amazon Route 53 now supports multivalue answers in response to DNS queries, which lets you route traffic approximately randomly to multiple resources, such as web servers. Create one multivalue answer record for each resource and, optionally, associate an Amazon Route 53 health check with each record, and Amazon Route 53 responds to DNS queries with up to eight healthy records.

  * Enum updates for eu-west-2 and ca-central-1



* Updates service API

  * Added support for creating LBR rules using ap-northeast-3 region.
  * Added support for creating Private Hosted Zones and metric-based healthchecks in the ap-northeast-3 region for whitelisted customers.



* Updates service documentation

  * Release notes: SDK documentation now includes examples for ChangeResourceRecordSets for all types of resource record set, such as weighted, alias, and failover.


* Updates service API, documentation, and examples

  * Added support for operations CreateVPCAssociationAuthorization and DeleteVPCAssociationAuthorization to throw a ConcurrentModification error when a conflicting modification occurs in parallel to the authorizations in place for a given hosted zone.


* Updates service API and paginators

  * Add ca-central-1 and eu-west-2 enum values to CloudWatchRegion enum


* Fix URL path cleaning for Route53 API requests (#1006)

  * Fixes: SerializationError when using Route53 ChangeResourceRecordSets #1005


* Updates service API and documentation.



### `service/connect`

* Updates service API and documentation

* Updates service API, documentation, and paginators

* Adds new service



### `private/model/api`

* Fix SDK's unmarshaling of unmodeled response payload ([#2340](https://github.com/aws/aws-sdk-go/pull/2340))

  * Fixes the SDK's unmarshaling of API operation response payloads for operations that are unmodeled. Prevents the SDK due to unexpected response payloads causing errors in the API protocol unmarshaler.
  * Fixes [#2332](https://github.com/aws/aws-sdk-go/issues/2332)


* Fix model loading to not require docs model. ([#2303](https://github.com/aws/aws-sdk-go/pull/2303))

  * Fixes the SDK's model loading to not require that the docs model be present. This model isn't explicitly required.


* Use modeled service signing version in code generation (#2162)

  * Updates the SDK's code generate to make use of the model's service signature version when generating the client for the service. This allows the SDK to generate a client using the correct signature version, e.g v4 vs s3v4 without the need for additional customizations.


* Add "Deprecated" to deprecated API operation and type doc strings ([#2129](https://github.com/aws/aws-sdk-go/pull/2129))

  * Updates the SDK's code generation to include `Deprecated` in the documentation string for API operations and types that are depercated by a service.
  * Related to [golang/go#10909](https://github.com/golang/go/issues/10909)
  * https://blog.golang.org/godoc-documenting-go-code


* SDK APIs input/output are not consistently generated ([#2073](https://github.com/aws/aws-sdk-go/pull/2073))

  * Updates the SDK's API code generation to generate the API input and output types consistently. This ensures that the SDK will no longer rename input/output types unexpectedly as in [#2070](https://github.com/aws/aws-sdk-go/issues/2070). SDK API input and output parameter types will always be the API name with a suffix of Input and Output.
  * Existing service APIs which were incorrectly modeled have been preserved to ensure they do not break.
  * Fixes [#2070](https://github.com/aws/aws-sdk-go/issues/2070)
  * Fixes EFS service breaking change in v1.14.26 where `FileSystemDescription` was incorrectly renamed to `UpdateFileSystemOutput.
  * Fixes [#2070](https://github.com/aws/aws-sdk-go/issues/2070)



* Add EventStream support over RPC protocl ([#1998](https://github.com/aws/aws-sdk-go/pull/1998))

  * Adds support for EventStream over JSON PRC protocol. This adds support for the EventStream's initial-response event, EventStream headers, and EventStream modeled exceptions. Also replaces the hand written tests with generated tests for EventStream usage.


* Update client ServiceName to be based on name of service for new services. ([#1997](https://github.com/aws/aws-sdk-go/pull/1997))

* Add validation to ensure there is no duplication of services in models/apis ([#1758](https://github.com/aws/aws-sdk-go/pull/1758))

* removing SDK API reference crosslinks from input/output shapes. (#1765) 

* Fix RESTXML support for XML Namespace [#1343](https://github.com/aws/aws-sdk-go/pull/1343)

  * Fixes a bug with the SDK's generation of services using the REST XML protocol not annotating shape references with the XML Namespace attribute.
  * Fixes [#1334](https://github.com/aws/aws-sdk-go/pull/1334)


* Fix Waiter and Paginators panic on nil param inputs (#1157)

  * Corrects the code generation for Paginators and waiters that caused a panic if nil input parameters were used with the operations.


* Do not return a link if uid is empty (#1133)

  * Fixes SDK's doc generation to not generate API reference doc links if the SDK us unable to create a valid link.


* Fix documentation error listing (#1067)

* Increasing the readability of code generated files. (#1024)

* Adds crosslinking to service documentation (#1010)

* Add generated setters for API parameters (#918)

  * Adds setters to the SDK's API parameter types, and are a convenience method that reduce the need to use `aws.String` and like utility. 


* Add docs for errors to API operations [#881](https://github.com/aws/aws-sdk-go/issues/881)

* Improve field and waiter doc strings [#879](https://github.com/aws/aws-sdk-go/issues/879)



### `service/iam`

* Updates service API, documentation, and examples

  * We are making it easier for you to manage your AWS Identity and Access Management (IAM) policy permissions by enabling you to retrieve the last timestamp when an IAM entity (e.g., user, role, or a group) accessed an AWS service. This feature also allows you to audit service access for your entities.
  * We are making it easier for you to manage your AWS Identity and Access Management (IAM) resources by enabling you to add tags to your IAM principals (users and roles). Adding tags on IAM principals will enable you to write fewer policies for permissions management and make policies easier to comprehend.  Additionally, tags will also make it easier for you to grant access to AWS resources.



* Updates service API and documentation

  * SDK release to support IAM delegated administrator feature. The feature lets customers attach permissions boundary to IAM principals. The IAM principals cannot operate exceeding the permission specified in permissions boundary.
  * Add support for Longer Role Sessions. Four APIs manage max session duration: GetRole, ListRoles, CreateRole, and the new API UpdateRole. The max session duration integer attribute is measured in seconds.

  * A new API, DeleteServiceLinkedRole, submits a service-linked role deletion request and returns a DeletionTaskId, which you can use to check the status of the deletion.

  * This changes introduces a new IAM role type, Service Linked Role, which works like a normal role but must be managed via services' control.

  * Adds service-specific credentials to IAM service to make it easier to onboard CodeCommit customers.  These are username/password credentials that work with a single service.



* Updates service API

  * The unique ID and access key lengths were extended from 32 to 128


* Updates service API, documentation, and paginators

  * This release adds support for AWS Organizations service control policies (SCPs) to SimulatePrincipalPolicy operation. If there are SCPs associated with the simulated user's account, their effect on the result is captured in the OrganizationDecisionDetail element in the EvaluationResult.


* Updates service documentation and examples



### `aws/signer/v4`

* Always sign a request with the current time. ([#2336](https://github.com/aws/aws-sdk-go/pull/2336))

  * Updates the SDK's v4 request signer to always sign requests with the current time. For the first request attempt, the request's creation time was used in the request's signature. In edge cases this allowed the signature to expire before the request was sent if there was significant delay between creating the request and sending it, (e.g. rate limiting).


* Fix X-Amz-Content-Sha256 being in to query for presign ([#1976](https://github.com/aws/aws-sdk-go/pull/1976))

* Revert [#1491](https://github.com/aws/aws-sdk-go/issues/1491) as change conflicts with an undocumented AWS v4 signature test case.

  * Related to: [#1495](https://github.com/aws/aws-sdk-go/issues/1495).


* Fix Signing Unordered Multi Value Query Parameters ([#1491](https://github.com/aws/aws-sdk-go/pull/1491))

  * Removes sorting of query string values when calculating v4 signing as this is not part of the spec. The spec only requires the keys, not values, to be sorted which is achieved by Query.Encode().


* Correct V4 presign signature to include content sha25 in URL ([#1469](https://github.com/aws/aws-sdk-go/pull/1469))

  * Updates the V4 signer so that when a Presign is generated the `X-Amz-Content-Sha256` header is added to the query string instead of being required to be in the header. This allows you to generate presigned URLs for GET requests, e.g S3.GetObject that do not require additional headers to be set by the downstream users of the presigned URL.
  * Related To: [#1467](https://github.com/aws/aws-sdk-go/issues/1467)


* Optimize V4 signer's header duplicate space stripping. [#1417](https://github.com/aws/aws-sdk-go/pull/1417)

* Fix out of bounds panic in stripExcessSpaces [#1412](https://github.com/aws/aws-sdk-go/pull/1412)

  * Fixes the out of bands panic in stripExcessSpaces caused by an incorrect calculation of the stripToIdx value. Simplified to code also.
  * Fixes [#1411](https://github.com/aws/aws-sdk-go/issues/1411)


* checking length on `stripExcessSpaces` [#1372](https://github.com/aws/aws-sdk-go/issues/1372)

  * Fixes a bug where `stripExcessSpaces` did not check length against the slice.
  * Fixes: [#1371](https://github.com/aws/aws-sdk-go/issues/1371)


* Adds support for unsigned payload signer config (#1130)

  * Adds configuration option to the v4.Signer to specify the request's body should not be signed. This will only correclty function on services that support unsigned payload. e.g. S3, Glacier. 


* Add support for URL.EscapedPath to signer [#885](https://github.com/aws/aws-sdk-go/issues/885)

* Remove logic determining if request needs to be resigned [#876](https://github.com/aws/aws-sdk-go/issues/876)



### `service/mq`

* Updates service API and documentation

  * This release adds support for cost allocation tagging. You can now create, delete, and list tags for AmazonMQ resources. For more information about tagging, see AWS Tagging Strategies.
  * Amazon MQ supports ActiveMQ 5.15.6, in addition to 5.15.0. Automatic minor version upgrades can be toggled. Updated the documentation.



* Updates service API, documentation, and paginators

  * Modified the CreateBroker, UpdateBroker, and DescribeBroker operations to support integration with Amazon CloudWatch Logs. Added a field to indicate the IP address(es) that correspond to wire-level endpoints of broker instances. While a single-instance broker has one IP address, an active/standby broker for high availability has 2 IP addresses. Added fields to indicate the time when resources were created. Updated documentation for Amazon MQ.




### `aws/credential`

* Add credential_process provider ([#2217](https://github.com/aws/aws-sdk-go/pull/2217))

  * Adds support for the shared configuration file's `credential_process` property. This property allows the application to execute a command in order to retrieve AWS credentials for AWS service API request.  In order to use this feature your application must enable the SDK's support of the shared configuration file. See, https://docs.aws.amazon.com/sdk-for-go/api/aws/session/#hdr-Sessions_from_Shared_Config for more information on enabling shared config support.




### `service/sqs`

* Add batch checksum validation test ([#2307](https://github.com/aws/aws-sdk-go/pull/2307))

  * Adds additional test of the SQS batch checksum validation.


* Updates service API and documentation

  * Documentation updates for Amazon SQS.
  * Added support for tracking cost allocation by adding, updating, removing, and listing the metadata tags of Amazon SQS queues.



* Updates service documentation

  * Documentation updates regarding availability of FIFO queues and miscellaneous corrections.


* Updates service API, documentation, and paginators

  * Adding server-side encryption (SSE) support to SQS by integrating with AWS KMS; adding new queue attributes to SQS CreateQueue, SetQueueAttributes and GetQueueAttributes APIs to support SSE.


* Updates service API, documentation, and examples



### `aws/awsutils`

* Update not to retrun sensitive fields for StringValue ([#2310](https://github.com/aws/aws-sdk-go/pull/2310))



### `service/health`

* Updates service API and documentation

  * AWS Health API DescribeAffectedEntities operation now includes a field that returns the URL of the affected entity.


* Updates service API, documentation, and paginators

  * Updates the ARN structure vended by AWS Health API. All ARNs will now include the service and type code of the associated event, as vended by DescribeEventTypes.


* Updates service documentation

* Adds new service



### `service/events`

* Updates service API and documentation

  * Support for Managed Rules (rules that are created and maintained by the AWS services in your account) is added.
  * AWS Events - AWS Organizations Support in Event-Bus Policies. This release introduces a new parameter in the PutPermission API named Condition. Using the Condition parameter, customers can allow one or more AWS Organizations to access their CloudWatch Events Event-Bus resource.

  * Added Fargate and NetworkConfiguration support to EcsParameters.

  * Added SQS FIFO queue target support

  * Added BatchParameters to the PutTargets API

  * Exposes ConcurrentModificationException as one of the valid exceptions for PutPermission and RemovePermission operation.

  * CloudWatch Events now allows different AWS accounts to share events with each other through a new resource called event bus. Event buses accept events from AWS services, other AWS accounts and PutEvents API calls. Currently all AWS accounts have one default event bus. To send events to another account, customers simply write rules to match the events of interest and attach an event bus in the receiving account as the target to the rule. The PutTargets API has been updated to allow adding cross account event buses as targets. In addition, we have released two new APIs - PutPermission and RemovePermission - that enables customers to add/remove permissions to their default event bus.



* Updates service documentation

  * Documentation updates for events




### `service/kafka`

* Adds new service



### `service/serverlessrepo`

* Updates service API, documentation, and paginators

* Updates service API and documentation

* Updates service documentation



### `service/xray`

* Updates service API and documentation

  * GetTraceSummaries - Now provides additional information regarding your application traces such as Availability Zone, Instance ID, Resource ARN details, Revision, Entry Point, Root Cause Exceptions and Root Causes for Fault, Error and Response Time.
  * Groups build upon X-Ray filter expressions to allow for fine tuning trace summaries and service graph results. You can configure groups by using the AWS X-Ray console or by using the CreateGroup API. The addition of groups has extended the available request fields to the GetServiceGraph API. You can now specify a group name or group ARN to retrieve its service graph.

  * Support for new APIs that enable management of sampling rules.

  * Added PutEncryptionConfig and GetEncryptionConfig APIs for managing data encryption settings. Use PutEncryptionConfig to configure X-Ray to use an AWS Key Management Service customer master key to encrypt trace data at rest.



* Updates service API, documentation, and paginators

  * Added automatic pagination support for AWS X-Ray APIs in the SDKs that support this feature.
  * Add a response time histogram to the services in response of GetServiceGraph API.



* Adds new service



### `service/license-manager`

* Adds new service



### `service/servicediscovery`

* Updates service API and documentation

  * AWS Cloud Map lets you define friendly names for your cloud resources so that your applications can quickly and dynamically discover them. When a resource becomes available (for example, an Amazon EC2 instance running a web server), you can register a Cloud Map service instance. Then your application can discover service instances by submitting DNS queries or API calls.
  * This release adds support for custom health checks, which let you check the health of resources that aren't accessible over the internet. For example, you can use a custom health check when the instance is in an Amazon VPC.

  * This release adds support for registering CNAME record types and creating Route 53 alias records that route traffic to Amazon Elastic Load Balancers using Amazon Route 53 Auto Naming APIs.



* Adds new service

  * Amazon Route 53 Auto Naming lets you configure public or private namespaces that your microservice applications run in. When instances of the service become available, you can call the Auto Naming API to register the instance, and Amazon Route 53 automatically creates up to five DNS records and an optional health check. Clients that submit DNS queries for the service receive an answer that contains up to eight healthy records.




### `service/securityhub`

* Adds new service



### `service/comprehendmedical`

* Adds new service



### `service/kinesisanalytics`

* Updates service API and documentation

  * Improvements to error messages, validations, and more to the Kinesis Data Analytics APIs.
  * Kinesis Analytics now supports AWS Lambda functions as output.

  * Kinesis Analytics now supports schema discovery on objects in S3. Additionally, Kinesis Analytics now supports input data preprocessing through Lambda.

  * Added additional exception types and clarified documentation.



* Updates service API, documentation, and paginators

  * Kinesis Analytics publishes error messages CloudWatch logs in case of application misconfigurations


* Updates service API and documentation.

  * Whenever Amazon Kinesis Analytics is not able to detect schema for the given streaming source on DiscoverInputSchema API, we would return the raw records that was sampled to detect the schema.




### `service/kinesisanalyticsv2`

* Adds new service



### `service/meteringmarketplace`

* Updates service API, documentation, and paginators

  * RegisterUsage operation added to AWS Marketplace Metering Service, allowing sellers to meter and entitle Docker container software use with AWS Marketplace. For details on integrating Docker containers with RegisterUsage see: https://docs.aws.amazon.com/marketplace/latest/userguide/entitlement-and-metering-for-paid-products.html


* Updates service API and documentation



### `service/translate`

* Updates service API and documentation



### `service/greengrass`

* Updates service API and documentation

  * Support Greengrass Connectors and allow Lambda functions to run without Greengrass containers.
  * Greengrass APIs now support bulk deployment operations, and APIs that list definition versions now support pagination.

  * Greengrass APIs now support creating Machine Learning resource types and configuring binary data as the input payload for Greengrass Lambda functions.

  * Greengrass OTA feature allows updating Greengrass Core and Greengrass OTA Agent. Local Resource Access feature allows Greengrass Lambdas to access local resources such as peripheral devices and volumes.



* Updates service documentation

  * Documentation updates for Greengrass Local Resource Access feature


* Adds new service

  * AWS Greengrass is software that lets you run local compute, messaging, and device state synchronization for connected devices in a secure way. With AWS Greengrass, connected devices can run AWS Lambda functions, keep device data in sync, and communicate with other devices securely even when not connected to the Internet. Using AWS Lambda, Greengrass ensures your IoT devices can respond quickly to local events, operate with intermittent connections, and minimize the cost of transmitting IoT data to the cloud.




### `service/kms`

* Updates service API and documentation

  * AWS Key Management Service (KMS) now enables customers to create and manage dedicated, single-tenant key stores in addition to the default KMS key store. These are known as custom key stores and are deployed using AWS CloudHSM clusters. Keys that are created in a KMS custom key store can be used like any other customer master key in KMS.
  * Added a KeyID parameter to the ListAliases operation. This parameter allows users to list only the aliases that refer to a particular AWS KMS customer master key. All other functionality remains intact.

  * This release of AWS Key Management Service introduces the ability to determine whether a key is AWS managed or customer managed.



* Updates service API

  * This release of AWS Key Management Service includes support for InvalidArnException in the RetireGrant API.


* Updates service documentation

  * Documentation updates for AWS KMS
  * Update documentation for KMS.



* Updates service API, documentation, and examples

  * Documentation updates for AWS KMS.
  * Update docs and add SDK examples



* Updates service documentation and examples

  * Doc-only update for Key Management Service (KMS): Update docs for GrantConstraints and GenerateRandom


* Updates service API, documentation, paginators, and examples

  * his release of AWS Key Management Service introduces the ability to tag keys. Tagging keys can help you organize your keys and track your KMS costs in the cost allocation report. This release also increases the maximum length of a key ID to accommodate ARNs that include a long key alias.


*  documentation updates.



### `service/sms`

* Updates service API, documentation, and paginators

  * In this release, AWS Server Migration Service (SMS) has added multi-server migration support to simplify the application migration process. Customers can migrate all their application-specific servers together as a single unit as opposed to moving individual server one at a time. The new functionality includes - 1. Ability to group on-premises servers into applications and application tiers. 2. Auto-generated CloudFormation Template and Stacks for launching migrated servers into EC2. 3. Ability to run post-launch configuration scripts to configure servers and applications in EC2. In order for SMS to launch servers into your AWS account using CloudFormation Templates, we have also updated the ServerMigrationServiceRole IAM policy to include appropriate permissions. Refer to Server Migration Service documentation for more details.


* AWS Server Migration Service (SMS) is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS. AWS SMS allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations.



### `service/amplify`

* Adds new service



### `service/datasync`

* Adds new service



### `service/snowball`

* Updates service API and documentation

  * AWS announces the availability of AWS Snowball Edge Compute Optimized to run compute-intensive applications is disconnected and physically harsh environments. It comes with 52 vCPUs, 208GB memory, 8TB NVMe SSD, and 42TB S3-compatible storage to accelerate local processing and is well suited for use cases such as full motion video processing, deep IoT analytics, and continuous machine learning in bandwidth-constrained locations. It features new instances types called SBE-C instances that are available in eight sizes and multiple instances can be run on the device at the same time. Optionally, developers can choose the compute optimized device to include a GPU and use SBE-G instances for accelerating their application performance.
  * AWS Snowball Edge announces the availability of Amazon EC2 compute instances that run on the device. AWS Snowball Edge is a 100-TB ruggedized device built to transfer data into and out of AWS with optional support for local Lambda-based compute functions. With this feature, developers and administrators can run their EC2-based applications on the device providing them with an end to end vertically integrated AWS experience. Designed for data pre-processing, compression, machine learning, and data collection applications, these new instances, called SBE1 instances, feature 1.8 GHz Intel Xeon D processors up to 16 vCPUs, and 32 GB of memory. The SBE1 instance type is available in four sizes and multiple instances can be run on the device at the same time. Customers can now run compute instances using the same Amazon Machine Images (AMIs) that are used in Amazon EC2.



* Updates service API

  * Snowball job states allow customers to track the status of the Snowball job. We are launching a new Snowball job state "WithSortingFacility"!  When customer returns the Snowball to AWS, the device first goes to a sorting facility before it reaches an AWS data center.  Many customers have requested us to add a new state to reflect the presence of the device at the sorting facility for better tracking. Today when a customer returns  the Snowball, the state first changes from "InTransitToAWS" to "WithAWS". With the addition of new state, the device will move from "InTransitToAWS" to "WithAWSSortingFacility", and then to "WithAWS".  There are no other changes to the API at this time besides adding this new state.


* Updates service documentation

  * Documentation updates for snowball


* Updates service API, documentation, and paginators

  * The Snowball API has a new exception that can be thrown for list operation requests.


* Updates service examples

*  documentation updates.



### `service/appsync`

* Updates service API and documentation



### `service/autoscaling-plans`

* Updates service API and documentation

* Updates service documentation

* Adds new service



### `service/cloudfront`

* Adds new service

  * With Origin Failover capability in CloudFront, you can setup two origins for your distributions - primary and secondary, such that your content is served from your secondary origin if CloudFront detects that your primary origin is unavailable. These origins can be any combination of AWS origins or non-AWS custom HTTP origins. For example, you can have two Amazon S3 buckets that serve as your origin that you independently upload your content to. If an object that CloudFront requests from your primary bucket is not present or if connection to your primary bucket times-out, CloudFront will request the object from your secondary bucket. So, you can configure CloudFront to trigger a failover in response to either HTTP 4xx or 5xx status codes.
  * Lambda@Edge Now Provides You Access to the Request Body for HTTP POST/PUT Processing. With this feature, you can now offload more origin logic to the edge and improve end-user latency. Developers typically use Web/HTML forms or Web Beacons/Bugs as a mechanism to collect data from the end users and then process that data at their origins servers. For example, if you are collecting end user behavior data through a web beacon on your website, you can use this feature to access the user behavior data and directly log it to an Amazon Kinesis Firehose endpoint from the Lambda function, thereby simplifying your origin infrastructure.

  * You can now use a new Amazon CloudFront capability called Field-Level Encryption to further enhance the security of sensitive data, such as credit card numbers or personally identifiable information (PII) like social security numbers. CloudFront's field-level encryption further encrypts sensitive data in an HTTPS form using field-specific encryption keys (which you supply) before a POST request is forwarded to your origin. This ensures that sensitive data can only be decrypted and viewed by certain components or services in your application stack. Field-level encryption is easy to setup. Simply configure the fields that have to be further encrypted by CloudFront using the public keys you specify and you can reduce attack surface for your sensitive data.

  * Amazon CloudFront now supports user configurable HTTP Read and Keep-Alive Idle Timeouts for your Custom Origin Servers



* Updates service documentation

  * Documentation updates for cloudfront
  * Doc update to fix incorrect prefix in S3OriginConfig



* Updates service API and documentation

  * Unpublish delete-service-linked-role API.
  * You can now specify additional options for MinimumProtocolVersion, which controls the SSL/TLS protocol that CloudFront uses to communicate with viewers. The minimum protocol version that you choose also determines the ciphers that CloudFront uses to encrypt the content that it returns to viewers.



* Add lambda function associations to cache behaviors

* Updates service API and documentation.

  * Ability to use Amazon CloudFront to deliver your content both via IPv6 and IPv4 using HTTP/HTTPS.




### `service/batch`

* Updates service API and documentation

  * Adding multinode parallel jobs, placement group support for compute environments.
  * Adding EC2 Launch Template support in AWS Batch Compute Environments.

  * Support for Timeout in SubmitJob and RegisterJobDefinition

  * Add support for Array Jobs which allow users to easily submit many copies of a job with a single API call. This change also enhances the job dependency model to support N_TO_N and sequential dependency chains. The ListJobs and DescribeJobs APIs now have the ability to list or describe the status of entire Array Jobs or individual elements within the array.

  * This release enhances the DescribeJobs API to include the CloudWatch logStreamName attribute in ContainerDetail and ContainerDetailAttempt

  * API Update for AWS Batch: Customer provided AMI for MANAGED Compute Environment



* Updates service documentation

  * Documentation updates for AWS Batch.


* Updates service documentation and examples

  * Documentation updates for batch


* Updates service API, documentation, and paginators

  * Customers can now provide a retryStrategy as part of the RegisterJobDefinition and SubmitJob API calls. The retryStrategy object has a number value for attempts. This is the number of non successful executions before a job is considered FAILED. In addition, the JobDetail object now has an attempts field and shows all execution attempts.


* Adds new service

  * AWS Batch is a batch computing service that lets customers define queues and compute environments and then submit work as batch jobs.




### `service/cloudtrail`

* Updates service API and documentation

  * This release supports creating a trail in CloudTrail that logs events for all AWS accounts in an organization in AWS Organizations. This helps enable you to define a uniform event logging strategy for your organization. An organization trail is applied automatically to each account in the organization and cannot be modified by member accounts. To learn more, please see the AWS CloudTrail User Guide https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html
  * The LookupEvents API now supports two new attribute keys: ReadOnly and AccessKeyId

  * Doc-only Update for CloudTrail: Add required parameters for GetEventSelectors and PutEventSelectors



* Updates service documentation and paginators

  * Doc-only update for AWSCloudTrail: Updated links/descriptions


* Updates service paginators



### `service/config`

* Updates service API and documentation

* Updates service API

  * With this release, AWS Config updated the ConfigurationItemStatus enum values. The values prior to this update did not represent appropriate values returned by GetResourceConfigHistory. You must update your code to enumerate the new enum values so this is a breaking change. To map old properties to new properties, use the following descriptions: New discovered resource - Old property: Discovered, New property: ResourceDiscovered. Updated resource - Old property: Ok, New property: OK. Deleted resource - Old property: Deleted, New property: ResourceDeleted or ResourceDeletedNotRecorded. Not-recorded resource - Old property: N/A, New property: ResourceNotRecorded or ResourceDeletedNotRecorded.





### `internal/ini`

* trimSpaces not trimming rhs properly (#2282)

  * Fixes trimSpaces to behave properly by removing the necessary rhs spaces of a literal.


* allowing LHS of equal expression to contain spaces (#2265)

  * Fixes a backward compatibility issue where LHS of equal expr could contain spaces


* profile names did not allow for ':' character (#2247)

  * Fixes an issue where profile names would return an error if the name contained a ':'


* removing // comments (#2240)

  * removes // comments since that was never supported previously.




### `service/ram`

* Adds new service



### `service/route53resolver`

* Adds new service



### `service/s3control`

* Adds new service

  * Add support for new S3 Block Public Access account-level APIs. The Block Public Access settings allow account owners to prevent public access to S3 data via bucket/object ACLs or bucket policies.




### `service/sns`

* Updates service API and documentation

  * Added an optional request parameter, named Attributes, to the Amazon SNS CreateTopic API action. For more information, see the Amazon SNS API Reference (https://docs.aws.amazon.com/sns/latest/api/API_CreateTopic.html).


* Updates service API, documentation, and paginators

  * The SNS Subscribe API has been updated with two new optional parameters: Attributes and ReturnSubscriptionArn. Attributes is a map of subscription attributes which can be one or more of: FilterPolicy, DeliveryPolicy, and RawMessageDelivery. ReturnSubscriptionArn is a boolean parameter that overrides the default behavior of returning "pending confirmation" for subscriptions that require confirmation instead of returning the subscription ARN.




### `service/budgets`

* Updates service documentation

  * Doc Update: 1. Available monthly-budgets maximal history data points from 12 to 13.  2. Added 'Amazon Elasticsearch' costfilters support.


* Updates service API and documentation

  * 1. Added budget performance history, enabling you to see how well your budgets matched your actual costs and usage.                                                                                             2. Added budget performance history, notification state, and last updated time, enabling you to see how well your budgets matched your actual costs and usage, how often your budget alerts triggered, and when your budget was last updated.
  * Updating the regex for the NumericValue fields.

  * "With this release, customers can use AWS Budgets to monitor how much of their Amazon EC2, Amazon RDS, Amazon Redshift, and Amazon ElastiCache instance usage is covered by reservations, and receive alerts when their coverage falls below the threshold they define."

  * Making budgetLimit and timePeriod optional, and updating budgets docs.

  * Add additional costTypes: IncludeDiscount, UseAmortized,  to support finer control for different charges included in a cost budget.

  * Add additional costTypes to support finer control for different charges included in a cost budget.

  * Add an optional "thresholdType" to notifications to support percentage or absolute value thresholds.

  * Update budget Management API's to list/create/update RI_UTILIZATION type budget. Update budget Management API's to support DAILY timeUnit for RI_UTILIZATION type budget.



* Updates service API

  * Including "DuplicateRecordException" in UpdateNotification and UpdateSubscriber.


* Updates service API and paginators

  * When creating or editing a budget via the AWS Budgets API you can define notifications that are sent to subscribers when the actual or forecasted value for cost or usage exceeds the notificationThreshold associated with the budget notification object. Starting today, the maximum allowed value for the notificationThreshold was raised from 100 to 300. This change was made to give you more flexibility when setting budget notifications.


* Adds new service, AWS Budgets.



### `service/codepipeline`

* Updates service API and documentation

  * Add support for cross-region pipeline with accompanying definitions as needed in the AWS CodePipeline API Guide.
  * Added support for webhooks with accompanying definitions as needed in the AWS CodePipeline API Guide.

  * Added new SourceRevision structure to Execution Summary with accompanying definitions as needed in the AWS CodePipeline API Guide.

  * This change includes a PipelineMetadata object that is part of the output from the GetPipeline API that includes the Pipeline ARN, created, and updated timestamp.



* Updates service API

  * UpdatePipeline may now throw a LimitExceededException when adding or updating Source Actions that use periodic checks for change detection


* Updates service API, documentation, and paginators

  * A new API, ListPipelineExecutions, enables you to retrieve summary information about the most recent executions in a pipeline, including pipeline execution ID, status, start time, and last updated time. You can request information for a maximum of 100 executions. Pipeline execution data is available for the most recent 12 months of activity.


* This is a doc-only update request to incorporate some recent minor revisions to the doc content.

*  documentation updates.



### `service/polly`

* Updates service API

  * Amazon Polly adds new female voices: Italian - Bianca, Castilian Spanish - Lucia and new language: Mexican Spanish with new female voice - Mia.
  * Amazon Polly adds Korean language support with new female voice - "Seoyeon" and new Indian English female voice - "Aditi"

  * Amazon Polly exposes two new voices: "Matthew" (US English) and "Takumi" (Japanese)

  * Amazon Polly adds new German voice "Vicki"



* Updates service API and documentation

  * Amazon Polly adds Mandarin Chinese language support with new female voice - "Zhiyu"
  * Amazon Polly enables female voice Aditi to speak Hindi language

  * Amazon Polly adds new French voice - "Lea"



* Updates service API, documentation, and paginators

  * Amazon Polly adds new API for asynchronous synthesis to S3
  * API Update for Amazon Polly: Add support for speech marks



* Updates service documentation and examples

  * Doc-only update for Amazon Polly -- added snippets


* Adds new service



### `service/apigateway`

* Updates service API and documentation

  * AWS WAF integration with APIGW. Changes for adding webAclArn as a part of  Stage output. When the user calls a get-stage or get-stages, webAclArn will also be returned as a part of the output.
  * Adding support for multi-value parameters in TestInvokeMethod and TestInvokeAuthorizer.

  * Add support for Active X-Ray with API Gateway

  * Support for fine grain throttling for API gateway.

  * Support for PRIVATE endpoint configuration type

  * Amazon API Gateway now supports resource policies for APIs making it easier to set access controls for invoking APIs.

  * API Gateway now adds support for calling API with compressed payloads using one of the supported content codings, tagging an API stage for cost allocation, and returning API keys from a custom authorizer for use with a usage plan.

  * Adds support for Cognito Authorizer scopes at the API method level.

  * Changes related to CanaryReleaseDeployment feature. Enables API developer to create a deployment as canary deployment and test API changes with percentage of customers before promoting changes to all customers.

  * Add support for Access logs and customizable integration timeouts

  * 1. Extended GetDocumentationParts operation to support retrieving documentation parts resources without contents.  2. Added hosted zone ID in the custom domain response.

  * This release supports creating and managing Regional and Edge-Optimized API endpoints.

  * Add a new enum "REQUEST" to '--type <value>' field in the current create-authorizer API, and make "identitySource" optional.

  * Adds support for management of gateway responses.

  * Add support for "embed" property.

  * API Gateway request validators

  * Amazon API Gateway is adding support for generating SDKs in more languages. This update introduces two new operations used to dynamically discover these SDK types and what configuration each type accepts.



* Updates service documentation

  * Documentation updates for API Gateway
  * Adding support for OpenAPI 3.0 import and export.

  * Documentation updates for Apigateway



* Updates service API, documentation, and paginators

  * Added support Private Integration and VPC Link features in API Gateway. This allows to create an API with the API Gateway private integration, thus providing clients access to HTTP/HTTPS resources in an Amazon VPC from outside of the VPC through a VpcLink resource.
  * API Gateway has added support for ACM certificates on custom domain names. Both Amazon-issued certificates and uploaded third-part certificates are supported.





### `service/clouddirectory`

* Updates service API and documentation

  * ListObjectParents API now supports a bool parameter IncludeAllLinksToEachParent, which if set to true, will return a ParentLinks list instead of a Parents map; BatchRead API now supports ListObjectParents operation.
  * Amazon Cloud Directory now supports optional attributes on Typed Links, giving users the ability to associate and manage data on Typed Links.

  * Cloud Directory customers can fetch attributes within a facet on an object with the new GetObjectAttributes API and can fetch attributes from multiple facets or objects with the BatchGetObjectAttributes operation.

  * Amazon Cloud Directory makes it easier for you to apply schema changes across your directories with in-place schema upgrades. Your directories now remain available while backward-compatible schema changes are being applied, such as the addition of new fields. You also can view the history of your schema changes in Cloud Directory by using both major and minor version identifiers, which can help you track and audit schema versions across directories.

  * Enable BatchDetachPolicy

  * Cloud Directory adds support for additional batch operations.

  * ListObjectAttributes now supports filtering by facet.



* Adds new service

  * SDK release to support Flexible Schema initiative being carried out by Amazon Cloud Directory. This feature lets customers using new capabilities like: variant typed attributes, dynamic facets and AWS managed Cloud Directory schemas.
  * Amazon Cloud Directory is a highly scalable, high performance, multi-tenant directory service in the cloud. Its web-based directories make it easy for you to organize and manage application resources such as users, groups, locations, devices, policies, and the rich relationships between them.



* Updates service documentation

  * Documentation update for Cloud Directory
  * ListObjectAttributes documentation updated based on forum feedback



* Updates service API, documentation, and paginators

  * Cloud Directory has launched support for Typed Links, enabling customers to create object-to-object relationships that are not hierarchical in nature. Typed Links enable customers to quickly query for data along these relationships. Customers can also enforce referential integrity using Typed Links, ensuring data in use is not inadvertently deleted.
  * Introduces a new Cloud Directory API that enables you to retrieve all available parent paths for any type of object (a node, leaf node, policy node, and index node) in a hierarchy.





### `service/mediastore-data`

* Updates service API and documentation

* Updates service documentation



### `service/codestar`

* Updates service API and documentation

  * This release lets you create projects from source code and a toolchain definition that you provide.
  * This release enables tagging CodeStar Projects at creation. The CreateProject API now includes optional tags parameter.

  * Added support to tag CodeStar projects. Tags can be used to organize and find CodeStar projects on key-value pairs that you can choose. For example, you could add a tag with a key of "Release" and a value of "Beta" to projects your organization is working on for an upcoming beta release.



* Updates service documentation

  * Updated documentation for AWS CodeStar.


* Adds new service

  * AWS CodeStar is a cloud-based service for creating, managing, and working with software development projects on AWS. An AWS CodeStar project creates and integrates AWS services for your project development toolchain. AWS CodeStar also manages the permissions required for project users.




### `service/inspector`

* Updates service API and documentation

  * Finding will be decorated with ec2 related metadata
  * inspector will return ServiceTemporarilyUnavailableException when service is under stress

  * PreviewAgents API now returns additional fields within the AgentPreview data type. The API now shows the agent health and availability status for all instances included in the assessment target. This allows users to check the health status of Inspector Agents before running an assessment. In addition, it shows the instance ID, hostname, and IP address of the targeted instances.



* Updates service API, documentation, and paginators

  * Introduce four new APIs to view and preview Exclusions.  Exclusions show which intended security checks are excluded from an assessment, along with reasons and recommendations to fix.  The APIs are CreateExclusionsPreview, GetExclusionsPreview, ListExclusions, and DescribeExclusions.
  * Inspector's StopAssessmentRun API has been updated with a new input option - stopAction. This request parameter can be set to either START_EVALUATION or SKIP_EVALUATION. START_EVALUATION (the default value, and the previous behavior) stops the AWS agent data collection and begins the results evaluation for findings generation based on the data collected so far. SKIP_EVALUATION cancels the assessment run immediately, after which no findings are generated.



* Updates service API

  * We are launching the ability to target all EC2 instances. With this launch, resourceGroupArn is now optional for CreateAssessmentTarget and UpdateAssessmentTarget. If resourceGroupArn is not specified, all EC2 instances in the account in the AWS region are included in the assessment target.


* Updates service API, documentation, and examples

  * Added 2 new attributes to the DescribeAssessmentTemplate response, indicating the total number of assessment runs and last assessment run ARN (if present.)
  * Doc-only Update for Inspector: Adding SDK code snippets for Inspector



* Updates service API, documentation, paginators, and examples

  * Adds ability to produce an assessment report that includes detailed and comprehensive results of a specified assessment run.




### `aws/request`

* Add private ini package (#2210)

  * Get rids of go-ini dependency in favor of `internal/ini` package.


* Fix support for streamed payloads for unsigned body request ([#1778](https://github.com/aws/aws-sdk-go/pull/1778))

  * Fixes the SDK's handling of the SDK's `ReaderSeekerCloser` helper type to not allow erroneous request retries, and request signature generation. This Fix allows you to use the `aws.ReaderSeekerCloser` to wrap an arbitrary `io.Reader` for request `io.ReadSeeker` input parameters. APIs such as lex-runtime's PostContent can now make use of the


* Remove default port from HTTP host header ([#1618](https://github.com/aws/aws-sdk-go/pull/1618))

  * Updates the SDK to automatically remove default ports based on the URL's scheme when setting the HTTP Host header's value.
  * Fixes [#1537](https://github.com/aws/aws-sdk-go/issues/1537)


* Fix bug in request presign creating invalid URL ([#1624](https://github.com/aws/aws-sdk-go/pull/1624))

  * Fixes a bug the Request Presign and PresignRequest methods that would allow a invalid expire duration as input. A expire time of 0 would be interpreted by the SDK to generate a normal request signature, not a presigned URL. This caused the returned URL unusable.
  * Fixes [#1617](https://github.com/aws/aws-sdk-go/issues/1617)


* waiter test bug

  * waiters_test.go file would sometimes fail due to travis hiccups. This occurs because a test would sometimes fail the cancel check and succeed the timeout. However, the timeout check should never occur in that test. This fix introduces a new field that dictates how waiters will sleep.


* Fix NewErrParamMinLen to use correct ParamMinLenErrCode [#1336](https://github.com/aws/aws-sdk-go/issues/1336)

  * Fixes the `NewErrParamMinLen` function returning the wrong error code. `ParamMinLenErrCode` should be returned not `ParamMinValueErrCode`.
  * Fixes [#1335](https://github.com/aws/aws-sdk-go/issues/1335)


* Add support for PUT temporary redirects (307) [#1283](https://github.com/aws/aws-sdk-go/issues/1283)

  * Adds support for Go 1.8's GetBody function allowing the SDK's http request using PUT and POST methods to be redirected with temporary redirects with 307 status code.
  * Fixes: [#1267](https://github.com/aws/aws-sdk-go/issues/1267)


* Add handling for retrying temporary errors during unmarshal [#1289](https://github.com/aws/aws-sdk-go/issues/1289)

  * Adds support for retrying temporary errors that occur during unmarshaling of a request's response body.
  * Fixes: [#1275](https://github.com/aws/aws-sdk-go/issues/1275)


* Fix logging from reporting wrong retry request errors #1281

  * Fixes the SDK's retry request logging to report the the actual error that occurred, not a stubbed Unknown error message.
  * Fixes the SDK's response logger to not output the response log multiple times per retry.


* add support for appengine's custom standard library (#1190)

  * Remove syscall error checking on appengine platforms.


* Fix waiter error match condition (#1195)

  * Fixes the waiters's matching overwriting the request's err, effectively ignoring the error condition. This broke waiters with the FailureWaiterState matcher state.


* Improve handler copy, push back, push front performance (#1171)

  * Minor optimization to the handler list's handling of copying and pushing request handlers to the handler list.


* Add retry support for RequestTimeoutException (#1158)

  * Adds support for retrying RequestTimeoutException error code that is returned by some services.


* Add support for context.Context to SDK API operation requests (#1132)

  * Adds support for context.Context to the SDK by adding `WithContext` methods for each API operation, Paginators and Waiters. e.g `PutObjectWithContext`. This change also adds the ability to provide request functional options to the method calls instead of requiring you to use the `Request` API operation method (e.g `PutObjectRequest`).
  * Adds a `Complete` Request handler list that will be called ever time a request is completed. This includes both success and failure. Complete will only be called once per API operation request.
  * `private/waiter` package moved from the private group to `aws/request/waiter` and made publicly available.
  * Adds Context support to all API operations, Waiters(WaitUntil) and Paginators(Pages) methods.
  * Adds Context support for s3manager and s3crypto clients.


* Optimization to handler list copy to prevent multiple alloc calls. (#1134)

* Add PriorRequestNotComplete to throttle retry codes (#1011)

  * Fixes: Not retrying when PriorRequestNotComplete #1009


* Add PriorRequestNotComplete to throttle retry codes (#1002)

  * Fixes: Not retrying when PriorRequestNotComplete #1001


* Fix retrying timeout requests (#981)

  * Fixes: Requests Retrying is broken if the error was caused due to a client timeout #947


* Fix for Go 1.8 request incorrectly sent with body (#991)

  * Fixes: service/route53: ListHostedZones hangs and then fails with go1.8 #984


* Fix HTTP Request Body race condition [#874](https://github.com/aws/aws-sdk-go/issues/874)



### `aws/session`

* Add support for credential source(#2201)

  * Allows for shared config file to contain `credential_source` with any of the given values `EcsContainer`, `Environment` or `Ec2InstanceMetadata`


* Fix bug in session.New not supporting AWS_SDK_LOAD_CONFIG ([#1770](https://github.com/aws/aws-sdk-go/pull/1770))

* SDK should be able to load multiple custom shared config files. [#1258](https://github.com/aws/aws-sdk-go/issues/1258)

  * This change adds a `SharedConfigFiles` field to the `session.Options` type that allows you to specify the files, and their order, the SDK will use for loading shared configuration and credentials from when the `Session` is created. Use the `NewSessionWithOptions` Session constructor to specify these options. You'll also most likely want to enable support for the shared configuration file's additional attributes by setting `session.Option`'s `SharedConfigState` to `session.SharedConfigEnabled`. 


* Add support for side loaded CA bundles (#1117)

  * Adds supports for side loading Certificate Authority bundle files to the SDK using AWS_CA_BUNDLE environment variable or CustomCABundle session option.


* Add support for AssumeRoles with MFA (#1088)

  * Adds support for assuming IAM roles with MFA enabled. A TokenProvider func was added to stscreds.AssumeRoleProvider that will be called each time the role's credentials need to be refreshed. A basic token provider that sources the MFA token from stdin as stscreds.StdinTokenProvider.


* Update SDK examples and docs to use session.Must (#1099)

  * Updates the SDK's example and docs to use session.Must where possible to highlight its usage as apposed to session error checking that is most cases errors will be terminal to the application anyways.


* Skip shared config on read errors [#883](https://github.com/aws/aws-sdk-go/issues/883)



### `service/iot-jobs-data`

* Updates service API and documentation



### `aws/config`

* fix typo in Config struct documentation (#2169)

  * fix typo in Config struct documentation in aws-sdk-go/aws/config.go




### `internal/csm`

* Add region to api call metrics (#2175)



### `service/cloudfront/sign`

* Do not Escape HTML when encode the cloudfront sign policy (#2164)

  * Fixes the signer escaping HTML elements `<`, `>`, and `&` in the signature policy incorrectly. Allows use of multiple query parameters in the URL to be signed.
  * Fixes #2163




### `service/guardduty`

* Updates service API and documentation

  * Support optional FindingPublishingFrequency parameter in CreateDetector and UpdateDetector operations, and ClientToken on Create* operations
  * You can disable the email notification when inviting GuardDuty members using the disableEmailNotification parameter in the InviteMembers operation.

  * Added PortProbeAction information to the Action section of the port probe-type finding.



* Updates service API, documentation, and paginators

  * Amazon GuardDuty is adding five new API operations for creating and managing filters. For each filter, you can specify a criteria and an action. The action you specify is applied to findings that match the specified criteria.


* Adds new service

  * Added the missing AccessKeyDetails object to the resource shape.




### `private/protocol/restjson/restjson`

* Use json.Decoder to decrease memory allocation (#2141)

  * Update RESTJSON protocol unmarshaler to use json.Decoder instead of ioutil.ReadAll to reduce allocations.




### `private/protocol/jsonrpc/jsonrpc`

* Use json.Decoder to decrease memory allocation (#2142)

  * Update JSONPRC protocol unmarshaler to use json.Decoder instead of ioutil.ReadAll to reduce allocations.




### `service/elasticache`

* Updates service API and documentation

  * ElastiCache for Redis added support for adding and removing read-replicas from any cluster with no cluster downtime, Shard naming: ElastiCache for Redis customers have the option of allowing ElastiCache to create names for their node groups (shards) or generating their own node group names. For more information, see https:// docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_NodeGroupConfiguration.html, ShardsToRetain: When reducing the number of node groups (shards) in an ElastiCache for Redis (cluster mode enabled) you have the option of specifying which node groups to retain or which node groups to remove. For more information, see https:// docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ModifyReplicationGroupShardConfiguration.html, ReservationARN: ReservedNode includes an ARN, ReservationARN, member which identifies the reserved node. For more information, see https:// docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_ReservedCacheNode.html
  * This release adds online resharding for ElastiCache for Redis offering, providing the ability to add and remove shards from a running cluster. Developers can now dynamically scale-out or scale-in their Redis cluster workloads to adapt to changes in demand. ElastiCache will resize the cluster by adding or removing shards and redistribute hash slots uniformly across the new shard configuration, all while the cluster continues to stay online and serves requests.



* Updates service API, documentation, and examples

  * Amazon ElastiCache for Redis today announced support for data encryption both for data in-transit and data at-rest. The new encryption in-transit functionality enables ElastiCache for Redis customers to encrypt data for all communication between clients and Redis engine, and all intra-cluster Redis communication. The encryption at-rest functionality allows customers to encrypt their S3 based backups. Customers can begin using the new functionality by simply enabling this functionality via AWS console, and a small configuration change in their Redis clients. The ElastiCache for Redis service automatically manages life cycle of the certificates required for encryption, including the issuance, renewal and expiration of certificates. Additionally, as part of this launch, customers will gain the ability to start using the Redis AUTH command that provides an added level of authentication.
  * Adds new code examples.



* Updates service API, documentation, paginators, and examples

  * ElastiCache added support for testing the Elasticache Multi-AZ feature with Automatic Failover.


* Update Amazon ElastiCache service model

  * Elasticache is launching a new major engine release of Redis, 3.2 (providing stability updates and new command sets over 2.8), as well as ElasticSupport for enabling Redis Cluster in 3.2, which provides support for multiple node groups to horizontally scale data, as well as superior engine failover capabilities 




### `service/elastictranscoder`

* Updates service API, documentation, and paginators

  * Added support for MP2 container


* Updates service API, documentation, and examples



### `service/email`

* Updates service documentation

  * Documentation updates for Amazon Simple Email Service
  * Fixed a broken link in the documentation for S3Action.

  * Added information about the maximum number of transactions per second for the SendCustomVerificationEmail operation.



* Updates service API, documentation, and paginators

  * Customers can customize the emails that Amazon SES sends when verifying new identities. This feature is helpful for developers whose applications send email through Amazon SES on behalf of their customers.


* Updates service API, documentation, and examples

  * SES launches Configuration Set Reputation Metrics and Email Pausing Today, two features that build upon the capabilities of the reputation dashboard. The first is the ability to export reputation metrics for individual configuration sets. The second is the ability to temporarily pause email sending, either at the configuration set level, or across your entire Amazon SES account.


* Updates service API and documentation

  * Added content related to email template management and templated email sending operations.
  * Amazon Simple Email Service (Amazon SES) now lets you customize the domains used for tracking open and click events. Previously, open and click tracking links referred to destinations hosted on domains operated by Amazon SES. With this feature, you can use your own branded domains for capturing open and click events.



* Updates service API, documentation, paginators, and examples

  * This update adds information about publishing email open and click events. This update also adds information about publishing email events to Amazon Simple Notification Service (Amazon SNS).




### `service/cloudhsmv2`

* Updates service API and documentation

  * With this release, we are adding 2 new APIs. DeleteBackup deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request. During this 7-day period, the backup will be in state PENDING_DELETION. Backups can be restored using the RestoreBackup API, which will move the backup from state PENDING_DELETION back to ACTIVE.
  * This update  to the AWS CloudHSM API adds copy-backup-to-region, which allows you to copy a backup of a cluster from one region to another. The copied backup can be used in the destination region to create a new AWS CloudHSM cluster as a clone of the original cluster.



* Updates service API

  * CreateCluster can now take both 8 and 17 character Subnet IDs. DeleteHsm can now take both 8 and 17 character ENI IDs.


* Updates service documentation

  * Minor documentation update for AWS CloudHSM (cloudhsmv2).


* Adds new service

  * CloudHSM provides hardware security modules for protecting sensitive data and cryptographic keys within an EC2 VPC, and enable the customer to maintain control over key access and use. This is a second-generation of the service that will improve security, lower cost and provide better customer usability.




### `private/protocol/json/jsonutil`

* Use json.Decoder to decrease memory allocation ([#2115](https://github.com/aws/aws-sdk-go/pull/2115))

  * Updates the SDK's JSON protocol marshaler to use `json.Decoder` instead of `ioutil.ReadAll`. This reduces the memory unmarshaling JSON payloads by about 50%.
  * Fix [#2114](https://github.com/aws/aws-sdk-go/pull/2114)




### `private/protocol`

* Serialization errors will now be wrapped in `awserr.RequestFailure` types ([#2135](https://github.com/aws/aws-sdk-go/pull/2135))

  * Updates the SDK protocol unmarshaling to handle the `SerializationError` as a request failure allowing for inspection of `requestID`s and status codes.


* Update format of REST JSON and XMl benchmarks ([#1546](https://github.com/aws/aws-sdk-go/pull/1546))

  * Updates the format of the REST JSON and XML benchmarks to be readable. RESTJSON benchmarks were updated to more accurately bench building of the protocol.




### `service/elasticloadbalancing`

* Updates service API and documentation

* Updates service waiters



### `service/runtime.sagemaker`

* Updates service API and documentation



### `service/signer`

* Adds new service

  * AWS Signer is a new feature that allows Amazon FreeRTOS (AFR) Over The Air (OTA) customers to cryptographically sign code using code-signing certificates managed by AWS Certificate Manager.




### `service/lex-models`

* Updates service API

* Updates service API and documentation

* Updates service documentation



### `service/dax`

* Updates service API

  * DAX CreateClusterRequest is updated to include IamRoleArn as a required request parameter.


* Updates service API and documentation

  * Add the SSESpecification field to CreateCluster to allow creation of clusters with server-side encryption, and add the SSEDescription field to DescribeClusters to display the status of server-side encryption for a cluster.


* Adds new service

  * Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement - from milliseconds to microseconds - even at millions of requests per second. DAX does all the heavy lifting required to add in-memory acceleration to your DynamoDB tables, without requiring developers to manage cache invalidation, data population, or cluster management.




### `service/kinesis`

* Updates service API, documentation, and paginators

  * This update introduces SubscribeToShard and RegisterStreamConsumer APIs which allows for retrieving records on a data stream over HTTP2 with enhanced fan-out capabilities. With this new feature the Java SDK now supports event streaming natively which will allow you to define payload and exception structures on the client over a persistent connection. For more information, see Developing Consumers with Enhanced Fan-Out in the Kinesis Developer Guide.


* Updates service API and documentation

  * Using ListShards a Kinesis Data Streams customer or client can get information about shards in a data stream (including meta-data for each shard) without obtaining data stream level information.
  * Customers can now obtain the important characteristics of their stream with DescribeStreamSummary. The response will not include the shard list for the stream but will have the number of open shards, and all the other fields included in the DescribeStream response.

  * You can now encrypt your data at rest within an Amazon Kinesis Stream using server-side encryption. Server-side encryption via AWS KMS makes it easy for customers to meet strict data management requirements by encrypting their data at rest within the Amazon Kinesis Streams, a fully managed real-time data processing service.



* Updates service API, documentation, waiters, and paginators

  * Adds a new waiter, StreamNotExists, to Kinesis.




### `service/dynamodb/dynamodbattribute`

* Add support for custom struct tag keys([#2054](https://github.com/aws/aws-sdk-go/pull/2054))

  * Adds support for (un)marshaling Go types using custom struct tag keys. The new `MarshalOptions.TagKey` allows the user to specify the tag key to use when (un)marshaling struct fields.  Adds support for struct tags such as `yaml`, `toml`, etc. Support for these keys are in name only, and require the tag value format and values to be supported by the package's Marshalers.


* Add support for time alias. [#1520](https://github.com/aws/aws-sdk-go/pull/1520)

  * Related to [#1505](https://github.com/aws/aws-sdk-go/pull/1505)


* Add UnmarshalListOfMaps #897

  * Adds support for unmarshaling a list of maps. This is useful for unmarshaling the DynamoDB AttributeValue list of maps returned by APIs like Query and Scan.


* Allow multiple struct tag elements [#886](https://github.com/aws/aws-sdk-go/issues/886)



### `private/protocol/xml/xmlutil`

* Fix SDK marshaling of empty types ([#2081](https://github.com/aws/aws-sdk-go/pull/2081))

  * Fixes the SDK's marshaling of types without members. This corrects the issue where the SDK would not marshal an XML tag for a type, if that type did not have any exported members.
  * Fixes [#2015](https://github.com/aws/aws-sdk-go/issues/2015)


* Fix unmarshaling dropping errors (#1219)

  * The XML unmarshaler would drop any serialization or body read error that occurred on the floor effectively hiding any errors that would occur.
  * Fixes #1205


* Fixes xml marshaler to unmarshal properly



### `service/glacier`

* Updates service API and documentation

  * Documentation updates for glacier
  * This release includes support for Glacier Select, a new feature that allows you to filter and analyze your Glacier archives and store the results in a user-specified S3 location.



* Updates service documentation

  * Documentation updates for Glacier to fix a broken link
  * Documentation updates for glacier



* Updates service examples

* Updates service API, paginators, and examples

  * Doc-only Update for Glacier: Added code snippets


* Updates service API, documentation, and examples



### `aws/default`

* Add helper to get default provider chain list of credential providers ([#2059](https://github.com/aws/aws-sdk-go/issues/2051))

  * Exports the default provider chain list of providers so it can be used to compose custom chains of credential providers.
  * Fixes [#2051](https://github.com/aws/aws-sdk-go/issues/2051)




### `aws/credentials/ec2rolecreds`

* Avoid unnecessary redirect [#2037](https://github.com/aws/aws-sdk-go/pull/2037)

  * This removes the unnecessary redirect for /latest/meta-data/iam/security-credentials/




### `service/opsworks`

* Updates service documentation

  * Documentation updates for AWS OpsWorks Stacks.


* Updates service API, documentation, and waiters

  * AWS OpsWorks Stacks supports EBS encryption and HDD volume types. Also, a new DescribeOperatingSystems API is available, which lists all operating systems supported by OpsWorks Stacks.


* Updates service API and documentation

  * Tagging Support for AWS OpsWorks Stacks


* Updates service API, documentation, and paginators

  * Cloudwatch Logs agent configuration can now be attached to OpsWorks Layers using CreateLayer and UpdateLayer. OpsWorks will then automatically install and manage the CloudWatch Logs agent on the instances part of the OpsWorks Layer.


* Update AWS OpsWorks service model



### `service/acm`

* Updates service waiters

  * Adds a "CertificateValidated" waiter to AWS Certificate Manager clients, which polls on a new certificate's validation state.


* Updates service documentation

  * Documentation updates for acm
  * Documentation updates for acm

  * Documentation updates for ACM

  * Documentation update for AWS Certificate Manager.



* Updates service API and documentation

  * AWS Certificate Manager has added support for AWS Certificate Manager Private Certificate Authority (CA). Customers can now request private certificates with the RequestCertificate API, and also export private certificates with the ExportCertificate API.
  * Documentation updates for acm

  * AWS Certificate Manager has added support for customers to disable Certificate Transparency logging on a per-certificate basis.

  * AWS Certificate Manager now supports the ability to import domainless certs and additional Key Types as well as an additional validation method for DNS.



* Updates service API, documentation, and paginators

  * Update for AWS Certificate Manager: Updated response elements for DescribeCertificate API in support of managed renewal


* Update service API, and documentation.

  * This change allows users to import third-party SSL/TLS certificates into ACM.




### `aws/csm`

* Final API Call Attempt events were not being called [#2008](https://github.com/aws/aws-sdk-go/pull/2008)



### `service/macie`

* Adds new service

  * Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS. With this release, we are launching the following Macie HTTPS API operations: AssociateMemberAccount, AssociateS3Resources, DisassociateMemberAccount, DisassociateS3Resources, ListMemberAccounts, ListS3Resources, and UpdateS3Resources. With these API operations you can issue HTTPS requests directly to the service.




### `service/neptune`

* Updates service API, documentation, and examples

  * Deprecates the PubliclyAccessible parameter that is not supported by Amazon Neptune.


* Adds new service

  * Amazon Neptune is a fast, reliable graph database service that makes it easy to build and run applications that work with highly connected datasets. Neptune supports popular graph models Property Graph and W3C's Resource Description Frame (RDF), and their respective query languages Apache TinkerPop Gremlin 3.3.2 and SPARQL 1.1.




### `aws/client`

* Fix HTTP debug log EventStream payloads ([#2000](https://github.com/aws/aws-sdk-go/pull/2000))

  * Fixes the SDK's HTTP client debug logging to not log the HTTP response body for EventStreams. This prevents the SDK from buffering a very large amount of data to be logged at once. The aws.LogDebugWithEventStreamBody should be used to log the event stream events.
  * Fixes a bug in the SDK's response logger which will buffer the response body's content if LogDebug is enabled but LogDebugWithHTTPBody is not.


* Retry delays for throttled exception were not limited to 5 minutes [#1654](https://github.com/aws/aws-sdk-go/pull/1654)

  * Fixes [#1653](https://github.com/aws/aws-sdk-go/issues/1653)


* Adding status code 429 to throttlable status codes in default retryer (#1621)

* Fix clients polluting handler list (#1197)

  * Fixes the clients potentially polluting the passed in handler list with the client's customizations. This change ensures every client always works with a clean copy of the request handlers and it cannot pollute the handlers back upstream.
  * Fixes #1184




### `service/rds/rdsutils`

* Clean up the rdsutils package and adds a new builder to construct connection strings ([#1985](https://github.com/aws/aws-sdk-go/pull/1985))



### `service/AWSMigrationHub`

* Updates service documentation

* Updates service API and documentation



### `service/pi`

* Adds new service



### `service/cloudwatchlogs`

* Fix pagination with cloudwatchlogs ([#1945](https://github.com/aws/aws-sdk-go/pull/1945))

  * Fixes the SDK's behavior with CloudWatchLogs APIs which return duplicate `NextToken` values to signal end of pagination. 
  * Fixes [#1908](https://github.com/aws/aws-sdk-go/pull/1908)


* Updates service documentation and paginators

  * Various CloudWatch Logs documentation updates.


* Updates service API and documentation

  * Add support for associating LogGroups with AWSTagris tags




### `service/iot1click-devices`

* Adds new service



### `service/iot1click-projects`

* Adds new service



### `service/route53domains`

* Updates service API and documentation

  * This release adds a SubmittedSince attribute to the ListOperations API, so you can list operations that were submitted after a specified date and time.
  * Added a new API that checks whether a domain name can be transferred to Amazon Route 53.



* Updates service API, documentation, and paginators

  * Adding examples and other documentation updates.




### `service/workmail`

* Updates service API, documentation, and paginators

  * Amazon WorkMail adds the ability to grant users and groups with "Full Access", "Send As" and "Send on Behalf" permissions on a given mailbox.


* Adds new service

  * Today, Amazon WorkMail released an administrative SDK and enabled AWS CloudTrail integration. With the administrative SDK, you can natively integrate WorkMail with your existing services. The SDK enables programmatic user, resource, and group management through API calls. This means your existing IT tools and workflows can now automate WorkMail management, and third party applications can streamline WorkMail migrations and account actions.




### `service/mturk-requester`

* Updates service API and documentation

* Updates service documentation



### `service/sts`

* Updates service API and documentation

  * Change utilizes the Max Session Duration attribute introduced for IAM Roles and allows STS customers to request session duration up to the Max Session Duration of 12 hours from AssumeRole based APIs.
  * Increased SAMLAssertion parameter size from 50000 to 100000 for AWS Security Token Service AssumeRoleWithSAML API to allow customers to pass bigger SAML assertions



* Updates service API, documentation, and paginators

  * The unique ID and access key lengths were extended from 32 to 128.


* Updates service documentation

  * Adding Code Snippet Examples for SDKs for STS


* Updates service API, documentation, and examples



### `service/runtime.lex`

* Updates service API and documentation



### `example/service/ec2/instancesbyRegion`

* Fix typos in example ([#1762](https://github.com/aws/aws-sdk-go/pull/1762))



### `models/api`

* Fix colliding names [#1754](https://github.com/aws/aws-sdk-go/pull/1754) [#1756](https://github.com/aws/aws-sdk-go/pull/1756)



### `models/apis` Fixes removes colliding sagemaker models folders ([#1686](https

*//github.com/aws/aws-sdk-go/pull/1686))

  * Fixes 




### `service/SageMaker`

* Updates service waiters

* Adds new service



### `service/AWSMoneypenny`

* Adds new service



### `service/Cloud9`

* Adds new service



### `service/Serverless Registry`

* Adds new service



### `service/Ardi`

* Adds new service



### `service/DeepInsight`

* Adds new service



### `service/IronmanRuntime`

* Adds new service



### `service/Orchestra - Laser`

* Adds new service



### `service/Shine`

* Adds new service



### `service/archived.kinesisvideo`

* Adds new service



### `service/data.kinesisvideo`

* Adds new service



### `service/AmazonMQ`

* Adds new service



### `service/GuardDuty`

* Adds new service



### `service/deepdish`

* Adds new service

  * AWS AppSync is an enterprise-level, fully managed GraphQL service with real-time data synchronization and offline programming features.




### `service/data.mediastore`

* Adds new service



### `service/iis`

* Adds new service

  * The AWS Cost Explorer API gives customers programmatic access to AWS cost and usage information, allowing them to perform adhoc queries and build interactive cost management applications that leverage this dataset.




### `private/protocol/restjson`

* Define JSONValue marshaling for body and querystring ([#1640](https://github.com/aws/aws-sdk-go/pull/1640))

  * Adds support for APIs which use JSONValue for body and querystring targets.
  * Fixes [#1636](https://github.com/aws/aws-sdk-go/issues/1636)




### `service/api.pricing`

* Adds new service



### `service/cloudhsm`

* Updates service API and documentation

  * Documentation updates for AWS CloudHSM Classic.


* Updates service documentation and paginators

  * Documentation updates for CloudHSM




### `service/s3/s3crypto`

* Correct PutObjectRequest documentation ([#1568](https://github.com/aws/aws-sdk-go/pull/1568))

  * s3Crypto's PutObjectRequest docstring example was using an incorrect value. Corrected the type used in the example.


* Add support for AES/CBC/PKCS5Padding (#1124)



### `private/protocol/query`

* Fix query protocol handling of nested byte slices ([#1557](https://github.com/aws/aws-sdk-go/issues/1557))

  * Fixes the query protocol to correctly marshal nested []byte values of API operations.




### `API Marshaler`

* Revert REST JSON and XML protocol marshaler improvements

  * Bug [#1550](https://github.com/aws/aws-sdk-go/issues/1550) identified a missed condition in the Amazon Route 53 RESTXML protocol marshaling causing requests to that service to fail. Reverting the marshaler improvements until the bug can be fixed.


* Add generated marshalers for RESTXML protocol ([#1409](https://github.com/aws/aws-sdk-go/pull/1409))

  * Updates the RESTXML protocol marshaler to use generated code instead of reflection for REST XML based services.


* Add generated marshalers for RESTJSON protocol ([#1547](https://github.com/aws/aws-sdk-go/pull/1547))

  * Updates the RESTJSON protocol marshaler to use generated code instead of reflection for REST JSON based services.




### `service/Greengrass`

* Adds new service



### `service/MobileHub`

* Adds new service



### `example/service/ec2`

* Add EC2 list instances example ([#1492](https://github.com/aws/aws-sdk-go/pull/1492))



### `aws/arn`

* aws/arn: Package for parsing and producing ARNs ([#1463](https://github.com/aws/aws-sdk-go/pull/1463))

  * Adds the `arn` package for AWS ARN parsing and building. Use this package to build AWS ARNs for services such as outlined in the [documentation](http://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html).




### `service/AWS Glue`

* Adds new service



### `service/mgh`

* Adds new service

  * AWS Migration Hub provides a single location to track migrations across multiple AWS and partner solutions. Using Migration Hub allows you to choose the AWS and partner migration tools that best fit your needs, while providing visibility into the status of your entire migration portfolio. Migration Hub also provides key metrics and progress for individual applications, regardless of which tools are being used to migrate them. For example, you might use AWS Database Migration Service, AWS Server Migration Service, and partner migration tools to migrate an application comprised of a database, virtualized web servers, and a bare metal server. Using Migration Hub will provide you with a single screen that shows the migration progress of all the resources in the application. This allows you to quickly get progress updates across all of your migrations, easily identify and troubleshoot any issues, and reduce the overall time and effort spent on your migration projects. Migration Hub is available to all AWS customers at no additional charge. You only pay for the cost of the migration tools you use, and any resources being consumed on AWS.




### `service/marketplacecommerceanalytics`

* Updates service documentation

  * Update to Documentation Model For New Report Cadence / Reformat of Docs
  * Documentation updates for AWS Marketplace Commerce Analytics.



* Updates service API, documentation, and paginators

  * This update adds a new data set, us_sales_and_use_tax_records, which enables AWS Marketplace sellers to programmatically access to their U.S. Sales and Use Tax report data.


* Updates service API and documentation

  * Added support for data set disbursed_amount_by_instance_hours, with historical data available starting 2012-09-04. New data is published to this data set every 30 days.
  * Add new enum to DataSetType: sales_compensation_billed_revenue





### `service/swf`

* Updates service API, documentation, paginators, and examples

  * Added support for attaching control data to Lambda tasks. Control data lets you attach arbitrary strings to your decisions and history events.




### `aws/credentials/plugincreds`

* Add support for Go plugin for credentials [#1320](https://github.com/aws/aws-sdk-go/pull/1320)

  * Adds support for using plugins to retrieve credentials for API requests. This change adds a new package plugincreds under aws/credentials. See the `example/aws/credentials/plugincreds` folder in the SDK for example usage.




### `service/applicationautoscaling`

* Updates service API and documentation

* Updates service API, documentation, and paginators

  * Application AutoScaling is launching support for a new target resource (AppStream 2.0 Fleets) as a scalable target.




### `service/configservice`

* Updates service API

* Updates service documentation

* Updates service API and documentation

  * AWS Config now supports a new test mode for the PutEvaluations API. Set the TestMode parameter to true in your custom rule to verify whether your AWS Lambda function will deliver evaluation results to AWS Config. No updates occur to your existing evaluations, and evaluation results are not sent to AWS Config.
  * AWSConfig is planning to add support for OversizedConfigurationItemChangeNotification message type in putConfigRule. After this release customers can use/write rules based on OversizedConfigurationItemChangeNotification mesage type.



* Updates service API, documentation, and paginators

* Update service API and documentation.



### `service/cognitoidentityprovider`

* Updates service API, documentation, and paginators

* Updates service API and documentation

* Update Amazon Cognito Identity Provider service model



### `service/elbv2`

* Updates service API and documentation

* Updates service waiters

* Updates service documentation

* Updates waiters

* Updates service API, documentation, and paginators

  * Application Load Balancers now support native Internet Protocol version 6 (IPv6) in an Amazon Virtual Private Cloud (VPC). With this ability, clients can now connect to the Application Load Balancer in a dual-stack mode via either IPv4 or IPv6.




### `service/lexmodelbuildingservice`

* Updates service documentation and examples

* Updates service API and documentation

* Adds new service



### `aws/defaults`

* Exports shared credentials and config default filenames used by the SDK. [#1308](https://github.com/aws/aws-sdk-go/pull/1308)

  * Adds SharedCredentialsFilename and SharedConfigFilename functions to defaults package.




### `service/databasemigrationservice`

* Updates service API, documentation, paginators, and examples

  * This release adds support for using Amazon S3 and Amazon DynamoDB as targets for database migration, and using MongoDB as a source for database migration. For more information, see the AWS Database Migration Service documentation.


* Updates service API and documentation

  * Adds support for SSL enabled Oracle endpoints and task modification.




### `service/resourcegroupstaggingapi`

* Updates service API, documentation, and paginators

  * You can now specify the number of resources returned per page in GetResources operation, as an optional parameter, to easily manage the list of resources returned by your queries.


* Adds new service



### `service/cloudwatchevents`

* Updates service documentation

  * Various CloudWatch Events documentation updates.


* Updates service API, documentation, and examples



### `service/elb`

* Updates service API, documentation, and paginators



### `service/marketplaceentitlementservice`

* Adds new service



### `service/cloudwatch`

* Updates service API, documentation, and paginators

  * Amazon Web Services announced the immediate availability of two additional alarm configuration rules for Amazon CloudWatch Alarms. The first rule is for configuring missing data treatment. Customers have the options to treat missing data as alarm threshold breached, alarm threshold not breached, maintain alarm state and the current default treatment. The second rule is for alarms based on percentiles metrics that can trigger unnecassarily if the percentile is calculated from a small number of samples. The new rule can treat percentiles with low sample counts as same as missing data. If the first rule is enabled, the same treatment will be applied when an alarm encounters a percentile with low sample counts.




### `service/lexruntimeservice`

* Updates service API and documentation

  * Adds support to PostContent for speech input


* Adds new service



### `service/applicationdiscoveryservice`

* Updates service API, documentation, and paginators

  * Adds export configuration options to the AWS Discovery Service API.


* Updates service API and documentation

  * Adds new APIs to group discovered servers into Applications with get summary and neighbors. Includes additional filters for ListConfigurations and DescribeAgents API.




### `service/emr`

* Updates service API, documentation, and paginators

  * This release includes support for instance fleets in Amazon EMR.




### `service/mturk`

* Renaming service

  * service/mechanicalturkrequesterservice was renamed to service/mturk. Be sure to change any references of the old client to the new.




### `service/mechanicalturkrequesterservice`

* Adds new service

  * Amazon Mechanical Turk is a web service that provides an on-demand, scalable, human workforce to complete jobs that humans can do better than computers, for example, recognizing objects in photos.




### `service/dynamodbstreams`

* Updates service API, documentation, and paginators

* Updates service API and examples

  * Doc-only Update for DynamoDB Streams:  Added code snippets




### `service/wafregional`

* Updates service API, documentation, and paginators

* With this new feature, customers can use AWS WAF directly on Application Load Balancers in a VPC within available regions to protect their websites and web services from malicious attacks such as SQL injection, Cross Site Scripting, bad bots, etc.



### `service/elasticsearchservice`

* Updates service API, documentation, paginators, and examples

  * Added three new API calls to existing Amazon Elasticsearch service to expose Amazon Elasticsearch imposed limits to customers.




### `service/cognitoidentity`

* Updates service API, documentation, and paginators

  * Allow createIdentityPool and updateIdentityPool API to set server side token check value on identity pool


* Updates service API and documentation

  * We are adding Groups to Cognito user pools. Developers can perform CRUD operations on groups, add and remove users from groups, list users in groups, etc. We are adding fine-grained role-based access control for Cognito identity pools. Developers can configure an identity pool to get the IAM role from an authenticated user's token, or they can configure rules that will map a user to a different role




### `private/protocol/json`

* Fixes json to throw an error if a float number is (+/-)Inf and NaN (#1068)



### `private/model`

* Add service response error code generation (#1061)



### `service/costandusagereportservice`

* Adds new service

  * The AWS Cost and Usage Report Service API allows you to enable and disable the Cost & Usage report, as well as modify the report name, the data granularity, and the delivery preferences.




### `service/efs`

* Updates service API, documentation, and examples

  * Doc-only Update for EFS: Added code snippets




### `service/directoryservice`

* Updates service documentation

  * Added code snippets for the DS SDKs




### `private/models/api`

* Improve code generation of documentation.



