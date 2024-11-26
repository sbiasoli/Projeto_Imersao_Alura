# Use a imagem base do Node.js 18
FROM node:18

# Cria um diretório para a aplicação
WORKDIR /usr/src/app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Define a porta a ser escutada
ENV PORT=8080
EXPOSE 8080

# Inicia a aplicação
CMD ["npm", "start"]
