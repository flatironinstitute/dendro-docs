"use strict";(self.webpackChunkdendro_docs=self.webpackChunkdendro_docs||[]).push([[988],{8413:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=o(5893),t=o(1151);const s={sidebar_position:1,sidebar_label:"Compute resource prerequisites"},i="Dendro compute resource prerequisites",a={id:"tutorial-basics/compute_resource_prerequisites",title:"Dendro compute resource prerequisites",description:"Suppose you have a Linux machine and would like to use it as a dendro compute resource. Here are the recommended steps to prepare it with the necessary software.",source:"@site/docs/tutorial-basics/compute_resource_prerequisites.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/compute_resource_prerequisites",permalink:"/dendro-docs/docs/tutorial-basics/compute_resource_prerequisites",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/compute_resource_prerequisites.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Compute resource prerequisites"},sidebar:"documentationSidebar",previous:{title:"Basic concepts",permalink:"/dendro-docs/docs/category/basic-concepts"},next:{title:"Host a Compute Resource",permalink:"/dendro-docs/docs/tutorial-basics/host_compute_resource"}},c={},d=[{value:"Use Linux",id:"use-linux",level:2},{value:"Conda / Miniconda",id:"conda--miniconda",level:2},{value:"Install docker or apptainer",id:"install-docker-or-apptainer",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"dendro-compute-resource-prerequisites",children:"Dendro compute resource prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Suppose you have a Linux machine and would like to use it as a dendro compute resource. Here are the recommended steps to prepare it with the necessary software."}),"\n",(0,r.jsx)(n.h2,{id:"use-linux",children:"Use Linux"}),"\n",(0,r.jsx)(n.p,{children:"Any distribution should do."}),"\n",(0,r.jsx)(n.h2,{id:"conda--miniconda",children:"Conda / Miniconda"}),"\n",(0,r.jsx)(n.p,{children:"I recommend using Miniconda, but you can use other conda solutions, virtualenv, etc."}),"\n",(0,r.jsxs)(n.p,{children:["Follow these instructions: ",(0,r.jsx)(n.a,{href:"https://docs.conda.io/projects/miniconda/en/latest/miniconda-install.html",children:"https://docs.conda.io/projects/miniconda/en/latest/miniconda-install.html"})]}),"\n",(0,r.jsx)(n.p,{children:'This will involve downloading the Linux installation script file (usually the "Miniconda3 Linux 64-bit" option) and running it using bash.'}),"\n",(0,r.jsx)(n.p,{children:"Create a new conda environment. I'd recommend using Python 3.9, but you can more recent versions as well."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"conda create -n processing python=3.9\n"})}),"\n",(0,r.jsx)(n.p,{children:'You can replace "processing" with any name you like. To use this environment run the following each time you open your terminal'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"conda activate processing\n"})}),"\n",(0,r.jsx)(n.p,{children:"or add this command to your ~/.bashrc file to automatically start in this environment each time you open a new terminal."}),"\n",(0,r.jsx)(n.h2,{id:"install-docker-or-apptainer",children:"Install docker or apptainer"}),"\n",(0,r.jsx)(n.p,{children:"To use your computer as a dendro compute resource, you'll most likely need to install either docker or apptainer (or singularity). Docker is simpler to install, whereas apptainer is better for shared environments or compute clusters."}),"\n",(0,r.jsxs)(n.p,{children:["To install docker server (or docker engine): ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"https://docs.docker.com/engine/install/"})]}),"\n",(0,r.jsxs)(n.p,{children:["To get started with apptainer: ",(0,r.jsx)(n.a,{href:"https://apptainer.org/",children:"https://apptainer.org/"})]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>i});var r=o(7294);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);