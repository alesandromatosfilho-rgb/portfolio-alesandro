PORTFÓLIO AVANÇADO - ALESANDRO MATOS

1) Instale as bibliotecas dentro da pasta do projeto:

npm install framer-motion react-icons @emailjs/browser three @react-three/fiber @react-three/drei

2) Copie os arquivos da pasta src deste pacote para a pasta src do seu projeto.

3) Crie um arquivo chamado .env na raiz do projeto, no mesmo lugar do package.json.

REACT_APP_EMAILJS_SERVICE_ID=service_xxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=sua_public_key

4) No EmailJS, seu template precisa ter estas variáveis:

{{from_name}}
{{from_email}}
{{subject}}
{{message}}

5) Depois de criar/alterar o .env, pare o servidor e rode novamente:

Ctrl + C
npm start
