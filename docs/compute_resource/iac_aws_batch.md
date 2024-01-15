---
sidebar_position: 6
sidebar_label: 'IaC: AWS Batch'
---

# AWS Batch Infrastructure as Code (IaC)

Here we provide instructions for setting up your compute resource to run Dendro jobs in AWS Batch. First you will need to provision the base AWS Batch infrastructure using CDK. This includes IAM roles, VPC, Security Group, EFS filesystems, Batch Compute Environments and Batch Job Queues. Next you will need to configure your compute resource controller to submit jobs to AWS Batch. Finally, when you submit jobs from the web interface, you must select aws_batch as the run method.

## Prerequisites

- Python 3.10
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
- [AWS CDK Toolkit](https://docs.aws.amazon.com/cdk/latest/guide/cli.html)
- Set up your AWS credentials, either by [configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html) or by [setting environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html).


## Step 1. Provision base Batch infrastructure with CDK

AWS CDK is a very convenient tool, it helps automate the provisioning of AWS infrastructure and organizes all created resources in a CloudFormation stack, which can be easily updated or deleted.

Follow these steps if you're running Dendro CDK stack for the first time:
- go to `cloned_dendro_repo_path/iac/aws_batch` directory.
- run `pip install -r requirements.txt` to install the required Python packages.
- run `cdk bootstrap` to set up the CDK deployment infrastructure (CKDToolkit) in your AWS account. This only needs to be done once.
- run `cdk deploy` to deploy the stack to your default AWS account/region.
- you will be prompted to confirm the deployment. Review the changes, then type `y` and hit enter.

If deployment is successful, you will be able to see the stacks in the CloudFormation page in AWS console.

![CloudFormation stacks](https://github.com/flatironinstitute/dendro/assets/3679296/87ca6dcd-fe59-4afc-b64f-4fcc24b64f86)

Other useful CDK commands:
- `cdk ls` - list all stacks in the app.
- `cdk synth` to synthesize the CloudFormation template without deploying it.
- `cdk diff` - compare deployed stack with current state.
- `cdk destroy` - destroy the stack.
- `cdk docs` - open CDK documentation.

## Step 2. Configure compute resource controller

In your compute resource directory, open the `.dendro-compute-resource-node.yaml` file and set

```
...
AVAILABLE_JOB_RUN_METHODS: "local,aws_batch"
DEFAULT_JOB_RUN_METHOD: "aws_batch"
```

You can choose whether you also include the local run method, and you can choose which run method is the default.

After you have made these changes, you will need to restart the compute resource controller.

```bash
dendro start-compute-resource
```

See [hosting a compute resource](./host_compute_resource.md) for more details.

## Step 3. Submit jobs

When you submit jobs from the web interface, you must select aws_batch as the run method.


## Extra - Simple File Manager for Amazon EFS

ref: https://aws.amazon.com/solutions/implementations/simple-file-manager-for-amazon-efs/