"use strict";(self.webpackChunkdendro_docs=self.webpackChunkdendro_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"documentationSidebar":[{"type":"link","label":"What is Dendro?","href":"/dendro-docs/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"Basic concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Compute resource prerequisites","href":"/dendro-docs/docs/tutorial-basics/compute_resource_prerequisites","docId":"tutorial-basics/compute_resource_prerequisites","unlisted":false},{"type":"link","label":"Host a Compute Resource","href":"/dendro-docs/docs/tutorial-basics/host_compute_resource","docId":"tutorial-basics/host_compute_resource","unlisted":false},{"type":"link","label":"Create a Dendro App","href":"/dendro-docs/docs/tutorial-basics/create_dendro_app","docId":"tutorial-basics/create_dendro_app","unlisted":false},{"type":"link","label":"REST API","href":"/dendro-docs/docs/tutorial-basics/about_the_api","docId":"tutorial-basics/about_the_api","unlisted":false},{"type":"link","label":"Dendro for developers","href":"/dendro-docs/docs/tutorial-basics/for_developers","docId":"tutorial-basics/for_developers","unlisted":false},{"type":"link","label":"IaC: AWS Batch","href":"/dendro-docs/docs/tutorial-basics/iac_aws_batch","docId":"tutorial-basics/iac_aws_batch","unlisted":false}],"href":"/dendro-docs/docs/category/basic-concepts"}]},"docs":{"intro":{"id":"intro","title":"What is Dendro?","description":"PyPI version","sidebar":"documentationSidebar"},"tutorial-basics/about_the_api":{"id":"tutorial-basics/about_the_api","title":"About the Dendro API","description":"The Dendro API is implemented using Python with FastAPI, deployed as serverless functions on Vercel. It is divided into four sections: GUI, Compute Resource, Processor, and Client.","sidebar":"documentationSidebar"},"tutorial-basics/compute_resource_prerequisites":{"id":"tutorial-basics/compute_resource_prerequisites","title":"Dendro compute resource prerequisites","description":"Suppose you have a Linux machine and would like to use it as a dendro compute resource. Here are the recommended steps to prepare it with the necessary software.","sidebar":"documentationSidebar"},"tutorial-basics/create_dendro_app":{"id":"tutorial-basics/create_dendro_app","title":"Creating a Custom Dendro Processing App","description":"Here we will walk through the steps of creating a simple Dendro processing app. Alternatively, you can view some more complicated WIP apps here.","sidebar":"documentationSidebar"},"tutorial-basics/for_developers":{"id":"tutorial-basics/for_developers","title":"Dendro for developers","description":"Here are some notes for developers. This is not a complete guide, but it should help you get started. Please contact the authors if you have any questions. We are happy to accept questions and pull requests.","sidebar":"documentationSidebar"},"tutorial-basics/host_compute_resource":{"id":"tutorial-basics/host_compute_resource","title":"Hosting a Dendro compute resource","description":"Each Dendro project comes equipped with a dedicated compute resource for executing analysis jobs. The default setting uses a compute resource provided by the authors with limitations on CPU, memory, and concurrent jobs, shared among all users. This public resource should only be used for testing with small jobs. Contact one of the authors if you would like to run more intensive processing or configure your own compute resources.","sidebar":"documentationSidebar"},"tutorial-basics/iac_aws_batch":{"id":"tutorial-basics/iac_aws_batch","title":"AWS Batch Infrastructure as Code (IaC)","description":"Here we provide instructions for setting up your compute resource to run Dendro jobs in AWS Batch. First you will need to provision the base AWS Batch infrastructure using CDK. This includes IAM roles, VPC, Security Group, EFS filesystems, Batch Compute Environments and Batch Job Queues. Next you will need to configure your compute resource controller to submit jobs to AWS Batch. Finally, when you submit jobs from the web interface, you must select aws_batch as the run method.","sidebar":"documentationSidebar"}}}')}}]);