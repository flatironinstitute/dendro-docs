"use strict";(self.webpackChunkdendro_docs=self.webpackChunkdendro_docs||[]).push([[9799],{5097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(5893),s=n(1151);const a={sidebar_position:3,sidebar_label:"Create a Dendro App"},r="Creating a Custom Dendro Processing App",i={id:"tutorial-basics/create_dendro_app",title:"Creating a Custom Dendro Processing App",description:"Here we will walk through the steps of creating a simple Dendro processing app. Alternatively, you can view some more complicated WIP apps here.",source:"@site/docs/tutorial-basics/create_dendro_app.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/create_dendro_app",permalink:"/dendro-docs/docs/tutorial-basics/create_dendro_app",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/create_dendro_app.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Create a Dendro App"},sidebar:"documentationSidebar",previous:{title:"Host a Compute Resource",permalink:"/dendro-docs/docs/tutorial-basics/host_compute_resource"},next:{title:"REST API",permalink:"/dendro-docs/docs/tutorial-basics/about_the_api"}},c={},p=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"creating-a-custom-dendro-processing-app",children:"Creating a Custom Dendro Processing App"}),"\n",(0,o.jsxs)(t.p,{children:["Here we will walk through the steps of creating a simple Dendro processing app. Alternatively, you can view some more complicated WIP apps ",(0,o.jsx)(t.a,{href:"https://github.com/scratchrealm/pc-spike-sorting",children:"here"}),"."]}),"\n",(0,o.jsx)(t.h1,{id:"tutorial-creating-a-letter-counting-processing-app-in-dendro",children:"Tutorial: Creating a Letter Counting Processing App in Dendro"}),"\n",(0,o.jsx)(t.p,{children:"This tutorial will walk you through the steps of creating a simple processing app within the Dendro platform that counts the number of times a certain letter occurs within a text file. The app will take a text file as input and produce an output JSON file containing the count."}),"\n",(0,o.jsx)(t.p,{children:"Create a new git repository with the following content"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"letter_count/\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 main.py (with executable permissions)\n"})}),"\n",(0,o.jsx)(t.p,{children:"Here's the content of main.py"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"#!/usr/bin/env python3\n\nimport os\nimport json\nfrom dendro.sdk import App, BaseModel, Field, ProcessorBase, InputFile, OutputFile\n\n\napp = App(\n    'letter_count',\n    description=\"Example Dendro processing app for tutorial\",\n    app_image=\"\",\n    app_executable=os.path.abspath(__file__)\n)\n\ndescription = \"\"\"\nThis is the a processor in the letter_count app. It counts the number of times a particular letter appears in a text file and produces a JSON file with the result.\n\"\"\"\n\nclass LetterCountProcessorContext(BaseModel):\n    input: InputFile = Field(description='Input text file')\n    output: OutputFile = Field(description='Output JSON file')\n    letter: str = Field(description='Letter to count')\n\nclass LetterCountProcessor(ProcessorBase):\n    name = 'letter_count'\n    label = 'Letter Count'\n    description = description\n    tags = ['tutorial']\n    attributes = {'wip': True}\n\n    @staticmethod\n    def run(context: LetterCountProcessorContext):\n        input_fname = 'input.txt'\n        output_fname = 'output.json'\n        context.input.download(input_fname)\n        letter = context.letter\n\n        with open(input_fname, 'r') as f:\n            text = f.read()\n        count = text.count(letter)\n\n        output = {\n            'count': count\n        }\n        with open(output_fname, 'w') as f:\n            f.write(json.dumps(output))\n        context.output.upload(output_fname)\n\napp.add_processor(LetterCountProcessor)\n\nif __name__ == '__main__':\n    app.run()\n"})}),"\n",(0,o.jsx)(t.p,{children:"The next step is to generate a spec.json file describing the app."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd letter_count\nchmod a+x main.py\ndendro make-app-spec-file --app-dir . --spec-output-file spec.json\n"})}),"\n",(0,o.jsx)(t.p,{children:"This will create a spec.json file in the app directory. You can take a look at the contents of this file. It should look something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'{\n    "name": "letter_count",\n    "description": "Example Dendro processing app for tutorial",\n    "appImage": "",\n    "appExecutable": ...,\n    "executable": ...,\n    "processors": [\n        {\n            "name": "letter_count",\n            "description": ...,\n            "inputs": ...\n            ...\n        }\n    ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Now you should have"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"letter_count/\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 main.py (with executable permissions)\n\u251c\u2500\u2500 spec.json\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Before connecting it to the web framework, it's best to test things locally first. Create a sample context file called ",(0,o.jsx)(t.code,{children:"sample_context_1.yaml"})," with the following content"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:'input:\n  url: https://filesamples.com/samples/document/txt/sample3.txt\noutput:\n  output_file_name: sample_output_1.json\nletter: "d"\n'})}),"\n",(0,o.jsx)(t.p,{children:"This specifies that the input is coming from the internet, and the output should go to a local file."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"letter_count/\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 main.py (with executable permissions)\n\u251c\u2500\u2500 spec.json\n\u251c\u2500\u2500 sample_context_1.yaml\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now run the app locally"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd letter_count\ndendro test-app-processor --app-dir . --processor letter_count --context sample_context.yaml\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This should produce a file called ",(0,o.jsx)(t.code,{children:"sample_output_1.json"})," with the following content"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{"count": 110}\n'})}),"\n",(0,o.jsx)(t.p,{children:'because presumably the letter "d" appears 110 times in the text file.'}),"\n",(0,o.jsx)(t.p,{children:"To use a local file as input instead, you can use the following context file"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"input:\n  local_file_name: sample_input_1.txt\n"})}),"\n",(0,o.jsx)(t.p,{children:"TODO: Explain how to prepare a docker image and make the app available on the Dendro system."})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var o=n(7294);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);