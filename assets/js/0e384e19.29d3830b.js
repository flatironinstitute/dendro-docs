"use strict";(self.webpackChunkdendro_docs=self.webpackChunkdendro_docs||[]).push([[671],{7876:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=o(5893),i=o(1151);const r={sidebar_position:1},n="What is Dendro?",a={id:"intro",title:"What is Dendro?",description:"PyPI version",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/dendro-docs/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"documentationSidebar",next:{title:"Basic concepts",permalink:"/dendro-docs/docs/category/basic-concepts"}},d={},c=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Upload raw ephys data to DANDI",id:"upload-raw-ephys-data-to-dandi",level:3},{value:"Create a Dendro project",id:"create-a-dendro-project",level:3},{value:"Import files from DANDI into a Dendro project",id:"import-files-from-dandi-into-a-dendro-project",level:3},{value:"Run spike sorting",id:"run-spike-sorting",level:3},{value:"Upload sorting outputs to DANDI?",id:"upload-sorting-outputs-to-dandi",level:3},{value:"Providing a DANDI API key",id:"providing-a-dandi-api-key",level:3},{value:"Hosting a compute resource",id:"hosting-a-compute-resource",level:3},{value:"Contribute a custom processing app for spike sorting",id:"contribute-a-custom-processing-app-for-spike-sorting",level:3},{value:"Projects, Files and Jobs",id:"projects-files-and-jobs",level:3},{value:"Files and Jobs are Tightly Linked",id:"files-and-jobs-are-tightly-linked",level:3},{value:"Processing Apps",id:"processing-apps",level:3},{value:"Using AWS Batch",id:"using-aws-batch",level:3},{value:"For developers",id:"for-developers",level:3},{value:"LICENSE",id:"license",level:3},{value:"Authors",id:"authors",level:2}];function l(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"what-is-dendro",children:"What is Dendro?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://badge.fury.io/py/dendro",children:(0,s.jsx)(t.img,{src:"https://badge.fury.io/py/dendro.svg",alt:"PyPI version"})}),"\n",(0,s.jsx)(t.a,{href:"https://github.com/flatironinstitute/dendro/actions/workflows/tests.yml",children:(0,s.jsx)(t.img,{src:"https://github.com/flatironinstitute/dendro/actions/workflows/tests.yml/badge.svg",alt:"testing"})}),"\n",(0,s.jsx)(t.a,{href:"https://codecov.io/gh/flatironinstitute/dendro",children:(0,s.jsx)(t.img,{src:"https://codecov.io/gh/flatironinstitute/dendro/graph/badge.svg?token=B2DUYR34RZ",alt:"codecov"})})]}),"\n",(0,s.jsxs)(t.p,{children:["Dendro is a web application and compute framework aimed at researchers who want to manage and analyze neurophysiology data. It is designed to be used in conjunction with the ",(0,s.jsx)(t.a,{href:"https://dandiarchive.org/",children:"DANDI Archive"}),", a public repository for neurophysiology data. For now we are focusing on supporting spike sorting, but we plan to expand the capabilities in the future."]}),"\n",(0,s.jsxs)(t.p,{children:["\u26a0\ufe0f"," Currently, this software is at a very early stage and is not recommended for production use."]}),"\n",(0,s.jsxs)(t.p,{children:["Reach out to the authors if you are interested in ",(0,s.jsx)(t.strong,{children:"beta testing"})," Dendro. You can use it in the cloud ",(0,s.jsx)(t.em,{children:"or"})," with your local resources."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://dendro.vercel.app",children:"Access the live site"})," (it's a prototype!)"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/host_compute_resource",children:"Learn how to host a Dendro compute resource"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/create_dendro_app",children:"Learn how to create a custom Dendro processing app"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"system-requirements",children:"System Requirements"}),"\n",(0,s.jsxs)(t.p,{children:["To use Dendro, you only need a web browser. No additional software installation is required. Simply open your preferred web browser and navigate to the ",(0,s.jsx)(t.a,{href:"https://dendro.vercel.app",children:"live site"})," to get started."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to ",(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/host_compute_resource",children:"host your own compute resource"})," for processing, you will need a Linux machine with optional access to a Slurm cluster or AWS resources."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(t.h3,{id:"upload-raw-ephys-data-to-dandi",children:"Upload raw ephys data to DANDI"}),"\n",(0,s.jsxs)(t.p,{children:["To process your data using Dendro, you should first prepare and upload your data to DANDI by creating a public or embargoed dandiset. To convert your neurophysiology data to NWB (Neurodata Without Borders) format, you should use ",(0,s.jsx)(t.a,{href:"https://neuroconv.readthedocs.io/en/main/user_guide/user_guide.html",children:"NeuroConv"})," and/or ",(0,s.jsx)(t.a,{href:"https://github.com/NeurodataWithoutBorders/nwb-guide",children:"nwb-guide"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Once your data is in NWB format, create a new dandiset on ",(0,s.jsx)(t.a,{href:"https://dandiarchive.org/",children:"DANDI Archive"})," and then ",(0,s.jsx)(t.a,{href:"https://www.dandiarchive.org/handbook/13_upload",children:"follow these instructions to upload your data"}),". If you are not ready to make your data public, you can choose to create an embargoed (private) dandiset and share it with collaborators. If you are only testing the system, you can use the ",(0,s.jsx)(t.a,{href:"https://gui-staging.dandiarchive.org/",children:"staging site"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"create-a-dendro-project",children:"Create a Dendro project"}),"\n",(0,s.jsx)(t.p,{children:"Note: If you are working with an embargoed dandiset, then you will need to first provide your DANDI API key (see below)."}),"\n",(0,s.jsxs)(t.p,{children:["Each Dendro project is associated with a dandiset. To create a new project, go to the ",(0,s.jsx)(t.a,{href:"https://dendro.vercel.app",children:"dendro web interface"}),' and log in using your GitHub account. You can then navigate to the desired dandiset and click "Create a new dendro project for this dandiset". Provide a project name. You are now ready to import data from the dandiset and start spike sorting.']}),"\n",(0,s.jsx)(t.h3,{id:"import-files-from-dandi-into-a-dendro-project",children:"Import files from DANDI into a Dendro project"}),"\n",(0,s.jsx)(t.p,{children:'Once you have created a Dendro project associated with a dandiset (see above) you can import NWB files (aka DANDI assets) by clicking on the "DANDI import" tab on the left. Use the checkboxes to select the desired files and then click "Import selected assets". The import process can take a minute or two depending on the number of files you are importing. Once the import is complete, you can click on the "Files" tab to see the imported files.'}),"\n",(0,s.jsx)(t.h3,{id:"run-spike-sorting",children:"Run spike sorting"}),"\n",(0,s.jsxs)(t.p,{children:["Once you have imported NWB files from DANDI into your Dendro project, you can begin processing your data. At this point you will need to select a compute resource. By default a very limited default compute resource will be used, which is okay for quick tests. For more serious processing, you will need to ",(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/host_compute_resource",children:"set up your own compute resource"}),'. You can select the compute resource by clicking the "Settings" button on the "Project home" tab.']}),"\n",(0,s.jsx)(t.p,{children:'Once you have selected the compute resource for your project, you can select files for spike sorting using the checkboxes and then click "Run spike sorting". Choose the desired spike sorter, set the desired sorting parameters, and click "Submit". Note that in order to run spike sorting, your NWB files will need to have the appropriate ElectricalSeries data objects in the acquisition section as well as the appropriate probe geometry.'}),"\n",(0,s.jsx)(t.p,{children:'You can then monitor the sorting jobs using the "Jobs" tab, or by viewing the greyed-out files inside the "generated" folder.'}),"\n",(0,s.jsx)(t.p,{children:'Once a job is complete, you can click the NWB output files and view them in Neurosift, which includes a "raster plot" view.'}),"\n",(0,s.jsx)(t.h3,{id:"upload-sorting-outputs-to-dandi",children:"Upload sorting outputs to DANDI?"}),"\n",(0,s.jsx)(t.p,{children:"For now, you can only upload spike sorting results to the same dandiset from which the raw data was imported. In the future you will also be able to upload them to a new dandiset."}),"\n",(0,s.jsx)(t.p,{children:"You will first need to provide your DANDI API key (see below)."}),"\n",(0,s.jsx)(t.p,{children:'To upload the sorting results to DANDI, select the generated files and click "Upload to DANDI" and then the "Upload" button. A new processing job will be created that will complete the upload. You can monitor that job using the "Jobs" tab. Once the upload is complete you should be able to see the NWB files in the DANDI web interface.'}),"\n",(0,s.jsx)(t.h3,{id:"providing-a-dandi-api-key",children:"Providing a DANDI API key"}),"\n",(0,s.jsxs)(t.p,{children:["You can obtain your DANDI API key from ",(0,s.jsx)(t.a,{href:"https://dandiarchive.org/",children:"https://dandiarchive.org/"})," or, for the staging site, ",(0,s.jsx)(t.a,{href:"https://gui-staging.dandiarchive.org/",children:"https://gui-staging.dandiarchive.org/"}),". Click the button in the upper-right corner."]}),"\n",(0,s.jsxs)(t.p,{children:["Then, in the ",(0,s.jsx)(t.a,{href:"https://dendro.vercel.app/",children:"Dendro web interface"}),", click the key icon in the upper-right and paste in the API key."]}),"\n",(0,s.jsx)(t.h3,{id:"hosting-a-compute-resource",children:"Hosting a compute resource"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/host_compute_resource",children:"hosting a compute resource"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"contribute-a-custom-processing-app-for-spike-sorting",children:"Contribute a custom processing app for spike sorting"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/create_dendro_app",children:"create a custom processing app"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"projects-files-and-jobs",children:"Projects, Files and Jobs"}),"\n",(0,s.jsx)(t.p,{children:"Dendro organizes datasets into projects, files and jobs, streamlining your data management process. Each project is associated a dandiset and a compute resource and comprises files and processing jobs. You can choose to make your projects public or private."}),"\n",(0,s.jsx)(t.p,{children:"Project files serve as either pointers to external data sources (e.g., DANDI assets) or as the output of specific processing jobs. These files are typically formatted in NWB format. To get started, you can use the DANDI import tool to seamlessly import data from DANDI repositories. Once imported, you can define processing jobs, such as spike sorting, that take these raw data files as input and generate new project files as output. Project files are immutable."}),"\n",(0,s.jsx)(t.h3,{id:"files-and-jobs-are-tightly-linked",children:"Files and Jobs are Tightly Linked"}),"\n",(0,s.jsx)(t.p,{children:"The full provenance history of each file is stored within a Dendro project. Each generated file is associated with a unique job that generated it, and each job has links to its input and output files. If a file is deleted, then all jobs that link to that job (either as an input or an output) are also deleted. Similarly, if a job is deleted, then the linked files are also deleted. Thus, in a pipeline, deleting a single file can have a cascading effect in deleting files and jobs throughout the project. In this way, Dendro files always have a full provenance record."}),"\n",(0,s.jsxs)(t.p,{children:["Files and jobs can also be automatically deleted if a new job is queued that would overwrite existing files. Note that existing files (and jobs) are deleted when the new job is ",(0,s.jsx)(t.em,{children:"queued"})," (not ",(0,s.jsx)(t.em,{children:"run"}),")."]}),"\n",(0,s.jsx)(t.h3,{id:"processing-apps",children:"Processing Apps"}),"\n",(0,s.jsxs)(t.p,{children:["Dendro processing tools are organized into plugin apps which are containerized executable programs. At this time, there are only ",(0,s.jsx)(t.a,{href:"https://github.com/scratchrealm/pc-spike-sorting",children:"a few processing apps available"}),", including:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Spike sorting using Kilosort 2.5"}),"\n",(0,s.jsx)(t.li,{children:"Spike sorting using Kilosort 3"}),"\n",(0,s.jsx)(t.li,{children:"Spike sorting using MountainSort 5"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"As the project matures, we will add more apps to this list. Users can also contribute their own processing apps."}),"\n",(0,s.jsx)(t.h3,{id:"using-aws-batch",children:"Using AWS Batch"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/iac_aws_batch",children:"doc/iac_aws_batch.md"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"for-developers",children:"For developers"}),"\n",(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/dendro-docs/docs/tutorial-basics/for_developers",children:"doc/for_developers.md"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"license",children:"LICENSE"}),"\n",(0,s.jsx)(t.p,{children:"Apache 2.0"}),"\n",(0,s.jsx)(t.h2,{id:"authors",children:"Authors"}),"\n",(0,s.jsx)(t.p,{children:"Jeremy Magland (Flatiron Institute) in collaboration with Ben Dichter and Luiz Tauffer (CatalystNeuro)"})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>n});var s=o(7294);const i={},r=s.createContext(i);function n(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);